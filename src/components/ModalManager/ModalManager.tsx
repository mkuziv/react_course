import React, { useContext } from 'react';
import MovieModal from '../MovieModal/MovieModal';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import { AppContext } from '../../Context';
import ModalValue from '../../types/enums';

const ModalManager = () => {
  const { modal } = useContext(AppContext);
  switch (modal) {
    case ModalValue.ADD:
    case ModalValue.EDIT:
      return <MovieModal />;
    default:
      return <DeleteMovie />;
  }
};

export default ModalManager;
