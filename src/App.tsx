import React, { useContext } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import ModalManager from './components/ModalManager/ModalManager';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Search from './components/Search/Search';
import { AppContext } from './Context';

import './App.scss';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  const { modal } = useContext(AppContext);
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/search" replace />} />
      </Routes>
      { (pathname.includes('search') || pathname.includes('movie')) && <Main />}
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
