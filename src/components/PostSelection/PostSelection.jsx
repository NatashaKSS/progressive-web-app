import React from 'react';
import { Link } from 'react-router-dom';

import PostsAPI from '../../api/PostsAPI.js';

const PostSelection = () => {
  return (
    <div>
      <ul>
        {PostsAPI.getAll().map(post => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PostSelection;
