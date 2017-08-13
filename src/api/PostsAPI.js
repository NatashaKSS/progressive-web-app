import Posts from '../models/Posts.json';

/**
 * A Simple API class that handles the getters for the mock data JSON used
 * in this application.
 *
 * Exports a new instance of this class for easy imports within the components.
 */
export class PostsAPI {
  constructor() {
    this.posts = Posts.posts;
  }

  getAll() {
    return this.posts;
  }

  getPostWithID(id) {
    return this.posts.filter(post => id === post.id)[0];
  }
}

export default new PostsAPI();
