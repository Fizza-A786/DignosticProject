import React from "react";

export const Features = () => {
  return (
    <div className="relative w-full h-[63vh] overflow-hidden bg-[linear-gradient(180deg,_#e2edf5_1%,_#ebebeb_97%)] flex items-center">
      
     <div className="z-20 px-4 sm:px-6 md:px-12 w-full md:max-w-[50%] text-center md:text-left">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight md:leading-tight">
    Take a look at our cutting-edge
    <span className="text-[#AC2065]"> features</span>
  </h1>

  <p className="mt-4 sm:mt-6 text-gray-600 text-lg sm:text-xl md:text-2xl">
    From diagnostics to erasure, our software handles all parts of
    your workflow efficiently! Every tool, tailored to you.
  </p>
</div>
      <div
        className="absolute top-0 right-0 w-[18%] h-full bg-no-repeat  bg-right"
        style={{
          backgroundImage:
            "url('https://m360soft.com/images/features-hero-2.webp')",
          backgroundSize: "contain",
        }}
      ></div>

    </div>
  );
};
