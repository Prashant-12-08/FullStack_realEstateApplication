import React from 'react';
import style from './DetailPage.module.css';
import { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Details from '../components/Details';
import DetailPageFetures from '../components/DetailPageFetures';

function DetailPage() {
  const details = useLoaderData().data.post;
  const [imageNum, setImageNumber] = useState(null);
  console.log(details.userId);
  return (
    <div className={style.detailPage}>
      <Details
        postDetails={details}
        imageNum={imageNum}
        setImageNumber={setImageNumber}
      />
      <DetailPageFetures postDetails={details} imageNum={imageNum} />
    </div>
  );
}

export default DetailPage;
