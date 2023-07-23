import { ICitiesState } from "../types/cities-state";

import {
  CitiesStateActions,
  CitiesStateActionTypes,
} from "./cities-state.actions";

export function citiesStateReducer(
  state: ICitiesState,
  action: CitiesStateActions
): ICitiesState {
  switch (action.type) {
    case CitiesStateActionTypes.INITIALIZE_DATA:
      return {
        ...state,
        isInitialized: true,
      };
    case CitiesStateActionTypes.SET_SIDEBAR_DATA:
      return {
        ...state,
        sidebarData: action.payload,
      };
    case CitiesStateActionTypes.OPEN_SIDEBAR:
      return {
        ...state,
        isSidebarShown: true,
      };
    case CitiesStateActionTypes.CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarShown: false,
      };
    case CitiesStateActionTypes.OPEN_OVERLAY:
      return {
        ...state,
        isOverlayOpen: true,
      };
    case CitiesStateActionTypes.CLOSE_OVERLAY:
      return {
        ...state,
        isOverlayOpen: false,
      };
    case CitiesStateActionTypes.SET_CITIES_WEATHER_DATA:
      return {
        ...state,
        citiesWeather: action.payload,
      };
    case CitiesStateActionTypes.SET_PREV_HISTORY_LENGTH:
      return {
        ...state,
        prevHistoryLength: action.payload,
      };
    default:
      return state;
  }
}
