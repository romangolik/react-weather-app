import React, { FC } from "react";

import { useSettingsData } from "@contexts/settings/settings.state";

import Icon from "@components/ui/Icon";

import { ITemperature } from "@services/weather/types/temperature.interface";
import { IWeatherCondition } from "@services/weather/types/weather-conditions.interface";

import { getDayName } from "@utils/helpers/get-day-name";
import { temperatureConvertor } from "@utils/helpers/temperature-convertor";

import "./WeatherRow.scss";

interface WeatherRowProps {
  time: string;
  temp: ITemperature;
  weatherCondition: IWeatherCondition;
}

const WeatherRow: FC<WeatherRowProps> = ({ temp, weatherCondition, time }) => {
  const { temperatureScale } = useSettingsData();

  return (
    <div className="weather-row">
      <p className="weather-row__day">{getDayName(time)}</p>
      <div className="weather-row__condition">
        <Icon
          name={weatherCondition.icon}
          className="weather-row__condition-image"
        />
        <p className="bold-weight weather-row__condition-text">
          {weatherCondition.main}
        </p>
      </div>
      <p className="weather-row__temperature">
        <span className="bold-weight weather-row__temperature-max">
          {temperatureConvertor(temp.day, temperatureScale)}
        </span>
        /{temperatureConvertor(temp.night, temperatureScale)}
      </p>
    </div>
  );
};

export default WeatherRow;
