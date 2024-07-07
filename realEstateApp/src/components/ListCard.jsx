import React from 'react';

import data from '../lib/temp';
import Card from './Card';
import style from './ListCard.module.css';

function ListCard() {
  return (
    <div className={style.listCard}>
      {data.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
}

export default ListCard;
