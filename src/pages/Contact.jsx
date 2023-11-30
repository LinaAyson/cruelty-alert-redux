// Contact.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormSubmitted } from "../reducers/contactSlice"; // Assuming you have a contactSlice
import Hero from "../components/Hero";

const Contact = () => {
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
      <Hero
        imageUrl="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subTitle="Contact"
        text="Have questions or concerns? We're here to help"
        buttonText="Contact"
        buttonLink="/about"
      />
      <div className="container mx-auto p-8">
        {/* Add more content, e.g., contact form */}
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Whether you have questions about our organization, want to ask about
            laws regarding animal abuse, or need more information, feel free to
            reach out to us. Use the contact form below, and we'll get back to
            you as soon as possible.
          </p>
          {/* Add your contact form component here */}
        </div>
        <form
          className="bg-white p-8 rounded shadow-md mx-auto max-w-md w-full"
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
              className="form-input mt-1 block w-full"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              className="form-input mt-1 block w-full"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-2">
            Message:
            <textarea
              className="form-textarea mt-1 block w-full"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button
            className="bg-orange-600 text-white p-2 rounded hover:bg-orange-500"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
