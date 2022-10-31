import React from 'react';
import { Post } from '../../types/interfaces';
import PostItem from '../Post/Post';

import './Posts.scss';

interface PostsProp {
  posts: Post[];
}

const Posts = ({ posts }: PostsProp) => (
  <section className="posts-section">
    <span>
      <b>{`${posts.length} `}</b>
      movie found
    </span>
    <ul className="posts">
      {posts.map((post: Post) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  </section>
);

export default Posts;
