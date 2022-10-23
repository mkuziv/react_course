/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './ToggleItem.css';

interface ToggleItemProp {
  title: string;
  handleClick: (e: React.SyntheticEvent) => void;
  active: string;
}
const ToggleItem = (props: ToggleItemProp) => {
  const { title, handleClick, active } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,
    <li
      className={`toggle-item ${(active === title ? 'active' : '')}`}
      onClick={handleClick}
    >
      {title}
    </li>
  );
};

export default ToggleItem;
