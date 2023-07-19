import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import SettingsProvider from "./contexts/settings";
import CurrentLocationProvider from "@contexts/current-location";

import "./assets/styles/index.scss";

const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <SettingsProvider>
      <CurrentLocationProvider>
        <App/>
      </CurrentLocationProvider>
    </SettingsProvider>
  </BrowserRouter>
);