import React, { useEffect, useState } from 'react';
import style from './OwnerPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { UserLocalHost } from '../lib/UserLocalHost';

function OwnerPage() {
  const { ownerId } = useParams();
  const [owner, setOwner] = useState('');
  const [err, setErr] = useState('');

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(`${UserLocalHost}/${ownerId}`, {
          method: 'GET',
          credential: 'include',
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setOwner(data.data.owner);
      } catch (err) {
        setErr(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={style.profilePage}>
      <div className={style.left}>
        <div className={style.wrapper}>
          <div className={style.profileInfo}>
            <p className={style.userInfo}>Owner Information</p>
          </div>
          <div className={style.userDetails}>
            <div className={style.details}>
              <p>Avatar :</p>
              <img src={`${owner.avatar}`} alt="" />
            </div>
            <div className={style.details}>
              <p>Username :</p>
              <p> {owner.name}</p>
            </div>
            <div className={style.details}>
              <p>E-mail :</p>
              <p> {owner.email}</p>
            </div>
            <div className={style.details}>
              <p>Mobile Number :</p>
              <p>xxxxxx</p>
            </div>
          </div>

          {/* <div className={style.profileInfo}>
            <p className={style.userInfo}>My List</p>
            <Link to="/newPost">
              <Btn text="Add New Post" />
            </Link>
          </div>
          <ListCard posts={userPosts} loading={loading} err={err} /> */}
        </div>
      </div>
      <div className={style.right}></div>
    </div>
  );
}

export default OwnerPage;
