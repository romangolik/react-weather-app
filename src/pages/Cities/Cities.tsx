import React, { FC, useEffect, useReducer, useRef } from "react";

import { CitiesFacade } from "./services/cities-facade.service";

import { useMediaQuery } from "@hooks/useMediaQuery";
import {
  useCurrentLocationApi,
  useCurrentLocationData,
} from "@contexts/current-location/current-location.state";

import Overlay from "@components/ui/Overlay";
import GridContainer from "@components/layout/GridContainer";
import CityWeatherRow, {
  CityWeatherRowSkeleton,
} from "@components/shared/CityWeatherRow";
import CircularProgress from "@components/ui/CircularProgress";
import CityWeatherSidebar from "./components/CityWeatherSidebar";

import { 
  openSidebar, 
  openOverlay,
  closeSidebar, 
  closeOverlay,
  setInitialize, 
  setSidebarData, 
  setCitiesWeatherData, 
  setPrevHistoryLength,
} from "./data/cities-state.actions";
import { compareLocations } from "@utils/helpers/compare-locations";
import { citiesStateReducer } from "./data/cities-state.reducer";

import { IWeather } from "@services/weather/types/weather.interface";
import { ICitiesState } from "./types/cities-state";

import "./Cities.scss";

const initialState: ICitiesState = {
  isOverlayOpen: false,
  isInitialized: false,
  isSidebarShown: false,
  sidebarData: null,
  citiesWeather: null,
  prevHistoryLength: 0,
};

const Cities: FC = () => {
  const skeletonArray = useRef(new Array(6).fill(0));

  const matches = useMediaQuery("(max-width: 1210px)");
  const { currentLocation, history } = useCurrentLocationData();
  const [state, dispatch] = useReducer(citiesStateReducer, initialState);
  const { setCurrentLocation, removeFromHistory } = useCurrentLocationApi();

  useEffect(() => {
    if (history && history.length >= state.prevHistoryLength) {
      fetchData();
    }
  }, [history]);

  useEffect(() => {
    if (!matches && state.isSidebarShown) {
      dispatch(closeSidebar());
    }
  }, [matches]);

  async function fetchData(): Promise<void> {
    if (state.isInitialized) {
      dispatch(openOverlay());
    }

    const data = await CitiesFacade.getCitiesWeather(history);

    dispatch(closeOverlay());
    dispatch(setInitialize());
    dispatch(setSidebarData(data[0]));
    dispatch(setCitiesWeatherData(data));
    dispatch(setPrevHistoryLength(history.length));
  }

  function selectCityWeatherHandler(selectedValue: IWeather): void {
    dispatch(setSidebarData(selectedValue));

    if (matches) {
      dispatch(openSidebar());
    }
  }

  function selectAsCurrentLocation(a: IWeather): void {
    const finded = history.find((item) => compareLocations(item, a));
    setCurrentLocation(finded, false);

    if (matches) {
      dispatch(closeSidebar());
    }
  }

  function removeWeatherFromHistory(selectedData: IWeather): void {
    const filteredData = state.citiesWeather.filter(
      (item) => !compareLocations(item, selectedData)
    );

    dispatch(setCitiesWeatherData(filteredData));
    dispatch(setSidebarData(filteredData[0]));
    removeFromHistory(selectedData);

    if (matches) {
      dispatch(closeSidebar());
    }
  }

  return (
    <GridContainer className="cities-page">
      <div className="cities-page__left-part">
        {state.citiesWeather?.map((cityWeather) => (
          <CityWeatherRow
            key={`${cityWeather.lat},${cityWeather.lon}`}
            cityWeather={cityWeather}
            isCurrentLocation={compareLocations(cityWeather, currentLocation)}
            isActiveRow={state.sidebarData === cityWeather}
            onClick={selectCityWeatherHandler}
          />
        ))}
        {!state.citiesWeather &&
          skeletonArray.current.map((_, index) => (
            <CityWeatherRowSkeleton key={index} />
          ))}
        {state.citiesWeather?.length === 0 && (
          <div className="cities-page__empty-list">
            <h2 className="cities-page__heading">Empty List</h2>
            <p className="cities-page__paragraph">Search history is empty</p>
          </div>
        )}
      </div>
      <Overlay 
        open={state.isOverlayOpen}
        zIndex={120}>
        <CircularProgress 
          width={60}
          height={60} />
      </Overlay>
      {state.isInitialized && !state.sidebarData ? null : matches ? (
        <CityWeatherSidebar
          key="temporary"
          className="cities-page__right-part"
          isShown={state.isSidebarShown}
          data={state.sidebarData}
          variant="temporary"
          isCurrentLocationData={compareLocations(state.sidebarData, currentLocation)}
          closeHandler={() => dispatch(closeSidebar())}
          selectHandler={selectAsCurrentLocation}
          removeHandler={removeWeatherFromHistory}
        />
      ) : (
        <CityWeatherSidebar
          key="permanent"
          className="cities-page__right-part"
          data={state.sidebarData}
          variant="permanent"
          isCurrentLocationData={compareLocations(state.sidebarData, currentLocation)}
          selectHandler={selectAsCurrentLocation}
          removeHandler={removeWeatherFromHistory}
        />
      )}
    </GridContainer>
  );
};

export default Cities;
