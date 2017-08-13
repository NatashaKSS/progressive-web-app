import React from 'react';

import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Fruits & Veggies</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#">Home</a></li>
            <li className={styles.navItem}><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
