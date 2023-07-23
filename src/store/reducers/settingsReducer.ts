import {
  ISettingsState,
  SettingsAction,
  SettingsActionTypes,
} from "@utils/types/settings";

import { PressureEnum } from "@utils/enums/pressure";
import { WindSpeedEnum } from "@utils/enums/wind-speed";
import { TemperatureEnum } from "@utils/enums/temperature";
import { TimeFormatsEnum } from "@utils/enums/time-formats";
import { LocalStorageKeys } from "@utils/constants/local-storage-keys";

function getInitialState(): ISettingsState {
  const localStorageData = localStorage.getItem(LocalStorageKeys.SETTINGS);

  if (localStorageData) {
    return JSON.parse(localStorageData);
  }

  return {
    temperatureScale: TemperatureEnum.CELSIUS,
    windSpeedScale: WindSpeedEnum.KMH,
    pressureScale: PressureEnum.HPA,
    isDarkModeEnabled: true,
    timeFormat: TimeFormatsEnum.H12,
  };
}

const initialState = getInitialState();

export function settingsReducer(
  state = initialState,
  action: SettingsAction
): ISettingsState {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_TEMPERATURE:
      return {
        ...state,
        temperatureScale: action.payload,
      };
    case SettingsActionTypes.CHANGE_WIND_SPEED:
      return {
        ...state,
        windSpeedScale: action.payload,
      };
    case SettingsActionTypes.CHANGE_PRESSURE:
      return {
        ...state,
        pressureScale: action.payload,
      };
    case SettingsActionTypes.TOGGLE_THEME:
      return {
        ...state,
        isDarkModeEnabled: !state.isDarkModeEnabled,
      };
    case SettingsActionTypes.TOGGLE_TIME_FORMAT:
      return {
        ...state,
        timeFormat:
          state.timeFormat === TimeFormatsEnum.H12
            ? TimeFormatsEnum.H24
            : TimeFormatsEnum.H12,
      };
    default:
      return state;
  }
}
