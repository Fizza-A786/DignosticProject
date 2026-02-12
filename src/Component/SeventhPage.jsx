import React from "react";

const SeventhPage = () => {
  return (
    <div
      className="w-full min-h-[80vh] relative overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-12"
      style={{
        background: "linear-gradient(180deg, #b2246a, #710038 90.82%)",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-10 opacity-10"
        style={{
          backgroundImage:
            "url('https://m360soft.com/images/home/cta/cta-bg.svg')",
          backgroundSize: "40%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content layer */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center w-full h-full gap-6 md:gap-12">
        {/* Text Section */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Start today with M360 Diagnostics!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mt-4 sm:mt-6">
            One click away
          </p>
          <button className="mt-6 sm:mt-8 py-2 sm:py-3 px-6 sm:px-10 bg-white text-[#b2246a] rounded text-lg sm:text-xl font-semibold hover:bg-gray-300 transition-colors cursor-pointer">
            Start for free
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[55%] flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://m360soft.com/images/home/streamlines/streamlines-visual-4-new.png"
            alt="Streamlines Visual"
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SeventhPage;