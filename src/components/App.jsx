import React from 'react';

import '../base.css';
import styles from './App.css';

import Header from './Header/Header.jsx';
import Post from './Post/Post.jsx';

const App = () => {
  return(
    <div>
      <Header />
      <Post />
    </div>
  );
};

export default App;
