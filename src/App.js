import React, { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Posts from './components/Posts/Posts';
import Counter from './components/Counter/Counter';
import Title from './components/Title/Title';
import ToggleMenu from './components/ToggleMenu/ToggleMenu';

import './App.css';


const App = () => {
  const film_posts = [
    { id: '1', name: 'Pulp fiction' },
    { id: '2', name: 'Bohemian Rhapsody' },
    { id: '3', name: 'Kill Bill: Vol 2' },
    { id: '4', name: 'Avengers: War of Infinity' },
    { id: '5', name: 'Inception' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState(film_posts);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filterPosts = (arrayOfPosts, query) => {

    return arrayOfPosts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query.toLowerCase());
    });
  }

  useEffect(() => {
    if (!searchQuery) setPosts(filterPosts(film_posts, searchQuery));

    if(isSubmitted) {
      setPosts(filterPosts(film_posts, searchQuery));
    }

    setIsSubmitted(false);
  }, [isSubmitted, searchQuery])

  return (
    <>
      <Title  name="World"/>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} setIsSubmitted={setIsSubmitted}/>
      <Posts posts={posts} />
      <Counter />
      <ToggleMenu />
    </>
  )

};

export default App;
