import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { RouteNames } from "./routeNames";

import Profile from "../pages/Profile/Profile";
import ThreeDWorld from "../pages/ThreeDWorld/ThreeDWorld";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.home} element={<Profile />} />
        <Route path={RouteNames.threeD} element={<ThreeDWorld />} />
      </Routes>
    </BrowserRouter>
  );
};
