import React from 'react';
import './SearchInput.css';

function SearchInput() {
  return (
    <input 
      className="search-input"
      type="text"
      id="header-search"
      placeholder="What do you want to watch?"
      name="s" />
  );
};

export default SearchInput;