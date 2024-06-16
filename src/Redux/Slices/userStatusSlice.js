import { createSlice } from '@reduxjs/toolkit';
const userStatusSlice = createSlice({
  name: 'user',
  initialState: { reged: false, loged: false, accpeted: false },
  reducers: {
    registering: (state, action) => {
      state.reged = action.payload;
      localStorage.setItem('regised', JSON.stringify(action.payload));
    },
    loged: (state, action) => {
      state.loging = action.payload;
      localStorage.setItem('loged', JSON.stringify(action.payload));
    },
    accpeting: (state, action) => {
      state.accpet = action.payload;
      localStorage.setItem('accepted', JSON.stringify(action.payload));
    },
  },
});
// Action creators are generated for each case reducer function
export const { loging, registering, accpeting } = userStatusSlice.actions;

export default userStatusSlice.reducer;
