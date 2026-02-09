import { useState } from "react";

const SecondPage = () => {
  const [activeStep, setActiveStep] = useState("Certified Data Erasure");

  const steps = [
    "Connect",
    "Test",
    "Certified Data Erasure",
    "Grade",
    "Certify",
  ];

  const stepData = {
    Connect: {
      title: "Instant device insights",
      description:
        "Access essential information such as IMEI, serial number, device origin, security features, network status, blacklist check and more.",
      button: "start For Free",
      image:
        "https://m360soft.com/images/home/streamlines/streamlines-visual-1-new.png",
    },
    Test: {
      title: "80+ point diagnostic tests",
      description:
        "Evaluate device functionality and detect hidden issues with M360. Leverage fully automated tests powered by advanced AI technology.",
      button: "Start For Free",
      image:
        "https://m360soft.com/images/home/streamlines/streamlines-visual-2-new.png",
    },
    "Certified Data Erasure": {
      title: "ADISA certified data erasure within seconds",
      description:
        "M360 performs data erasure in compliance with ADISA standards, ensuring complete data removal from devices.",
      button: "Start for Free",
      image:
        "https://m360soft.com/images/home/streamlines/streamlines-visual-3-new.png",
    },
    Grade: {
      title: "Grading for used devices",
      description:
        "Evaluate the cosmetic condition of used devices. Utilise various grading systems available at your fingertips.",
      button: "Start for Free",
      image:
        "https://m360soft.com/images/home/streamlines/streamlines-visual-4-new.png",
    },
    Certify: {
      title: "M360 Certifications",
      description:
        "Generate comprehensive, device-specific certifications that enhance consumer trust and boost sales.",
      button:"View sample",
      image:
        "https://m360soft.com/images/home/streamlines/streamlines-visual-5.png",
    },
  };

  const data = stepData[activeStep];

  return (
    <div className="w-full min-h-[60vh] bg-[linear-gradient(180deg,#e2edf5_21.94%,#ebebeb)] flex flex-col items-center py-8 px-4">
      <div className="bg-slate-300/50 backdrop-blur-sm rounded inline-flex flex-wrap md:flex-nowrap justify-center items-center gap-3 shadow-inner px-3 py-2 mb-16">
        {steps.map((step) => {
          const isActive = activeStep === step;
          return (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base font-medium transition-all
                ${
                  isActive
                    ? "bg-[#b2246a] text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
                }`}
            >
              {step}
            </button>
          );
        })}
      </div>
      <div className="w-full grid md:grid-cols-2 gap-4 items-center  md:py-3 md:px-10">
        <div className="flex justify-center">
          <img
            src={data.image}
            alt={activeStep}
            className="max-h-[400px] object-contain"
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-4xl font-extrabold mb-6">
            {data.title}
          </h1>
          <p className="text-gray-600 text-lg md:text-2xl mb-8">
            {data.description}
          </p>
          <button className="bg-[#b2246a] hover:bg-[#9d1f5d] text-white px-8 py-3 rounded-lg font-semibold">
            {data.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;