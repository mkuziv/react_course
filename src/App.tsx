import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import ModalManager from './components/ModalManager/ModalManager';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Search from './components/Search/Search';
import { AppContext } from './Context';
import { fetchPosts, selectAllPosts, selectPostStatus } from './slice/postsSlice';
import { useAppDispatch } from './store';

import './App.scss';

const App = () => {
  const { modal, selectedPost } = useContext(AppContext);

  const dispatch = useAppDispatch();
  const posts = useSelector(selectAllPosts);
  console.warn('postsArr', posts);

  const postStatus = useSelector(selectPostStatus);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts('sortBy=release_date&sortOrder=desc'));
    }
  }, [postStatus, dispatch]);

  return (
    <>
      <Header />
      {selectedPost
        ? <MovieDetails />
        : (
          <Search />
        )}
      <Main posts={posts} />
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
