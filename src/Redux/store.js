import { configureStore } from '@reduxjs/toolkit';
import professorReducer from './Slices/professorSlice';
import darkModeReducer from './Slices/darkModeSlice';
import userStutusReducer from './Slices/userSlice';
export const store = configureStore({
  reducer: {
    user: userStutusReducer,
    theme: darkModeReducer,
    professor: professorReducer,
  },
});
