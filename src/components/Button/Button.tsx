import React from 'react';

import './Button.scss';

interface BtnProp {
  name: string;
  type: 'button' | 'submit';
  btn: string;
}

const Button: React.FC<BtnProp> = ({
  name, type = 'button', btn,
}) => (
  <button
    className={btn}
    type={type === 'button' ? 'button' : 'submit'}
  >
    {name}
  </button>
);

export default Button;
