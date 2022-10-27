import React from 'react';
import './ToggleItem.scss';

interface ToggleItemProp {
  title: string;
  handleClick: (e: React.MouseEvent) => void;
  active: string;
}
const ToggleItem = ({ title, handleClick, active }: ToggleItemProp) => (
  <button
    type="button"
    className={`toggle-item ${(active === title ? 'active' : '')}`}
    onClick={handleClick}
  >
    {title}
  </button>
);

export default ToggleItem;
