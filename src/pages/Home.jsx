import React, { useState } from "react";
import Hero from "../components/Hero";
import ReportForm from "../components/ReportForm";
import pic from "../assets/icon-c.png";
import SavedReports from "../components/SavedReports";

const Home = () => {
  const [reportSubmitted, setReportSubmitted] = useState(false);
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
        imageUrl="https://images.unsplash.com/photo-1529864539815-de90220aedfb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subTitle="Cruelty Alert"
        text="Speak for the Voiceless, Report for Change"
        buttonText="Learn more"
        buttonLink="/about"
      />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Report Animal Abuse</h2>
        <div className="flex mb-4 ">
          <p className="mt-8 text-md">
            If you've witnessed any form of animal cruelty or suspect that an
            animal is in distress, we encourage you to report it. Your actions
            can make a difference in the lives of animals. You can choose to
            remain anonymous while reporting, ensuring that your concern is
            heard without revealing your identity.
          </p>
          <img src={pic} className="mr-4 h-48" />
        </div>
      </div>

      <div className="flex items-center justify-center my-6">
        <ReportForm onReportSubmit={handleReportSubmit} />
        {reportSubmitted && (
          <div className="bg-red-300">
            {showReports ? (
              <div>
                <SavedReports />
                <button
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-400"
                  onClick={handleCloseReports}
                >
                  Close
                </button>
              </div>
            ) : (
              <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400"
                onClick={handleShowReports}
              >
                Show my Reports
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
