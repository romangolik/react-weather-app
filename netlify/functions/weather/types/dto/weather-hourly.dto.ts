import { numberToFixed } from "../../../../utils/number-to-fixed";

import { WeatherConditionDto } from "./weather-condition.dto";
import { IWeatherHourlyResponse } from "../response/weather-hourly";

export class WeatherHourlyDto {
  date: Date;
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
  weather: WeatherConditionDto;
  pop: number;

  constructor(data: IWeatherHourlyResponse) {
    this.date = new Date(data.dt * 1000);
    this.temp = numberToFixed(data.temp);
    this.feels_like = numberToFixed(data.feels_like);
    this.pressure = data.pressure;
    this.humidity = data.pressure;
    this.dew_point = data.dew_point;
    this.uvi = data.uvi;
    this.clouds = data.clouds;
    this.visibility = data.visibility;
    this.wind_speed = data.wind_speed;
    this.wind_deg = data.wind_deg;
    this.weather = new WeatherConditionDto(data.weather[0]);
    this.pop = data.pop * 100;
  }
}