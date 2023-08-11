import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../agent";
import { getUser, setToken } from "../features/auth/authSlice";


export const deleteArticle = createAsyncThunk(
  'common/deleteArticle',
  agent.Articles.del
)


export const appLoad = (token) => (dispatch) => {
  dispatch(commonSlice.actions.loadApp())

  if (token) {
    agent.setToken(token)
    dispatch(setToken(token))
    return dispatch(getUser());
  }
}

const initialState = {
  redirectTo: undefined,
  appLoaded: false,
  
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    loadApp(state) {
      state.appLoaded = true
    }
  }
})

export default commonSlice.reducer;