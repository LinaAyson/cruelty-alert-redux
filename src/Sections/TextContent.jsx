import React from "react";

const TextContent = ({ subTitle, text }) => {
  return (
    <section>
      <div className="container p-10 mx-auto">
        <h2 className="mb-2 text-3xl font-bold">{subTitle}</h2>
        <p className="mb-3 text-lg">{text}</p>
      </div>
    </section>
  );
};

export default TextContent;
