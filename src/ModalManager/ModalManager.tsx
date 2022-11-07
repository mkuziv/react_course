import React, { useContext } from 'react';
import AddMovie from '../components/AddMovie/AddMovie';
import DeleteMovie from '../components/DeleteMovie/DeleteMovie';
import { AppContext } from '../Context';

const ModalManager = () => {
  const { modal } = useContext(AppContext);
  switch (modal) {
    case 'add':
    case 'edit':
      return <AddMovie />;
    default:
      return <DeleteMovie />;
  }
};

export default ModalManager;
