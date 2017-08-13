import React from 'react';

import PostsAPI from '../../api/PostsAPI.js';

import styles from './Post.css';

const Post = (props) => {
  const post = PostsAPI.getPostWithID(props.match.params.id);

  if (!post) {
    return <div>Sorry, the post with this ID was not found!</div>
  } else {
    return (
      <div>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.content}>{post.content}</p>
      </div>
    );
  }
}

export default Post;
