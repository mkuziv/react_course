import React, { useMemo, useState } from 'react';
import { Post } from './types/interfaces';

interface IAppContext {
  isModalWindowShown: boolean;
  toggleOpen?: (value: boolean) => void;
  modal: string;
  toggleModal?: (value: string) => void;
  editedPost?: Post | null;
  setEditedPostVal?: (value: Post) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const defaultState: IAppContext = {
  isModalWindowShown: false,
  modal: '',
  editedPost: null,
};

export const AppContext = React.createContext<IAppContext>(defaultState);

export const AppProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState(defaultState.isModalWindowShown);
  const [modal, setModal] = useState(defaultState.modal);
  const [editedPost, setEditedPost] = useState(defaultState.editedPost);

  const toggleOpen = (open: boolean) => {
    setIsOpen(open);
  };

  const toggleModal = (m: string) => {
    setModal(m);
  };

  const setEditedPostVal = (post:Post) => {
    setEditedPost(post);
  };

  const context = useMemo(() => ({
    isModalWindowShown: isOpen, toggleOpen, modal, toggleModal, editedPost, setEditedPostVal,
  }), [isOpen, modal, editedPost]);

  return (
    <AppContext.Provider
      value={context}
    >
      {children}
    </AppContext.Provider>
  );
};
