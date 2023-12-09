import { createSlice } from "@reduxjs/toolkit";

const loadReportsFromLocalStorage = () => {
  try {
    const storedReports = localStorage.getItem("reports");
    return storedReports ? JSON.parse(storedReports) : [];
  } catch (error) {
    console.error("Error loading reports from localStorage:", error);
    return [];
  }
};

const saveReportsToLocalStorage = (reports) => {
  try {
    localStorage.setItem("reports", JSON.stringify(reports));
  } catch (error) {
    console.error("Error saving", error);
  }
};

const reportSlice = createSlice({
  name: "report",
  initialState: {
    reportSubmitted: false,
    reports: loadReportsFromLocalStorage(),
  },
  reducers: {
    setReportSubmitted: (state, action) => {
      state.reportSubmitted = true;
      state.reports.push(action.payload);
      saveReportsToLocalStorage(state.reports);
    },
  },
});

export const { setReportSubmitted } = reportSlice.actions;

export default reportSlice.reducer;
