import { Post } from '../types/interfaces';

type SortingValue = keyof Post;

const sortPosts = (arrayOfPosts: Post[], valueOfSorting: SortingValue) => (
  arrayOfPosts.sort((a: Post, b: Post) => Number(b[valueOfSorting]) - Number(a[valueOfSorting]))
);

export default sortPosts;
