import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface State {
  posts: any
  status: string,
  error: any,
}

const initialState: State = {
  posts: [],
  status: 'idle',
  error: null,
};

const POSTS_URL = 'http://localhost:4000/movies';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL);
  console.warn('res', response.data.data);
  return response.data.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state: State, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        // eslint-disable-next-line @typescript-eslint/semi
      })
  },
});

export const selectAllPosts = (state: State) => state.posts.posts;
export const selectPostStatus = (state: State) => state.posts.status;

export default postsSlice.reducer;
