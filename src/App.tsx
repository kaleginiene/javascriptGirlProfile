import React from "react";
import "./index.css";
import { Router } from "./routes/Router";

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
};
