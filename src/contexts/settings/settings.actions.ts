import { ActionMap } from "@utils/types/action-map";

import { PressureEnum } from "@utils/enums/pressure";
import { DistanceEnum } from "@utils/enums/distance";
import { WindSpeedEnum } from "@utils/enums/wind-speed";
import { TemperatureEnum } from "@utils/enums/temperature";
import { PrecipitationEnum } from "@utils/enums/precipitation";

export enum SettingsActionTypes {
  CHANGE_TEMPERATURE = "CHANGE_TEMPERATURE",
  CHANGE_WIND_SPEED = "CHANGE_WIND_SPEED",
  CHANGE_PRESSURE = "CHANGE_PRESSURE",
  CHANGE_PRECIPITATION = "CHANGE_PRECIPITATION",
  CHANGE_DISTANCE = "CHANGE_DISTANCE",
  TOGGLE_THEME = "TOGGLE_THEME",
  TOGGLE_TIME_FORMAT = "TOGGLE_TIME_FORMAT",
};

type SettingsPayloads = {
  [SettingsActionTypes.CHANGE_TEMPERATURE]: TemperatureEnum;
  [SettingsActionTypes.CHANGE_WIND_SPEED]: WindSpeedEnum;
  [SettingsActionTypes.CHANGE_PRESSURE]: PressureEnum;
  [SettingsActionTypes.CHANGE_PRECIPITATION]: PrecipitationEnum;
  [SettingsActionTypes.CHANGE_DISTANCE]: DistanceEnum;
  [SettingsActionTypes.TOGGLE_THEME]: null;
  [SettingsActionTypes.TOGGLE_TIME_FORMAT]: null;
};

export type SettingsActions = ActionMap<SettingsPayloads>[keyof ActionMap<SettingsPayloads>];