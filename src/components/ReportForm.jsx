import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReportSubmitted } from "../reducers/reportSlice";

// Custom FileInput component for overwriting the button from type file
const FileInput = ({ handleChange }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
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
      <div className=" flex justify-center">
        <button
          className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 text-sm"
          onClick={handleButtonClick}
        >
          Välj fil
        </button>
      </div>
    </div>
  );
};

// Main ReportForm component
export default function ReportForm({ onReportSubmit }) {
  const dispatch = useDispatch();
  const reportSubmitted = useSelector((state) => state.report.reportSubmitted);

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

    // Form submission logic

    // Save my data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Dispatch the action to update the state with the submitted report
    dispatch(setReportSubmitted(formData));

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
    <div>
      <form
        className="bg-zinc-50 p-8 rounded shadow-lg max-w-md w-full"
        onSubmit={handleSubmit}
      >
        {reportSubmitted && (
          <div className="text-green-600 mb-4">
            Report submitted successfully!
          </div>
        )}
        <h2 className="text-2xl font-bold mb-4">Report Abuse</h2>
        <label className="block mb-2">
          Name:
          <input
            className="form-input mt-1 block w-full bg-white border border-gray-200"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Surname:
          <input
            className="form-input mt-1 block w-full bg-white border border-gray-200"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </label>
        <label className="block mb-2">
          Place:*
          <input
            className="form-input mt-1 block w-full bg-white border border-gray-200"
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
            className="form-textarea mt-1 block w-full bg-white border border-gray-200"
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
            className="bg-orange-600 text-white p-2 rounded hover:bg-orange-500"
            type="submit"
          >
            Send Report
          </button>
        </div>
      </form>
    </div>
  );
}
