import React, { FC, useRef } from "react";

import Widget from "@components/layout/Widget";
import Divider from "@components/ui/Divider/Divider";
import WeatherRow, { WeatherRowSceleton } from "@components/shared/WeatherRow";

import { IWeatherDaily } from "@services/weather/types/weather-daily.interface";

import "./DailyForecast.scss";

interface DailyForecastProps {
  data: IWeatherDaily[];
  dayCount: number;
}

const DailyForecast: FC<DailyForecastProps> = ({ data = [], dayCount }) => {
  const skeletonArray = useRef(new Array(dayCount).fill(0));

  return (
    <Widget className="daily-forecast">
      <Widget.Header>
        <Widget.Title>{dayCount}-day forecast</Widget.Title>
      </Widget.Header>
      <Widget.Content>
        <ul className="daily-forecast__list">
          {data.map((dailyData, index) => (
            <React.Fragment key={dailyData.date}>
              <li className="daily-forecast__list-item">
                <WeatherRow
                  time={dailyData.date}
                  temp={dailyData.temp}
                  weatherCondition={dailyData.weather}
                />
              </li>
              {index !== data.length - 1 ? (
                <Divider className="daily-forecast__divider" />
              ) : null}
            </React.Fragment>
          ))}
          {data.length === 0 &&
            skeletonArray.current.fill(0).map((_, index) => (
              <React.Fragment key={index}>
                <li className="daily-forecast__list-item">
                  <WeatherRowSceleton />
                </li>
                {index !== data.length - 1 ? (
                  <Divider className="daily-forecast__divider" />
                ) : null}
              </React.Fragment>
            ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
};

export default DailyForecast;
