import { createAsyncThunk } from "@reduxjs/toolkit";
import { callGetAPI } from "../../Services/ApiServices/api";

export const getAllShow = createAsyncThunk(
  "show/GetAllShow",
  async (params, { rejectWithValue }) => {
    try {
      const response = await callGetAPI(`/posts`);
      return { response };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
