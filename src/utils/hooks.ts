import { useState, useCallback } from 'react';
import ModalValue from '../types/enums';

const useToggle = () => {
  const [modal, setModal] = useState(null);

  const toggle = useCallback((modalValue: ModalValue | null) => {
    setModal(modalValue);
  }, [modal]);

  return [modal, toggle];
};
export default useToggle;
