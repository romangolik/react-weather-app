import React, { FC } from "react";

import { useNavigate } from "react-router-dom";

import { useTypedSelector } from "@hooks/useTypedSelector";

import Button from "@components/ui/Button";
import Widget from "@components/layout/Widget";
import WeatherCondition, {
  WeatherConditionSkeleton,
} from "@components/shared/WeatherCondition";

import { getSettings } from "@src/store/selectors/getSettings";

import { IWeatherDaily } from "@services/weather/types/weather-daily.interface";

import { weatherConditions } from "./data/weather-conditions";

import "./AditionalConditions.scss";

interface AditionalConditionsProps {
  dailyWeather: IWeatherDaily;
}

const AditionalConditions: FC<AditionalConditionsProps> = ({
  dailyWeather,
}) => {
  const navigate = useNavigate();
  const settings = useTypedSelector(getSettings);

  const navigateToMoreConditions = () => {
    navigate("./more-conditions");
  };

  return (
    <Widget className="additional-conditions">
      <Widget.Header>
        <Widget.Title>Air Conditions</Widget.Title>
        <Button
          paddingSize="smaller"
          onClick={navigateToMoreConditions}>
          See more
        </Button>
      </Widget.Header>
      <Widget.Content className="additional-conditions__content">
        {dailyWeather !== undefined
          ? weatherConditions.map((item) => (
              <WeatherCondition
                key={item.title}
                iconName={item.iconName}
                title={item.title}
                value={item.extractor(dailyWeather, settings)}
              />
            ))
          : Array(weatherConditions.length)
              .fill(0)
              .map((_, index) => <WeatherConditionSkeleton key={index} />)}
      </Widget.Content>
    </Widget>
  );
};

export default AditionalConditions;
