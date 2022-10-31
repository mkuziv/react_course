import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import filmPosts from './mock';
import { Post } from './types/interfaces';
import Footer from './components/Footer/Footer';
import { filterPostsByGenre, filterPostsByName } from './utils/filterPosts';
import { sortPostsByRating, sortPostsByDate, sortPostsByRuntime } from './utils/sortPost';

import './App.scss';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>(filmPosts);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [active, setActive] = useState('all');
  const [sort, setSort] = useState('date');

  useEffect(() => {
    if (sort === 'rating') setPosts(sortPostsByRating(filmPosts));

    if (sort === 'rantime') setPosts(sortPostsByRuntime(filmPosts));

    if (sort === 'date')setPosts(sortPostsByDate(filmPosts));

    setActive('all');
    setSearchQuery('');
  }, [sort]);

  useEffect(() => {
    setPosts(filterPostsByGenre(filmPosts, active));
    setSearchQuery('');
    setSort('date');
  }, [active]);

  useEffect(() => {
    if (!searchQuery) setPosts(filterPostsByName(filmPosts, searchQuery));

    if (isSubmitted) {
      setPosts(filterPostsByName(filmPosts, searchQuery));
    }
    setActive('all');
    setSort('date');

    setIsSubmitted(false);
  }, [isSubmitted, searchQuery]);

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsSubmitted={setIsSubmitted}
      />
      <Main posts={posts} active={active} setActive={setActive} sort={sort} setSort={setSort} />
      <Footer />
    </>
  );
};

export default App;
