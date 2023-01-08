import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchPosts } from '../../slice/postsSlice';
import { useAppDispatch } from '../../store';
import { Filter } from '../../types/types';
import FilterItem from './FilterItem/FilterItem';

import './Filters.scss';

const Filters = () => {
  const filterItems: Filter[] = ['all', 'documentary', 'comedy', 'horror', 'crime'];
  const [query, setQuery] = useSearchParams();
  const [active, setActive] = useState(query.get('genre') || 'all');
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.innerHTML);
    dispatch(fetchPosts(`searchBy=title&sortOrder=desc&sortBy=${query.get('sortBy') || ''}&search=${query.get('search') || ''}&filter=${e.currentTarget.innerHTML !== 'all' ? e.currentTarget.innerHTML : ''}`));

    if (e.currentTarget.innerHTML !== filterItems[0]) {
      query.set('genre', e.currentTarget.innerHTML);
      setQuery(query);
      return;
    }
    query.delete('genre');
    setQuery(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(fetchPosts(`searchBy=title&sortOrder=desc&sortBy=${e.target.value}&search=${query.get('search') || ''}&filter=${query.get('filter') || ''}`));
    query.set('sortBy', e.target.value);
    setQuery(query);
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
        <select name="sort" id="movie-select" value={query.get('sortBy') || 'release_date'} onChange={handleChange}>
          <option value="release_date">release date</option>
          <option value="vote_average">vote average</option>
          <option value="runtime">runtime</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
