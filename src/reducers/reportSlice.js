
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reportSubmitted: false,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setReportSubmitted: (state) => {
      state.reportSubmitted = true;
    },
  },
});

export const { setReportSubmitted } = reportSlice.actions;
export default reportSlice.reducer;
