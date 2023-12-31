import React, { useState } from "react";
import { useSelector } from "react-redux";
import Hero from "../components/Hero";
import ReportForm from "../components/ReportForm";
import SavedReports from "../components/SavedReports";
import icon from "../assets/icon-img.png";
import SectionTextImgContent from "../sections/SectionTextImgContent";

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
    <main>
      <Hero
        imageUrl="https://images.unsplash.com/photo-1635109836848-770dde2ea546?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subTitle="Cruelty Alert"
        text="Speak for the Voiceless, Report for Change"
        buttonText="Learn more"
        buttonLink="/about"
        altText="Profile of a golden retriver"
      />
      <SectionTextImgContent
        subTitle="Cruelty Alert"
        text="Report and combat animal cruelty with us. Speak up for the voiceless.
        Together, let's create a world where animals are treated with kindness
          and respect. Join the movement for a brighter, compassionate future.
         "
        imageSrc={icon}
        altText="animal cruelty icon"
      />
      <div className="container flex flex-col pb-4 mx-auto lg:flex-row lg:items-center">
        <div className="order-2 sm:my-4 lg:order-1 lg:w-1/2 lg:mr-4">
          <img
            className="w-full h-auto lg:max-w-full lg:h-auto"
            src="https://images.unsplash.com/photo-1592664858934-40ca080ab56b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sad dogs in a cage"
          />
        </div>

        <div className="order-1 lg:order-2 lg:w-1/2">
          <ReportForm onReportSubmit={handleReportSubmit} />
        </div>
      </div>

      {reportSubmitted && (
        <div className="my-4 text-center">
          {showReports ? (
            <SavedReports onCloseReports={handleCloseReports} />
          ) : (
            <button
              className="p-2 mb-4 text-sm font-semibold border border-stone-100 "
              onClick={handleShowReports}
            >
              Show my Reports
            </button>
          )}
        </div>
      )}
    </main>
  );
};

export default Home;
