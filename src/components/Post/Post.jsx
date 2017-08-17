import React from 'react';

import PostsAPI from '../../api/PostsAPI.js';

import styles from './Post.css';

const Post = (props) => {
  const id = getPostIDFromProps(props);
  const post = id ? PostsAPI.getPostWithID(id) : null;

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

/**
 * Obtains the post id from props. Checks if props and nested objects are
 * valid or not, otherwise, an id with a null value will be returned.
 *
 * @param  {Object} props React props
 * @return {String}       String representation of the ID of a post
 */
const getPostIDFromProps = (props) => {
  let id = null;
  if (props.match) {
    if (props.match.params) {
      id = props.match.params.id;
    }
  }
  return id;
}

export default Post;
