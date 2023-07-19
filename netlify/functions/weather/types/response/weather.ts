import { IWeatherDailyResponse } from "./weather-daily";
import { IWeatherHourlyResponse } from "./weather-hourly";

export interface IWeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  hourly: IWeatherHourlyResponse[];
  daily: IWeatherDailyResponse[];
}