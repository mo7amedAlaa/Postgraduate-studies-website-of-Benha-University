import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/userSlice';
import professorReducer from './Slices/professorSlice';
import darkModeReducer from './Slices/darkModeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: darkModeReducer,
    professor: professorReducer,
  },
});
