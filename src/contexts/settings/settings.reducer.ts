import { ISettingsData } from "./settings.state";

import { SettingsActions, SettingsActionTypes } from "./settings.actions";

import { TimeFormatsEnum } from "@utils/enums/time-formats";

export function settingsReducer(
  state: ISettingsData,
  action: SettingsActions
): ISettingsData {
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
    case SettingsActionTypes.CHANGE_PRECIPITATION:
      return {
        ...state,
        precipitationScale: action.payload,
      };
    case SettingsActionTypes.CHANGE_DISTANCE:
      return {
        ...state,
        distanceScale: action.payload,
      };
    case SettingsActionTypes.TOGGLE_THEME:
      return {
        ...state,
        darkModeOn: !state.darkModeOn,
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
