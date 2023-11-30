// import React from "react";

// const Hero = () => {
//   const imageUrl =
//     "https://images.unsplash.com/photo-1522162363424-d29ded2ad958?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Replace with your image URL

//   const heroStyle = {
//     backgroundImage: `url(${imageUrl})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     color: "white",
//     textAlign: "center",
//     padding: "10rem 2rem",
//   };

//   return (
//     <div style={heroStyle}>
//       <div className="bg-white text-orange-900 p-4">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//           Report Abuse
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl">
//           Speak for the Voiceless, Report for Change
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// Hero.jsx
// Hero.jsx
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
