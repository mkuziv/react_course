import React, { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Posts from './components/Posts/Posts';
import Title from './components/Title/Title';
import ToggleMenu from './components/ToggleMenu/ToggleMenu';
import { Post } from './types';

import './App.css';

const App = () => {
  const filmPosts: Post[] = [
    { id: '1', name: 'Pulp fiction' },
    { id: '2', name: 'Bohemian Rhapsody' },
    { id: '3', name: 'Kill Bill: Vol 2' },
    { id: '4', name: 'Avengers: War of Infinity' },
    { id: '5', name: 'Inception' },
  ];

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>(filmPosts);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const filterPosts = (arrayOfPosts: Post[], query: string) => (

    arrayOfPosts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query.toLowerCase());
    })
  );

  useEffect(() => {
    if (!searchQuery) setPosts(filterPosts(filmPosts, searchQuery));

    if (isSubmitted) {
      setPosts(filterPosts(filmPosts, searchQuery));
    }

    setIsSubmitted(false);
  }, [isSubmitted, searchQuery]);

  return (
    <>
      <Title name="World" />
      <ToggleMenu />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsSubmitted={setIsSubmitted}
      />
      <Posts posts={posts} />
    </>
  );
};

export default App;
