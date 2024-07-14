import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './AppNavBar.module.css';
import { useUser } from '../context/AuthContext';
import { UserLocalHost } from '../lib/UserLocalHost';

// const img = "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

function AppNavBar() {
  const { currentUser, setCurrentUser } = useUser();

  useEffect(() => {
    // fetching the current user data
    async function fetchUserData() {
      try {
        const res = await fetch(`${UserLocalHost}`, {
          method: 'GET',
          credentials: 'include',
        });
        const userData = await res.json();
        console.log(userData);
      } catch (err) {
        console.warn(err, '🤬😡😠');
      }
    }
    fetchUserData();
  }, [setCurrentUser]);

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <a href="cities" className={styles.logo}>
          <img src="/logo.png" />
          <span>LamaEstate</span>
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Agents</a>
      </div>
      <div className={styles.right}>
        {currentUser ? (
          <div className={styles.user}>
            <img src={`/${currentUser.avatar}`} alt="" />
            <span className={styles.user_name}>{currentUser.name}</span>
            <Link to="profile" className={styles.profileBtn}>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <Link to="/signIn">Sign in</Link>
            <Link to="/login" className={styles.signUp}>
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default AppNavBar;
