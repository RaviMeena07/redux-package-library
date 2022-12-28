import { createSlice } from "@reduxjs/toolkit";
import { getAllShow } from ".";

export const initialState = {
  allPost: [],
  allShowError: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  extraReducers: {
    [getAllShow.pending]: (state) => {
    },
    [getAllShow.fulfilled]: (state, action) => {
      state.allPost = action.payload.response.data;
    },
    [getAllShow.rejected]: (state, error) => {
      state.allShowError = error.message;
    },
  },
});
export default postSlice.reducer;
