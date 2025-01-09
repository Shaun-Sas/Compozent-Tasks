import requests


def get_quote():
    rq =requests.get("https://api.kanye.rest/")
    data = rq.json()
    quote =  data["quote"]
    print(quote)
    
get_quote()
