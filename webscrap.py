import requests
import json

# Define your search criteria (product name)
product_name = "Nutella"

url = f"https://world.openfoodfacts.org/api/v2/search?search_terms={product_name}"

response = requests.get(url)
if "co2_total" in response.text:
    print(response.get.get('co2_total','N/A'))

