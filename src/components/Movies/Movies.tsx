import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchPosts, selectAllPosts } from '../../slice/postsSlice';
import { useAppDispatch } from '../../store';
import { Post } from '../../types/interfaces';
import PostItem from '../Movie/Movie';

import './Movies.scss';

const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPosts('sortBy=release_date&sortOrder=desc'));
  }, []);

  return (
    <section className="movies-section">
      <span>
        <b>{`${movies.length} `}</b>
        movie found
      </span>
      <ul className="movies">
        {movies.map((post: Post) => (
          <li key={post.id}>
            <PostItem movie={post} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Movies;
