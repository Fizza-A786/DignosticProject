import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

const Pricing2 = () => {
  const [showTable, setShowTable] = useState(false);

  const Check = () => (
    <FiCheck className="text-[#b2246a] mx-auto text-lg" />
  );

  return (
    <div className="w-full py-12 flex flex-col items-center px-4">
      
      {/* Toggle Button */}
      <button
        onClick={() => setShowTable(!showTable)}
        className="bg-[#b2246a] py-3 px-8 text-white rounded-lg mb-8 hover:bg-pink-900 transition font-semibold shadow-md"
      >
        Compare Features
      </button>

      {showTable && (
        <div className="w-full max-w-6xl bg-white shadow-xl rounded-xl border overflow-x-auto">
          
          <table className="w-full min-w-[720px] text-sm text-center border-collapse">
            
            {/* Header */}
            <thead className="bg-gray-100 text-black font-semibold">
              <tr>
                <th className="p-4 text-left font-extrabold">Features</th>

                <th className="p-4 border-l border-gray-200">
                  <div className="font-extrabold text-[#b2246a] text-lg">
                    Starter
                  </div>
                  <div className="text-xl font-bold mt-1">€348/year</div>
                </th>

                <th className="p-4 border-l border-gray-200">
                  <div className="font-extrabold text-[#b2246a] text-lg">
                    Professional
                  </div>
                  <div className="text-xl font-bold mt-1">€1,548/year</div>
                </th>

                <th className="p-4 border-l border-gray-200">
                  <div className="font-extrabold text-[#b2246a] text-lg">
                    Business
                  </div>
                  <div className="text-xl font-bold mt-1">€2,868/year</div>
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="text-black">

              {[
                ["Unique Devices", "200", "1,000", "2,000"],
                ["IMEI Blacklist Checks", "50", "200", "500"],
                ["Workstations", "1", "3", "10"],
                ["Work History", "6 Months", "12 Months", "24 Months"],
              ].map((row, i) => (
                <tr key={i} className="border-t hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">{row[0]}</td>
                  <td className="border-l border-gray-200 p-4">{row[1]}</td>
                  <td className="border-l border-gray-200 p-4">{row[2]}</td>
                  <td className="border-l border-gray-200 p-4">{row[3]}</td>
                </tr>
              ))}

              {/* Business Features */}
              {[
                "Device diagnostics",
                "Device grading",
                "Device certification",
                "Certified device data erasure",
              ].map((feature, i) => (
                <tr key={i} className="border-t hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">{feature}</td>
                  <td className="border-l border-gray-200 p-4">—</td>
                  <td className="border-l border-gray-200 p-4">—</td>
                  <td className="border-l border-gray-200 p-4">
                    <Check />
                  </td>
                </tr>
              ))}

              {/* SIM Lock */}
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-4 text-left font-medium">SIM Lock Checks</td>
                <td className="border-l border-gray-200 p-4"><Check /></td>
                <td className="border-l border-gray-200 p-4"><Check /></td>
                <td className="border-l border-gray-200 p-4"><Check /></td>
              </tr>

              {/* Buttons */}
              <tr className="border-t bg-gray-50">
                <td></td>

                {[1, 2, 3].map((_, i) => (
                  <td key={i} className="border-l border-gray-200 p-4 text-center">
                    <button className="bg-[#b2246a] w-full max-w-[150px] mx-auto text-white py-2 rounded-lg hover:bg-pink-700 transition font-semibold shadow">
                      Configure
                    </button>
                  </td>
                ))}

              </tr>

            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Pricing2;