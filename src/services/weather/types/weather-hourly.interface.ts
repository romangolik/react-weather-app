import { IWeatherCondition } from "./weather-conditions.interface";

export interface IWeatherHourly {
  date: string;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: IWeatherCondition;
  pop: number;
}