import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/userSlice';
import professorReducer from './Slices/professorSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    professor : professorReducer
  },
});
