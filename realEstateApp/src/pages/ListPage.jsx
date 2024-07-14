import React, { useContext, useEffect } from 'react';
import style from './ListPage.module.css';

import Card from '../components/Card';
import Filter from '../components/Filter';
import Map from '../components/Map.jsx';
import data from '../lib/temp.js';
import { UserLocalHost } from '../lib/UserLocalHost.js';

const ListPage = () => {
  useEffect(function () {
    async function fetchPost() {
      const res = await fetch(`${UserLocalHost}/posts`, {
        method: 'GET',
        credentials: 'include',
      });
      const { data } = await res.json();
      console.log(data);
    }
  }, []);
  return (
    <div className={style.listPage}>
      <div className={style.listContainer}>
        <div className={style.wrapper}>
          <Filter />
          {data.map((el, i) => {
            return <Card item={el} key={i} />;
          })}
        </div>
      </div>
      <div className={style.mapContainer}>
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
