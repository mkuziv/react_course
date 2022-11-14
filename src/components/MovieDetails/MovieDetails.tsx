import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import timeConvert from '../../utils/utils';

import './MovieDetails.scss';

const MovieDetails = () => {
  const { selectedPost } = useContext(AppContext);

  const {
    name, genre, year, rating, runtime, description,
  } = selectedPost;

  return (
    <section className="movie-section">
      <div className="movie container">
        <div
          className="movie__image"
        >
          .
        </div>
        <div className="movie__details">
          <div className="title">
            <h3 className="h3">{name}</h3>
            <div className="circle">
              <p className="rating">{rating}</p>
            </div>
          </div>
          <p className="genre">{genre}</p>
          <div className="year">
            <p>{year}</p>
            <span>{timeConvert(runtime)}</span>
          </div>
          <p className="description">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
