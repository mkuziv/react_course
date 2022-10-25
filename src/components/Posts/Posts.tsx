import React from 'react';
import { Post } from '../../types/interfaces';

import './Posts.scss';

interface PostsProp {
  posts: Post[];
}

const Posts = ({ posts }: PostsProp) => (
  <ul className="posts">
    {posts.map((post: Post) => (
      <li key={post.id}>{post.name}</li>
    ))}
  </ul>
);

export default Posts;
