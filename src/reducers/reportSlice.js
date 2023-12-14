import { createSlice } from "@reduxjs/toolkit";

const loadReports = () => {
  try {
    const storedReports = localStorage.getItem("reports");
    return storedReports ? JSON.parse(storedReports) : [];
  } catch (error) {
    console.error("Error loading reports from localStorage:", error);
    return [];
  }
};

const saveReports = (reports) => {
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
    reports: loadReports(),
  },
  reducers: {
    setReportSubmitted: (state, action) => {
      state.reportSubmitted = true;
      const { name, surname, place, description, photo, submissionTime } = action.payload;

      // Create a new report object with photo data
      const newReport = {
        name,
        surname,
        place,
        description,
        photo,
        submissionTime,
      };

      // Add the new report to the state and save to local storage
      state.reports.push(newReport);
      saveReports(state.reports);
    },
  },
});

export const { setReportSubmitted } = reportSlice.actions;

export default reportSlice.reducer;