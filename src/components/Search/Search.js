import React from 'react';
import SearchButton from './SearchButton/SearchButton';
import SearchInput from './SearchInput/SearchInput';

import './Search.css';

const Search = ({ searchQuery, setSearchQuery, setIsSubmitted }) => {
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchButton />
    </form>
  )
};

export default Search;