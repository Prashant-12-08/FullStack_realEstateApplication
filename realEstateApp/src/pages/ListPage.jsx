import React from "react";
import { useState } from "react";
import style from "./ListPage.module.css";

import Card from "../components/Card";
import Filter from "../components/Filter";
import Map from "../components/Map.jsx";
import data from "../lib/temp.js";

const ListPage = () => {
  return (
    <div className={style.listPage}>
      <div className={style.listContainer}>
        <div className={style.wrapper}>
          <Filter />
          {data.map((el, i) => {
            return <Card item={el} key={i} />;
          })}
        </div>
      </div>
      <div className={style.mapContainer}>
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
