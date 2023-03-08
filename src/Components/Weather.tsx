import React, { useEffect, useState } from "react";
import { CurrentWeatherResponse, ForecastResponse } from "../types/openWeatherApi/ForecastResponse";

const Weather = () => {
  const [weather, setWeather] = useState();
  const get = async (): Promise<ForecastResponse> => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=32.0866928&lon=4.803192&units=metric&appid=${
        import.meta.env.VITE_weatherKey
      }`
    );

    const data = await res.json();
    return data;
  };
  const parseHtmlToWeater = () => {};
  useEffect(() => {
    (async () => {
      const d = await get();
      console.log(d);
    })();
  }, [setWeather]);
  return <div>Weather</div>;
};

export default Weather;
