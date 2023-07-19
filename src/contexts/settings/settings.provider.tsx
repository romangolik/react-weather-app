import React, { FC, PropsWithChildren, useEffect, useLayoutEffect, useMemo, useReducer } from "react";

import {
  ISettingsApi,
  ISettingsData,
  SettingsApiContext,
  SettingsDataContext,
} from "./settings.state";
import { settingsReducer } from "./settings.reducer";
import { SettingsActionTypes } from "./settings.actions";

import { DistanceEnum } from "@utils/enums/distance";
import { PressureEnum } from "@utils/enums/pressure";
import { WindSpeedEnum } from "@utils/enums/wind-speed";
import { TemperatureEnum } from "@utils/enums/temperature";
import { TimeFormatsEnum } from "@utils/enums/time-formats";
import { LocalStorageKeys } from "@src/utils/constants/local-storage-keys";
import { PrecipitationEnum } from "@utils/enums/precipitation";

const initialState: ISettingsData = {
  temperatureScale: TemperatureEnum.CELSIUS,
  windSpeedScale: WindSpeedEnum.KMH,
  pressureScale: PressureEnum.HPA,
  precipitationScale: PrecipitationEnum.MILIMETERS,
  distanceScale: DistanceEnum.KILOMETERS,
  darkModeOn: true,
  timeFormat: TimeFormatsEnum.H12,
};

function initState(): ISettingsData {
  const localStorageData = localStorage.getItem(LocalStorageKeys.SETTINGS);

  if (localStorageData) {
    return JSON.parse(localStorageData);
  }

  return initialState;
}

const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState, initState);

  const API: ISettingsApi = useMemo(() => ({
    setTemperatureScale: (value: TemperatureEnum) => {
      dispatch({type: SettingsActionTypes.CHANGE_TEMPERATURE, payload: value});
    },
    setWindSpeedScale: (value: WindSpeedEnum) => {
      dispatch({type: SettingsActionTypes.CHANGE_WIND_SPEED, payload: value});
    },
    setPressureScale: (value: PressureEnum) => {
      dispatch({type: SettingsActionTypes.CHANGE_PRESSURE, payload: value});
    },
    setPrecipitationScale: (value: PrecipitationEnum) => {
      dispatch({type: SettingsActionTypes.CHANGE_PRECIPITATION, payload: value});
    },
    setDistanceScale: (value: DistanceEnum) => {
      dispatch({type: SettingsActionTypes.CHANGE_DISTANCE, payload: value});
    },
    toggleTheme: () => {
      dispatch({ type: SettingsActionTypes.TOGGLE_THEME });
    },
    toggleTimeFormat: () => {
      dispatch({ type: SettingsActionTypes.TOGGLE_TIME_FORMAT });
    },
  }), []);

  useLayoutEffect(() => {
    document.body.className = state.darkModeOn ? "dark-theme" : "light-theme";
  }, [state.darkModeOn]);

  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.SETTINGS, JSON.stringify(state));
  }, [state]);

  return (
    <SettingsDataContext.Provider value={state}>
      <SettingsApiContext.Provider value={API}>
        {children}
      </SettingsApiContext.Provider>
    </SettingsDataContext.Provider>
  );
};

export default SettingsProvider;
