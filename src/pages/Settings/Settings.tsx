import React, { FC } from "react";

import {
  useSettingsApi,
  useSettingsData,
} from "@src/contexts/settings/settings.state";

import Switch from "@components/ui/Switch";
import Widget from "@components/layout/Widget";
import ToggleGroup from "@components/ui/ToggleGroup";
import ContentBlock from "@components/layout/ContentBlock";
import GridContainer from "@components/layout/GridContainer";

import {
  DISTANCE_TITLES, 
  PRESSURE_TITLES, 
  WIND_SPEED_TITLES,
  TEMPERATURE_TITLES, 
  PRECIPITATION_TITLES, 
} from "@utils/constants/units-titles";
import { TimeFormatsEnum } from "@src/utils/enums/time-formats";

import "./Settings.scss";

function getToggleButtons(obj: Object) {
  return Object.entries(obj).map(([key, value]) => (
    <ToggleGroup.Button key={key} value={key}>{value}</ToggleGroup.Button>
  ));
}

const Settings: FC = () => {
  const { 
    distanceScale, 
    pressureScale, 
    windSpeedScale, 
    temperatureScale, 
    precipitationScale,
    darkModeOn, 
    timeFormat,
  } = useSettingsData();
  const {
    toggleTheme, 
    toggleTimeFormat,
    setDistanceScale,
    setPressureScale,
    setWindSpeedScale,
    setTemperatureScale,
    setPrecipitationScale,
  } = useSettingsApi();

  return (
    <GridContainer className="settings-page">
      <div className="settings-page__container">
        <h2 className="medium-text settings-page__heading">Units</h2>
        <ContentBlock as="section" className="settings-page__section">
          <Widget className="settings-page__widget">
            <Widget.Header>
              <Widget.Title>Temperature</Widget.Title>
            </Widget.Header>
            <Widget.Content>
              <ToggleGroup value={temperatureScale} onChange={setTemperatureScale}>
                {getToggleButtons(TEMPERATURE_TITLES)}
              </ToggleGroup>
            </Widget.Content>
          </Widget>
          <Widget className="settings-page__widget">
            <Widget.Header>
              <Widget.Title>Wind speed</Widget.Title>
            </Widget.Header>
            <Widget.Content>
              <ToggleGroup value={windSpeedScale} onChange={setWindSpeedScale}>
                {getToggleButtons(WIND_SPEED_TITLES)}
              </ToggleGroup>
            </Widget.Content>
          </Widget>
          <Widget className="settings-page__widget">
            <Widget.Header>
              <Widget.Title>Pressure</Widget.Title>
            </Widget.Header>
            <Widget.Content>
              <ToggleGroup value={pressureScale} onChange={setPressureScale}>
                {getToggleButtons(PRESSURE_TITLES)}
              </ToggleGroup>
            </Widget.Content>
          </Widget>
          {/* <Widget className="settings-page__widget">
            <Widget.Header>
              <Widget.Title>Precipitation</Widget.Title>
            </Widget.Header>
            <Widget.Content>
              <ToggleGroup value={precipitationScale} onChange={setPrecipitationScale}>
                {getToggleButtons(PRECIPITATION_TITLES)}
              </ToggleGroup>
            </Widget.Content>
          </Widget>
          <Widget className="settings-page__widget">
            <Widget.Header>
              <Widget.Title>Distance</Widget.Title>
            </Widget.Header>
            <Widget.Content>
              <ToggleGroup value={distanceScale} onChange={setDistanceScale}>
                {getToggleButtons(DISTANCE_TITLES)}
              </ToggleGroup>
            </Widget.Content>
          </Widget> */}
        </ContentBlock>
        <h2 className="medium-text settings-page__heading">General</h2>
        <ContentBlock as="section" className="settings-page__section">
          <div className="switch-setting">
            <div className="switch-setting__header">
              <p className="bold-weight switch-setting__heading">
                12-Hour-Time
              </p>
              <Switch checked={timeFormat === TimeFormatsEnum.H12} onChange={toggleTimeFormat} />
            </div>
            <p className="switch-setting__paragraph">Switch time format: 12H, 24H</p>
          </div>
          <hr className="settings-page__divider" />
          <div className="switch-setting">
            <div className="switch-setting__header">
              <p className="bold-weight switch-setting__heading">Dark mode</p>
              <Switch checked={darkModeOn} onChange={toggleTheme} />
            </div>
            <p className="switch-setting__paragraph">Switch theme</p>
          </div>
        </ContentBlock>
      </div>
    </GridContainer>
  );
};

export default Settings;
