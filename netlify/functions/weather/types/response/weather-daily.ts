import { IFeelsLikeResponse } from "./feels-like";
import { ITemperatureResponse } from "./temperature";
import { IWeatherConditionResponse } from "./weather-condition";

export interface IWeatherDailyResponse {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: ITemperatureResponse;
  feels_like: IFeelsLikeResponse;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: IWeatherConditionResponse[];
  clouds: number;
  pop: number;
  uvi: number;
}