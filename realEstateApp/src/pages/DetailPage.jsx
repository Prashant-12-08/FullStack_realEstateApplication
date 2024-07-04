import React from "react";
import style from "./DetailPage.module.css";
import { useParams } from "react-router-dom";

import ImgSlider from "../components/ImgSlider";
import { singlePostData, userData } from "../lib/temp";

function DetailPage() {
  const { houseId } = useParams();
  return (
    <div className={style.detailPage}>
      <div className={style.details}>
        <div className={style.wrapper}>
          <div className={style.top}>
            <ImgSlider images={singlePostData.images} />
            <div className={style.info}>
              <div className={style.desc}>
                <h1>{singlePostData.title}</h1>
                <div className={style.address}>
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <p className={style.price}>
                  <span>$</span>
                  {singlePostData.price}
                </p>
              </div>
              <div className={style.user}>
                <img
                  className={style.userImg}
                  src={`${userData.img}`}
                  alt="avatar"
                />
                <p>{userData.name}</p>
              </div>
            </div>
          </div>
          <div className={style.bottom}>{singlePostData.description}</div>
        </div>
      </div>
      <div className={style.fetures}>
        <div className={style.wrapper}></div>
      </div>
    </div>
  );
}

export default DetailPage;
