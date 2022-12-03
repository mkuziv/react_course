import { Post } from '../types/interfaces';

export const filterPostsByName = (arrayOfPosts: Post[], query: string) => {
  if (query === '') return arrayOfPosts;

  return arrayOfPosts.filter((post: Post) => {
    const postName = post.title.toLowerCase();
    return postName.includes(query.toLowerCase());
  });
};

export const filterPostsByGenre = (arrayOfPosts: Post[], genre: string) => {
  if (genre === 'all') return arrayOfPosts;
  return arrayOfPosts.filter((post: Post) => {
    const postGenre = post.genres.toLowerCase();
    return postGenre.includes(genre);
  });
};
