import React from "react";
import style from "./StatBox.module.css";

function StatBox({ data, message }) {
  return (
    <div className={style.box}>
      <h1>
        <strong>{data}</strong>
      </h1>
      <h2>{message}</h2>
    </div>
  );
}

export default StatBox;
