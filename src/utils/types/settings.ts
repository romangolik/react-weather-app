import { PressureEnum } from "@utils/enums/pressure";
import { WindSpeedEnum } from "@utils/enums/wind-speed";
import { TemperatureEnum } from "@utils/enums/temperature";
import { TimeFormatsEnum } from "@utils/enums/time-formats";

export interface ISettingsState {
  temperatureScale: TemperatureEnum;
  windSpeedScale: WindSpeedEnum;
  pressureScale: PressureEnum;
  isDarkModeEnabled: boolean;
  timeFormat: TimeFormatsEnum;
}

export enum SettingsActionTypes {
  CHANGE_TEMPERATURE = "CHANGE_TEMPERATURE",
  CHANGE_WIND_SPEED = "CHANGE_WIND_SPEED",
  CHANGE_PRESSURE = "CHANGE_PRESSURE",
  TOGGLE_THEME = "TOGGLE_THEME",
  TOGGLE_TIME_FORMAT = "TOGGLE_TIME_FORMAT",
};

interface ChangeTemperatureAction {
  type: SettingsActionTypes.CHANGE_TEMPERATURE;
  payload: TemperatureEnum;
}

interface ChangeWindSpeedAction {
  type: SettingsActionTypes.CHANGE_WIND_SPEED;
  payload: WindSpeedEnum;
}

interface ChangePressureAction {
  type: SettingsActionTypes.CHANGE_PRESSURE;
  payload: PressureEnum;
}

interface ToggleThemeAction {
  type: SettingsActionTypes.TOGGLE_THEME;
}

interface ToggleTimeFormatAction {
  type: SettingsActionTypes.TOGGLE_TIME_FORMAT;
}

export type SettingsAction = 
  ToggleThemeAction | 
  ChangePressureAction | 
  ChangeWindSpeedAction | 
  ToggleTimeFormatAction |
  ChangeTemperatureAction;