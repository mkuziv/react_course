import React from 'react';
import { Post as IPost } from '../../types/interfaces';
import Dropdown from '../Dropdown/Dropdown';

import './Post.scss';

interface PostItemProp {
  post: IPost;
}

const Post = ({ post }: PostItemProp) => {
  const {
    name, year, genre,
  } = post;

  return (
    <article className="movie">
      <div
        className="img"
      >
        <Dropdown post={post} />
      </div>
      <div className="description">
        <div className="name">
          <h3 className="h3">{name}</h3>
          <span className="year">{year}</span>
        </div>
        {genre}
      </div>
    </article>
  );
};

export default Post;
