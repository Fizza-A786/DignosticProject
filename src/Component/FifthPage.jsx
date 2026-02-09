import React from "react";

const cardsData = [
  {
    title: "Diagnostics",
    description:
      "Perform an 80+ point diagnostic inspection to evaluate device functionality and detect hidden issues.",
    icon: "https://m360soft.com/images/home/features/wave-pulse.png",
  },
  {
    title: "Batch Processing",
    description:
      "Manage multiple devices simultaneously for diagnostics, certified erasure, and exporting results.",
    icon: "https://m360soft.com/images/home/features/layers.png",
  },
  {
    title: "OEM Check (iOS)",
    description:
      "Our software is designed to identify non-OEM parts helping you determine the true value of used devices.",
    icon: "https://m360soft.com/images/home/features/bag-check.png",
  },
  {
    title: "Certified Erasure",
    description:
      "Perform data erasure in compliance with ADISA standards, ensuring complete data removal from devices.",
    icon: "https://m360soft.com/images/home/features/trash.png",
  },
];

const FifthPage = () => {
  return (
    <div className="relative w-full min-h-screen px-6 py-20 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage:
            "url('https://m360soft.com/images/industry/features-bg.svg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-100/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto ">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
          Key features
        </h1>

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {cardsData.slice(0, 3).map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-2xl w-[270px] h-[380px] p-8 flex flex-col items-center text-center"
            >
              <img
                src={card.icon}
                alt=""
                className="w-19 h-19 mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 text-[20px] font-semibold">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Center Card */}
        <div className="flex justify-center mt-12">
          {cardsData.slice(3, 4).map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-2xl w-[270px] h-[380px] p-8 flex flex-col items-center text-center"
            >
              <img
                src={card.icon}
                alt=""
                className="w-19 h-19 mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 text-[20px] font-semibold">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FifthPage;