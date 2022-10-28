import React from 'react';

import './Title.scss';

interface TitleProp {
  name: string
}

const Title = ({ name }: TitleProp) => <h2 className="title">{name}</h2>;

export default Title;
