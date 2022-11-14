import React from 'react';
import Button from '../Button/Button';

import './DeleteMovie.scss';

const DeleteMovie = () => (
  <section className="delete-movie">
    <h3 className="h3">Delete Movie</h3>
    <p>Are you sure you want to delete this movie?</p>
    <div className="delete-movie__button">
      <Button content="confirm" btn="btn btn-red btn-middle" type="button" />
    </div>
  </section>
);

export default DeleteMovie;
