import React from 'react';
import SearchButton from './SearchButton/SearchButton';
import SearchInput from './SearchInput/SearchInput';

import './Search.scss';

interface SearchProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setIsSubmitted: (value: boolean) => void;
}

const Search = ({ searchQuery, setSearchQuery, setIsSubmitted }: SearchProp) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchButton />
    </form>
  );
};

export default Search;
