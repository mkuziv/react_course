import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchPosts, selectAllPosts } from '../../slice/postsSlice';
import { useAppDispatch } from '../../store';
import { Movie } from '../../types/interfaces';
import PostItem from '../Movie/Movie';

import './Movies.scss';

const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useSelector(selectAllPosts);
  const [query] = useSearchParams();

  useEffect(() => {
    dispatch(fetchPosts(`searchBy=title&sortOrder=desc&sortBy=${query.get('sortBy') || 'release_date'}&search=${query.get('search') || ''}&filter=${query.get('genre') || ''}`));
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
