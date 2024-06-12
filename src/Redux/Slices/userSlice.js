import { createSlice } from '@reduxjs/toolkit';
const userStutusSlice = createSlice({
  name: 'user',
  initialState: { reged: false, loged: false, accpeted: false },
  reducers: {
    registering: (state, action) => {
      state.reged = action.payload;
    },
    loged: (state, action) => {
      state.loging = action.payload;
    },
    accpeting: (state, action) => {
      state.accpet = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { loging, registering, accpeting } = userStutusSlice.actions;

export default userStutusSlice.reducer;
