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
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage:
            "url('https://m360soft.com/images/industry/features-bg.svg')",
        }}
      />

      <div className="absolute inset-0 bg-gray-100/40"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-16">
          Key features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {cardsData.slice(0, 3).map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg w-[280px] h-[370px] p-8 flex flex-col items-center text-center"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-16 h-16 mb-6"
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
        <div className="flex justify-center mt-12">
          {cardsData.slice(3).map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg w-[280px] h-[370px] p-8 flex flex-col items-center text-center"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-16 h-16 mb-6"
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
        <div className="flex justify-center mt-16">
          <button className="bg-[#b2246a] hover:bg-[#9d1f5d] text-white px-10 py-4 rounded text-lg font-semibold shadow-lg transition-all">
            Start For Free
          </button>
        </div>

      </div>
    </div>
  );
};

export default FifthPage;