import React from "react";
import AppNavBar from "../components/AppNavBar";
import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";
import style from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div>
      <div className={style.app}>
        <div className={style.navbar}>
          <AppNavBar />
        </div>
        <div className={style.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
