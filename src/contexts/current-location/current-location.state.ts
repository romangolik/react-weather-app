import { createContext, useContext } from "react";

import { ILocation } from "@services/geocoding/types/location.interface";
import { IWeather } from "@services/weather/types/weather.interface";

export interface ICurrentLocationData {
  currentLocation: ILocation;
  history: ILocation[];
}

export interface ICurrentLocationApi {
  setCurrentLocation: (value: ILocation, updateHistory?: boolean) => void
  removeFromHistory: (value: ILocation | IWeather) => void
}

export const CurrentLocationApiContext = createContext<ICurrentLocationApi>(null);
export const CurrentLocationDataContext = createContext<ICurrentLocationData>(null);

export function useCurrentLocationData() {
  const context = useContext(CurrentLocationDataContext);
  if (!context) {
    throw new Error(
      "useCurrentLocationData must be used within an CurrentLocationDataContext"
    );
  }
  return context;
}

export function useCurrentLocationApi() {
  const context = useContext(CurrentLocationApiContext);
  if (!context) {
    throw new Error(
      "useCurrentLocationApi must be used within an CurrentLocationApiContext"
    );
  }
  return context;
}