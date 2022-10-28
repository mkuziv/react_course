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
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsSubmitted={setIsSubmitted}
      />
      <Main posts={posts} />
      <Footer />
    </>
  );
};

export default App;
