import { IWeatherDaily } from "./weather-daily.interface";
import { IWeatherHourly } from "./weather-hourly.interface";

export interface IWeather {
  lat: number;
  lon: number;
  name: string;
  timezone: string;
  hourly: IWeatherHourly[];
  daily: IWeatherDaily[];
  current: IWeatherDaily;
}