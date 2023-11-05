import requests
import json

# Define your search criteria (product name)
product_name = "Nutella"

# Construct the API search request URL with the product name as a query parameter
url = f"https://world.openfoodfacts.org/api/v2/search?search_terms={product_name}"

# Send the GET request
response = requests.get(url)

if response.status_code == 200:
    #data = response.json()
    #products = json.loads( json.dumps(data))
    #products = data.get('products', [])
    data = json.loads(response.text)
    products = data.get('products', [])

    for product in products:
        if product.get('product_name', '') == product_name:
           
            ecoscore = product.get('agribalyse_food_code', {}).get('co2_total','N/A')
            print("co2_total:", ecoscore)
            break
else:
    print("Error: Unable to retrieve data for the product name:", product_name)

'''
import requests
import json

# Define your search criteria (product name)
product_name = "bursin"

# Construct the API search request URL with the product name as a query parameter
url = f"https://world.openfoodfacts.org/api/v2/search?search_terms={product_name}"

# Send the GET request
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    products = data.get('products', [])

    for product in products:
        if product.get('product_name', '').lower() == product_name.lower():
            print("Product Name:", product.get('product_name', 'N/A'))
            carbon_footprint_product = product.get('nutriments', {}).get('carbon-footprint_100g', 'N/A')
            carbon_footprint_serving = product.get('nutriments', {}).get('carbon-footprint_serving', 'N/A')
            print("Carbon Footprint (Per 100g):", carbon_footprint_product)
            print("Carbon Footprint (Per Serving):", carbon_footprint_serving)
            break  # Exit the loop after finding the product

        else:
            print("Product not found in the Open Food Facts database.")
            break
else:
    print("Error: Unable to retrieve data for the product name:", product_name)


import requests

# Define your search criteria (product name)
product_name = "Jam"

# Construct the API search request URL with the product name as a query parameter
url = f"https://world.openfoodfacts.org/api/v2/search?search_terms={product_name}"
#url = f"https://world.openfoodfacts.org/cgi/search.pl?search_terms={product_name}&search_simple=1&action=process"

# Send the GET request
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    products = data.get('products', [])

    for product in products:
        # Print the carbon footprint data (if available)
        cf_percent = product.get("carbon_footprint_percent_of_known_ingredients")
        if cf_percent != "":
            print("cf_from_known_ingredient:", cf_percent)
            break
    else:
        print("Error: Unable to find carbon footprint for the product:", product_name)


'''