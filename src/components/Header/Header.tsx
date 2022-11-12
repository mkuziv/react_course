import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import ModalValue from '../../types/enums';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import './Header.scss';

const Header = () => {
  const { toggleModalType } = useContext(AppContext);

  const handleClick = () => {
    toggleModalType(ModalValue.ADD);
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
