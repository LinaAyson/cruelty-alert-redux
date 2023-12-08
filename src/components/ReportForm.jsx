import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReportSubmitted } from "../reducers/reportSlice";

// my custom FileInput component for overwriting the button from 'type' file
const FileInput = ({ handleChange }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <div className="relative">
      <input
        className="hidden"
        type="file"
        name="photo"
        ref={fileInputRef}
        onChange={handleChange}
        accept="image/*"
      />
      <div className="flex justify-center">
        <button
          className="px-2 py-1 text-sm text-white bg-gray-700 hover:bg-gray-600"
          onClick={(e) => handleButtonClick(e)}
        >
          Choose file
        </button>
      </div>
    </div>
  );
};

// main ReportForm component
export default function ReportForm({ onReportSubmit }) {
  const dispatch = useDispatch();
  const reportSubmitted = useSelector((state) => state.report.reportSubmitted);
  const [reports, setReports] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    place: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "photo" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Form submission logic

    // Save my data to localStorage with the current date and time
    const reportData = {
      ...formData,
      submissionTime: formattedDate,
    };
    // reports.push(reportData);
    // localStorage.setItem("formData", JSON.stringify(reports));

    // Dispatch the action to update the state with the submitted report
    dispatch(setReportSubmitted(reportData));

    // Clear the form fields
    setFormData({
      name: "",
      surname: "",
      place: "",
      description: "",
      photo: null,
    });

    // Trigger the callback if provided
    if (onReportSubmit) {
      onReportSubmit();
    }
  };

  return (
    <div className="flex justify-center ">
      <form
        className="w-full max-w-lg p-8 border rounded shadow-xl bg-zinc-900" // Set explicit height
        onSubmit={handleSubmit}
      >
        {reportSubmitted && (
          <div className="mb-4 text-green-600">
            Report submitted successfully!
          </div>
        )}
        <h2 className="mb-4 text-2xl font-bold">Report Abuse</h2>

        <label className="block mb-2">
          Name:
          <input
            className="block w-full mt-1 text-black bg-white border border-gray-200 form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Surname:
          <input
            className="block w-full mt-1 text-black bg-white border border-gray-200 form-input"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Place:*
          <input
            className="block w-full mt-1 text-black bg-white border border-gray-200 form-input"
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Description:*
          <textarea
            className="block w-full mt-1 text-black bg-white border border-gray-200 form-textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>

        <div className="flex items-center">
          <label className="mr-2">Photo:</label>
          <FileInput handleChange={handleChange} />
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="rounded px-4 pb-2 pt-2.5 text-xs font-medium uppercase text-white border bg-orange-600 hover:bg-orange-500"
            type="submit"
          >
            send Report
          </button>
        </div>
      </form>
    </div>
  );
}
