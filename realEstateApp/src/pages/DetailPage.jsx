import React from "react";
import style from "./DetailPage.module.css";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { houseId } = useParams();
  return (
    <div className={style.detailPage}>
      <div className={style.details}></div>
      <div className={style.fetures}></div>
    </div>
  );
}

export default DetailPage;
