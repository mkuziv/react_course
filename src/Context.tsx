import React, { useMemo, useState } from 'react';
import ModalValue from './types/enums';
import { Post } from './types/interfaces';

interface IAppContext {
  modal: ModalType;
  toggleModalType ?: (value: string) => void;
  editedPost?: Post | null;
  setEditedPostVal?: (value: Post) => void;
}

interface ChildrenProps {
  children: JSX.Element;
}

type ModalType = ModalValue | null;

const defaultState: IAppContext = {
  modal: null,
  editedPost: null,
};

export const AppContext = React.createContext<IAppContext>(defaultState);

export const AppProvider = ({ children }: ChildrenProps) => {
  const [modal, setModal] = useState(defaultState.modal);
  const [editedPost, setEditedPost] = useState(defaultState.editedPost);

  const toggleModalType = (m: ModalType) => {
    setModal(m);
  };

  const setEditedPostVal = (post:Post) => {
    setEditedPost(post);
  };

  const context = useMemo(() => ({
    modal, toggleModalType, editedPost, setEditedPostVal,
  }), [modal, editedPost]);

  return (
    <AppContext.Provider
      value={context}
    >
      {children}
    </AppContext.Provider>
  );
};
