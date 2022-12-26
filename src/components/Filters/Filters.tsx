import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
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
  const [search, setSearch] = useSearchParams();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.innerHTML);
    dispatch(updateFilterQuery(e.currentTarget.innerHTML));
    if (e.currentTarget.innerHTML !== filterItems[0]) {
      search.set('genre', e.currentTarget.innerHTML);
      setSearch(search);
      return;
    }
    search.delete('genre');
    setSearch(search);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateSortQuery(e.target.value));
    search.set('sortBy', e.target.value);
    setSearch(search);
  };

  useEffect(() => {
    search.set('sortBy', selectVal);
    setSearch(search);
  }, []);

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
