import React, { FC, useRef } from "react";

import classNames from "classnames";

import { useSettingsData } from "@contexts/settings/settings.state";

import ContentBlock from "@components/layout/ContentBlock";
import WeatherCondition, {
  WeatherConditionSkeleton,
} from "@components/shared/WeatherCondition";

import { IWeatherDaily } from "@services/weather/types/weather-daily.interface";

import { weatherConditions } from "./data/weather-conditions";

import "./AllConditions.scss";

interface AllConditionsProps {
  className?: string;
  timezone: string;
  dailyWeather: IWeatherDaily;
}

const AllConditions: FC<AllConditionsProps> = ({
  timezone,
  className,
  dailyWeather,
}) => {
  const settings = useSettingsData();
  const skeletonArray = useRef(new Array(weatherConditions.length).fill(0));

  const classes = classNames("all-conditions", className);

  return (
    <section className={classes}>
      {dailyWeather !== undefined
        ? weatherConditions.map((item) => (
            <ContentBlock as="div" key={item.title}>
              <WeatherCondition
                iconName={item.iconName}
                title={item.title}
                value={item.extractor(dailyWeather, settings, timezone)}
                variant="secondary"
              />
            </ContentBlock>
          ))
        : skeletonArray.current.map((_, index) => (
            <ContentBlock as="div" key={index}>
              <WeatherConditionSkeleton variant="secondary" />
            </ContentBlock>
          ))}
    </section>
  );
};

export default AllConditions;
