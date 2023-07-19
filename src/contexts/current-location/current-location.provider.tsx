import React, { FC, PropsWithChildren, useEffect, useMemo, useReducer } from "react";

import {
  ICurrentLocationApi,
  ICurrentLocationData,
  CurrentLocationApiContext,
  CurrentLocationDataContext,
} from "./current-location.state";
import { currentLocationReducer } from "./current-location.reducer";

import { ipInfoService } from "@services/ip-info/ip-info.service";
import { geocodingService } from "@services/geocoding/geocoding.service";

import { ILocation } from "@services/geocoding/types/location.interface";

import { LocalStorageKeys } from "@utils/constants/local-storage-keys";
import { CurrentLocationActionTypes } from "./current-location.actions";
import { IWeather } from "@services/weather/types/weather.interface";

async function getCurrentLocation(): Promise<ILocation> {
  const localStorageData = localStorage.getItem(LocalStorageKeys.CURRENT_LOCATION);

  if (localStorageData) {
    return JSON.parse(localStorageData);
  }

  const { loc } = await ipInfoService.getInfoByCurrentIp();
  const [lat, lon] = loc.split(',').map(item => +item);
  const locationData = await geocodingService.getLocationByCoordinates({ lat, lon });

  return locationData;
}

const CurrentLocationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(currentLocationReducer, {} as ICurrentLocationData);

  const API: ICurrentLocationApi = useMemo(() => ({
    setCurrentLocation: (value: ILocation, updateHistory = true) => {
      dispatch({
        type: CurrentLocationActionTypes.CHANGE_LOCATION,
        payload: value,
      });

      if (updateHistory) {
        dispatch({
          type: CurrentLocationActionTypes.ADD_TO_HISTORY,
          payload: value,
        });
      }
    },
    removeFromHistory: (value: ILocation | IWeather) => {
      dispatch({
        type: CurrentLocationActionTypes.REMOVE_FROM_HISTORY,
        payload: value,
      });
    }
  }), []);

  async function fetchData(): Promise<void> {
    const data = await getCurrentLocation();
    dispatch({
      type: CurrentLocationActionTypes.INIT_CURRENT_LOCATION,
      payload: data,
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (state.currentLocation) {
      localStorage.setItem(LocalStorageKeys.SEARCH_HISTORY, JSON.stringify(state.history));
      localStorage.setItem(LocalStorageKeys.CURRENT_LOCATION, JSON.stringify(state.currentLocation));
    }
  }, [state]);

  return (
    <CurrentLocationDataContext.Provider value={state}>
      <CurrentLocationApiContext.Provider value={API}>
        {children}
      </CurrentLocationApiContext.Provider>
    </CurrentLocationDataContext.Provider>
  );
};

export default CurrentLocationProvider;
