import React from "react";
import style from "./FeatureBox.module.css";

function FetureBox({ img = "", title = "", desc = "", fontSize = "" }) {
  console.log(fontSize);
  return (
    <div className={style.featureBox}>
      <img src={`${img}`} alt="" />
      <div className={style.content}>
        <span>{title}</span>
        <p style={{ fontSize: fontSize }}>{desc}</p>
      </div>
    </div>
  );
}

export default FetureBox;
