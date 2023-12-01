import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report",
  initialState: {
    reportSubmitted: false,
    // Array to store submitted reports
    reports: [],
  },
  reducers: {
    setReportSubmitted: (state, action) => {
      state.reportSubmitted = true;
      // Adding the submitted report to the array
      state.reports.push(action.payload);
    },
    // ... other reducers
  },
});

export const { setReportSubmitted } = reportSlice.actions;

export default reportSlice.reducer;
