//40c3f35e139882f9d6a3cf1a5c7207f3
import { useState, useEffect } from "react";
import InfoCard from "./component/info-card";
import SearchLocation from "./component/search-location";
import locationIcon from "./assets/locationIcon.svg";
import windIcon from "./assets/windIcon.svg";
import feelslikeIcon from "./assets/feelslike.svg";
import visibilityIcon from "./assets/visibilityIcon.svg";
import humidIcon from "./assets/humidIcon.svg";
import rainIcon from "./assets/rainIcon.svg";
import { API_KEY } from "./api";

function App() {
  const [city, setCity] = useState("Seattle");
  const [data, setData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  console.log(API_KEY);
  // require('dotenv').config();
  // const apikey = process.env.API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      if (!city) return;

      try {
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );

        const hourlyResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid={API_KEY}`
        );

        if (!weatherResponse.ok || !hourlyResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const weatherResult = await weatherResponse.json();
        const hourlyResult = await hourlyResponse.json();
        setData(weatherResult);
        setHourlyData(hourlyResult.list.slice(0, 12)); // Getting next 8 hours
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <>
      <main className="min-h-screen flex flex-col gap-2  pb-12">
        <div className="relative h-[360px] md:h-[480px] lg:h-[600px]">
          <img
            className="bg-cover bg-center h-full w-full object-cover bg-opacity-90"
            src={
              data?.weather?.[0]?.main === "Clear"
                ? "https://gifdb.com/images/high/anime-clouds-moving-leaves-flying-in-sky-mk1x9qeh1iro8ekd.gif"
                : data?.weather?.[0]?.main === "Clouds"
                ? "https://i.pinimg.com/originals/a2/f5/ae/a2f5aeab0467e1426d5bd002072b9d5c.gif"
                : data?.weather?.[0]?.main === "Rain"
                ? "https://cdn.pixabay.com/animation/2023/03/26/01/15/01-15-42-612_512.gif"
                : ""
            }
            alt="Background"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-black bg-opacity-50 rounded-lg p-4 text-center">
              <SearchLocation setCity={setCity} />
              <h1 className="text-8xl text-white">
                {data?.main?.temp
                  ? `${(data.main.temp - 273.15).toFixed(1)}°C`
                  : "Loading..."}
              </h1>
              <h1 className="text-2xl text-white mb-2">
                {data?.name
                  ? `${data.name}, ${data.sys.country}`
                  : "Loading..."}
              </h1>
              <h1 className="text-white text-2xl">
                H: {(data?.main?.temp_max - 273.15).toFixed(1)}°C L:{" "}
                {(data?.main?.temp_min - 273.15).toFixed(1)}°C
              </h1>
              <h1 className="text-2xl text-white mt-2">
                {data?.weather?.[0]?.main || "Loading..."}
              </h1>
            </div>
          </div>
        </div>

        {/* Hourly Weather Timeline */}
        <div className="bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-lg bg-blue-400">
          <h1 className="text-xl text-white mb-2">Hourly Forecast</h1>
          <div className="flex justify-between flex-wrap">
            {hourlyData.map((hour, index) => {
              const date = new Date(hour.dt_txt);
              let hours = date.getHours();
              const ampm = hours >= 12 ? "PM" : "AM";
              hours = hours % 12 || 12; // Convert to 12-hour format, replace 0 with 12
              const time = `${hours}:00 ${ampm}`;

              return (
                <div key={index} className="text-center text-white mx-2">
                  <p className="mt-4 text-black text-semibold text-xl">
                    {time}
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                    alt={hour.weather[0].description}
                    className="h-10 w-10 mx-auto"
                  />
                  <p>{(hour.main.temp - 273.15).toFixed(1)}°C</p>
                  <p>{hour.weather[0].main}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className="text-2xl text-base-300">Today's Highlight</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-0.5 place-items-center">
          <InfoCard
            title="Feels Like"
            description={`${(data?.main?.feels_like - 273.15).toFixed(1)}°C`}
            icon={feelslikeIcon}
          />
          <InfoCard
            title="Visibility"
            description={`${data?.visibility / 1000} km`}
            icon={visibilityIcon}
          />
          <InfoCard
            title="Wind Speed"
            description={`${data?.wind?.speed} m/s`}
            icon={windIcon}
          />
          <InfoCard
            title="Cloudiness"
            description={`${data?.clouds?.all}%`}
            icon={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
          />
          <InfoCard
            title="Precipitation"
            description={`${data?.rain?.["1h"] || 0} mm`}
            icon={rainIcon}
          />
          <InfoCard
            title="Humidity"
            description={`${data?.main?.humidity}%`}
            icon={humidIcon}
          />
        </div>
      </main>
    </>
  );
}

export default App;
