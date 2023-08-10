import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import agent from '../agent';

export const getArticle = createAsyncThunk(
  'article/getArticle',
  agent.Articles.get
);


const initialState = {
  article: undefined,
  inProgress: false,
  errors: undefined,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    articlePageUnloaded: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getArticle.fulfilled, (state, action) => {
      state.article = action.payload.article
      state.inProgress = false
    })

    builder.addMatcher(
      (action) => action.type.endsWith('/pending'),
      (state) => {
        state.inProgress = true;
      }
    );

    builder.addDefaultCase((state) => {
      state.inProgress = false;
    });
    
  }
})

export const { articlePageUnloaded } = articleSlice.actions;

export default articleSlice.reducer;