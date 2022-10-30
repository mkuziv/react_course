import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Posts from '../Posts/Posts';
import { Post } from '../../types/interfaces';

import './Main.scss';

interface MainProp {
  posts: Post[];
  active: string;
  setActive: (value: string) => void;
}

const Main = ({ posts, active, setActive }: MainProp) => (
  <main
    className="main"
  >
    <MainMenu active={active} setActive={setActive} />
    <Posts posts={posts} />
  </main>
);

export default Main;
