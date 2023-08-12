import { configureStore } from '@reduxjs/toolkit';
// import { connectRouter, routerMiddleware } from 'connected-react-router';

import authReducer from '../features/auth/authSlice';
import commentsReducer from '../features/comments/commentsSlice'
import tagsReducer from '../features/tags/tagsSlice';

// import history from './history';
import { localStorageMiddleware } from './middleware';
import articleReducer from '../reducers/article';
import articlesReducer from '../reducers/articleList';
import commonReducer from '../reducers/common';
import profileReducer from '../reducers/profile';

export function makeStore(preloadedState) {
  return configureStore({
    reducer: {
      articleList: articlesReducer,
      tags: tagsReducer,
      common: commonReducer,
      article: articleReducer,
      profile: profileReducer,
      auth: authReducer,
        comments: commentsReducer,
    },
    devTools: true,
    preloadedState,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      // routerMiddleware(history),
      localStorageMiddleware,
    ],
  });
}

const store = makeStore();

export default store;
