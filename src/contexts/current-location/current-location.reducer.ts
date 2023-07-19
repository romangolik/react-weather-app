import { ILocation } from "@services/geocoding/types/location.interface";
import { ICurrentLocationData } from "./current-location.state";

import { compareLocations } from "@utils/helpers/compare-locations";

import { LocalStorageKeys } from "@utils/constants/local-storage-keys";
import {
  CurrentLocationActions,
  CurrentLocationActionTypes,
} from "./current-location.actions";
import { IWeather } from "@services/weather/types/weather.interface";

function addToHistory(array: ILocation[], location: ILocation) {
  if (array?.length === 0) {
    return [location];
  }

  const filteredData = array.filter(
    (item) => !compareLocations(item, location)
  );

  if (filteredData.length < array.length) {
    return [location, ...filteredData];
  }

  return [location, ...array.slice(0, 5)];
}

function removeFromHistory(array: ILocation[], data: ILocation | IWeather) {
  return array.filter((item) => !compareLocations(item, data));
}

export function currentLocationReducer(
  state: ICurrentLocationData,
  action: CurrentLocationActions
): ICurrentLocationData {
  switch (action.type) {
    case CurrentLocationActionTypes.INIT_CURRENT_LOCATION:
      return {
        ...state,
        history:
          JSON.parse(localStorage.getItem(LocalStorageKeys.SEARCH_HISTORY)) ??
          [],
        currentLocation: action.payload,
      };
    case CurrentLocationActionTypes.CHANGE_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    case CurrentLocationActionTypes.ADD_TO_HISTORY:
      return {
        ...state,
        history: addToHistory(state.history, action.payload),
      };
    case CurrentLocationActionTypes.REMOVE_FROM_HISTORY:
      return {
        ...state,
        history: removeFromHistory(state.history, action.payload),
      };
    default:
      return state;
  }
}
