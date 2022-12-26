import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import ModalValue from '../../types/enums';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import './Header.scss';

const Header = () => {
  const { toggleModalType, selectedMovie, setSelectedMovie } = useContext(AppContext);

  const handleClick = () => {
    toggleModalType(ModalValue.ADD);
  };

  const handleSearchClick = () => {
    setSelectedMovie(null);
  };

  return (
    <header className="header">
      <div className="wrapper container">
        <Logo />
        {!selectedMovie
          ? <Button type="button" content=" + add movie" btn="btn btn-gray btn-small" onClick={handleClick} />
          : <button className="search-btn" type="button" onClick={handleSearchClick}>.</button>}
      </div>
    </header>
  );
};

export default Header;
