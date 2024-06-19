import { createSlice } from '@reduxjs/toolkit';
const userStatusSlice = createSlice({
  name: 'user',
  initialState: { reged: false, loged: false, accpeted: false, UserInfo: {} },
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
    SetUserInfo: (state, action) => {
      state.UserInfo = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { loging, registering, accpeting, SetUserInfo } =
  userStatusSlice.actions;

export default userStatusSlice.reducer;
