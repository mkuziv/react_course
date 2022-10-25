import React from 'react';
import './SearchInput.css';

interface SearchInputProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchInput = ({ searchQuery, setSearchQuery }: SearchInputProp) => {
  const handleChange = (event: React.ChangeEvent) => {
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
};

export default SearchInput;
