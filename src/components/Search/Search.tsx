import React from 'react';
import SearchButton from './SearchButton/SearchButton';
import SearchInput from './SearchInput/SearchInput';

import './Search.css';

interface SearchProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setIsSubmitted: (value:boolean) => void;
}

const Search = (props: SearchProp) => {
  const { searchQuery, setSearchQuery, setIsSubmitted } = props;
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsSubmitted(true);
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchButton />
    </form>
  );
};

export default Search;
