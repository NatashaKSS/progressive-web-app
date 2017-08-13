import React from 'react';

import styles from './PostCollection.css';

const PostCollection = ({children}) => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.title}>My Collection of Healthy Food</h2>
      <div className={styles.postsContainer}>
        {children}
      </div>
    </div>
  );
}

export default PostCollection;
