import React from 'react';
import Filters from '../Filters/Filters';
import Posts from '../Posts/Posts';
import { Post } from '../../types/interfaces';
import { SortingValue } from '../../types/types';

import './Main.scss';

interface MainProp {
  posts: Post[];
  sort: string;
  setSort: (value: SortingValue) => void;
}

const Main = ({
  posts, sort, setSort,
}: MainProp) => (
  <main
    className="main"
  >
    <div className="container">
      <Filters sort={sort} setSort={setSort} />
      <Posts posts={posts} />
    </div>
  </main>
);

export default Main;
