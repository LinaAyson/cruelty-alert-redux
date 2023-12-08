import React from "react";
import { useSelector } from "react-redux";

const SavedReports = ({ onCloseReports, onShowReports }) => {
  const savedReports = useSelector((state) => state.report.reports);

  return (
    <div className="max-w-screen-lg p-4 mx-auto mt-6 ">
      <h2 className="mb-4 text-lg font-bold">My filed reports</h2>
      <div className="">
        <ul className="">
          {savedReports.map((report, index) => (
            <li
              key={index}
              className="p-4 mb-2 border rounded-sm border-zinc-800"
            >
              <p>Name: {report.name}</p>
              <p>Surname: {report.surname}</p>
              <p>Place: {report.place}</p>
              <p>Description: {report.description}</p>
              <p className="text-orange-400">
                Reported in: {report.submissionTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end text-white">
        {onShowReports && (
          <button
            className="p-2 text-sm font-semibold border border-stone-500 "
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
