import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PostSelection.css';

import PostsAPI from '../../api/PostsAPI.js';

const PostSelection = () => {
  return (
    <div>
      <ul>
        {PostsAPI.getAll().map(post => {
          return (
            <li className={styles.postItem} key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostSelection;
