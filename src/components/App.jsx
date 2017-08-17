import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './base.css';
import styles from './App.css';

import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';

const App = () => {
  return(
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
