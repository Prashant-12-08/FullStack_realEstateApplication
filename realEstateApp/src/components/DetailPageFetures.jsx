import React from 'react';

import style from './DetailPageFeature.module.css';
import FeatureBox from '../pages/FeatureBox';
import Map from './Map';

const featuresEl = [
  {
    img: '/utility.png',
    title: 'Utilities',
    desc: 'Render is responsible',
  },

  {
    img: '/pet.png',
    title: 'Pet Policy',
    desc: 'Pets Allowed',
  },
  {
    img: '/fee.png',
    title: 'Property Fees',
    desc: 'Must have 3x the rent in total household  income',
  },
];

const nearbyPlace = [
  {
    img: '/school.png',
    title: 'School',
    desc: '250m away',
  },
  {
    img: '/bus.png',
    title: 'Bus stop',
    desc: '100m away',
  },
  {
    img: '/restaurant.png',
    title: 'Restaurant',
    desc: '500m away',
  },
];

const roomInfo = [
  { img: '/size.png', desc: '80sqfm (861sqrt)' },
  { img: '/bed.png', desc: '1 bed' },
  { img: '/bath.png', desc: '1 bath' },
];

const buttons = [
  { img: '/chat.png', desc: 'Send a Message' },
  { img: '/save.png', desc: 'Save the Place' },
];

function DetailPageFetures({ postDetails, imageNum }) {
  featuresEl[0].desc = postDetails.utilities;
  featuresEl[1].desc = `Pet ${postDetails.pet}`;
  featuresEl[2].desc = `Must have ${postDetails.income}x the rent in total household  income`;

  roomInfo[0].desc = `${postDetails.size} sqfm ${
    postDetails.size * 10.76391042
  }`;
  roomInfo[1].desc = `${postDetails.bedroom} bed`;
  roomInfo[2].desc = `${postDetails.bathroom} bath`;

  nearbyPlace[0].desc = `${postDetails.school} m away`;
  nearbyPlace[1].desc = `${postDetails.bus} m away`;
  nearbyPlace[2].desc = `${postDetails.restaurant} m away`;

  return (
    <div className={style.features}>
      <div className={style.wrapper}>
        <div className={style.feature}>
          <h5>General</h5>
          <div className={style.featureEl}>
            {featuresEl.map((feature, ind) => {
              return (
                <FeatureBox
                  key={ind}
                  img={feature.img}
                  title={feature.title}
                  desc={feature.desc}
                />
              );
            })}
          </div>
        </div>
        <div className={style.feature}>
          <h5>Room Sizes</h5>
          <div className={style.roomInfo}>
            {roomInfo.map((feature, ind) => {
              return (
                <div key={ind} className={style.roomFeature}>
                  <FeatureBox
                    img={feature.img}
                    title={feature.title}
                    desc={feature.desc}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.feature}>
          <h5>Nearby Places</h5>
          <div className={style.nearbyPlace}>
            {nearbyPlace.map((feature, ind) => {
              return (
                <FeatureBox
                  key={ind}
                  img={feature.img}
                  title={feature.title}
                  desc={feature.desc}
                />
              );
            })}
          </div>
        </div>
        <div className={style.feature}>
          <h5>Location</h5>
          <div
            className={style.mapContainer}
            style={{ display: imageNum ? 'none' : '' }}
          >
            <Map items={[postDetails]}></Map>
          </div>
        </div>
        <div className={style.btns}>
          {buttons.map((feature, ind) => {
            return (
              <div key={ind} className={style.btn}>
                <FeatureBox
                  img={feature.img}
                  title={feature.title}
                  desc={feature.desc}
                  fontSize="12px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailPageFetures;
