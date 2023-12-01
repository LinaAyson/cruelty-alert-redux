import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormSubmitted } from "../reducers/contactSlice";

export default function ContactForm() {
  const dispatch = useDispatch();
  const formSubmitted = useSelector((state) => state.contact.formSubmitted);

  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("contactFormData");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: "",
          email: "",
          message: "",
        };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // You can access the form data from the 'formData' state

    // Save data to localStorage
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    // Dispatch the action to update the state
    dispatch(setFormSubmitted());

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Clear localStorage when the form is submitted
  useEffect(() => {
    if (formSubmitted) {
      localStorage.removeItem("contactFormData");
    }
  }, [formSubmitted]);
  return (
    <div>
      <form
        className="bg-zinc-50 p-8  rounded shadow-md mx-auto max-w-md w-full"
        onSubmit={handleSubmit}
      >
        {formSubmitted && (
          <div className="text-green-600 mb-4">
            Email was successfully sent!
          </div>
        )}
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
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
          Email:*
          <input
            className="form-input mt-1 block w-full bg-white border border-gray-200"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className="block mb-2">
          Message:
          <textarea
            className="form-textarea mt-1 block w-full bg-white border border-gray-200"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <div className="flex justify-center mt-8">
          <button
            className="bg-orange-600 text-white p-2 rounded hover:bg-orange-500"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
