import React, { useState } from 'react';
import {
  fetchPosts,
} from '../../slice/postsSlice';
import { useAppDispatch } from '../../store';
import FilterItem from './FilterItem/FilterItem';
import './Filters.scss';

enum SortingValue {
  ReleaseDate = 'release_date',
  VoteAverage = 'vote_average',
  Runtime = 'runtime',
}

const Filters = () => {
  const filterItems = ['all', 'documentary', 'comedy', 'horror', 'crime'];
  const [active, setActive] = useState('all');
  const dispatch = useAppDispatch();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.innerHTML);
    if (active === 'all') {
      dispatch(fetchPosts('sortBy=release_date&sortOrder=desc'));
    } else {
      dispatch(fetchPosts(`filter=${e.currentTarget.innerHTML}`));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case SortingValue.ReleaseDate:
        dispatch(fetchPosts('sortBy=release_date&sortOrder=desc'));
        break;
      case SortingValue.Runtime:
        dispatch(fetchPosts('sortBy=runtime&sortOrder=desc'));
        break;
      default:
        dispatch(fetchPosts('sortBy=vote_average&sortOrder=desc'));
    }
  };

  return (
    <div className="filters-wrapper">
      <ul className="filters">
        {filterItems.map((item) => (
          <li key={`${item}`}>
            <FilterItem handleClick={handleClick} title={item} active={active} />
          </li>
        ))}
      </ul>
      <div className="sort">
        SORT BY
        <select name="sort" id="movie-select" value="release_date" onChange={handleChange}>
          <option value="release_date">release date</option>
          <option value="vote_average">vote_average</option>
          <option value="runtime">runtime</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
