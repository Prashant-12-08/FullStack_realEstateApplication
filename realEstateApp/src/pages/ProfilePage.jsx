import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';

import { useUser } from '../context/AuthContext';
import Btn from '../ReusableComponent/Button';
import style from './ProfilePage.module.css';
import ListCard from '../components/ListCard';
import { UserLocalHost } from '../lib/UserLocalHost';
import { useFetchState } from '../hooks/useFetchState';
const limit = 10;

function ProfilePage() {
  const { currentUser, setCurrentUser } = useUser();
  const [userPosts, setUserPost] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  // handleScrollingEvent
  function handleScrollingEvent() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log(scrollTop, scrollHeight, clientHeight);
    if (scrollHeight - clientHeight - scrollTop < 50) {
      console.log('load');
      setPageNum((prev) => prev + 1);
    }
  }

  // handleLogOut
  async function handleLogOut() {
    try {
      const res = await fetch(`${UserLocalHost}`, {
        method: 'PATCH',
        credentials: 'include',
        body: JSON.stringify({
          user: currentUser,
        }),
      });
      const data = await res.json();
      console.log(data);
      setCurrentUser({ _id: null });
      if (!res.ok) throw new Error(data.message);
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(
    function () {
      async function fetchingUserPost() {
        try {
          setLoading(true);
          const res = await fetch(
            `${UserLocalHost}/posts?page=${pageNum}&limt=${limit}`,
            {
              method: 'GET',
              credentials: 'include',
            }
          );
          const data = await res.json();
          if (res.ok === false) throw new Error(data.message);
          setLoading(false);
          setUserPost(data.data.posts.userPosts);
          console.log(data);
        } catch (err) {
          console.log(err);
          setErr(err.message);
        }
      }
      fetchingUserPost();
    },
    [setUserPost, pageNum]
  );

  useEffect(function () {
    window.addEventListener('scroll', handleScrollingEvent);
    return function () {
      window.removeEventListener('scroll', handleScrollingEvent);
    };
  }, []);

  return (
    <div className={style.profilePage}>
      <div className={style.left}>
        <div className={style.wrapper}>
          <div className={style.profileInfo}>
            <p className={style.userInfo}>User Information</p>
            <Link to="/updateMe">
              <Btn text="Update Profile" />
            </Link>
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
            <Button onClick={() => handleLogOut('jwt')} colorScheme="green">
              Log Out
            </Button>
          </div>
          <div className={style.profileInfo}>
            <p className={style.userInfo}>My List</p>
            <Link to="/newPost">
              <Btn text="Add New Post" />
            </Link>
          </div>
          <ListCard posts={userPosts} loading={loading} err={err} />
        </div>
      </div>
      <div className={style.right}></div>
    </div>
  );
}

export default ProfilePage;
