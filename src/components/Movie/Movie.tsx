import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context';
import { Movie as IMovie } from '../../types/interfaces';
import Dropdown from '../Dropdown/Dropdown';

import './Movie.scss';

interface MovieItemProp {
  movie: IMovie;
}

const Movie = ({ movie }: MovieItemProp) => {
  const { setSelectedMovie } = useContext(AppContext);
  const {
    title, release_date: releaseDate, genres, poster_path: posterPath,
  } = movie;

  const navigate = useNavigate();

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if ((e.target as HTMLImageElement).tagName.toLowerCase() === 'img') {
      setSelectedMovie(movie);
      navigate(`/movie/${movie.id}`);
    }
  };

  return (
    <article className="single-movie">
      <div
        className="img-wrapper"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={handleClick}
      >
        <img
          src={posterPath}
          alt=""
          className="image"
        />
        <Dropdown movie={movie} />
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

export default Movie;
