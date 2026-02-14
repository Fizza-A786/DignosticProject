import React from "react";
import {
  FiCalendar,
  FiClock,
  FiVideo,
  FiGlobe,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function ContactSalesCalendar() {
  const weeks = [
    ["", "", "", "", "", "", 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, ""],
  ];

  const times = [
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "6:00pm",
    "6:30pm",

  ];

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 pb-8 px-4 sm:px-6 lg:px-0 font-sans bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#b83280] mb-8 text-center">
        Contact Sales
      </h1>

      {/* Main Card */}
      <div className="w-full max-w-[920px] bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-3 overflow-hidden border border-gray-100">
        {/* Left Panel */}
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">
          <div className="flex items-center gap-2 text-[#b83280] text-sm font-medium mb-4">
            <FiCalendar className="text-base" />
            Matyas Kurta
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            30 Min Meeting
          </h2>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
            To respect your time and ensure a focused discussion about your used
            phone business, please answer these brief questions before we meet.
            Looking forward to connecting!
          </p>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border border-pink-900"  />
              Requires confirmation
            </div>

            <div className="flex items-center gap-3">
              <FiClock className=" text-pink-800"/>
              30m
            </div>

            <div className="flex items-center gap-3">
              <FiVideo className=" text-pink-800"/>
              Zoom Video
            </div>

            <div className="flex items-center gap-3 ">
              <FiGlobe className=" text-pink-800" />
              Asia/Karachi
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="p-6 md:py-8 md:px-1.5 border-b md:border-b-0 md:border-r border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
              February 2026
            </h3>
            <div className="flex items-center gap-3 text-gray-400 text-lg">
              <FiChevronLeft className="cursor-pointer hover:text-[#b83280]" />
              <FiChevronRight className="cursor-pointer hover:text-[#b83280]" />
            </div>
          </div>

          {/* Weekday labels */}
          <div className="grid grid-cols-7 text-[10px] sm:text-xs font-medium text-gray-400 mb-2">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
              <div key={d} className="text-center">
                {d}
              </div>
            ))}
          </div>

          {/* Dates */}
          <div className="space-y-2">
            {weeks.map((week, i) => (
              <div key={i} className="grid grid-cols-7 gap-2 sm:gap-2">
                {week.map((day, idx) => {
                  const isSelected = day === 12;
                  const isDisabled = day === "";

                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-center text-sm rounded-lg px-2 py-2 sm:px-3 sm:py-3
                        ${
                          isSelected
                            ? "bg-[#b83280] text-white font-semibold"
                            : isDisabled
                            ? "bg-transparent"
                            : "bg-gray-100 text-gray-700 hover:bg-[#fcd5e5] cursor-pointer transition"
                        }
                      `}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Time Section */}
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
              Thu 12
            </h3>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <span className="px-3 py-1 rounded-md bg-gray-200 text-gray-700">
                12h
              </span>
              <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-500">
                24h
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {times.map((time) => (
              <button
                key={time}
                className="w-full py-3 sm:py-3.5 rounded-xl border border-gray-200 text-sm sm:text-base font-medium text-gray-700 hover:border-[#b83280] hover:text-[#b83280] transition-all duration-200"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 sm:mt-10 text-sm sm:text-base text-gray-600 text-center">
        For specific information contact us by{" "}
        <span className="text-[#b83280] font-medium">
          support@m360soft.com
        </span>
      </p>
    </div>
  );
}
