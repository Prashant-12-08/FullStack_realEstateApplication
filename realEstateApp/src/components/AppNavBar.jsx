import React from "react";
import styles from "./AppNavBar.module.css";

function AppNavBar() {
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
        <a href="#">Sign in</a>
        <a href="#" className={styles.signUp}>
          Sign up
        </a>
      </div>
    </nav>
  );
}

export default AppNavBar;
