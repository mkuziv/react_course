import React, { useContext } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import ModalManager from './components/ModalManager/ModalManager';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Search from './components/Search/Search';
import { AppContext } from './Context';

import './App.scss';

const App = () => {
  const { modal, selectedPost } = useContext(AppContext);

  return (
    <>
      <Header />
      {selectedPost
        ? <MovieDetails />
        : (
          <Search />
        )}
      <Main />
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
