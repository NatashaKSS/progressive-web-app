import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Fruits & Veggies</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link className={styles.link} to='/'>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.link} to='/about'>About</Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.link} to='/posts'>Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
