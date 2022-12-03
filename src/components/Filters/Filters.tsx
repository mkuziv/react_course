import React, { useState } from 'react';
import { fetchFilterPostsByGenre } from '../../slice/postsSlice';
import { useAppDispatch } from '../../store';
import { SortingValue } from '../../types/types';
import FilterItem from './FilterItem/FilterItem';
import './Filters.scss';

interface FiltersProp {
  sort: string;
  setSort: (value: SortingValue) => void;
}

const Filters = ({
  sort, setSort,
}: FiltersProp) => {
  const filterItems = ['all', 'documentary', 'comedy', 'horror', 'crime'];
  const [active, setActive] = useState('all');
  const dispatch = useAppDispatch();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.innerHTML);
    dispatch(fetchFilterPostsByGenre(e.currentTarget.innerHTML));
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as SortingValue);
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
        <select name="sort" id="movie-select" value={sort} onChange={handleChange}>
          <option value="release_date">release date</option>
          <option value="vote_average">vote_average</option>
          <option value="runtime">runtime</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
