import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchStudentGrades = createAsyncThunk('user/fetchStudentGrades', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    return jsonData;
  });

  //create grades
  export const createGrade = createAsyncThunk(
    'professor/createGrade',
    async (formData) => {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      return result;
    }
  );
export const professorSlice = createSlice({
    name: 'professor',
    initialState: { data: [], loading: false, error: null },
    reducers: {
      // createGrade : (state , action)=>{
      //       state.data.push(action.payload)
      // }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchStudentGrades.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchStudentGrades.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchStudentGrades.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
      });
   },
  });
  // export const { createGrade } = professorSlice.actions

  export default professorSlice.reducer;
