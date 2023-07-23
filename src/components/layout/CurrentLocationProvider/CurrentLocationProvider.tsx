import React, { FC, PropsWithChildren, useEffect } from "react";

import { useActions } from "@hooks/useActions";
import { useTypedSelector } from "@hooks/useTypedSelector";

import { ipInfoService } from "@services/ip-info/ip-info.service";
import { geocodingService } from "@services/geocoding/geocoding.service";

import { getCurrentLocation } from "@store/selectors/getCurrentLocation";

import { ILocation } from "@services/geocoding/types/location.interface";

import { LocalStorageKeys } from "@utils/constants/local-storage-keys";

async function fetchCurrentLocation(): Promise<ILocation> {
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
  const state = useTypedSelector(getCurrentLocation);
  const { initCurrentLocation } = useActions();

  async function fetchData(): Promise<void> {
    const data = await fetchCurrentLocation();
    initCurrentLocation(data);
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
    <>{children}</>
  )
};

export default CurrentLocationProvider;