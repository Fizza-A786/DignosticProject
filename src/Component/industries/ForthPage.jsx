import { useState } from "react";

const ForthPage = () => {
  const [activeStep, setActiveStep] = useState("WholeSale");

  const steps = ["WholeSale", "Retail", "Refurbishment", "Trade-in", "Repair"];

  const stepData = {
    WholeSale: {
      title: "Scale testing, maximise profit",
      description:
        "M360 streamlines large-volume smartphone testing, ensuring speed and accuracy while minimising human error.",
      button: "Learn More",
      image:
        "https://m360soft.com/images/home/transforms/transforms-visual-1.png",
    },

    Retail: {
      title: "Boost sales by building trust",
      description:
        "Leverage M360 certifications to provide customers with device-specific information, enhancing trust and driving sales.",
      button: "Learn More",
      image:
        "https://m360soft.com/images/home/transforms/transforms-visual-2.png",
    },

    Refurbishment: {
      title: "Ensure premium quality and reduce returns",
      description:
        "M360 empowers refurbishers to evaluate device quality, ensuring a premium standard and reducing costly returns.",
      button: "Learn More",
      image:
        "https://m360soft.com/images/home/transforms/transforms-visual-3.png",
    },

    "Trade-in": {
      title: "Protect against faulty or stolen devices",
      description:
        "Reduce financial risks while enhancing customer satisfaction through accurate diagnostics of trade-in devices.",
      button: "Learn More",
      image:
        "https://m360soft.com/images/home/transforms/transforms-visual-4.png",
    },

    Repair: {
      title: "Quickly identify device issues",
      description:
        "With our 80+ point diagnostic inspection you can easily identify faults helping you to speed up the repair time and boost sales.",
      button: "Learn More",
      image:
        "https://m360soft.com/images/home/transforms/transforms-visual-5.png",
    },
  };

  const data = stepData[activeStep];

  return (
    <div className="w-full min-h-[70vh] bg-[linear-gradient(180deg,#e2edf5_21.94%,#ebebeb)] flex flex-col items-center py-8 px-4">

      {/* Heading */}
      <h1 className="text-4xl sm:text-4xl font-extrabold text-center mt-16">
        <span className="text-[#b2246a]">Transform</span> your business with M360
      </h1>

      {/* Step Buttons */}
      <div className="bg-slate-300/50 backdrop-blur-sm rounded inline-flex flex-wrap md:flex-nowrap justify-center items-center gap-3 shadow-inner px-3 py-2 mt-10">
        {steps.map((step) => {
          const isActive = activeStep === step;

          return (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base font-medium transition-all cursor-pointer
              ${
                isActive
                  ? "bg-[#b2246a] text-white shadow-lg cursor-pointer"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/40 cursor-pointer"
              }`}
            >
              {step}
            </button>
          );
        })}
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-7 items-center md:py-12 mt-10">

        {/* Text LEFT */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-6">
            {data.title}
          </h2>

          <p className="text-gray-600 text-lg md:text-2xl mb-8">
            {data.description}
          </p>

          <button className="bg-[#b2246a] hover:bg-[#9d1f5d] text-white px-8 py-3 rounded font-semibold w-48">
            {data.button}
          </button>
        </div>

        {/* Image RIGHT */}
        <div className="order-1 md:order-2 h-75 w-135 rounded-2xl overflow-hidden bg-white shadow-lg flex items-center justify-center">
          <img
            src={data.image}
            alt={activeStep}
            className="h-full w-full object-contain object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default ForthPage;
