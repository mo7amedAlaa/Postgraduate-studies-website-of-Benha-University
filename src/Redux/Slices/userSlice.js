import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  initialState: { reged: false, loged: false, accpet: false },
  name: 'userSlice',
  reducers: {
    reged: (state, action) => {
      return (state.reged = action.payload.reged);
    },
    loged: (state, action) => {
      return (state.loged = action.payload.loged);
    },
    accpet: (state, action) => {
      return (state.accpet = action.payload.accpet);
    },
  },
});
// Action creators are generated for each case reducer function
export const { loged, reged, accpet } = userSlice.actions;

export default userSlice.reducer;
