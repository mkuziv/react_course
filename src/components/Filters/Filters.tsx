import React from 'react';
import FilterItem from './FilterItem/FilterItem';
import './Filters.scss';

interface FiltersProp {
  active: string;
  setActive: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
}

const Filters = ({
  active, setActive, sort, setSort,
}: FiltersProp) => {
  const filterItems = ['all', 'documentary', 'comedy', 'horror', 'crime'];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setActive((e.target as HTMLButtonElement).innerHTML);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  return (
    <div className="menu-wrapper">
      <ul className="menu">
        {filterItems.map((item) => (
          <li>
            <FilterItem handleClick={handleClick} key={`${item}`} title={item} active={active} />
          </li>
        ))}
      </ul>
      <div className="sort">
        SORT BY
        <select name="sort" id="movie-select" value={sort} onChange={handleChange}>
          <option value="year">release date</option>
          <option value="rating">rating</option>
          <option value="runtime">runtime</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
