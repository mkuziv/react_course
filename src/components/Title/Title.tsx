import React from 'react';

import './Title.scss';

interface TitleProp {
  name: string
}

const Title = ({ name }: TitleProp) => <h1>{`Hello ${name}`}</h1>;

export default Title;
