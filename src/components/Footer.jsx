import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Check if the email is non-empty and contains @
    if (!email || !email.includes("@")) {
      // Show an error toast
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Stop the function if validation fails
    }

    // Show a success toast
    toast.success("Successfully subscribed to the newsletter!", {
      position: "top-right",
      autoClose: 3000, // Duration in milliseconds
      className: "toast-message",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Clear the input field after subscribing
    setEmail("");
  };

  return (
    <div className="text-center text-gray-100 bg-rose-950">
      <div className="px-6 pt-6">
        <form action="">
          <div className="grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-3">
            <div className="md:mb-6 md:ml-auto">
              <p className="text-gray-100">
                <strong>Sign up for our free newsletter</strong>
              </p>
            </div>

            <div className="relative md:mb-6">
              <input
                type="text"
                value={email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-white bg-transparent border border-orange-700 rounded "
                placeholder="Email address"
              />
            </div>

            <div className="mb-6 md:mr-auto">
              <button
                type="button"
                onClick={handleSubscribe}
                className="inline-block rounded  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white border border-orange-600"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="p-4 text-center">
        <p>© 2023 Copyright</p>
        <a className="text-red" href="/" target="_">
          Cruelty Alert
        </a>
      </div>
    </div>
  );
}
