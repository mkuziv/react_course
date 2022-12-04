import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput/SearchInput';
import Button from '../Button/Button';
import { fetchPosts } from '../../slice/postsSlice';
import { useAppDispatch } from '../../store';

import './Search.scss';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchQuery) {
      dispatch(fetchPosts(`search=${searchQuery}&searchBy=title`));
    }
  };

  useEffect(() => {
    if (!searchQuery) dispatch(fetchPosts('sortBy=release_date&sortOrder=desc'));
  });

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
