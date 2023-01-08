import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import Button from '../Button/Button';
import SearchInput from './SearchInput/SearchInput';

import './Search.scss';
import { fetchPosts } from '../../slice/postsSlice';

const Search = () => {
  const [query, setQuery] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(query.get('search'));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts(`searchBy=title&sortOrder=desc&sortBy=${query.get('sortBy') || ''}&search=${query.get('search') || ''}&filter=${query.get('genre') || ''}`));
    setSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(fetchPosts(`searchBy=title&sortOrder=desc&sortBy=${query.get('sortBy') || ''}&search=${searchQuery}&filter=${query.get('genre') || ''}`));
    if (searchQuery) {
      query.set('search', searchQuery);
      setQuery(query);
      return;
    }
    query.delete('search');
    setQuery(query);
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
