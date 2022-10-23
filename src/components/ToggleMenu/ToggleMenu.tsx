import React, { useState } from 'react';
import ToggleItem from './ToggleItem/ToggleItem';
import './ToggleMenu.css';

const ToggleMenu = () => {
  const [active, setActive] = useState<string>('all');
  const menuItem = ['all', 'documentary', 'horror', 'crime'];

  const handleClick = (e: React.SyntheticEvent) => {
    setActive((e.target as HTMLInputElement).innerHTML);
  };

  return (
    <div className="menu-wrapper">
      <ul className="menu">
        {menuItem.map((item) => (
          <ToggleItem handleClick={handleClick} key={`${item}`} title={item} active={active} />
        ))}
      </ul>
    </div>
  );
};

export default ToggleMenu;
