import React from 'react';

import styles from './Home.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.content}>Fruits & Veggies contain lots of vitamins!</p>
    </div>
  );
}

export default Home;
