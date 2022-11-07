import React, { useMemo, useState } from 'react';

interface IAppContext {
  isModalWindowShown: boolean;
  toggleOpen?: (value: boolean) => void;
  modal: string;
  toggleModal?: (value: string) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const defaultState = {
  isModalWindowShown: false,
  modal: '',
};

export const AppContext = React.createContext<IAppContext>(defaultState);

export const AppProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState(defaultState.isModalWindowShown);
  const [modal, setModal] = useState(defaultState.modal);

  const toggleOpen = (open: boolean) => {
    setIsOpen(open);
  };

  const toggleModal = (m: string) => {
    setModal(m);
  };

  const context = useMemo(() => ({
    isModalWindowShown: isOpen, toggleOpen, modal, toggleModal,
  }), [isOpen, modal]);

  return (
    <AppContext.Provider
      value={context}
    >
      {children}
    </AppContext.Provider>
  );
};
