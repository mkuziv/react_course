import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context';
import ModalValue from '../../types/enums';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import './Header.scss';

const Header = () => {
  const { toggleModalType, selectedMovie, setSelectedMovie } = useContext(AppContext);

  const navigate = useNavigate();

  const handleClick = () => {
    toggleModalType(ModalValue.ADD);
  };

  const handleSearchClick = () => {
    setSelectedMovie(null);
    navigate('/search');
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
