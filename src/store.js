import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./Redux/Slices/slice";

export default configureStore({
  reducer: postSlice,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});