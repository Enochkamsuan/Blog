import { configureStore, createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    editPost: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);

      if (index !== -1) {
        state[index].text = action.payload.text;
      }
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, editPost, deletePost } = postSlice.actions;

const store = configureStore({
  posts: postSlice.reducer,
});

export default store;
