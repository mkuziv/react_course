import React from 'react';

import './Title.css';

interface TitleProp {
  name: string
}

class Title extends React.PureComponent<TitleProp, {}> {
  render() {
    const { name } = this.props;
    return React.createElement('h1', null, `Hello ${name}`);
  }
}

export default Title;
