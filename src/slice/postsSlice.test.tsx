import axios from 'axios';
import store from '../store';
import { Movie } from '../types/interfaces';
import { fetchPosts } from './postsSlice';

jest.mock('axios');

interface ResponseData {
  data: {
    data: Movie[];
  }
}

const resp: ResponseData = {
  data: {
    data: [{
      id: 1,
      title: 'title',
      poster_path: 'path',
      release_date: '2018-12-12',
      runtime: 120,
      vote_average: 7,
      overview: 'overview',
      genres: ['comedy'],
    }],
  },
};

describe('Movies redux state tests', () => {
  it('should initially set posts to an empty object', () => {
    const state = store.getState().posts;
    expect(state.posts).toEqual([]);
  });

  it('should fetch posts', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(resp);
    const result = await store.dispatch(fetchPosts(''));
    const posts = result.payload;

    expect(result.type).toBe('posts/fetchPosts/fulfilled');
    expect(posts[0].id).toEqual(resp.data.data[0].id);

    const statePosts = store.getState().posts.posts;
    expect(statePosts).toEqual(posts);

    const { isLoading } = store.getState().posts;
    expect(isLoading).toBeFalsy();
  });

  it('should get error', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(null);
    const result = await store.dispatch(fetchPosts(null));

    expect(result.type).toBe('posts/fetchPosts/rejected');

    const { isLoading, error } = store.getState().posts;
    expect(isLoading).toBeFalsy();
    expect(error).toEqual("Cannot read property 'data' of null");
  });
});
