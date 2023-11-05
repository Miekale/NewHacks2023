import openfoodfacts

api = openfoodfacts.API(version="v2")

# Set a longer timeout, for example, 30 seconds
# Currently 60 seconds

results = api.product.text_search("tomato paste")

print(results['products'][2]['nutriments']["carbon-footprint-from-known-ingredients_product"])
#print(results['products'][0]['nutriments']["carbon-footprint-from-known-ingredients_serving"])
