import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <Logo />
      <Button type="button" content=" + add movie" btn="grey" />
    </div>
  </header>
);

export default Header;
