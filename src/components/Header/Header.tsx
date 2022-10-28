import React from 'react';
import Button from '../Button/Button';
import Search from '../Search/Search';
import Title from '../Title/Title';

import './Header.scss';

// interface HeaderProp {
//   posts: Post[];
// }
interface HeaderProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setIsSubmitted: (value: boolean) => void;
}

const Header = ({ searchQuery, setSearchQuery, setIsSubmitted }: HeaderProp) => (
  <header className="header">
    <div className="wrapper">
      <h1 className="logo">
        <span className="bold">netflix</span>
        roulette
      </h1>
      <Button type="button" name=" + add movie" btn="grey" />
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
