import { ISettingsState } from "@utils/types/settings";
import { IWeatherDaily } from "@services/weather/types/weather-daily.interface";

import { dateConvertor } from "@utils/helpers/date-convertor";
import { pressureConvertor } from "@utils/helpers/pressure-convertor";
import { windSpeedConvertor } from "@utils/helpers/wind-speed-convertor";
import { getCardinalDirection } from "../helpers/get-cardinal-direction";
import { temperatureConvertor } from "@utils/helpers/temperature-convertor";

import {
  PRESSURE_TITLES,
  WIND_SPEED_TITLES,
} from "@utils/constants/units-titles";

export const weatherConditions = [
  {
    iconName: "sun",
    title: "UV Index",
    extractor: (data: IWeatherDaily) => `${data?.uvi}`,
  },
  {
    iconName: "thermometer",
    title: "Feels like",
    extractor: (data: IWeatherDaily, settings: ISettingsState) =>
      `${temperatureConvertor(
        data?.feels_like.day,
        settings.temperatureScale
      )}°`,
  },
  {
    iconName: "wind",
    title: "Wind",
    extractor: (data: IWeatherDaily, settings: ISettingsState) =>
      `${windSpeedConvertor(data?.wind_speed, settings.windSpeedScale)} ${
        WIND_SPEED_TITLES[settings.windSpeedScale]
      }`,
  },
  {
    iconName: "compass",
    title: "Wind direction",
    extractor: (data: IWeatherDaily) => getCardinalDirection(data.wind_speed),
  },
  {
    iconName: "humidity",
    title: "Humidity",
    extractor: (data: IWeatherDaily) => `${data?.humidity.toFixed(0)}%`,
  },
  {
    iconName: "tint",
    title: "Precipitation",
    extractor: (data: IWeatherDaily) => `${data?.pop.toFixed(0)}%`,
  },
  {
    iconName: "pressure",
    title: "Pressure",
    extractor: (data: IWeatherDaily, settings: ISettingsState) =>
      `${pressureConvertor(data?.pressure, settings.pressureScale)} ${
        PRESSURE_TITLES[settings.pressureScale]
      }`,
  },
  {
    iconName: "cloud",
    title: "Clouds",
    extractor: (data: IWeatherDaily) => `${data?.clouds}%`,
  },
  {
    iconName: "sunrise",
    title: "Sunrise",
    extractor: (data: IWeatherDaily, settings: ISettingsState, timezone: string) =>
      `${dateConvertor(data?.sunrise, timezone, settings.timeFormat)}`,
  },
  {
    iconName: "sunset",
    title: "Sunset",
    extractor: (data: IWeatherDaily, settings: ISettingsState, timezone: string) =>
      `${dateConvertor(data?.sunset, timezone, settings.timeFormat)}`,
  },
];