import React from "react";
import { useSelector } from "react-redux";

const SavedReports = () => {
  const savedReports = useSelector((state) => state.report.reports);

  return (
    <div>
      <h2>Saved Reports</h2>
      <ul>
        {savedReports.map((report, index) => (
          <li key={index}>
            <p>Name: {report.name}</p>
            <p>Surname: {report.surname}</p>
            <p>Place: {report.place}</p>
            <p>Description: {report.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedReports;
