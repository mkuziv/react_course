import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Posts from '../Posts/Posts';
import { Post } from '../../types/interfaces';

import './Main.scss';

interface MainProp {
  posts: Post[];
  active: string;
  setActive: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
}

const Main = ({
  posts, active, setActive, sort, setSort,
}: MainProp) => (
  <main
    className="main"
  >
    <MainMenu active={active} setActive={setActive} sort={sort} setSort={setSort} />
    <Posts posts={posts} />
  </main>
);

export default Main;
