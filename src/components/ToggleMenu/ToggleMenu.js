import React, { useState } from 'react';
import ToggleItem from './ToggleItem/ToggleItem';
import './ToggleMenu.css';

const ToggleMenu = () => {
  const [active, setActive] = useState('all');
  const menuItem = ['all', 'documentary', 'horror', 'crime'];

  const handleClick = (e) => {
    setActive(e.target.innerHTML);
  }

  return (
    <div className='menu-wrapper'>
      <ul className='menu'>
        {menuItem.map((item, i) => {
          return (
            <ToggleItem handleClick={handleClick} key={`${item}-${i}`} title={item} active={active} />
          )
        })}
      </ul>
    </div>
  )
};

export default ToggleMenu;