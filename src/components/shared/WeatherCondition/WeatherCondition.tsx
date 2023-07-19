import React, { FC } from "react";

import classNames from "classnames";

import Icon from "@components/ui/Icon";

import { WeatherConditionVariant } from "./types/weather-condition-variant";

import "./WeatherCondition.scss";

interface WeatherConditionProps {
  variant?: WeatherConditionVariant;
  iconName: string;
  title: string;
  value: string;
}

const WeatherCondition: FC<WeatherConditionProps> = ({
  title,
  value,
  iconName,
  variant = "primary",
}) => {
  const classes = classNames("weather-condition", {
    "weather-condition_primary": variant === "primary",
    "weather-condition_secondary": variant === "secondary",
  });

  return (
    <div className={classes}>
      <Icon name={iconName} className="weather-condition__icon" />
      <p className="weather-condition__name medium-text">{title}</p>
      <p className="weather-condition__value h2">{value}</p>
    </div>
  );
};

export default WeatherCondition;
