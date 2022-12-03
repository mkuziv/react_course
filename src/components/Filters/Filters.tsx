import React from 'react';
import { SortingValue } from '../../types/types';
import FilterItem from './FilterItem/FilterItem';
import './Filters.scss';

interface FiltersProp {
  active: string;
  setActive: (value: string) => void;
  sort: string;
  setSort: (value: SortingValue) => void;
}

const Filters = ({
  active, setActive, sort, setSort,
}: FiltersProp) => {
  const filterItems = ['all', 'documentary', 'comedy', 'horror', 'crime'];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.innerHTML);
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
