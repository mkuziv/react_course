import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchPosts, selectAllPosts, selectQuery } from '../../slice/postsSlice';
import { useAppDispatch } from '../../store';
import { Movie } from '../../types/interfaces';
import getQueryParams from '../../utils/getQueryParams';
import PostItem from '../Movie/Movie';

import './Movies.scss';

const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useSelector(selectAllPosts);
  const query = useSelector(selectQuery);

  useEffect(() => {
    const queryString = getQueryParams(query);
    dispatch(fetchPosts(queryString));
  }, []);

  return (
    <section className="movies-section">
      <span>
        <b>{`${movies.length} `}</b>
        movie found
      </span>
      <ul className="movies">
        {movies.map((movie: Movie) => (
          <li key={movie.id}>
            <PostItem movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Movies;
