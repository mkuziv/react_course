import React from 'react';
import './FilterItem.scss';

interface MenuItemProp {
  title: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active: string;
}
const FilterItem = ({ title, handleClick, active }: MenuItemProp) => (
  <button
    type="button"
    className={`menu-item ${(active === title ? 'active' : '')}`}
    onClick={handleClick}
  >
    {title}
  </button>
);

export default FilterItem;
