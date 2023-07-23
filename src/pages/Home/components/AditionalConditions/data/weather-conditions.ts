import { ISettingsState } from "@utils/types/settings";
import { IWeatherDaily } from "@services/weather/types/weather-daily.interface";

import { windSpeedConvertor } from "@utils/helpers/wind-speed-convertor";
import { temperatureConvertor } from "@utils/helpers/temperature-convertor";

import { WIND_SPEED_TITLES } from "@utils/constants/units-titles";

export const weatherConditions = [
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
    iconName: "tint",
    title: "Precipitation",
    extractor: (data: IWeatherDaily) => `${data?.pop.toFixed(0)}%`,
  },
  {
    iconName: "sun",
    title: "UV Index",
    extractor: (data: IWeatherDaily) => `${data?.uvi}`,
  },
];