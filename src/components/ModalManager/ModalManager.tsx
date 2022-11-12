import React, { useContext } from 'react';
import MovieModal from '../MovieModal/MovieModal';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import { AppContext } from '../../Context';

const ModalManager = () => {
  const { modal } = useContext(AppContext);
  switch (modal) {
    case 'add':
    case 'edit':
      return <MovieModal />;
    default:
      return <DeleteMovie />;
  }
};

export default ModalManager;
