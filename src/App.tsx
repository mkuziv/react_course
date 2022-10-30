import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import filmPosts from './mock';
import { Post } from './types/interfaces';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>(filmPosts);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [active, setActive] = useState('all');

  const filterPostsByName = (arrayOfPosts: Post[], query: string) => (

    arrayOfPosts.filter((post: Post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query.toLowerCase());
    })
  );

  const filterPostsByGenre = (arrayOfPosts: Post[], genre: string) => {
    if (genre === 'all') return arrayOfPosts;

    return arrayOfPosts.filter((post: Post) => {
      const postName = post.genre.toLowerCase();
      return postName.includes(genre);
    });
  };

  useEffect(() => {
    setPosts(filterPostsByGenre(filmPosts, active));
  }, [active]);

  useEffect(() => {
    if (!searchQuery) setPosts(filterPostsByName(filmPosts, searchQuery));

    if (isSubmitted) {
      setPosts(filterPostsByName(filmPosts, searchQuery));
    }

    setIsSubmitted(false);
  }, [isSubmitted, searchQuery]);

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsSubmitted={setIsSubmitted}
      />
      <Main posts={posts} active={active} setActive={setActive} />
      <Footer />
    </>
  );
};

export default App;
