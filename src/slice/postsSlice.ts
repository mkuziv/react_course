import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpRequest from '../utils/httpRequest';
import { Filter, SortingValue } from '../types/types';

interface State {
  queryParams: {
    search: string,
    filter: Filter,
    sorting: SortingValue,
    sortOrder: 'desc' | 'asc',
  },
  posts: any,
  isLoading: boolean,
  error: any,
}

const initialState: State = {
  queryParams: {
    search: '',
    filter: 'all',
    sorting: 'release_date',
    sortOrder: 'desc',
  },
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
  reducers: {
    updateSearch(state, action) {
      state.queryParams.search = action.payload;
    },

    updateFilter(state, action) {
      state.queryParams.filter = action.payload;
    },

    updateSort(state, action) {
      state.queryParams.sorting = action.payload;
    },
  },
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

export const { updateSearch, updateFilter, updateSort } = postsSlice.actions;
export const selectAllPosts = (state: State) => state.posts.posts;
export const selectQuery = (state: State) => state.posts.queryParams;

export default postsSlice.reducer;
