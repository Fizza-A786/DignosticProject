import React from "react";

const ThirdPage = () => {
  return (
    <div className="relative w-full min-h-[70vh] flex flex-col items-center justify-center py-12 px-6 bg-gray-100">
      
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://m360soft.com/images/visual-wifi-2x.png')",
          opacity: 0.3,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-6xl">
        <h1 className="text-5xl font-extrabold mb-12">
          <span className="text-[#b2246a]">Easy </span>integration
        </h1>

        {/* 4 Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-center">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://m360soft.com/images/visual-devices-1-2x.png"
              alt=""
              className="w-47 h-47 object-contain mb-4"
            />
            <p className="font-semibold text-[20px] text-gray-700" >
              <b>M360</b> Mobile Apps <br /> for <b>Android & iOS</b> 
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img
              src="	https://m360soft.com/images/mac-os/laptop.png"
              alt=""
              className="w-50 h-50 object-contain mb-4"
            />
            <p className="font-semibold text-[20px] text-gray-700">
             <b>M360</b>  Desktop App <br /> for <b>Windows</b>
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://m360soft.com/images/mac-os/laptop-mac.png"
              alt=""
              className="w-50 h-50 object-contain mb-4"
            />
            <p className="font-semibold text-[20px] text-gray-700">
             <b>M360 </b> Desktop App <br /> for <b> macOS</b>
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <img
              src="https://m360soft.com/images/visual-dashboard-1-2x.png"
              alt=""
              className="w-47 h-47 object-contain mb-4"
            />
            <p className="font-semibold text-[20px] text-gray-700">
             <b> M360</b> Dashboard, <br /> Cloud Storage & API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;