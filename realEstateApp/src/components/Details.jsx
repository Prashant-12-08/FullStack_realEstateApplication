import React from "react";

import { singlePostData, userData } from "../lib/temp";
import style from "./Details.module.css";
import ImgSlider from "./ImgSlider";

function Details() {
  return (
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
  );
}

export default Details;
