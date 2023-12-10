import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribed with email:", email);

    // Clear the input field after subscribing
    setEmail("");
  };

  const handleBlur = () => {
    // Clear the input field when the user clicks outside
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

            <div className="relative md:mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="peer block min-h-[auto] w-full rounded border border-orange-700 text-white bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
              <label
                htmlFor="exampleFormControlInput1"
                className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out ${
                  email ? "text-white" : "text-white"
                } peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none `}
              >
                Email address
              </label>
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
