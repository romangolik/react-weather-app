import React, { FC, useRef } from "react";

import classNames from "classnames";

import { useTypedSelector } from "@hooks/useTypedSelector";

import Icon from "@components/ui/Icon";
import ContentBlock from "@components/layout/ContentBlock";

import { getSettings } from "@src/store/selectors/getSettings";
import { dateConvertor } from "@utils/helpers/date-convertor";
import { temperatureConvertor } from "@utils/helpers/temperature-convertor";

import { IWeather } from "@services/weather/types/weather.interface";

import "./CityWeatherRow.scss";

interface CityWeatherRowProps {
  cityWeather: IWeather;
  isActiveRow: boolean;
  isCurrentLocation: boolean;
  onClick?: (value: IWeather) => void;
}

const CityWeatherRow: FC<CityWeatherRowProps> = ({
  onClick,
  cityWeather,
  isActiveRow = false,
  isCurrentLocation = false,
}) => {
  const date = useRef(Date.now());
  const { timeFormat, temperatureScale } = useTypedSelector(getSettings);

  const classes = classNames("city-weather", {
    "city-weather_active": isActiveRow,
  });

  return (
    <ContentBlock
      as="div"
      className={classes}
      onClick={() => onClick(cityWeather)}>
      <Icon
        name={cityWeather.current.weather.icon}
        className="city-weather__icon"
      />
      <div className="city-weather__content">
        <div className="city-weather__header">
          <h2 className="city-weather__name">{cityWeather.name}</h2>
          {isCurrentLocation && (
            <Icon name="current-location" className="city-weather__location-icon" />
          )}
          <p className="h1 regular-weight city-weather__temperature">
            {temperatureConvertor(cityWeather.current.temp.day, temperatureScale)}°
          </p>
        </div>
        <p className="city-weather__time">
          {dateConvertor(date.current, cityWeather.timezone, timeFormat)}
        </p>
      </div>
    </ContentBlock>
  );
};

export default CityWeatherRow;
