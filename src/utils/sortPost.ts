import { Post } from '../types/interfaces';

export const sortPostsByRating = (arrayOfPosts: Post[]) => (
  arrayOfPosts.sort((a: Post, b: Post) => b.rating - a.rating)
);

export const sortPostsByDate = (arrayOfPosts: Post[]) => (
  arrayOfPosts.sort((a: Post, b: Post) => a.year - b.year)
);

export const sortPostsByRuntime = (arrayOfPosts: Post[]) => (
  arrayOfPosts.sort((a: Post, b: Post) => a.runtime - b.runtime)
);
