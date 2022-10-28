import React from 'react';
import { Post } from '../../types/interfaces';

import './PostItem.scss';

interface PostItemProp {
  post: Post;
}

const PostItem = ({ post }: PostItemProp) => {
  const {
    name, year, genre,
  } = post;
  return (
    <article className="movie">
      <div className="img">img</div>
      <div className="description">
        <div className="name">
          <span>{name}</span>
          <span className="year">{year}</span>
        </div>
        {genre}
      </div>
    </article>
  );
};

export default PostItem;
