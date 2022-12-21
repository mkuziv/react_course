import React, { useMemo, useState } from 'react';
import ModalValue from './types/enums';
import { Post } from './types/interfaces';
import useToggle from './utils/hooks';

interface IAppContext {
  modal: ModalType;
  toggleModalType ?: (value: string | null) => void;
  editedPost?: Post | null;
  setEditedPostVal?: (value: Post) => void;
  selectedPost?: Post | null;
  setSelectedPostVal?: (value: Post) => void;
  deletedMovieID?: number | null;
  setDeletedMovie?: (value: number | null) => void;
}

interface ChildrenProps {
  children: JSX.Element;
}

type ModalType = ModalValue | null;

const defaultState: IAppContext = {
  modal: null,
  editedPost: null,
  selectedPost: null,
  deletedMovieID: null,
};

export const AppContext = React.createContext<IAppContext>(defaultState);

export const AppProvider = ({ children }: ChildrenProps) => {
  const [editedPost, setEditedPost] = useState(defaultState.editedPost);
  const [selectedPost, setSelectedPost] = useState(defaultState.selectedPost);
  const [deletedMovieID, setDeletedMovieID] = useState(defaultState.deletedMovieID);

  const [modal, toggleModalType] = useToggle();

  const setEditedPostVal = (post:Post) => {
    setEditedPost(post);
  };

  const setSelectedPostVal = (post:Post) => {
    setSelectedPost(post);
  };

  const setDeletedMovie = (value: number | null) => {
    setDeletedMovieID(value);
  };

  const context = useMemo(() => ({
    modal,
    toggleModalType,
    editedPost,
    setEditedPostVal,
    selectedPost,
    setSelectedPostVal,
    deletedMovieID,
    setDeletedMovie,
  }), [modal, editedPost, selectedPost, deletedMovieID]);

  return (
    <AppContext.Provider
      value={context}
    >
      {children}
    </AppContext.Provider>
  );
};
