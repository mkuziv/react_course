import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import Button from '../Button/Button';
import SearchInput from './SearchInput/SearchInput';
import { updateSearchQuery } from '../../slice/postsSlice';

import './Search.scss';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateSearchQuery(searchQuery));
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
