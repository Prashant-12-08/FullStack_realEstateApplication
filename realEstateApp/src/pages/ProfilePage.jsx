import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useUser } from '../context/AuthContext';
import Btn from '../ReusableComponent/Button';
import style from './ProfilePage.module.css';
import ListCard from '../components/ListCard';
import { UserLocalHost } from '../lib/UserLocalHost';

function ProfilePage() {
  const { currentUser, setCurrentUser } = useUser();
  const [userPosts, setUserPost] = useState([]);

  useEffect(
    function () {
      async function fetchingUserPost() {
        const res = await fetch(`${UserLocalHost}/posts`, {
          method: 'GET',
          credentials: 'include',
        });
        const { data } = await res.json();
        const { userPosts } = data.posts;
        setUserPost(userPosts);
      }
      fetchingUserPost();
    },
    [setUserPost]
  );

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
              <img src={`${currentUser.avatar}`} alt="" />
            </div>
            <div className={style.details}>
              <p>Username :</p>
              <p> {currentUser.name}</p>
            </div>
            <div className={style.details}>
              <p>E-mail :</p>
              <p> {currentUser.email}</p>
            </div>
          </div>
          <div className={style.profileInfo}>
            <p className={style.userInfo}>My List</p>
            <Link to="/newPost">
              <Btn text="Add New Post" />
            </Link>
          </div>
          <ListCard posts={userPosts} />
        </div>
      </div>
      <div className={style.right}></div>
    </div>
  );
}

export default ProfilePage;
