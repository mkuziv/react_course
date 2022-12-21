import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import { useAppDispatch } from '../../store';
import Button from '../Button/Button';
import { deleteMovie } from '../../slice/postsSlice';

import './DeleteMovie.scss';

const DeleteMovie = () => {
  const { deletedMovieID, toggleModalType, setDeletedMovie } = useContext(AppContext);
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteMovie(deletedMovieID));
    toggleModalType(null);
    setDeletedMovie(null);
  };

  return (
    <section className="delete-movie">
      <h3 className="h3">Delete Movie</h3>
      <p>Are you sure you want to delete this movie?</p>
      <div className="delete-movie__button">
        <Button content="confirm" btn="btn btn-red btn-middle" type="button" onClick={handleDelete} />
      </div>
    </section>
  );
};

export default DeleteMovie;
