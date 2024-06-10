import { createSlice } from '@reduxjs/toolkit';
const darkModeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});
// Action creators are generated for each case reducer function
export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
