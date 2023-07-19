import React, { FC } from "react";

import Skeleton from "@components/ui/Skeleton";

import "./WeatherRow.scss";

export const WeatherRowSceleton: FC = () => {
  return (
    <div className="weather-row weather-row_skeleton">
      <p className="weather-row__day">
        <Skeleton />
      </p>
      <div className="weather-row__condition">
        <Skeleton
          variant="rounded"
          className="weather-row__condition-image"></Skeleton>
        <p className="bold-weight weather-row__condition-text">
          <Skeleton className="weather-row__skeleton"/>
        </p>
      </div>
      <p className="weather-row__temperature">
        <Skeleton />
      </p>
    </div>
  );
};
