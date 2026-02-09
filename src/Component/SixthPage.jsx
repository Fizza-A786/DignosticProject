import React, { useState, useRef, useEffect } from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const cardsData = [
  {
    text: (
      <>
        <strong>
          "The process is <span className='text-[#b2246a]'>very smooth</span>,"
        </strong>{" "}
        and technicians find it easy to learn and develop a habit of consistently using it."
      </>
    ),
    icon: "https://m360soft.com/images/home/features/feature-1.svg",
  },
  {
    text: (
      <>
        <strong>
          "M360 <span className='text-[#b2246a]'>reduced our costs</span> and improved the testing process"
        </strong>{" "}
        because the software is faster than the others we evaluated."
      </>
    ),
    icon: "https://m360soft.com/images/home/features/feature-2.svg",
  },
  {
    text: (
      <>
        "This software handles all the heavy lifting and generates reports.{" "}
        <strong>
          It is <span className='text-[#b2246a]'>user-friendly</span> and more affordable
        </strong>{" "}
        than all competitors."
      </>
    ),
    icon: "https://m360soft.com/images/home/features/feature-4.svg",
  },
  {
    text: (
      <>
        "I recommend M360 every chance I get -{" "}
        <strong>
          the cost <span className='text-[#b2246a]'>effectiveness</span> and intuitiveness
        </strong>{" "}
        of the program is excellent."
      </>
    ),
    icon: "https://m360soft.com/images/home/features/feature-3.svg",
  },
];

// Flickity options
const flickityOptions = {
  cellAlign: "left",
  contain: true,
  pageDots: false, // We'll use custom dots
  prevNextButtons: false,
  groupCells: true,
  wrapAround: true,
};

const FifthPage = () => {
  const flickityRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const flkty = flickityRef.current;
    if (flkty) {
      // Listen to Flickity's change event
      flkty.on("change", (index) => setActiveIndex(index));
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen px-6 py-20 flex flex-col items-center bg-[linear-gradient(180deg,#e2edf5_21.94%,#ebebeb)]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-60"
        style={{
          backgroundImage:
            "url('https://m360soft.com/images/industry/testimonials-bg.svg')",
        }}
      />

      <h1 className="relative text-4xl font-extrabold text-gray-900 mb-14 text-center">
        Key Features
      </h1>

      {/* Flickity Slider */}
      <div className="relative w-full max-w-7xl">
        <Flickity
          className="carousel"
          options={flickityOptions}
          flickityRef={(c) => (flickityRef.current = c)}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white w-[440px] md:w-[480px] h-[280px] md:h-[300px] rounded-2xl shadow-lg mx-3 flex flex-col justify-between p-6 md:p-8"
            >
              <p className="text-gray-900 text-[18px] md:text-[20px] leading-relaxed text-center">
                {card.text}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t mt-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <img src={card.icon} alt="" className="w-6 h-6" />
                </div>
                <span className="font-semibold text-gray-800">M360 Software</span>
              </div>
            </div>
          ))}
        </Flickity>
      </div>

      {/* Custom Dots */}
      <div className="flex gap-3 mt-10">
        {cardsData.map((_, i) => (
          <button
            key={i}
            onClick={() => flickityRef.current.select(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === i ? "bg-[#b2246a] scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FifthPage;