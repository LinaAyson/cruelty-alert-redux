
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formSubmitted: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFormSubmitted: (state) => {
      state.formSubmitted = true;
    },
    resetForm: (state) => {
      state.formSubmitted = false;
    },
  },
});

export const { setFormSubmitted, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
