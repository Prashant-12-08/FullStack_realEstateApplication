import React from 'react';

import Btn from '../ReusableComponent/Button';
import style from './ProfilePage.module.css';
import ListCard from '../components/ListCard';
function ProfilePage() {
  return (
    <div className={style.profilePage}>
      <div className={style.left}>
        <div className={style.wrapper}>
          <div className={style.profileInfo}>
            <p className={style.userInfo}>User Information</p>
            <Btn text="Update Profile" />
          </div>
          <div className={style.userDetails}>
            <div className={style.details}>
              <p>Avatar :</p>
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className={style.details}>
              <p>Username :</p>
              <p> Jone Doe</p>
            </div>
            <div className={style.details}>
              <p>E-mail :</p>
              <p> jonedoe@gmail.com</p>
            </div>
          </div>
          <div className={style.profileInfo}>
            <p className={style.userInfo}>My List</p>
            <Btn text="Add New Post" />
          </div>
          <ListCard />
        </div>
      </div>
      <div className={style.right}></div>
    </div>
  );
}

export default ProfilePage;
