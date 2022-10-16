import React from 'react';
import './ToggleItem.css';

const ToggleItem = ({title, handleClick, active}) => {
  return (
    <li className={"toggle-item " + (active === title ? 'active' : '')} onClick={handleClick}>{title}</li>
  )
};

export default ToggleItem;