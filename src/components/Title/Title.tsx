import React from 'react';

import './Title.scss';

interface TitleProp {
  name: string;
  className: string;
}

const Title = ({ name, className }: TitleProp) => {
  if (className === 'h2') return <h2 className={className}>{name}</h2>;
  if (className === 'h3') return <h3 className={className}>{name}</h3>;

  return <h5 className={className}>{name}</h5>;
};

export default Title;
