import * as SettingsActionCreators from "./settings";
import * as CurrentLocationActionCreators from "./current-location";

export default {
  ...SettingsActionCreators,
  ...CurrentLocationActionCreators
}