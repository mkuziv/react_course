import React from 'react';
import Search from './components/Search/Search';
import Posts from './components/Posts/Posts';


const App = () => {
  const film_posts = [
    { id: '1', name: 'Pulp fiction' },
    { id: '2', name: 'Bohemian Rhapsody' },
    { id: '3', name: 'Kill Bill: Vol 2' },
    { id: '4', name: 'Avengers: War of Infinity' },
    { id: '5', name: 'Inception' },
];
return (
  <>
    <h1>Hello World</h1>
    <Search />
    <Posts posts={film_posts}/>
  </>
)
  
};

export default App;
