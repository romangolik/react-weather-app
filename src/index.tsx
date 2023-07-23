import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store";

import { App } from "./App";
import SettingsProvider from "@components/layout/SettingsProvider";
import CurrentLocationProvider from "@components/layout/CurrentLocationProvider";

import "./assets/styles/index.scss";

const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <SettingsProvider>
        <CurrentLocationProvider>
          <App/>
        </CurrentLocationProvider>
      </SettingsProvider>
    </Provider>
  </BrowserRouter>
);