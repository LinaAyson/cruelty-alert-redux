import React from "react";
import pic from "../assets/icon-img.png";

export default function SectionTextImage() {
  return (
    <div className="container flex flex-col-reverse items-center justify-center p-8 mx-auto lg:flex-row">
      <div className="max-w-2xl lg:mr-4">
        <h2 className="mb-4 text-3xl font-bold">Cruelty Alert</h2>
        <p className="mb-4 text-md">
          Report and combat animal cruelty with us. Speak up for the voiceless.
          Together, let's create a world where animals are treated with kindness
          and respect. Join the movement for a brighter, compassionate future.
          <span className="font-bold"> #ReportForChange </span>
        </p>
      </div>
      <img
        src={pic}
        alt="Cruelty Alert Icon"
        className="w-2/3 max-w-full mb-4 lg:mb-0 lg:w-1/3 animate-pulse animate-once animate-ease-linear"
      />
    </div>
  );
}
