import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../agent";


export const deleteArticle = createAsyncThunk(
  'common/deleteArticle',
  agent.Articles.del
)

const initialState = {
  redirectTo: undefined,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(deleteArticle.fulfilled, (state) => {
      state.redirectTo = '/'
    })
  }
})

export default commonSlice.reducer;