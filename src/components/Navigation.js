import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <p className={styles.logo}>EARTH TO SPACE</p>
      <ul className={styles.nav}>
        <Link className={styles.navlink} to='/'>
          Upcoming Launches
        </Link>
        <Link
          className={styles.navlink}
          to={{ pathname: "https://github.com/ERRE216" }}
          target='_blank'
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
