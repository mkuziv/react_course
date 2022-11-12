import React, { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import ModalManager from './components/ModalManager/ModalManager';
import Search from './components/Search/Search';
import filmPosts from './mock';
import { Post } from './types/interfaces';
import { SortingValue } from './types/types';
import { filterPostsByGenre, filterPostsByName } from './utils/filterPosts';
import sortPosts from './utils/sortPost';

import './App.scss';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>(filmPosts);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [active, setActive] = useState('all');
  const [sort, setSort] = useState<SortingValue>('year');

  useEffect(() => {
    setPosts(sortPosts(filmPosts, sort));
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
      <Modal>
        <ModalManager />
      </Modal>
    </>
  );
};

export default App;
