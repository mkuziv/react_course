import React from 'react';
import './SearchInput.css';

interface SearchInputProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

function SearchInput(props: SearchInputProp) {
  const { searchQuery, setSearchQuery } = props;
  const handleChange = (event: React.SyntheticEvent) => {
    setSearchQuery((event.target as HTMLInputElement).value);
  };

  return (
    <input
      value={searchQuery}
      onChange={handleChange}
      className="search-input"
      type="text"
      placeholder="What do you want to watch?"
    />
  );
}

export default SearchInput;
