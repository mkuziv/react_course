import React, { useContext } from 'react';
import { intervalToDuration } from 'date-fns';
import { AppContext } from '../../Context';

import './MovieDetails.scss';

const MovieDetails = () => {
  const { selectedPost } = useContext(AppContext);

  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    title, genres, release_date, vote_average, runtime, overview,
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
            <h3 className="h3">{title}</h3>
            <div className="circle">
              <p className="rating">{vote_average}</p>
            </div>
          </div>
          <p className="genre">{genres}</p>
          <div className="release_date">
            <p>{release_date}</p>
            <span>{`${duration.hours} hour ${duration.minutes} minutes`}</span>
          </div>
          <p className="description">
            {overview}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
