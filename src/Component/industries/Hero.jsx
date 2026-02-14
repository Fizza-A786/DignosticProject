import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] bg-gradient-to-b from-[#e2edf5] to-[#ebebeb] flex items-center justify-center sm:px-18 px-5 ">

      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold w-full">
            The <span className="text-[#b2246a]">#1 Diagnostic Software</span> for used devices
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-700 text-lg sm:text-xl md:text-2xl">
            Increase sales, boost trust and reduce return rates with the industry’s most scalable and cost-effective device diagnostics solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full mt-5">
            <button className="py-2.5 px-5 rounded text-white bg-[linear-gradient(16deg,#981455,#c8317b)] hover:bg-[linear-gradient(16deg,#7a1040,#a11f65)] transition-all duration-300 w-full sm:w-auto text-center cursor-pointer">
              Start For Free
            </button>

            <button
              className="py-2.5 px-5 rounded text-white transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
              style={{ backgroundImage: "linear-gradient(0deg, #1c1c1c, #424242)" }}
              onMouseEnter={e => e.currentTarget.style.backgroundImage = "linear-gradient(16deg, #981455, #c8317b)"}
              onMouseLeave={e => e.currentTarget.style.backgroundImage = "linear-gradient(0deg, #1c1c1c, #424242)"}
            >
              Request a Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center mt-6">
            <div className="w-[70px] h-[50px] flex items-center justify-center">
              <img
                src="https://m360soft.com/images/certs/ISO9001.svg"
                alt="ISO 9001"
                className="h-full object-contain grayscale brightness-75 opacity-80"
              />
            </div>

            <div className="w-[70px] h-[50px] flex items-center justify-center">
              <img
                src="https://m360soft.com/images/certs/ISO27001.svg"
                alt="ISO 27001"
                className="h-full object-contain grayscale brightness-75 opacity-80"
              />
            </div>

            <div className="w-[75px] h-[45px] flex items-center justify-center">
              <img
                src="https://m360soft.com/images/certs/GSMA.svg"
                alt="GSMA"
                className="h-full object-contain grayscale brightness-100 opacity-100"
              />
            </div>

            <div className="w-[120px] h-[50px] flex items-center justify-center">
              <img
                src="https://m360soft.com/images/certs/ADPC209-Level-4.png"
                alt="ADPC"
                className="h-full object-contain grayscale brightness-100 opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section - Right */}
      <div className="hidden lg:flex w-1/2 justify-center">
        <video
          className="w-full h-[500px]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://m360soft.com/videos/home.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default Hero;