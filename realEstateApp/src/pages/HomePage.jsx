import style from './HomePage.module.css';
import StatBox from '../components/StatBox';
import SearchBox from '../components/SearchBox';

function HomePage() {
  return (
    <div className={style.homePage}>
      <div className={style.textContainer}>
        <div className={style.wrapper}>
          <h1 className={style.tittle}>
            Find Real Estate & Get Your Dream Place
          </h1>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            dolorum, et sit quo voluptates cum ad minima culpa molestias iusto
            soluta quia deserunt possimus aliquid, quis beatae nostrum tempora.
            Corrupti!
          </p>
          <div className={style.searchBox}>
            <SearchBox />
          </div>
          <div className={style.box}>
            <StatBox data={16} message="Experience" />
            <StatBox data={200} message="Award Gained" />
            <StatBox data="2000+" message="Properly Ready" />
          </div>
        </div>
      </div>
      <div className={style.imgContainer}>
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
