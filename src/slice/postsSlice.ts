import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '../store';
import httpRequest, { Methods } from '../utils/httpRequest';
import { FormValues, Movie } from '../types/interfaces';

interface State {
  posts: Movie[],
  isLoading: boolean,
  error: {},
}

const initialState: State = {
  posts: [],
  isLoading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (query: string) => {
  const response = await httpRequest(('get' as Methods), `?${query}`);
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

export const selectAllPosts = (state: RootState) => state.posts.posts;

export const deleteMovie = (id: number, queryString: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await httpRequest(('delete' as Methods), `/${id}`);
    if (response.status === 204) {
      dispatch(fetchPosts(queryString));
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateMovie = (body: FormValues, queryString: string) => async (
  dispatch: AppDispatch,
) => {
  try {
    const response = await httpRequest(('put' as Methods), '', body);
    if (response.status === 200) {
      dispatch(fetchPosts(queryString));
    }
  } catch (error) {
    console.error(error);
  }
};

export const addMovie = (body: FormValues, queryString: string) => async (
  dispatch: AppDispatch,
) => {
  try {
    const response = await httpRequest(('post' as Methods), '', body);
    if (response.status === 201) {
      dispatch(fetchPosts(queryString));
    }
  } catch (error) {
    console.error(error);
  }
};

export default postsSlice.reducer;
