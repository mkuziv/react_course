import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import filmPosts from './mock';
import { Post } from './types/interfaces';
import Footer from './components/Footer/Footer';
import { filterPostsByGenre, filterPostsByName } from './utils/filterPosts';
import sortPosts from './utils/sortPost';

import './App.scss';
import Search from './components/Search/Search';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>(filmPosts);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [active, setActive] = useState('all');
  const [sort, setSort] = useState('year');

  useEffect(() => {
    if (sort === 'rating') setPosts(sortPosts(filmPosts, sort));

    if (sort === 'runtime') setPosts(sortPosts(filmPosts, sort));

    if (sort === 'year') setPosts(sortPosts(filmPosts, sort));
  }, [sort]);

  useEffect(() => {
    setPosts(filterPostsByGenre(filmPosts, active));
  }, [active]);

  useEffect(() => {
    if (!searchQuery) setPosts(filterPostsByName(filmPosts, searchQuery));

    if (isSubmitted) {
      setPosts(filterPostsByName(filmPosts, searchQuery));
    }

    setIsSubmitted(false);
  }, [isSubmitted, searchQuery]);

  return (
    <>
      <Header />
      <Search
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
