import { IWeatherConditionResponse } from "./weather-condition";

export interface IWeatherHourlyResponse {
  dt: number;
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
  weather: IWeatherConditionResponse[];
  pop: number;
}