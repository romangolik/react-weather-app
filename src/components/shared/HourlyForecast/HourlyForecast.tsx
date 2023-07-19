import React, { FC, useRef } from "react";

import Widget from "@components/layout/Widget/Widget";
import WeatherCard, { WeatherCardSkeleton } from "@components/shared/WeatherCard";

import { IWeatherHourly } from "@services/weather/types/weather-hourly.interface";

import "./HourlyForecast.scss";

interface HourlyForecastProps {
  data: IWeatherHourly[];
  timezone: string;
}

const HourlyForecast: FC<HourlyForecastProps> = ({ data = [], timezone }) => {
  const skeletonArray = useRef(new Array(10).fill(0));

  return (
    <Widget className="hourly-forecast">
      <Widget.Header>
        <Widget.Title>Hourly Forecast</Widget.Title>
      </Widget.Header>
      <Widget.Content>
        <ul className="hourly-forecast__list">
          {data.map((hourlyData) => (
            <li key={hourlyData.date} className="hourly-forecast__list-item">
              <WeatherCard
                timezone={timezone}
                time={hourlyData.date}
                temp={hourlyData.temp}
                iconName={hourlyData.weather.icon} />
            </li>
          ))}
          {data.length === 0 && skeletonArray.current.map((_, index) => (
            <li key={index} className="hourly-forecast__list-item">
              <WeatherCardSkeleton />
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
};

export default HourlyForecast;
