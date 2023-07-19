import { IWeather } from "@services/weather/types/weather.interface";
import { ActionMap } from "@utils/types/action-map";

export enum CitiesStateActionTypes {
  INITIALIZE_DATA = "INITIALIZE_DATA",
  OPEN_SIDEBAR = "OPEN_SIDEBAR",
  CLOSE_SIDEBAR = "CLOSE_SIDEBAR",
  SET_SIDEBAR_DATA = "SET_SIDEBAR_DATA",
  SET_CITIES_WEATHER_DATA = "SET_CITIES_WEATHER_DATA",
  SET_PREV_HISTORY_LENGTH = "SET_PREV_HISTORY_LENGTH",
};

type CitiesStatePayloads = {
  [CitiesStateActionTypes.INITIALIZE_DATA]: null;
  [CitiesStateActionTypes.OPEN_SIDEBAR]: null;
  [CitiesStateActionTypes.CLOSE_SIDEBAR]: null;
  [CitiesStateActionTypes.SET_SIDEBAR_DATA]: IWeather;
  [CitiesStateActionTypes.SET_CITIES_WEATHER_DATA]: IWeather[];
  [CitiesStateActionTypes.SET_PREV_HISTORY_LENGTH]: number;
};

export type CitiesStateActions = ActionMap<CitiesStatePayloads>[keyof ActionMap<CitiesStatePayloads>];

export const openSidebar = (): CitiesStateActions => ({
  type: CitiesStateActionTypes.OPEN_SIDEBAR
});

export const closeSidebar = (): CitiesStateActions => ({
  type: CitiesStateActionTypes.CLOSE_SIDEBAR,
});

export const setSidebarData = (data: IWeather): CitiesStateActions => ({
  type: CitiesStateActionTypes.SET_SIDEBAR_DATA,
  payload: data,
});

export const setInitialize = (): CitiesStateActions => ({
  type: CitiesStateActionTypes.INITIALIZE_DATA,
});

export const setCitiesWeatherData = (data: IWeather[]): CitiesStateActions => ({
  type: CitiesStateActionTypes.SET_CITIES_WEATHER_DATA,
  payload: data,
});

export const setPrevHistoryLength = (data: number): CitiesStateActions => ({
  type: CitiesStateActionTypes.SET_PREV_HISTORY_LENGTH,
  payload: data,
});