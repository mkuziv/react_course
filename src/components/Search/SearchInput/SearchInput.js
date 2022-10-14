import React from 'react';
import './SearchInput.css';

function SearchInput({ searchQuery, setSearchQuery }) {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <input
      value={searchQuery}
      onChange={handleChange}
      className="search-input"
      type="text"
      placeholder="What do you want to watch?"/>
  );
};

export default SearchInput;