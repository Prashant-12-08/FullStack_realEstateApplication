import React from 'react';
import style from './DetailPage.module.css';

import { useLoaderData } from 'react-router-dom';
import Details from '../components/Details';
import DetailPageFetures from '../components/DetailPageFetures';

function DetailPage() {
  const details = useLoaderData().data.post;
  console.log(details);

  return (
    <div className={style.detailPage}>
      <Details postDetails={details} />
      <DetailPageFetures postDetails={details} />
    </div>
  );
}

export default DetailPage;
