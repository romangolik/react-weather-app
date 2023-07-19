import React, { FC } from "react";

import Skeleton from "@components/ui/Skeleton/Skeleton";

import "./WeatherCard.scss";

export const WeatherCardSkeleton: FC = () => {
  return (
    <div className="weather-card weather-card_skeleton">
      <p className="weather-card__time"><Skeleton /></p>
      <Skeleton
          variant="rounded"
          className="weather-card__image"></Skeleton>
      <p className="weather-card__temperature"><Skeleton /></p>
    </div>
  );
};
