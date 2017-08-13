import React from 'react';

import '../base.css';
import styles from './App.css';

import Header from './Header/Header.jsx';
import PostCollection from './PostCollection/PostCollection.jsx';
import Post from './Post/Post.jsx';

const App = () => {
  return(
    <div>
      <Header />
      <PostCollection>
        <Post />
        <Post />
        <Post />
      </PostCollection>
    </div>
  );
};

export default App;
