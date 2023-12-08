import React from "react";
import ReportForm from "./ReportForm";

const SectionInformation = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center">
      {/* Image container */}
      <div className="order-2 lg:order-1 lg:w-1/2 lg:mr-4">
        <img
          className="w-full h-auto lg:w-auto lg:h-auto"
          src="https://images.unsplash.com/photo-1592664858934-40ca080ab56b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="unhappy dogs"
        />
      </div>

      {/* Form container */}
      <div className="order-1 lg:order-2 lg:w-1/2"></div>
    </div>
  );
};

export default SectionInformation;
