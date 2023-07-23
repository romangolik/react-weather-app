import { SettingsAction, SettingsActionTypes } from "@utils/types/settings";

import { TemperatureEnum } from "@utils/enums/temperature";
import { WindSpeedEnum } from "@utils/enums/wind-speed";
import { PressureEnum } from "@utils/enums/pressure";

export function setTemperatureScale(value: TemperatureEnum): SettingsAction {
  return { type: SettingsActionTypes.CHANGE_TEMPERATURE, payload: value };
}

export function setWindSpeedScale(value: WindSpeedEnum): SettingsAction {
  return { type: SettingsActionTypes.CHANGE_WIND_SPEED, payload: value };
}

export function setPressureScale(value: PressureEnum): SettingsAction {
  return { type: SettingsActionTypes.CHANGE_PRESSURE, payload: value };
}

export function toggleTheme(): SettingsAction {
  return { type: SettingsActionTypes.TOGGLE_THEME };
}

export function toggleTimeFormat(): SettingsAction {
  return { type: SettingsActionTypes.TOGGLE_TIME_FORMAT };
}
