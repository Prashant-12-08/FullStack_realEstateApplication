import React, { useReducer } from 'react';
import style from './SearchBox.module.css';
import { useNavigate } from 'react-router-dom';

const categories = ['buy', 'rent'];

const reducer = function (state, action) {
  switch (action.type) {
    case 'minPrice':
      return { ...state, minPrice: action.payload };
    case 'maxPrice':
      return {
        ...state,
        maxPrice: action.payload,
      };
    case 'type':
      return {
        ...state,
        type: state.type === 'buy' ? 'rent' : 'buy',
      };
    case 'city':
      return {
        ...state,
        city: action.payload,
      };
    default:
      return 'Not an action';
  }
};
function SearchBox() {
  const [state, dispatch] = useReducer(reducer, {
    minPrice: null,
    maxPrice: null,
    type: 'buy',
    city: '',
  });
  const navigate = useNavigate();

  // handling the change categrory

  // handle submit event
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    let query = '';
    console.log(state);
    query += `type=${state.type}`;
    state.minPrice !== null ? (query += `&price[gte]=${state.minPrice}`) : null;
    state.maxPrice !== null ? (query += `&price[lte]=${state.maxPrice}`) : null;
    !state.city ? null : (query += `&city=${state.city}`);
    navigate(`/listPage?${query}`);
  };

  return (
    <div className={style.searchBox}>
      {categories.map((c, i) => (
        <button
          key={i}
          onClick={() => dispatch({ type: 'type' })}
          className={c === state.type ? style.active : null}
        >
          {c}
        </button>
      ))}
      <form className={style.form} onSubmit={handleSubmitEvent}>
        <input
          placeholder="City Location"
          type="text"
          name="cityLocation"
          onChange={(e) => dispatch({ type: 'city', payload: e.target.value })}
        />
        <input
          placeholder="Min Price"
          type="number"
          name="minPrice"
          min={1}
          onChange={(e) =>
            dispatch({ type: 'minPrice', payload: e.target.value })
          }
        />
        <input
          placeholder="Max Price"
          name="maxPrice"
          type="number"
          min={1}
          onChange={(e) =>
            dispatch({ type: 'maxPrice', payload: e.target.value })
          }
        />

        <button>
          <img src="./search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
