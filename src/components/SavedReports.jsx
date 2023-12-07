import React from "react";
import { useSelector } from "react-redux";

const SavedReports = ({ onCloseReports, onShowReports }) => {
  const savedReports = useSelector((state) => state.report.reports);

  return (
    <div className="max-w-screen-lg p-4 mx-auto mt-6 bg-gray-100">
      <h2 className="mb-4 text-lg font-bold">My filed reports</h2>
      <div className="">
        <ul className="">
          {savedReports.map((report, index) => (
            <li
              key={index}
              className="p-4 mb-2 border border-gray-400 rounded-sm"
            >
              <p>Name: {report.name}</p>
              <p>Surname: {report.surname}</p>
              <p>Place: {report.place}</p>
              <p>Description: {report.description}</p>
              <p className="text-green-600">
                Reported in: {report.submissionTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end">
        {onCloseReports && (
          <button
            className="p-2 mt-4 text-sm font-semibold text-black border border-stone-500"
            onClick={onCloseReports}
          >
            Close my reports
          </button>
        )}
        {onShowReports && (
          <button
            className="p-2 text-sm font-semibold text-black border border-stone-500 "
            onClick={onShowReports}
          >
            Show my Reports
          </button>
        )}
      </div>
    </div>
  );
};

export default SavedReports;
