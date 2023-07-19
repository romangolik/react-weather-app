import React, { FC } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "@pages/Home"
import Cities from "@pages/Cities"
import Settings from "@pages/Settings"

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/home/*" element={<Home/>}>
        <Route index={false} path="more-conditions" element={<Home/>}></Route>
      </Route>
      <Route path="/cities" element={<Cities/>}></Route>
      <Route path="/settings" element={<Settings/>}></Route>
      <Route path="*" element={<Navigate to="/home"/>}></Route>
    </Routes>
  )
}

export default AppRouter