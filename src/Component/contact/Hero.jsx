import React from "react";

const Hero = () => {
  return (
    <section className="py-5 ">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center ">
        <h1 className="text-[60px] font-extrabold mt-10 mb-16  text-[#252525] top-20">
          Contact Us
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 w-full justify-center ">
          {/* Card 1 */}
          <div className="flex flex-col text-left justify-between items-center bg-[#f2f6f9] p-12 rounded-xl shadow-md hover:shadow-lg transition w-full lg:w-1/2">
            <div className="flex flex-col items-start mb-6 text-left">
              <div className="mb-2">
                <p className="text-3xl font-bold m-0 text-[#252525]">
                  Feel free to <span className="text-[#B33077]">reach us</span>
                </p>
              </div>
              <div className="flex flex-col text-gray-700">
                <p className="mt-3 font-semibold text-lg">
                  We're here to help — <span className="text-[#f2f6f9]"></span>{" "}
                  get in touch anytime.
                </p>
                <p className="mt-4 text-gray-800 font-medium text-md">
                  Our support team is here to assist you with any inquiries or
                  to guide you through your next steps.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="bg-[#AC2065] text-white font-semibold px-6 py-3 rounded-md  transition"
            >
              Contact
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between items-center bg-[#f2f6f9] p-10 rounded-xl shadow-md hover:shadow-lg transition w-full lg:w-1/2">
            <div className="flex flex-col items-start mb-6 text-left">
              <div className="mb-2">
                <p className="text-3xl text-[#252525] font-bold m-0">
                  Speak to an <span className="text-[#B33077]">expert</span>
                </p>
              </div>
              <div className="flex flex-col text-gray-700">
                <p className="mt-3 text-gray-800 font-medium text-md">
                  If you're representing a company and looking for tailored
                  solutions, our sales team is ready to assist.
                </p>
                <p className="mt-4 text-gray-800 font-medium text-md">
                  <strong>Book a DEMO</strong> to explore how we can align our
                  services with your business needs and drive measurable
                  results.
                </p>
              </div>
            </div>

            <a
              href="#book"
              className="bg-[#AC2065] text-white font-semibold px-6 py-3 rounded-md  transition"
            >
              Book a DEMO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
