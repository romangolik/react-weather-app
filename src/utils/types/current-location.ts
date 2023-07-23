import { IWeather } from "@services/weather/types/weather.interface";
import { ILocation } from "@services/geocoding/types/location.interface";

export interface CurrentLocationState {
  currentLocation: ILocation;
  history: ILocation[];
}

export enum CurrentLocationActionTypes {
  ADD_TO_HISTORY = "ADD_TO_HISTORY",
  REMOVE_FROM_HISTORY = "REMOVE_FROM_HISTORY",
  CHANGE_LOCATION = "CHANGE_LOCATION",
  INIT_CURRENT_LOCATION = "INIT_CURRENT_LOCATION",
}

interface AddLocationToHistoryAction {
  type: CurrentLocationActionTypes.ADD_TO_HISTORY;
  payload: ILocation;
}

interface RemoveLocationFromHistoryAction {
  type: CurrentLocationActionTypes.REMOVE_FROM_HISTORY;
  payload: ILocation | IWeather;
}

interface ChangeLocationAction {
  type: CurrentLocationActionTypes.CHANGE_LOCATION;
  payload: ILocation;
}

interface InitCurrentLocationAction {
  type: CurrentLocationActionTypes.INIT_CURRENT_LOCATION;
  payload: ILocation;
}

export type CurrentLocationAction = 
  ChangeLocationAction | 
  InitCurrentLocationAction |
  AddLocationToHistoryAction | 
  RemoveLocationFromHistoryAction;