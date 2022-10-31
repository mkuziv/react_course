import React from 'react';
import SearchInput from './SearchInput/SearchInput';

import Button from '../Button/Button';
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
      <Button type="submit" content="search" btn="red-big" />
    </form>
  );
};

export default Search;
