import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import postsSlice from './slice/postsSlice';

const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
