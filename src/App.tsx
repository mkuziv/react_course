import React, { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Posts from './components/Posts/Posts';
import Title from './components/Title/Title';
import ToggleMenu from './components/ToggleMenu/ToggleMenu';
import { Post } from './types/interfaces';
import filmPosts from './mock';

import './App.scss';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>(filmPosts);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
