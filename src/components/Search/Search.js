import React from 'react';
import SearchButton from './SearchButton/SearchButton';
import SearchInput from './SearchInput/SearchInput';

import './Search.css';

const Search = () => (
  <form action="/" method="get" className="search-form">
    <SearchInput />
    <SearchButton />
  </form>
);

export default Search;