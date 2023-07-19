import { ActionMap } from "@utils/types/action-map";
import { ILocation } from "@services/geocoding/types/location.interface"
import { IWeather } from "@services/weather/types/weather.interface";

export enum CurrentLocationActionTypes {
  ADD_TO_HISTORY = "ADD_TO_HISTORY",
  REMOVE_FROM_HISTORY = "REMOVE_FROM_HISTORY",
  CHANGE_LOCATION = "CHANGE_LOCATION",
  INIT_CURRENT_LOCATION = "INIT_CURRENT_LOCATION",
}

type CurrentLocationPayloads = {
  [CurrentLocationActionTypes.CHANGE_LOCATION]: ILocation,
  [CurrentLocationActionTypes.ADD_TO_HISTORY]: ILocation,
  [CurrentLocationActionTypes.REMOVE_FROM_HISTORY]: ILocation | IWeather,
  [CurrentLocationActionTypes.INIT_CURRENT_LOCATION]: ILocation,
}

export type CurrentLocationActions = ActionMap<CurrentLocationPayloads>[keyof ActionMap<CurrentLocationPayloads>];