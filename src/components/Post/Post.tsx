import React from 'react';
import { Post as IPost } from '../../types/interfaces';

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
        <button type="button" className="btn-round hov">.</button>
        <div className="dropdown">
          <button type="button" className="dropdown-btn-x">X</button>
          <ul>
            <li>
              <button type="button" className="dropdown-btn">Edit</button>
            </li>
            <li>
              <button type="button" className="dropdown-btn">Delete</button>
            </li>
          </ul>
        </div>
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
