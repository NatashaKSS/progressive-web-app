import React from 'react';

import styles from './Post.css';

const Post = () => {
  return (
    <div>
      <h2 className={styles.title}><a className={styles.link} href="#">Title</a></h2>
      <p className={styles.content}>Some text here</p>
    </div>
  );
}

export default Post;
