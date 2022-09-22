import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  redditReducer  from '../features/RedditJSON/redditSlice'

export const store = configureStore({
  reducer: combineReducers({
    reddit: redditReducer,

  }),
});
