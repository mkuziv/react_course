import React from 'react';
import { Post } from '../../types/interfaces';
import Filters from '../Filters/Filters';
import Posts from '../Posts/Posts';

import './Main.scss';

interface MainProp {
  posts: Post[];
}

const Main = ({ posts }: MainProp) => (
  <main
    className="main"
  >
    <div className="container">
      <Filters />
      <Posts posts={posts} />
    </div>
  </main>
);

export default Main;
