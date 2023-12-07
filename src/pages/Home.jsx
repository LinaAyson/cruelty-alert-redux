import React, { useState } from "react";
import { useSelector } from "react-redux";
import Hero from "../components/Hero";
import ReportForm from "../components/ReportForm";
import SavedReports from "../components/SavedReports";
import SectionTextImage from "../components/SectionTextImage";

const Home = () => {
  const [reportSubmitted, setReportSubmitted] = useState(
    useSelector((state) => state.report.reports.length > 0)
  );
  const [showReports, setShowReports] = useState(false);

  const handleReportSubmit = () => {
    setReportSubmitted(true);
  };

  const handleShowReports = () => {
    setShowReports(true);
  };

  const handleCloseReports = () => {
    setShowReports(false);
  };

  return (
    <div>
      <Hero
        imageUrl="https://images.unsplash.com/photo-1635109836848-770dde2ea546?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subTitle="Cruelty Alert"
        text="Speak for the Voiceless, Report for Change"
        buttonText="Learn more"
        buttonLink="/about"
      />
      <SectionTextImage />
      <div className="flex flex-col lg:flex-row lg:px-32">
        {/* ReportForm component */}
        <div className="p-4 lg:w-1/2">
          <ReportForm onReportSubmit={handleReportSubmit} />
        </div>
        <div className="p-4 lg:w-1/2 ">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1592664858934-40ca080ab56b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="unhappy dogs"
          />
        </div>
      </div>
      {reportSubmitted && (
        <div className="mt-4 text-center">
          {showReports ? (
            <SavedReports onCloseReports={handleCloseReports} />
          ) : (
            <button
              className="p-2 text-sm font-semibold border border-stone-100"
              onClick={handleShowReports}
            >
              Show my Reports
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
