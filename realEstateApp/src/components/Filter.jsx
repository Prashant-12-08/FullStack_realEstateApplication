import React, { useReducer } from 'react';
import style from './Filter.module.css';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { PostLocalHost } from '../lib/PostLocalHost';

const reducer = function (state, action) {
  switch (action.type) {
    case 'city':
      return { ...state, city: action.payload };
    case 'property':
      return { ...state, property: action.payload };
    case 'type':
      state.type === 'buy' ? (state.type = 'rent') : (state.type = 'buy');
      return { ...state };
    case 'minPrice':
      return { ...state, price: action.payload };
    case 'bedroom':
      return {
        ...state,
        bedroom: action.payload,
      };
    default:
      return 'Not an action';
  }
};

function Filter({ handleSearchPost }) {
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, {
    city: '',
    minPrice: null,
    property: '',
    type: '',
    bedroom: null,
  });

  //making the query string
  let query = '';
  Object.entries(state).forEach(([key, value]) => {
    if (value && key != 'price') query += `${key}=${value}&`;
    else if (key === 'price') query += `${key}[gte]=${value}&`;
  });

  // handling the submit events
  async function handleSumbit() {
    try {
      const length = query.length;
      query = query.slice(0, length - 1);
      console.log(query);
      const res = await fetch(`${PostLocalHost}?${query}`, {
        method: 'GET',
        credential: 'include',
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      if (res.ok === false) throw new Error(data.message);
      handleSearchPost(data.data.allPost);
      navigate(`?${query}`);
    } catch (err) {
      handleSearchPost([]);
      // alert(err.message);
    }
  }

  // retriving the city name
  const city = queryParams.get('city');

  return (
    <div className={style.filter}>
      <h1>
        Search results for <b>{`${!city ? '' : city}`}</b>
      </h1>
      <div className={style.top}>
        <div className={style.item}>
          <label htmlFor="city">Location</label>

          <input
            type="text"
            id="city"
            name="city"
            placeholder="cityLocation"
            onChange={(e) =>
              dispatch({ type: 'city', payload: e.target.value })
            }
          />
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.item}>
          <label htmlFor="type">Type</label>

          <select
            name="type"
            id="type"
            onChange={(e) =>
              dispatch({ type: 'type', payload: e.target.value })
            }
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className={style.item}>
          <label htmlFor="property">Property</label>
          <select
            name="propery"
            id="property"
            onChange={(e) =>
              dispatch({ type: 'property', payload: e.target.value })
            }
          >
            <option value="">any</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <div className={style.item}>
          <label htmlFor="price">Min Price</label>
          <input
            min={0}
            type="number"
            name="price"
            id="price"
            placeholder="any"
            onChange={(e) =>
              dispatch({ type: 'minPrice', payload: Number(e.target.value) })
            }
          />
        </div>
        {/* <div className={style.item}>
          <label htmlFor="sort">Sort</label>
          <select name="sort" id="">
            <option value="none">None</option>
            <option value="price">Price</option>
            <option value="bedroom">Bedroom</option>
            <option value="bathroom">Bathroom</option>
          </select>
        </div> */}
        <div className={style.item}>
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="Number"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            onChange={(e) =>
              dispatch({ type: 'bedroom', payload: Number(e.target.value) })
            }
          />
        </div>
        <button onClick={(e) => handleSumbit(e)}>
          <img src="./search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
