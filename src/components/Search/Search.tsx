import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import Button from '../Button/Button';
import SearchInput from './SearchInput/SearchInput';
import { updateSearchQuery } from '../../slice/postsSlice';

import './Search.scss';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useSearchParams();

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateSearchQuery(searchQuery));
    if (searchQuery) {
      search.set('search', searchQuery);
      setSearch(search);
      return;
    }
    search.delete('search');
    setSearch(search);
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
