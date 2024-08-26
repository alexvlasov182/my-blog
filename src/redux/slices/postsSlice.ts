import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string
  description: string,
  cover_image: string,
  url?: string
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost: (state, action: PayloadAction<Post>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const {addPost, editPost, deletePost} = postsSlice.actions;
export default postsSlice.reducer;