import React, { useContext } from 'react';
import { intervalToDuration } from 'date-fns';
import { AppContext } from '../../Context';

import './MovieDetails.scss';

const MovieDetails = () => {
  const { selectedPost } = useContext(AppContext);

  const {
    name, genre, year, rating, runtime, description,
  } = selectedPost;

  const duration = intervalToDuration({ start: 0, end: runtime * 1000 * 60 });

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
            <span>{`${duration.hours} hour ${duration.minutes} minutes`}</span>
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
