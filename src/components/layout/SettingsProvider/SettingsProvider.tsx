import React, { FC, PropsWithChildren, useEffect, useLayoutEffect } from "react";

import { useTypedSelector } from "@hooks/useTypedSelector";

import { getSettings } from "@src/store/selectors/getSettings";

import { LocalStorageKeys } from "@utils/constants/local-storage-keys";

const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const settings = useTypedSelector(getSettings);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", settings.isDarkModeEnabled ? "dark" : "light");
  }, [settings.isDarkModeEnabled]);

  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  return (
    <>{children}</>
  )
}

export default SettingsProvider;