import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../../Context';
import './Modal.scss';

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const { isModalWindowShown, toggleOpen } = useContext(AppContext);

  const handleClick = () => {
    toggleOpen(false);
  };

  const modalRoot = document.getElementById('modal');
  const div = (
    <div className="modal-backdrop">
      <div className="modal-window">
        <button type="button" className="btn-x" onClick={handleClick}>x</button>
        {children}
      </div>
    </div>
  );

  if (!isModalWindowShown) return null;

  return ReactDOM.createPortal(div, modalRoot);
};
export default Modal;
