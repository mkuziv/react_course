import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../Context';
import './Modal.scss';

interface ModalProps {
  children: JSX.Element
}

const Modal = ({ children }: ModalProps) => {
  const { toggleModalType } = useContext(AppContext);

  const handleClick = () => {
    toggleModalType(null);
  };

  const modal = (
    <div className="modal-backdrop">
      <div className="modal-window">
        <button type="button" className="btn-x" onClick={handleClick}>x</button>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
};
export default Modal;
