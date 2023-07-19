import { WEATHER_ICON_CODES } from "../../data/weather-icon-codes";

import { IWeatherConditionResponse } from "../response/weather-condition";

export class WeatherConditionDto {
  id: number;
  main: string;
  description: string;
  icon: string;

  constructor(data: IWeatherConditionResponse) {
    this.id = data.id;
    this.main = data.main;
    this.description = data.description;
    this.icon = WEATHER_ICON_CODES[data.icon];
  }
}