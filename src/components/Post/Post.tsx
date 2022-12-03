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
    title, release_date: releaseDate, genres,
  } = post;

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (e.target === e.currentTarget) {
      setSelectedPostVal(post);
    }
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
          <h3 className="h3">{title}</h3>
          <span className="year">{releaseDate.slice(0, 4)}</span>
        </div>
        {genres}
      </div>
    </article>
  );
};

export default Post;
