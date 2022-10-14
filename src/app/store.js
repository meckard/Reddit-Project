import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  redditReducer  from '../features/RedditJSON/redditSlice'
import IndividualPostSliceReducer from '../features/IndividualPost/IndividualPostSlice';

export const store = configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    individualPost: IndividualPostSliceReducer
  }),
});
