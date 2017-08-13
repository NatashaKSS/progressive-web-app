import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Post from '../Post/Post.jsx';
import PostSelection from '../PostSelection/PostSelection.jsx';

import styles from './PostCollection.css';

const PostCollection = ({children}) => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.title}>My Collection of Healthy Foods</h2>
      <div className={styles.postsContainer}>
        <Switch>
          <Route exact path='/posts' component={PostSelection}/>
          <Route path='/posts/:id' component={Post}/>
        </Switch>
      </div>
    </div>
  );
}

export default PostCollection;
