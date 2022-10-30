import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './MainMenu.scss';

interface MainMenuProp {
  active: string;
  setActive: (value: string) => void;
}

const MainMenu = ({ active, setActive }: MainMenuProp) => {
  const menuItem = ['all', 'documentary', 'horror', 'crime'];

  const handleClick = (e: React.MouseEvent) => {
    setActive((e.target as HTMLInputElement).innerHTML);
  };

  return (
    <div className="menu-wrapper">
      <ul className="menu">
        {menuItem.map((item) => (
          <MenuItem handleClick={handleClick} key={`${item}`} title={item} active={active} />
        ))}
      </ul>
      <div className="sort">
        SORT BY
        <select name="sort" id="movie-select">
          <option value="release date">release date</option>
          <option value="rating">rating</option>
          <option value="rantime">rantime</option>
        </select>
      </div>
    </div>
  );
};

export default MainMenu;
