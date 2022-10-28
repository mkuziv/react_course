import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
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
    <MainMenu />
    <Posts posts={posts} />
  </main>
);

export default Main;
