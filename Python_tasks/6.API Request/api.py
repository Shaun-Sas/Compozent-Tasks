import requests
from dotenv import load_dotenv
import os


load_dotenv()


def fetch_weather_data(city, api_key):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        print(f"City: {data['name']}")
        print(f"Temperature: {data['main']['temp']}°C")
        print(f"Weather: {data['weather'][0]['description']}")
    else:
        print(f"Error: Unable to fetch data (Status Code: {response.status_code})")

api = os.getenv('SECRET_KEY')
fetch_weather_data("Mumbai", api) 
