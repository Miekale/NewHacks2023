import requests
import json

# Define your search criteria (product name)
product_name = "Coca-cola"

# Construct the API search request URL with the product name as a query parameter
url = f"https://world.openfoodfacts.org/api/v2/search?search_terms={product_name}"

# Send the GET request
response = requests.get(url)

if response.status_code == 200:
    data = json.loads(response.text)
    products = data.get('products', [])

    for product in products:
        if product.get('product_name', '') == product_name:
        
            eco = product.get('ecoscore_data', {}).get('agribalyse_food_code', {}).get('co2_total','N/A')
            print("co2_total:", eco)
            break
else:
    print("Error: Unable to retrieve data for the product name:", product_name)

