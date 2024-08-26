import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';

// Configure the Redux store with slices
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

// Export the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;