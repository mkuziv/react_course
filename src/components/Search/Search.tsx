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
    <section className="search">
      <div className="wrapper">
        <h2 className="h2">FIND YOUR MOVIE</h2>
        <br />
        <form className="search-form" onSubmit={handleSubmit}>
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Button type="submit" content="search" btn="btn btn-big btn-red" />
        </form>
      </div>
    </section>
  );
};

export default Search;
