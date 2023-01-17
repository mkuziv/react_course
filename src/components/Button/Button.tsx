import React from 'react';

import './Button.scss';

interface BtnProp {
  content: string;
  type: 'button' | 'submit';
  btn: string;
  onClick?: () => void;
}

const Button: React.FC<BtnProp> = ({
  content, type, btn, onClick,
}) => (
  <button
    className={btn}
    type={type === 'button' ? 'button' : 'submit'}
    onClick={onClick}
  >
    {content}
  </button>
);

export default Button;

Button.defaultProps = {
  onClick: () => {},
};
