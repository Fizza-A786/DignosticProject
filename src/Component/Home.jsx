import React from "react";

const Home = () => {
  return (
    <div className="w-full h-[100vh] bg-gradient-to-b from-[#e2edf5] to-[#ebebeb] flex items-center justify-center px-18 ">

      <div className="w-[70%] text-left">
        <h1 className="text-5xl font-extrabold w-[100%]">
          The <span className="text-[#b2246a]">#1 Diagnostic Software</span> for used devices
        </h1>
        <p className="mt-6 text-gray-700  text-2xl ">
          Increase sales, boost trust and reduce return rates with the industry’s most scalable and cost-effective device diagnostics solution.
        </p>
        <div className="flex gap-5 w-[100%] mt-5">
          <button className=" py-2.5 px-5 rounded text-white  hover:bg-[linear-gradient(16deg,#7a1040,#a11f65)] transition-all  duration-300 bg-[linear-gradient(16deg,#981455,#c8317b)] ">
            Start For Free
          </button>


          <button
            className="py-2.5 px-5 rounded text-white transition-all duration-300"
            style={{ backgroundImage: "linear-gradient(0deg, #1c1c1c, #424242)", }}
            onMouseEnter={e => e.currentTarget.style.backgroundImage = "linear-gradient(16deg, #981455, #c8317b)"}
            onMouseLeave={e => e.currentTarget.style.backgroundImage = "linear-gradient(0deg, #1c1c1c, #424242)"}
          >
            Request a Demo
          </button>

        </div>
        <div className="flex items-center w-[50%]">
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

          <div className="w-[120px] flex items-center justify-center">
            <img
              src="https://m360soft.com/images/certs/ADPC209-Level-4.png"
              alt="ADPC"
              className="h-[150px] object-contain grayscale brightness-100 opacity-100"
            />
          </div>
        </div>


      </div>

      {/* Video Section - Right */}
      <div className="w-1/2 flex justify-center">
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

export default Home;
