import React from "react";
import style from "./DetailPage.module.css";

import Details from "../components/Details";
import DetailPageFetures from "../components/DetailPageFetures";

function DetailPage() {
  return (
    <div className={style.detailPage}>
      <Details />
      <DetailPageFetures />
    </div>
  );
}

export default DetailPage;
