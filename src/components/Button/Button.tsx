import React from 'react';

import './Button.scss';

interface BtnProp {
  content: string;
  type: 'button' | 'submit';
  btn: string;
}

const Button: React.FC<BtnProp> = ({
  content, type = 'button', btn,
}) => (
  <button
    className={btn}
    type={type === 'button' ? 'button' : 'submit'}
  >
    {content}
  </button>
);

export default Button;
