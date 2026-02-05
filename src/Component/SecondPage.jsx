import React, { useState } from 'react';

const SecondPage = () => {
  const [activeStep, setActiveStep] = useState("Connect");

  const steps = [
    "Connect",
    "Test",
    "Certified Data Erasure",
    "Grade",
    "Certify"
  ];

  return (
    <div className="w-full min-h-[90vh] bg-gradient-to-b from-[#e2edf5] to-[#ebebeb] flex items-center justify-center px-4 sm:px-8 py-10">
      <div className='w-full max-w-6xl flex flex-col items-center text-center'>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight mb-10 md:mb-16">
          How M360 <strong className="text-[#b2246a]">streamlines</strong> device diagnostics
        </h1>
        <div className='bg-slate-300/50 backdrop-blur-sm md:rounded inline-flex flex-wrap md:flex-nowrap justify-center items-stretch gap-5 sm:gap-3 shadow-inner md:py-3 md:px-3 md:gap-7'>

          {steps.map((step) => {
            const isActive = activeStep === step;

            return (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`relative px-4 py-3 sm:px-6 sm:py-4 md:px-4 md:py-2  gap-2.5 rounded md:rounded text-sm sm:text-base md:text-base font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-1 focus:ring-[#b2246a] focus:ring-offset-2 focus:ring-offset-transparent
    ${isActive
                    ? 'bg-[#b2246a] text-white shadow-lg scale-100 z-10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-400/20'
                  }
  `}
              >
                {step}
              </button>
            );
          })}

        </div>

      </div>
    </div>
  );
};

export default SecondPage;