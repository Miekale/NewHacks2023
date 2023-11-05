import requests
import json
import openfoodfacts

def getName():
    product_name = input("What is the product name? ")
    return product_name

def searchWeb(product_name):
    url = f'https://world.openfoodfacts.org/cgi/search.pl?search_terms={product_name}&search_simple=1&action=process&json=1'
    response = requests.get(url)
    print("Scanned page")
    status = str(response)
    print(status)
    data_str = str(response.json())
    code_index = data_str.find("\'code\'")
    print("Found barcode")
    code_index += 9 

    code = ""
    for i in range(0, 12):
       code += data_str[code_index + i]
    return code

def getData(code, product_name):
    url = f"https://world.openfoodfacts.org/api/v2/product/{code}"
    response = requests.get(url)
    print("Found product")
    
    if response.status_code == 200:
        data = json.loads(response.text)
        products = data.get('products', [])

        for product in products:
            if product.get('product_name', '') == product_name:
            
                eco = product.get('agribalyse_food_code', {}).get('co2_total','N/A')
                print("co2_total:", eco)
                break
    else:
        print("Error: Unable to retrieve data for the product name:", product_name)

if __name__ == '__main__':
    product = "nutella"
    searchWeb(product)
    code = searchWeb(product)
    print(code)
    data = getData(code, product)
    print(data)