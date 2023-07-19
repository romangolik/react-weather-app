import { createContext, useContext } from "react";

import { DistanceEnum } from "@utils/enums/distance";
import { PressureEnum } from "@utils/enums/pressure";
import { WindSpeedEnum } from "@utils/enums/wind-speed";
import { TemperatureEnum } from "@utils/enums/temperature";
import { TimeFormatsEnum } from "@utils/enums/time-formats";
import { PrecipitationEnum } from "@utils/enums/precipitation";

export interface ISettingsData {
  temperatureScale: TemperatureEnum;
  windSpeedScale: WindSpeedEnum;
  pressureScale: PressureEnum;
  precipitationScale: PrecipitationEnum;
  distanceScale: DistanceEnum;
  darkModeOn: boolean;
  timeFormat: TimeFormatsEnum;
}

export interface ISettingsApi {
  setTemperatureScale: (value: TemperatureEnum) => void;
  setWindSpeedScale: (value: WindSpeedEnum) => void;
  setPressureScale: (value: PressureEnum) => void;
  setPrecipitationScale: (value: PrecipitationEnum) => void;
  setDistanceScale: (value: DistanceEnum) => void;
  toggleTheme: () => void;
  toggleTimeFormat: () => void;
}

export const SettingsApiContext = createContext<ISettingsApi>(null);
export const SettingsDataContext = createContext<ISettingsData>(null);

export function useSettingsData() {
  const context = useContext(SettingsDataContext);
  if (!context) {
    throw new Error(
      "useSettingsData must be used within an SettingsDataContext"
    );
  }
  return context;
}

export function useSettingsApi() {
  const context = useContext(SettingsApiContext);
  if (!context) {
    throw new Error(
      "useSettingsApi must be used within an SettingsApiContext"
    );
  }
  return context;
}
