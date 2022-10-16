import React from 'react';

import './Posts.css';

function Posts({posts}) {
  return (
    <ul className="posts">
      {posts.map(post => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
};

export default Posts;