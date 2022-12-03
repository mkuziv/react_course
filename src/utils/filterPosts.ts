import { Post } from '../types/interfaces';

const filterPostsByName = (arrayOfPosts: Post[], query: string) => {
  if (query === '') return arrayOfPosts;

  return arrayOfPosts.filter((post: Post) => {
    const postName = post.title.toLowerCase();
    return postName.includes(query.toLowerCase());
  });
};

export default filterPostsByName;
