import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpRequest from '../utils/httpRequest';

interface State {
  posts: any
  isLoading: boolean,
  error: any,
}

const initialState: State = {
  posts: [],
  isLoading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (query: string) => {
  const response = await HttpRequest.getMovies(query);
  return response.data.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state: State, action) => {
        state.isLoading = false;
        state.posts = [];
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectAllPosts = (state: State) => state.posts.posts;

export default postsSlice.reducer;
