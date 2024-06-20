import { createSlice } from '@reduxjs/toolkit';
const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    student: [],
    admin: [],
    head: [],
    professor: [],
    employee: [],
    vice: [],
  },
  reducers: {
    setStudentNotifaction: (state, action) => {
      state.student = [...state.student, action.payload];
      console.log(state.student);
    },
    setAdminNotifaction: (state, action) => {
      state.student = [...state.student, action.payload];
    },
    setHeadNotifaction: (state, action) => {
      state.student = [...state.head, action.payload];
    },
    setProfessorNotifaction: (state, action) => {
      state.student = [...state.professor, action.payload];
    },
    setViceNotifaction: (state, action) => {
      state.student = [...state.vice, action.payload];
    },
    setEmployeeNotifaction: (state, action) => {
      state.student = [...state.employee, action.payload];
    },
    deleteNotification: (state, action) => {
      const TypeDelete = action.payload;
      state[TypeDelete] = []; // Assuming studentIdToDelete is the key for notifications array
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setStudentNotifaction,
  setViceNotifaction,
  setEmployeeNotifaction,
  setHeadNotifaction,
  setProfessorNotifaction,
  setAdminNotifaction,
  deleteNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;
