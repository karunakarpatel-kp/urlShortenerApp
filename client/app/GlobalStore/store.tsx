"use client";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import UISlice from "./Slices/UISlice/UISlice";
import URLShortenerSlice from "./Slices/URLShortenerSlice/URLShortenerSlice";
import getTotalURLSlice from "./Slices/getTotalURLSlice/getTotalURLSlice";

const store = configureStore({
  reducer: {
    // UI Slice
    UISlice: UISlice,
    URLShortenerSlice: URLShortenerSlice,
    getTotalURLSlice: getTotalURLSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//? Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
