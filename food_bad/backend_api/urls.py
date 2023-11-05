from django.urls import path 
from .views import ProcessFoodImage,GetCarbonEmissions,IngredientsCondenser

urlpatterns = [
    #path('home',main)
    path('process-food-image',ProcessFoodImage.as_view()),
    path('get-carbon-emissions',GetCarbonEmissions.as_view()),
    path('condense-ingredients',IngredientsCondenser.as_view())
]
