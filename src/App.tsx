import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import filmPosts from './mock';
import { Post } from './types/interfaces';
import Footer from './components/Footer/Footer';
import { filterPostsByGenre, filterPostsByName } from './utils/filterPosts';
import sortPosts from './utils/sortPost';
import { SortingValue } from './types/types';
import Search from './components/Search/Search';
import Modal from './components/Modal/Modal';
import { AppProvider } from './Context';

import './App.scss';
import ModalManager from './ModalManager/ModalManager';

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
    <AppProvider>
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
    </AppProvider>
  );
};

export default App;
