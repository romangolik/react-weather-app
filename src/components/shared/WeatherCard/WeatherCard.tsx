import React, { FC } from "react";

import { useTypedSelector } from "@hooks/useTypedSelector";

import Icon from "@components/ui/Icon";

import { getSettings } from "@src/store/selectors/getSettings";
import { dateConvertor } from "@utils/helpers/date-convertor";
import { temperatureConvertor } from "@utils/helpers/temperature-convertor";

import "./WeatherCard.scss";

interface WeatherCardProps {
  time: string;
  temp: number;
  iconName: string;
  timezone: string;
}

const WeatherCard: FC<WeatherCardProps> = ({ time, temp, iconName, timezone }) => {
  const { timeFormat, temperatureScale } = useTypedSelector(getSettings);

  return (
    <div className="weather-card">
      <p className="bold-weight weather-card__time">
        {dateConvertor(time, timezone, timeFormat)}
      </p>
      <Icon name={iconName} className="weather-card__image" />
      <p className="bold-weight large-text weather-card__temperature">
        {temperatureConvertor(temp, temperatureScale)}°
      </p>
    </div>
  );
};

export default WeatherCard;
