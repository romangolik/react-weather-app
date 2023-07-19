import { FeelsLikeDto } from "./feels-like.dto";
import { TemperatureDto } from "./temperature.dto";
import { WeatherConditionDto } from "./weather-condition.dto";

import { IWeatherDailyResponse } from "../response/weather-daily";

export class WeatherDailyDto {
  date: Date;
  sunrise: Date;
  sunset: Date;
  moonrise: Date;
  moonset: Date;
  moon_phase: number;
  summary: string;
  temp: TemperatureDto;
  feels_like: FeelsLikeDto;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  weather: WeatherConditionDto;
  clouds: number;
  pop: number;
  uvi: number;

  constructor(data: IWeatherDailyResponse) {
    this.date = new Date(data.dt * 1000);
    this.sunrise = new Date(data.sunrise * 1000);
    this.sunset = new Date(data.sunset * 1000);
    this.moonrise = new Date(data.moonrise * 1000);
    this.moonset = new Date(data.moonset * 1000);
    this.moon_phase = data.moon_phase;
    this.summary = data.summary;
    this.temp = new TemperatureDto(data.temp);
    this.feels_like = new FeelsLikeDto(data.feels_like);
    this.pressure = data.pressure;
    this.humidity = data.humidity;
    this.dew_point = data.dew_point;
    this.wind_speed = data.wind_speed;
    this.wind_deg = data.wind_deg;
    this.weather = new WeatherConditionDto(data.weather[0]);
    this.clouds = data.clouds;
    this.pop = data.pop * 100;
    this.uvi = data.uvi;
  }
}