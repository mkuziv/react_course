import React, { useState } from 'react';
import { Post } from '../../types/interfaces';
import Button from '../Button/Button';

import './PostItem.scss';

interface PostItemProp {
  post: Post;
}

const PostItem = ({ post }: PostItemProp) => {
  const {
    name, year, genre,
  } = post;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <article className="movie">
      <div
        className="img"
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
        onMouseOut={handleMouseOut}
        onBlur={handleMouseOut}
      >
        img
        {isHovering && <Button name="" type="button" btn="round" />}
      </div>
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
