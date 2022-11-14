import React, { useContext, useEffect, useState } from 'react';
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
import { AppContext } from './Context';
import MovieDetails from './components/MovieDetails/MovieDetails';

import './App.scss';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>(filmPosts);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [active, setActive] = useState('all');
  const [sort, setSort] = useState<SortingValue>('year');
  const { modal, selectedPost } = useContext(AppContext);

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
      {
        !selectedPost && (
          <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setIsSubmitted={setIsSubmitted}
          />
        )
      }
      {
        selectedPost && (
          <MovieDetails />
        )
      }
      <Main posts={posts} active={active} setActive={setActive} sort={sort} setSort={setSort} />
      <Footer />
      {modal && (
        <Modal>
          <ModalManager />
        </Modal>
      )}
    </>
  );
};

export default App;
