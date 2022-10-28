import React from 'react';
import ToggleMenu from '../ToggleMenu/ToggleMenu';
import Posts from '../Posts/Posts';
import { Post } from '../../types/interfaces';

import './Main.scss';

interface MainProp {
  posts: Post[];
}

const Main = ({ posts }: MainProp) => (
  <main
    className="main"
  >
    <ToggleMenu />
    <Posts posts={posts} />
  </main>
);

export default Main;
