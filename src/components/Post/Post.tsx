import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import { Post as IPost } from '../../types/interfaces';

import './Post.scss';

interface PostItemProp {
  post: IPost;
}

const Post = ({ post }: PostItemProp) => {
  const { toggleOpen, toggleModal, setEditedPostVal } = useContext(AppContext);
  const {
    id, name, year, genre, imgName, rating, runtime,
  } = post;

  const handleDeleteClick = () => {
    toggleModal('delete');
    toggleOpen(true);
  };

  const handleEditClick = () => {
    toggleModal('edit');
    toggleOpen(true);
    setEditedPostVal({
      id,
      name,
      year,
      genre,
      imgName,
      rating,
      runtime,
    });
  };

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
              <button type="button" className="dropdown-btn" onClick={handleEditClick}>Edit</button>
            </li>
            <li>
              <button type="button" className="dropdown-btn" onClick={handleDeleteClick}>Delete</button>
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
