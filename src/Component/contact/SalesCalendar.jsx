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
    "7:00pm",
    "7:30pm",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center pt-12 pb-16 font-sans">
      {/* Title */}
      <h1 className="text-[28px] font-semibold text-[#b83280] mb-10">
        Contact Sales
      </h1>

      {/* Main Card */}
      <div className="w-[920px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] grid grid-cols-3 overflow-hidden border border-gray-100">
        {/* Left Panel */}
        <div className="p-8 border-r border-gray-100">
          <div className="flex items-center gap-2 text-[#b83280] text-sm font-medium mb-6">
            <FiCalendar className="text-base" />
            Matyas Kurta
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            30 Min Meeting
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            To respect your time and ensure a focused discussion about your
            used phone business, please answer these brief questions before we
            meet. Looking forward to connecting!
          </p>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border border-gray-400" />
              Requires confirmation
            </div>

            <div className="flex items-center gap-3">
              <FiClock />
              30m
            </div>

            <div className="flex items-center gap-3">
              <FiVideo />
              Zoom Video
            </div>

            <div className="flex items-center gap-3">
              <FiGlobe />
              Asia/Karachi
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="p-8 border-r border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">February 2026</h3>
            <div className="flex items-center gap-3 text-gray-400">
              <FiChevronLeft />
              <FiChevronRight />
            </div>
          </div>

          <div className="grid grid-cols-7 text-[11px] font-medium text-gray-400 mb-3">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
              (d) => (
                <div key={d} className="text-center">
                  {d}
                </div>
              )
            )}
          </div>

          <div className="space-y-2">
            {weeks.map((week, i) => (
              <div key={i} className="grid grid-cols-7 gap-2">
                {week.map((day, idx) => {
                  const isSelected = day === 12;
                  const isDisabled = day === "";

                  return (
                    <div
                      key={idx}
                      className={`h-10 w-10 flex items-center justify-center text-sm rounded-xl
                        ${
                          isSelected
                            ? "bg-[#b83280] text-white"
                            : isDisabled
                            ? ""
                            : "bg-[#f3f4f6] text-gray-700"
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
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">Thu 12</h3>

            <div className="flex items-center gap-2 text-xs font-medium">
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
                className="w-full py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#b83280] hover:text-[#b83280] transition-all duration-200"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-gray-600">
        For specific information contact us by{" "}
        <span className="text-[#b83280] font-medium">
          support@m360soft.com
        </span>
      </p>
    </div>
  );
}
