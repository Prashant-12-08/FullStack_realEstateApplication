import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <div className={style.card}>
      <Link to={`/${item._id}`} className={style.imgContainer}>
        <img src={`${item.img}`} />
      </Link>
      <div className={style.textContainer}>
        <h2 className={style.title}>{item.title}</h2>
        <div className={style.address}>
          <img src="./pin.png" alt="" />
          <p>{item.address}</p>
        </div>
        <p className={style.price}>
          <span>$</span>
          {item.price}
        </p>
        <div className={style.bottom}>
          <div className={style.features}>
            <div className={style.feature}>
              <img src="./bed.png" alt="" />
              <span>{item.bedRooms} Bedrooms</span>
            </div>
            <div className={style.feature}>
              <img src="./bath.png" alt="" />
              <span>{item.bathRooms} Bathrooms</span>
            </div>
          </div>
          <div className={style.icons}>
            <div className={style.icon}>
              <img src="./save.png" alt="" />
            </div>
            <div className={style.icon}>
              <img src="./chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
