import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import ModalManager from './components/ModalManager/ModalManager';
import Search from './components/Search/Search';
import { SortingValue } from './types/types';
import filterPostsByName from './utils/filterPosts';
import sortPosts from './utils/sortPost';
import { AppContext } from './Context';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { fetchPosts, selectAllPosts, selectPostStatus } from './slice/postsSlice';
import { useAppDispatch } from './store';

import './App.scss';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sort, setSort] = useState<SortingValue>('release_date');
  const { modal, selectedPost } = useContext(AppContext);

  const dispatch = useAppDispatch();
  const posts = useSelector(selectAllPosts);
  console.warn('postsArr', posts);

  const postStatus = useSelector(selectPostStatus);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  useEffect(() => {
    sortPosts(posts, sort);
  }, [sort]);

  useEffect(() => {
    if (!searchQuery) filterPostsByName(posts, searchQuery);

    if (isSubmitted) {
      filterPostsByName(posts, searchQuery);
    }

    setIsSubmitted(false);
  }, [isSubmitted, searchQuery]);

  return (
    <>
      <Header />
      {selectedPost
        ? <MovieDetails />
        : (
          <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setIsSubmitted={setIsSubmitted}
          />
        )}
      <Main posts={posts} sort={sort} setSort={setSort} />
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
