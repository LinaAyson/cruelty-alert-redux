// Home.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReportSubmitted } from "../reducers/reportSlice";
import Hero from "../components/Hero";

const Home = () => {
  const dispatch = useDispatch();
  const reportSubmitted = useSelector((state) => state.report.reportSubmitted);

  const [formData, setFormData] = useState(() => {
    // Load data from localStorage on component mount
    const storedData = localStorage.getItem("formData");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: "",
          surname: "",
          place: "",
          description: "",
          photo: null,
        };
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

    // Handle form submission logic here
    // You can access the form data from the 'formData' state

    // Save data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Dispatch the action to update the state
    dispatch(setReportSubmitted());

    // Clear the form
    setFormData({
      name: "",
      surname: "",
      place: "",
      description: "",
      photo: null,
    });
  };

  // Clear localStorage when the report is submitted
  useEffect(() => {
    if (reportSubmitted) {
      localStorage.removeItem("formData");
    }
  }, [reportSubmitted]);

  return (
    <div>
      <Hero
        imageUrl="https://images.unsplash.com/photo-1529864539815-de90220aedfb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subTitle="Cruelty Alert"
        text="Speak for the Voiceless, Report for Change"
        buttonText="Learn more"
        buttonLink="/about"
      />
      <div className="bg-red-300 min-h-screen flex items-center justify-center">
        <form
          className="bg-white p-8 rounded shadow-md max-w-md w-full"
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
              className="form-input mt-1 block w-full"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-2">
            Surname:
            <input
              className="form-input mt-1 block w-full"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-2">
            Place (required):
            <input
              className="form-input mt-1 block w-full"
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-2">
            Description (required):
            <textarea
              className="form-textarea mt-1 block w-full"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-2">
            Photo:
            <input
              className="form-input mt-1 block w-full"
              type="file"
              name="photo"
              onChange={handleChange}
              accept="image/*"
            />
          </label>
          <button
            className="bg-orange-600 text-white p-2 rounded hover:bg-orange-500"
            type="submit"
          >
            Send Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
