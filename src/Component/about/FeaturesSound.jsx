import React from 'react';

const FeaturesSound = () => {
  return (
    <section className="relative w-full min-h-95 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(to right, #f3f3f3, #a4a4a4),
            url('https://m360soft.com/images/bg-mobile-features-try.webp') no-repeat right center
          `,
          backgroundSize: "cover, contain", 
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center w-full gap-8">
        <div className="flex flex-col items-start space-y-4 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-black text-[#2d2d2d] tracking-tight">
            Sounds good?
          </h2>
          <p className="text-lg sm:text-2xl text-black leading-snug">
            All you need is a registration to start <br />
            using <span className="font-bold text-[#2d2d2d]">M360</span> right away!
          </p>

          <button className="mt-4 flex items-center gap-2 bg-[#ae215d] hover:bg-[#8e1a4b] text-white px-6 sm:px-8 py-3 rounded-md font-bold transition-colors">
            Get started for free 
            <span className="text-xl">→</span>
          </button>
        </div>

        <div className="flex justify-center md:justify-end">
          <img 
            src="https://m360soft.com/images/visual-computer-3-2x.png" 
            alt="M360 Laptop" 
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSound;
