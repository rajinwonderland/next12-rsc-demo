import { CityProps } from "components/city-info.client";
import { processEnv } from "./processEnv";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

export function getUrl(lat: number | string, lon: number | string) {
  const url = new URL(baseUrl);
  url.searchParams.append("lat", lat.toString());
  url.searchParams.append("lon", lon.toString());
  url.searchParams.append("units", "imperial");
  url.searchParams.append("appid", processEnv.openWeatherApiKey);
  return url.toString();
}

export function getBackupUrl(lat: number | string, lon: number | string) {
  const url = new URL(baseUrl);
  url.searchParams.append("lat", lat.toString());
  url.searchParams.append("lon", lon.toString());
  url.searchParams.append("units", "imperial");
  url.searchParams.append("appid", processEnv.backupOpenWeatherApiKey);
  return url.toString();
}
export async function getWeather(
  city: CityProps
): Promise<WeatherResponse | WeatherErrorResponse> {
  const url = getUrl(city.latitude, city.longitude);
  const res = await fetch(url);
  const data = await res.json();
  if (data?.cod === 429) {
    const retryUrl = getBackupUrl(city.latitude, city.longitude);
    const retryRes = await fetch(retryUrl);
    const retryData = await retryRes.json();
    return retryData;
  }
  return data;
}

export interface WeatherErrorResponse {
  cod: number;
  message: string;
}

export interface WeatherResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}
