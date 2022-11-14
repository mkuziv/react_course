import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context';
import { Post } from '../../types/interfaces';
import ModalValue from '../../types/enums';

import './Dropdown.scss';

interface DropdownProps {
  post: Post;
}

const Dropdown = ({ post }: DropdownProps) => {
  const { toggleModalType, setEditedPostVal } = useContext(AppContext);
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const handleDeleteClick = () => {
    toggleModalType(ModalValue.DELETE);
    setIsDropdownShown(!isDropdownShown);
  };

  const handleEditClick = () => {
    toggleModalType(ModalValue.EDIT);
    setEditedPostVal(post);
    setIsDropdownShown(!isDropdownShown);
  };

  const handleShowButton = () => setIsDropdownShown(!isDropdownShown);

  return (
    <>
      {!isDropdownShown && <button type="button" className="btn-round hov" onClick={handleShowButton}>.</button>}
      {isDropdownShown && (
        <div className="dropdown">
          <button type="button" className="dropdown-btn-x" onClick={handleShowButton}>x</button>
          <ul>
            <li>
              <button type="button" className="dropdown-btn" onClick={handleEditClick}>Edit</button>
            </li>
            <li>
              <button type="button" className="dropdown-btn" onClick={handleDeleteClick}>Delete</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
