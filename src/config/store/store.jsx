import { configureStore, createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const savedItem = localStorage.getItem("posts");
    return savedItem ? JSON.parse(savedItem) : [];
  } catch (e) {
    return [];
  }
};
const postSlice = createSlice({
  name: "posts",
  initialState: loadState(),
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
  reducer: {
    posts: postSlice.reducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("posts", JSON.stringify(store.getState().posts));
});

export default store;
