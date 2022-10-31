import React from 'react';
import './FilterItem.scss';

interface MenuItemProp {
  title: string;
  handleClick: (e: React.MouseEvent) => void;
  active: string;
}
const MenuItem = ({ title, handleClick, active }: MenuItemProp) => (
  <button
    type="button"
    className={`menu-item ${(active === title ? 'active' : '')}`}
    onClick={handleClick}
  >
    {title}
  </button>
);

export default MenuItem;
