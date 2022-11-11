import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context';
import { Post } from '../../types/interfaces';

import './Dropdown.scss';

interface DropdownProps {
  post: Post;
}

const Dropdown = ({ post }: DropdownProps) => {
  const { toggleOpen, toggleModal, setEditedPostVal } = useContext(AppContext);
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const handleDeleteClick = () => {
    toggleModal('delete');
    toggleOpen(true);
    setIsDropdownShown(!isDropdownShown);
  };

  const handleEditClick = () => {
    toggleModal('edit');
    toggleOpen(true);
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
