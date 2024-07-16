import React from 'react';

import { singlePostData, userData } from '../lib/temp';
import style from './Details.module.css';
import ImgSlider from './ImgSlider';

function Details({ postDetails }) {
  const { userId: user } = postDetails;

  // defining the path of image
  const newImages = postDetails.images.map((img, index) => {
    const path = img.split('public')[1];
    return path;
  });

  console.log(postDetails.images);
  return (
    <div className={style.details}>
      <div className={style.wrapper}>
        <div className={style.top}>
          <ImgSlider images={newImages} />
          <div className={style.info}>
            <div className={style.desc}>
              <h1>{postDetails.title}</h1>
              <div className={style.address}>
                <img src="/pin.png" alt="" />
                <span>{postDetails.address}</span>
              </div>
              <p className={style.price}>
                <span>$</span>
                {postDetails.price}
              </p>
            </div>
            <div className={style.user}>
              <img
                className={style.userImg}
                src={`/default/${user.avatar}`}
                alt="avatar"
              />
              <p>{user.name}</p>
            </div>
          </div>
        </div>
        <div className={style.bottom}>{postDetails.description}</div>
      </div>
    </div>
  );
}

export default Details;
