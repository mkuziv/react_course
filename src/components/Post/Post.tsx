import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import { Post as IPost } from '../../types/interfaces';
import Dropdown from '../Dropdown/Dropdown';

import './Post.scss';

interface PostItemProp {
  post: IPost;
}

const Post = ({ post }: PostItemProp) => {
  const { setSelectedPostVal } = useContext(AppContext);
  const {
    name, year, genre,
  } = post;

  const handleClick = () => {
    setSelectedPostVal(post);
  };

  return (
    <article className="post">
      <div
        className="img"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={handleClick}
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
