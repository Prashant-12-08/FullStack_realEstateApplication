import React, { useState } from "react";
import style from "./SearchBox.module.css";

const categories = ["buy", "rent"];

function SearchBox() {
  const [state, setState] = useState({
    category: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  // handling the change categrory
  function handleChangeCategory(category) {
    setState((prev) => ({ ...prev, category }));
  }

  return (
    <div className={style.searchBox}>
      {categories.map((c, i) => (
        <button
          key={i}
          onClick={() => handleChangeCategory(c)}
          className={c == state.category ? style.active : null}
        >
          {c}
        </button>
      ))}
      <form action="#" className={style.form}>
        <input placeholder="City Location" type="text" />
        <input placeholder="Min Price" type="number" min={1} max={10000} />
        <input placeholder="Max Price" type="number" min={1} max={1000} />
        <button>
          <img src="./search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
