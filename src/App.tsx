import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";

import ThreeDWorld from "./pages/ThreeDWorld/ThreeDWorld";
import { RouteNames } from "./routes/routes";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={RouteNames.home} element={<ThreeDWorld />} />
        <Route path="/about" element={<h1>hwllo</h1>} />
      </Routes>
    </Router>
  );
};
