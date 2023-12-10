import React from "react";

export default function SectionTextImgContent({
  subTitle,
  text,
  imageSrc,
  altText,
}) {
  return (
    <div className="container flex flex-col-reverse items-center justify-center p-8 mx-auto lg:flex-row">
      <div className="max-w-2xl">
        <h2 className="mb-4 text-4xl font-bold text-center lg:text-5xl">
          {subTitle}
        </h2>
        <p className="mb-4 text-lg md:text-xl">{text}</p>
      </div>
      <img
        src={imageSrc}
        alt={altText}
        className="w-2/3 max-w-full mb-4 lg:mb-0 lg:w-1/3 animate-pulse animate-once animate-ease-linear"
      />
    </div>
  );
}
