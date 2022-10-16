import React from 'react';

import './Title.css';

class Title extends React.PureComponent {
  render() {
    return React.createElement('h1', null, `Hello ${this.props.name}`);
  }
}

export default Title;