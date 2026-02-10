import React from "react";

const SeventhPage = () => {
  return (
    <div
      className="md:w-full h-[80vh] relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #b2246a, #710038 90.82%)",
      }}
    >
      {/* background image overlay */}
      <div
        className="absolute inset-2 bg-cover bg-center z-10"
        style={{
          backgroundImage:
            "url('https://m360soft.com/images/home/cta/cta-bg.svg')",
            backgroundSize:"40%",
            backgroundRepeat:"no-repeat",
          opacity: 0.1,
        }}
      ></div>

      {/* content layer (agar future me text/buttons add karne ho) */}
      <div className="relative z-20">
        {/* content here */}
      </div>
    </div>
  );
};

export default SeventhPage;