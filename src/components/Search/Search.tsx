import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchInput from './SearchInput/SearchInput';
import Button from '../Button/Button';
import { fetchPosts, selectQuery, updateSearch } from '../../slice/postsSlice';
import { useAppDispatch } from '../../store';
import getQueryParams from '../../utils/getQueryParams';

import './Search.scss';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useAppDispatch();
  const query = useSelector(selectQuery);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(updateSearch(searchQuery));
    const searchQueryValue = getQueryParams(query);

    console.warn('searchQueryValue', searchQueryValue);
    await dispatch(fetchPosts(searchQueryValue));
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
