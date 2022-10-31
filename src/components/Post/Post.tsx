import React from 'react';
import { Post } from '../../types/interfaces';
import Button from '../Button/Button';

import './Post.scss';

interface PostItemProp {
  post: Post;
}

const PostItem = ({ post }: PostItemProp) => {
  const {
    name, year, genre,
  } = post;

  return (
    <article className="movie">
      <div
        className="img"
      >
        img
        <Button content="" type="button" btn="round hov" />
      </div>
      <div className="description">
        <div className="name">
          <h3>{name}</h3>
          <span className="year">{year}</span>
        </div>
        {genre}
      </div>
    </article>
  );
};

export default PostItem;
