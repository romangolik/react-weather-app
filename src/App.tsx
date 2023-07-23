import React, { FC, useEffect } from "react";

import AppRouter from "@routes/AppRouter";
import Sidebar from "@components/layout/Sidebar";
import SearchInput from "@components/shared/SearchInput";
import GridContainer from "@components/layout/GridContainer";

import "./App.scss";

export const App: FC = () => {
  return (
    <>
      <Sidebar />
      <main className="app">
        <GridContainer className="search-input-container">
          <SearchInput />
        </GridContainer>
        <AppRouter />
      </main>
    </>
  );
};
