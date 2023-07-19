import { WeatherDailyDto } from "./weather-daily.dto";
import { WeatherHourlyDto } from "./weather-hourly.dto";
import { IWeatherResponse } from "../response/weather";

export class WeatherDto {
  lat: number;
  lon: number;
  timezone: string;
  hourly: WeatherHourlyDto[];
  daily: WeatherDailyDto[];
  current: WeatherDailyDto;

  constructor(data: IWeatherResponse) {
    this.lat = data.lat;
    this.lon = data.lon;
    this.timezone = data.timezone;
    this.hourly = data.hourly.map(item => new WeatherHourlyDto(item));
    this.daily = data.daily.map(item => new WeatherDailyDto(item));
    this.current = this.daily[0];
  }
}