import React from "react";
import style from "./Filter.module.css";

function Filter() {
  return (
    <div className={style.filter}>
      <h1>
        Search results for <b>India</b>
      </h1>
      <div className={style.top}>
        <div className={style.item}>
          <label htmlFor="city">Location</label>
          <input type="text" id="city" name="city" placeholder="cityLocation" />
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.item}>
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className={style.item}>
          <label htmlFor="property">Property</label>
          <select name="propery" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className={style.item}>
          <label htmlFor="minPrice">Min Price</label>
          <input
            min={0}
            max={10000000}
            type="number"
            name="minPrice"
            id="minPrice"
            placeholder="any"
          />
        </div>
        <div className={style.item}>
          <label htmlFor="city">Location</label>
          <input type="text" id="city" name="city" placeholder="cityLocation" />
        </div>
        <div className={style.item}>
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>
        <button>
          <img src="./search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
