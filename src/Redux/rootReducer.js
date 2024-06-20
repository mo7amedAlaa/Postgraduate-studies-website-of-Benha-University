import { combineReducers } from '@reduxjs/toolkit';
import userStatusReducer from './Slices/userStatusSlice';
import darkModeReducer from './Slices/darkModeSlice';
import notificationReducer from './Slices/notificationsSlice';

const rootReducer = combineReducers({
  user: userStatusReducer,
  theme: darkModeReducer,
  notifications: notificationReducer,
});
export default rootReducer;
