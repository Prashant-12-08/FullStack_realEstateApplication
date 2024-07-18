import style from './Details.module.css';
import ImgSlider from './ImgSlider';
import { Link } from 'react-router-dom';

function Details({ postDetails, setImageNumber, imageNum }) {
  const { userId: user } = postDetails;

  // defining the path of image
  // const newImages = postDetails.images.map((img, index) => {
  //   const path = img.split('public')[1];
  //   return path;
  // });

  return (
    <div className={style.details}>
      <div className={style.wrapper}>
        <div className={style.top}>
          <ImgSlider
            images={postDetails.images}
            setImageNumber={setImageNumber}
            imageNum={imageNum}
          />
          <div className={style.info}>
            <div className={style.desc}>
              <h1>{postDetails.title}</h1>
              <div className={style.address}>
                <img src="/pin.png" alt="" />
                <span>{postDetails.address}</span>
              </div>
              <p className={style.price}>
                <span>$</span>
                {postDetails.price}
              </p>
            </div>
            <Link to={`/ownerPage/${user.id}`}>
              <div className={style.user}>
                <img
                  className={style.userImg}
                  src={`/default/${user.avatar}`}
                  alt="avatar"
                />
                <p>{user.name}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={style.bottom}>{postDetails.desc}</div>
      </div>
    </div>
  );
}

export default Details;
