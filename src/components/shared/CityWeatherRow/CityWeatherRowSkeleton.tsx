import React, { FC } from "react";

import Skeleton from "@components/ui/Skeleton";
import ContentBlock from "@components/layout/ContentBlock";

import "./CityWeatherRow.scss";

export const CityWeatherRowSkeleton: FC = () => {
  return (
    <ContentBlock as="div" className="city-weather city-weather_skeleton">
      <Skeleton variant="rounded" className="city-weather__icon" />
      <div className="city-weather__content">
        <div className="city-weather__header">
          <h2 className="city-weather__name">
            <Skeleton />
          </h2>
          <p className="h1 regular-weight city-weather__temperature">
            <Skeleton />
          </p>
        </div>
        <p className="city-weather__time">
          <Skeleton />
        </p>
      </div>
    </ContentBlock>
  );
};
