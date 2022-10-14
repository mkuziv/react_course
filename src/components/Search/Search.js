import React from 'react';
import SearchButton from './SearchButton/SearchButton';
import SearchInput from './SearchInput/SearchInput';

import './Search.css';

const Search = ({ searchQuery, setSearchQuery }) => (
  <form className="search-form">
    <SearchInput  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    <SearchButton />
  </form>
);

export default Search;