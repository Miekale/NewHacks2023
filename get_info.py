import requests
import json
import openfoodfacts

def getName():
    product_name = input("What is the product name? ")
    return product_name

def searchWeb(product_name):
    url = f'https://world.openfoodfacts.org/cgi/search.pl?search_terms={product_name}&search_simple=1&action=process&json=1'
    response = requests.get(url, timeout=600)
    data_str = str(response)
    
    code_index = data_str.find("'code'")
    code_index += 9 

    code = []
    for i in range(0, 12):
        code[i] = data_str[code_index + i]
    return code


if __name__ == '__main__':
    product = getName()
    code = searchWeb(product)
    print(code)



