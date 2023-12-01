import React from "react";
const Hero = ({ imageUrl, subTitle, text, buttonText, buttonLink }) => {
  const dynamicStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    padding: "10rem 2rem",
  };

  return (
    <div style={dynamicStyle}>
      <div className="container flex flex-col items-center justify-center mx-auto text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {subTitle}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl">{text}</p>
        <div className="flex justify-center mx-auto pt-6">
          <button className="px-8 py-3 text-sm text-white uppercase bg-orange-700 rounded-md hover:bg-orange-600">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
