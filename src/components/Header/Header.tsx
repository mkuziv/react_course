import React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Title from '../Title/Title';

import './Header.scss';

interface HeaderProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setIsSubmitted: (value: boolean) => void;
}

const Header = ({ searchQuery, setSearchQuery, setIsSubmitted }: HeaderProp) => (
  <header className="header">
    <div className="wrapper">
      <Logo />
      <Button type="button" content=" + add movie" btn="grey" />
    </div>
    <Title name="FIND YOUR MOVIE" />
    <Search
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      setIsSubmitted={setIsSubmitted}
    />
  </header>
);

export default Header;
