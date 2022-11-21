import { configureStore } from "@reduxjs/toolkit";
import starReducer from "../redux/starSlice";
import detailReducer from "./detailsSlice";

export const store = configureStore({
  reducer: {
    starWars: starReducer,
    starDetails: detailReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
