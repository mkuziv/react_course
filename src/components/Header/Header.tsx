import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="wrapper container">
      <Logo />
      <Button type="button" content=" + add movie" btn="btn btn-gray btn-small" />
    </div>
  </header>
);

export default Header;
