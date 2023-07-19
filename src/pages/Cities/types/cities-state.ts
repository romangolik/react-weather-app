import { IWeather } from "@services/weather/types/weather.interface";

export interface ICitiesState {
  isInitialized: boolean;
  isSidebarShown: boolean;
  sidebarData: IWeather;
  citiesWeather: IWeather[];
  prevHistoryLength: number;
}