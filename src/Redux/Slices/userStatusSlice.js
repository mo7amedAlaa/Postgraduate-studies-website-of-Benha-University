import { createSlice } from '@reduxjs/toolkit';
const userStatusSlice = createSlice({
  name: 'user',
  initialState: { reged: false, loged: false, accpeted: false, token: '' },
  reducers: {
    registering: (state, action) => {
      state.reged = action.payload;
    },
    loging: (state, action) => {
      state.loging = action.payload;
    },
    accpeting: (state, action) => {
      state.accpet = action.payload;
    },
    SetUserToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { loging, registering, accpeting, SetUserToken } =
  userStatusSlice.actions;

export default userStatusSlice.reducer;
