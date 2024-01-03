import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import { IslandRotationContextProvider } from "src/contexts/IslandRotationContextProvider";
import Profile from "src/pages/Profile/Profile";
import ThreeDWorld from "src/pages/ThreeDWorld/ThreeDWorld";

import { RouteNames } from "./routeNames";

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RouteNames.home} element={<Profile />} />
        <Route
          path={RouteNames.threeD}
          element={
            <IslandRotationContextProvider>
              <ThreeDWorld />
            </IslandRotationContextProvider>
          }
        />
      </Routes>
    </HashRouter>
  );
};
