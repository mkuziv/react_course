import React from 'react';
import { Post } from '../../types';

import './Posts.css';

interface PostsProp {
  posts: Post[];
}

function Posts(props: PostsProp) {
  const { posts } = props;
  return (
    <ul className="posts">
      {posts.map((post: Post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}

export default Posts;
