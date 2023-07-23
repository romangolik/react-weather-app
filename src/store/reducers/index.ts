import { combineReducers } from "redux";

import { settingsReducer } from "./settingsReducer";
import { currentLocationReducer } from "./currentLocationReducer";

export const rootReducer = combineReducers({
  settings: settingsReducer,
  currentLocation: currentLocationReducer
})