import React from "react";
import { Marker, Popup } from "react-leaflet";
import style from "./MapMarker.module.css";
import { Link } from "react-router-dom";

function MapMarker({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <Link to={`${item.id}`}>
          <div className={style.popup_content}>
            <img src={`${item.img}`} alt="" />
            <div className={style.content}>
              <h3>{item.title}</h3>
              <p>{item.bedRooms} Bedrooms</p>
              <p>
                <span>$</span>
                {item.price}
              </p>
            </div>
          </div>
        </Link>
      </Popup>
    </Marker>
  );
}

export default MapMarker;
