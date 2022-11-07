import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import './Header.scss';

const Header = () => {
  const { toggleModal, toggleOpen } = useContext(AppContext);
  const handleClick = () => {
    toggleModal('add');
    toggleOpen(true);
  };

  return (
    <header className="header">
      <div className="wrapper container">
        <Logo />
        <Button type="button" content=" + add movie" btn="btn btn-gray btn-small" onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
