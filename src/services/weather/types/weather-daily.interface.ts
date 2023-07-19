import { IFeelsLike } from "./feels-like.interface";
import { ITemperature } from "./temperature.interface";
import { IWeatherCondition } from "./weather-conditions.interface";

export interface IWeatherDaily {
  date: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: number;
  summary: string;
  temp: ITemperature;
  feels_like: IFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  weather: IWeatherCondition;
  clouds: number;
  pop: number;
  uvi: number;
}