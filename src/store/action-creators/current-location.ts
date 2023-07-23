import { IWeather } from "@services/weather/types/weather.interface";
import { ILocation } from "@services/geocoding/types/location.interface";
import {
  CurrentLocationAction,
  CurrentLocationActionTypes,
} from "@utils/types/current-location";

export function setCurrentLocation(value: ILocation): CurrentLocationAction {
  return { type: CurrentLocationActionTypes.CHANGE_LOCATION, payload: value };
}

export function addLocationToHistory(value: ILocation): CurrentLocationAction {
  return { type: CurrentLocationActionTypes.ADD_TO_HISTORY, payload: value };
}

export function removeLocationFromHistory(
  value: ILocation | IWeather
): CurrentLocationAction {
  return {
    type: CurrentLocationActionTypes.REMOVE_FROM_HISTORY,
    payload: value,
  };
}

export function initCurrentLocation(value: ILocation): CurrentLocationAction {
  return { type: CurrentLocationActionTypes.INIT_CURRENT_LOCATION, payload: value };
}
