import React, { FC, useEffect, useRef, useState } from "react";

import classNames from "classnames";
import { Route, Routes, useLocation } from "react-router-dom";

import { weatherService } from "@services/weather/weather.service";
import { useCurrentLocationData } from "@contexts/current-location/current-location.state";

import Overlay from "@components/ui/Overlay";
import GeneralInfo from "@components/shared/GeneralInfo";
import ContentBlock from "@components/layout/ContentBlock";
import AllConditions from "./components/AllConditions";
import GridContainer from "@components/layout/GridContainer";
import DailyForecast from "@components/shared/DailyForecast";
import HourlyForecast from "@components/shared/HourlyForecast";
import CircularProgress from "@components/ui/CircularProgress";
import AditionalConditions from "./components/AditionalConditions";

import { filterHourlyForecast } from "@utils/helpers/filter-hourly-forecast";

import { IWeather } from "@services/weather/types/weather.interface";

import "./Home.scss";

const Home: FC = () => {
  const initialized = useRef(false);

  const location = useLocation();
  const { currentLocation, history } = useCurrentLocationData();
  const [weatherData, setWeatherData] = useState<IWeather>(null);
  const [isLoaderVisible, setLoaderVisibility] = useState(false);

  const classes = classNames("home-page", {
    "home-page_see-more": location.pathname !== "/home",
  });

  async function fetchData(): Promise<void> {
    if (initialized.current) {
      setLoaderVisibility(true);
    }

    const { lat, lon } = currentLocation;
    const weatherData = await weatherService.getFullWeatherData({ lat, lon });

    setLoaderVisibility(false);
    setWeatherData(weatherData);
    initialized.current = true;
  }

  useEffect(() => {
    if (currentLocation) {
      fetchData();
    }
  }, [currentLocation]);

  return (
    <GridContainer className={classes}>
      <GeneralInfo
        className="home-page__general-info"
        name={weatherData?.name}
        iconName={weatherData?.current?.weather.icon}
        temp={weatherData?.current?.temp.day}
      />
      <ContentBlock as="section" className="home-page__hourly-forecast">
        <HourlyForecast
          timezone={weatherData?.timezone}
          data={filterHourlyForecast(weatherData?.hourly, 3)}
        />
      </ContentBlock>
      <Routes>
        <Route
          index
          element={
            <ContentBlock as="section" className="home-page__air-condition">
              <AditionalConditions dailyWeather={weatherData?.current} />
            </ContentBlock>
          }></Route>
        <Route
          path="more-conditions"
          element={
            <AllConditions
              className="home-page__conditions"
              timezone={weatherData?.timezone}
              dailyWeather={weatherData?.current} />
          }></Route>
      </Routes>
      <ContentBlock as="section" className="home-page__daily-forecast">
        <DailyForecast 
          dayCount={7}
          data={weatherData?.daily} />
      </ContentBlock>
      <Overlay 
        open={isLoaderVisible}
        zIndex={120}>
        <CircularProgress 
          width={60}
          height={60} />
      </Overlay>
    </GridContainer>
  );
};

export default Home;
