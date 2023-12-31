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
    <div className="flex flex-col justify-center lg:flex-row">
      {/* <img src={pic} alt="Cruelty Alert Icon" className="h-32" /> */}
      <div className="w-full lg:w-1/2">
        <form
          className="p-8 border rounded shadow-xl bg-zinc-900 border-zinc-700"
          onSubmit={handleSubmit}
        >
          {formSubmitted && (
            <div className="mb-4 text-green-600">
              Email was successfully sent!
            </div>
          )}
          <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
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
            Email:*
            <input
              className="block w-full mt-1 text-black bg-white border border-gray-200 form-input"
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
              className="block w-full mt-1 text-black bg-white border border-gray-200 form-textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <div className="flex justify-center mt-8">
            <button
              className="rounded px-4 pb-2 pt-2.5 text-xs  cursor-pointer font-medium uppercase text-white  bg-orange-600 hover:bg-orange-500"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
