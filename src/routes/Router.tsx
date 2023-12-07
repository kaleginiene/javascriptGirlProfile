import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { RouteNames } from "./routes";

import Profile from "../pages/Profile/Profile";
import ThreeDWorld from "../pages/ThreeDWorld/ThreeDWorld";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.home} element={<ThreeDWorld />} />
        <Route path={RouteNames.profile} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
