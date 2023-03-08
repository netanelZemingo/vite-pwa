/**
 * example for current weather data
 * @link  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}units=metric&appid={APIkey}
 * units as metric
 */
export interface CurrentWeatherResponse {
  coord: coord;
  weather: weather[];
  base: string;
  main: main;
  visibility?: number;
  wind: wind;
  clouds: {
    all: number;
  };
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
  snow?: {
    "1h"?: number;
    "3h"?: number;
  };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone?: number;
  id: number;
  name: string;
  cod: number;
}

/**
 * forcast for 5 days,
 * url example https://api.openweathermap.org/data/2.5/forecast?lat=32.0866928&lon=4.803192&units=metric&appid=dcc25124703fcffa65b65a24096a3389
 * units as metric
 */
export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastData[];
  city: {
    id: number;
    name: string;
    coord: coord;
    country: string;
    /** City population */
    population: number;
    timezone: number;
    /** Sunrise time, unix, UTC */
    sunrise: number;
    /** Sunset time, unix, UTC */
    sunset: number;
  };
}

interface ForecastData {
  /** Time of data calculation, unix, UTC */
  dt: number;
  main: main;
  weather: weather[];
  clouds: {
    /** Cloudiness, % */
    all: number;
  };
  wind: wind;
  precipitation?: {
    /** Precipitation, mm */
    value: number;
    /** Possible values are 'no", name of weather phenomena as 'rain', 'snow' */
    mode: "no" | "rain" | "snow";
  };
  visibility?: number;
  pop?: number;
  rain?: {
    /** Rain volume for the last 1 hour, mm */
    "1h"?: number;
    /** Rain volume for the last 3 hour, mm */
    "3h"?: number;
  };
  snow?: {
    /** Snow volume for the last 1 hour, mm */
    "1h"?: number;
    /** Snow volume for the last 3 hour, mm */
    "3h"?: number;
  };
  sys?: {
    pod: string;
  };
  dt_txt?: string;
}

interface coord {
  lon: number;
  lat: number;
}
interface weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface wind {
  speed: number;
  deg: number;
  gust?: number;
}
interface main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf?: number;
}
