import React from 'react';
import Filters from '../Filters/Filters';
import Movies from '../Movies/Movies';

import './Main.scss';

const Main = () => (
  <main
    className="main"
  >
    <div className="container">
      <Filters />
      <Movies />
    </div>
  </main>
);

export default Main;
