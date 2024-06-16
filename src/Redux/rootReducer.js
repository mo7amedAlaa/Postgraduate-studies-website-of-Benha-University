import { combineReducers } from '@reduxjs/toolkit';
import userStatusReducer from './Slices/userStatusSlice';
import darkModeReducer from './Slices/darkModeSlice';

const rootReducer = combineReducers({
  user: userStatusReducer,
  theme: darkModeReducer,
});
export default rootReducer;
