import React, { FC } from "react";

import classNames from "classnames";

import Skeleton from "@components/ui/Skeleton/Skeleton";

import { WeatherConditionVariant } from "./types/weather-condition-variant";

import "./WeatherCondition.scss";

interface WeatherConditionSkeletonProps {
  variant?: WeatherConditionVariant;
}

export const WeatherConditionSkeleton: FC<WeatherConditionSkeletonProps> = ({
  variant = "primary",
}) => {
  const classes = classNames("weather-condition weather-condition_skeleton", {
    "weather-condition_primary": variant === "primary",
    "weather-condition_secondary": variant === "secondary",
  });

  return (
    <div className={classes}>
      <Skeleton
        variant="rounded"
        className="weather-condition__icon"
      />
      <p className="weather-condition__name medium-text">
        <Skeleton />
      </p>
      <p className="weather-condition__value h2">
        <Skeleton />
      </p>
    </div>
  );
};
