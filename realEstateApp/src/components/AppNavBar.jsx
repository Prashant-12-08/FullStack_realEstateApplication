import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppNavBar.module.css';

function AppNavBar() {
  const user = true;
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
        {user ? (
          <div className={styles.user}>
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span className={styles.user_name}>John Doe</span>
            <Link to="profile" className={styles.profileBtn}>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <a href="#">Sign in</a>
            <a href="#" className={styles.signUp}>
              Sign up
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

export default AppNavBar;
