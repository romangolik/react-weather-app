import React, { FC } from "react";

import classNames from "classnames";

import Icon from "@components/ui/Icon/Icon";
import Button from "@components/ui/Button";
import Divider from "@components/ui/Divider";
import Overlay from "@components/ui/Overlay/Overlay";
import GeneralInfo from "@components/shared/GeneralInfo";
import DailyForecast from "@components/shared/DailyForecast";
import HourlyForecast from "@components/shared/HourlyForecast";

import { filterHourlyForecast } from "@utils/helpers/filter-hourly-forecast";

import { IWeather } from "@services/weather/types/weather.interface";

import "./CityWeatherSidebar.scss";

interface CityWeatherSidebarProps {
  data: IWeather;
  isShown?: boolean;
  className?: string;
  isCurrentLocationData: boolean;
  variant: "permanent" | "temporary";
  closeHandler?: () => void;
  removeHandler: (selectedData: IWeather) => void;
  selectHandler: (selectedData: IWeather) => void;
}

const CityWeatherSidebar: FC<CityWeatherSidebarProps> = ({
  data,
  variant,
  className,
  closeHandler,
  removeHandler,
  selectHandler,
  isShown = false,
  isCurrentLocationData = false,
}) => {
  const classes = classNames("city-weather-sidebar", className, {
    "city-weather-sidebar_active": isShown,
    "city-weather-sidebar_temporary": variant === "temporary",
  });

  return (
    <>
      <aside className={classes}>
        {variant === "temporary" && (
          <button
            className="city-weather-sidebar__close"
            onClick={closeHandler}>
            <Icon
              className="city-weather-sidebar__close-icon"
              name="arrow-left"
            />
            <span>Close</span>
          </button>
        )}
        <GeneralInfo
          className="city-weather-sidebar__general-info"
          name={data?.name}
          iconName={data?.current?.weather.icon}
          temp={data?.current?.temp.day}
        />
        <Divider className="city-weather-sidebar__divider" />
        <HourlyForecast
          timezone={data?.timezone}
          data={filterHourlyForecast(data?.hourly, 3)}
        />
        <Divider className="city-weather-sidebar__divider" />
        <DailyForecast dayCount={3} data={data?.daily.slice(0, 3)} />
        <div className="city-weather-sidebar__buttons">
          <Button
            disabled={isCurrentLocationData}
            onClick={() => selectHandler(data)}>
            Select
          </Button>
          <Button variant="primary" onClick={() => removeHandler(data)}>
            Remove
          </Button>
        </div>
      </aside>
      <Overlay
        open={isShown}
        zIndex={110}
        closeHandler={closeHandler}/>
    </>
  );
};

export default CityWeatherSidebar;
