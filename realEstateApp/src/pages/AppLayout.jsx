import React from "react";
import AppNavBar from "../components/AppNavBar";
import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <div className="app">
        <div className="navbar">
          <AppNavBar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
