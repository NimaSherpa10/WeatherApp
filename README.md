Weather App
A weather application built with React,TailwindCSS with daisyui that displays the current weather, hourly forecast, and daily highlights for a specific location. The application uses the OpenWeatherMap API to fetch weather data.

#Features
-> Search Location: Users can search for a location to view its weather information.
->Dynamic Background: The background changes based on the weather condition (Clear, Cloudy, Rain).
->Hourly Weather Timeline: Displays the weather forecast for the next 12 hours.
->Today's Highlight: Shows various weather metrics such as feels like temperature, visibility, wind speed, cloudiness, precipitation, and humidity.

#API Documentation
Prerequisites
Node.js (>=12.x)
npm or yarn

##Setup
Clone the repository:

    git clone https://github.com/NimaSherpa10/WeatherApp.git

cd WeatherApp
Install dependencies:

#Using npm:

npm install
Or using yarn:

bash
Copy code
yarn install

##Set up the API Key:

Create a .env file in the root directory of your project.

Add your OpenWeatherMap API key to the .env file:

API_KEY=your_openweathermap_api_key
Note: Replace your_openweathermap_api_key with your actual API key from OpenWeatherMap.

#Add tailwind CSS
https://tailwindcss.com/docs/guides/vite

#add daisyui
https://daisyui.com/docs/install/

Start the development server:

##Using npm:

npm run dev

yarn start
The application should now be running on http://localhost:5173/.

Usage
Search for a location: Use the search bar to input the city name. The app will fetch and display the current weather, hourly forecast, and highlights for the selected city.
View weather details: The app provides detailed weather metrics, such as temperature, humidity, and wind speed.
API Documentation
OpenWeatherMap API Integration
This application integrates with the OpenWeatherMap API to retrieve weather data.

API Key: You need an API key from OpenWeatherMap to access their API. Sign up at OpenWeatherMap to get your API key.

Fetching Current Weather Data:

The current weather data is fetched using the following endpoint:

https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
city: Name of the city (e.g., "Seattle").
API_KEY: Your OpenWeatherMap API key.
Fetching Hourly Forecast Data:

The hourly forecast data is fetched using the following endpoint:

https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}
city: Name of the city (e.g., "Seattle").
API_KEY: Your OpenWeatherMap API key.
Handling API Response:

The responses from the API calls provide various weather details such as temperature, wind speed, humidity, and weather conditions. These details are used to populate the UI elements like the temperature display, hourly timeline, and weather highlights.
