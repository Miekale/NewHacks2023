from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework import generics, status
import openfoodfacts
from django.http import JsonResponse

import requests

import openai 

import os 
import ast

import tempfile

import pandas as pd 
api = openfoodfacts.API(version="v2")

openai_key="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"

'''
Condenses the string of list of ingredients to a readable form. (Currently filled with gibberish. Removes gibberish)
REQUIRES: String (list of ingredients; recieved from the model's output)
PRODUCES: String (list of ingredients, gibberish removed)
'''
class IngredientsCondenser(APIView):
    def get(self,request,format=None):
        my_string = request.GET.get('ingredients')

        openai.api_key = openai_key
        
        chat = openai.Completion.create(
            model="gpt-3.5-turbo-instruct",
            prompt='Clean the following data on ingredients, and say nothing else. Each ingredient in the list must be in the following format: "x grams, name". No preparation description is needed, the name must be 2 words or less. Convert all units to grams and remove descriptive phrases. If it cannot be converted to grams, remove it. Provide the response in a python list:'+my_string,
            max_tokens=300,
            temperature=0
        )

        response = chat['choices'][0]['text']
        #converts string to a list
        ingredient_list = ast.literal_eval(response)
 
        print(ingredient_list)
        print(ingredient_list[0])
        #returns the list form

        return JsonResponse({'answer': ingredient_list},status=status.HTTP_200_OK)


'''
Processes the food image (inputs into the model for prediction)
REQUIRES: image file (the input for the model)
OUTPUTS: String (a list of ingredients, the model's output)
'''
class ProcessFoodImage(APIView):
    def post(self,request,format=None):
        uploaded_file = request.FILES['image']

        # Create a temporary file and get its path

        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            for chunk in uploaded_file.chunks():
                temp_file.write(chunk)

        # Use the path of the created temporary file
        temp_image_path = temp_file.name



        #Now use the model to predict things

        #then remove the temp image
        os.remove(temp_image_path)

        #return the response
        return JsonResponse({'ingredients':True},status=status.HTTP_200_OK)

'''
Get Carbon Emissions returns the total carbon emission (in emissions per kg of food)
REQUIRES: list of ingredients
PRODUCES: Real Number (total carbon emissions)
'''
class GetCarbonEmissions(APIView):
    def get(self,request,format=None):
        #get the ingredients from request
        ingredients = request.GET.get("ingredients")

        #open csv file

        df = pd.read_csv(".\Food_Product_Emissions.csv")
        
        #iterate through the ingredients
        current_carbon_sum = 0
        for ingredient in ingredients:
            ingred_info = self.get_intredient_good_data(ingredient,df)
            #checks if name is in the excel sheet
            if (ingred_info != False):
                current_carbon_sum += (ingred_info["Total Global Average GHG Emissions per kg"] 
                                       * self.get_ingredient_grams(ingredient) / 1000) #weight times emissions per weight

            #now get from open_food_set
            else:
                current_carbon_sum += self.get_ingredient_open_food_set(ingredient) #assumes that open food set units is per kg

        return JsonResponse({'carbon_emissions':current_carbon_sum} ,status=status.HTTP_201_CREATED)

    def get_ingredient_open_food_set(self,ingredient):
        #TODO: concat fresh in front of it?
        results = api.product.text_search(ingredient)
        #take first result 
        #check if valid data
        try:
            if (results['products'][0]['nutriments']["carbon-footprint-from-known-ingredients_product"] <= 200):
                return results['products'][0]['nutriments']["carbon-footprint-from-known-ingredients_product"]
            #else invalid data, 0
            return 0
        except:
            return 0
         

    def get_ingredient_good_data(self,ingridient,df):
        ing_name = ingridient.split(",").split(".")[1] #assumes formatted as "x grams, name". Not always true
        for index,row in df.iterrows():
            food_name = row["Food product"].strip().lower()
            #if ingredient name found in the list
            if (food_name.find(ing_name) != -1):
                #returns the row
                return df.loc[index]
    
    def get_ingredient_grams(self,ingredient):
        #checks if units in grams
        #TODO: this will assume that anything not in grams is negligible environmentally
        index = ingredient.lower().find("gram")
        if index == -1:
            #assuming negligible
            return 0
        else:
            try:
                return int(ingredient.strip().split("gram")[0]) #formated in "x grams (name)"
            except:
                return 0 #if "unknown" grams
        
        
        return False 
