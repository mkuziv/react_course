import React from 'react';
import { Post as IPost } from '../../types/interfaces';
import Button from '../Button/Button';
import Title from '../Title/Title';

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
        img
        <Button content="" type="button" btn="round hov" />

        <div className="dropdown">
          <Button content="X" type="button" btn="img-btn-x" />
          <ul>
            <li>
              <Button content="Edit" type="button" btn="img-btn" />
            </li>
            <li>
              <Button content="Delete" type="button" btn="img-btn" />
            </li>
          </ul>
        </div>
      </div>
      <div className="description">
        <div className="name">
          <Title name={name} className="h3" />
          <span className="year">{year}</span>
        </div>
        {genre}
      </div>
    </article>
  );
};

export default Post;
