import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpRequest from '../utils/httpRequest';
import { Filter, SortingValue } from '../types/types';
import getQueryParams from '../utils/getQueryParams';

interface State {
  queryParams: {
    search: string,
    searchBy: string
    filter: Filter,
    sortBy: SortingValue,
    sortOrder: 'desc' | 'asc',
  },
  posts: any,
  isLoading: boolean,
  error: any,
}

const initialState: State = {
  queryParams: {
    search: '',
    searchBy: 'title',
    filter: 'all',
    sortBy: 'release_date',
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
      state.queryParams.sortBy = action.payload;
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
export const selectSort = (state: State) => state.posts.queryParams.sortBy;

export const deleteMovie = (id: number) => async (dispatch: any, getState: any) => {
  const { queryParams } = getState().posts;
  const queryString = getQueryParams(queryParams);
  const response = await HttpRequest.deleteMovie(`${id}`);
  if (response.status === 204) {
    dispatch(fetchPosts(queryString));
  }
};

export const updateSearchQuery = (query: string) => (dispatch: any, getState: any) => {
  const { queryParams } = getState().posts;
  const updatedParams = { ...queryParams, search: query };
  const queryString = getQueryParams(updatedParams);

  dispatch(updateSearch(query));
  dispatch(fetchPosts(queryString));
};

export const updateFilterQuery = (filterVal: string) => (dispatch: any, getState: any) => {
  const { queryParams } = getState().posts;
  const updatedParams = { ...queryParams, filter: filterVal };
  const queryString = getQueryParams(updatedParams);

  dispatch(updateFilter(filterVal));
  dispatch(fetchPosts(queryString));
};

export const updateSortQuery = (sort: string) => (dispatch: any, getState: any) => {
  const { queryParams } = getState().posts;
  const updatedParams = { ...queryParams, sortBy: sort };
  const queryString = getQueryParams(updatedParams);

  dispatch(updateSort(sort));
  dispatch(fetchPosts(queryString));
};

export default postsSlice.reducer;
