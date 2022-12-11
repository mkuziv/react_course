import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  fetchPosts,
  selectQuery,
  updateFilter,
  updateSort,
} from '../../slice/postsSlice';
import { useAppDispatch } from '../../store';
import { Filter } from '../../types/types';
import getQueryParams from '../../utils/getQueryParams';
import FilterItem from './FilterItem/FilterItem';
import './Filters.scss';

const Filters = () => {
  const filterItems: Filter[] = ['all', 'documentary', 'comedy', 'horror', 'crime'];
  const [active, setActive] = useState('all');
  const dispatch = useAppDispatch();
  const query = useSelector(selectQuery);
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.innerHTML);
    await dispatch(updateFilter(e.currentTarget.innerHTML));
    const filterQuery = getQueryParams(query);
    console.warn('filterQuery', filterQuery);
    await dispatch(fetchPosts(filterQuery));
  };

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    await dispatch(updateSort(e.target.value));
    const sortQuery = getQueryParams(query);
    console.warn('sortQuery', sortQuery);
    await dispatch(fetchPosts(sortQuery));
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
