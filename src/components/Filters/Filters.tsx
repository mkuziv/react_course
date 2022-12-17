import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSort, updateFilterQuery, updateSortQuery } from '../../slice/postsSlice';
import { useAppDispatch } from '../../store';
import { Filter } from '../../types/types';
import FilterItem from './FilterItem/FilterItem';

import './Filters.scss';

const Filters = () => {
  const filterItems: Filter[] = ['all', 'documentary', 'comedy', 'horror', 'crime'];
  const [active, setActive] = useState('all');
  const dispatch = useAppDispatch();
  const selectVal = useSelector(selectSort);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.innerHTML);
    dispatch(updateFilterQuery(e.currentTarget.innerHTML));
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateSortQuery(e.target.value));
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
        <select name="sort" id="movie-select" value={selectVal} onChange={handleChange}>
          <option value="release_date">release date</option>
          <option value="vote_average">vote average</option>
          <option value="runtime">runtime</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
