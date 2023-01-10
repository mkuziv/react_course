import React, { useMemo, useState, createContext } from 'react';
import ModalValue from './types/enums';
import { Movie } from './types/interfaces';
import useToggle from './utils/hooks';

interface IAppContext {
  modal: ModalType;
  toggleModalType ?: (value: string | null) => void;
  editedMovie?: Movie | null;
  setEditedMovie?: (value: Movie) => void;
  selectedMovie?: Movie | null;
  setSelectedMovie?: (value: Movie) => void;
  deletedMovieID?: number | null;
  setDeletedMovie?: (value: number | null) => void;
}

interface ChildrenProps {
  children: JSX.Element;
}

type ModalType = ModalValue | null;

const defaultState: IAppContext = {
  modal: null,
  editedMovie: null,
  selectedMovie: null,
  deletedMovieID: null,
};
export const AppContext = createContext<IAppContext>(defaultState);

export const AppProvider = ({ children }: ChildrenProps) => {
  const [editedMovie, setEdited] = useState(defaultState.editedMovie);
  const [selectedMovie, setSelected] = useState(defaultState.selectedMovie);
  const [deletedMovieID, setDeleted] = useState(defaultState.deletedMovieID);

  const [modal, toggleModalType] = useToggle();

  const setEditedMovie = (movie:Movie) => {
    setEdited(movie);
  };

  const setSelectedMovie = (movie:Movie) => {
    setSelected(movie);
  };

  const setDeletedMovie = (value: number | null) => {
    setDeleted(value);
  };

  const context = useMemo(() => ({
    modal,
    toggleModalType,
    editedMovie,
    setEditedMovie,
    selectedMovie,
    setSelectedMovie,
    deletedMovieID,
    setDeletedMovie,
  }), [modal, editedMovie, selectedMovie, deletedMovieID]);

  return (
    <AppContext.Provider
      value={context}
    >
      {children}
    </AppContext.Provider>
  );
};
