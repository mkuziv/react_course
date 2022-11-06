import React from 'react';
import './SearchInput.scss';

interface SearchInputProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchInput = ({ searchQuery, setSearchQuery }: SearchInputProp) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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
