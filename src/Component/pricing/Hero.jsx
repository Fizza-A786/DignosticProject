import React, { useState } from 'react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Data mapping for 100% accuracy
  const plans = [
    {
      name: "Pilot",
      price: "0",
      period: "Forever",
      subtext: "Forever",
      devices: "4",
      checks: "4",
      sim: "—",
      work: "1",
      history: "1 Month",
      features: ["Device diagnostics", "Device grading", "Device certification", "Certified device data erasure"],
      btn: "Register",
      isPrimary: false,
      color: "text-[#5bc0de]" // Sky blue color for Pilot
    },
    {
      name: "Starter",
      price: isAnnual ? "348" : "36.2",
      period: isAnnual ? "/year" : "/month",
      subtext: isAnnual ? "Paid annually" : "Paid monthly",
      devices: "200",
      checks: "50",
      sim: "0",
      work: "1",
      history: "6 Months",
      features: ["SIM lock checks", "Custom diagnostics templates", "Custom ratings & statuses", "Use default labels", "Basic API access"],
      btn: "Configure",
      isPrimary: true,
      color: "text-[#b02665]"
    },
    {
      name: "Professional",
      price: isAnnual ? "1,548" : "161.2",
      period: isAnnual ? "/year" : "/month",
      subtext: isAnnual ? "Paid annually" : "Paid monthly",
      devices: "1,000",
      checks: "200",
      sim: "15",
      work: "3",
      history: "12 Months",
      features: ["Batch & manager operations", "Reports & statistics"],
      btn: "Configure",
      isBestValue: true,
      isPrimary: true,
      color: "text-[#b02665]"
    },
    {
      name: "Business",
      price: isAnnual ? "2,868" : "298.7",
      period: isAnnual ? "/year" : "/month",
      subtext: isAnnual ? "Paid annually" : "Paid monthly",
      devices: "2,000",
      checks: "500",
      sim: "50",
      work: "10",
      history: "24 Months",
      features: ["Create custom labels", "Customized API access", "Priority support", "Dedicated account manager"],
      btn: "Configure",
      isPrimary: true,
      color: "text-[#b02665]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f1f6fa] flex flex-col items-center py-12 px-4 font-sans text-[#333]">
      
      {/* 1. Toggle Switch Section */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex bg-[#88888822] p-1 rounded-lg border border-gray-200">
          <button 
            onClick={() => setIsAnnual(true)}
            className={`px-7 py-2 rounded-md text-[13px] font-bold transition-all ${isAnnual ? 'bg-white text-black shadow-sm' : 'text-gray-500'}`}
          >
            Annual Billing
          </button>
          <button 
            onClick={() => setIsAnnual(false)}
            className={`px-7 py-2 rounded-md text-[13px] font-bold transition-all ${!isAnnual ? 'bg-white text-black shadow-sm' : 'text-gray-500'}`}
          >
            Monthly Billing
          </button>
        </div>
        <div className="text-[9px] font-bold mt-2 tracking-[0.2em] text-gray-400">★ SAVE 20% ★</div>
      </div>

      {/* 2. Main Pricing Table */}
      <div className="w-full max-w-[1280px] bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row overflow-hidden border border-gray-100">
        
        {plans.map((plan, idx) => (
          <div key={idx} className={`flex-1 border-r border-gray-100 relative ${plan.isBestValue ? 'bg-[#fff7f9] border-x-2 border-x-[#b02665]/20' : ''}`}>
            
            {/* Best Value Ribbon */}
            {plan.isBestValue && (
              <div className="bg-[#b02665] text-white text-[11px] font-bold py-2 text-center uppercase tracking-widest">
                Best Value
              </div>
            )}
            
            <div className={`p-7 ${!plan.isBestValue ? 'pt-12' : ''}`}>
              {/* Icon & Name */}
              <div className="mb-6">
                <div className={`mb-2 ${plan.color}`}>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <h3 className={`text-2xl font-bold ${plan.color}`}>{plan.name}</h3>
              </div>

              {/* Pricing Section */}
              <div className="mb-8 h-16">
                <div className="flex items-baseline">
                  <span className="text-[34px] font-bold text-[#b02665]">€{plan.price}</span>
                  <span className="text-[#b02665] text-sm font-bold ml-0.5">{plan.period}</span>
                </div>
                <div className="text-[12px] text-pink-700 font-bold mt-1 uppercase leading-tight">{plan.subtext}</div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-4 text-[13px] border-t border-gray-100 pt-6 mb-8">
                <div><div className="font-bold text-[#333]">{plan.devices}</div><div className="text-gray-400 font-medium">Unique Devices</div></div>
                <div><div className="font-bold text-[#333]">{plan.checks}</div><div className="text-gray-400 font-medium">IMEI Blacklist Checks</div></div>
                <div><div className="font-bold text-[#333]">{plan.sim}</div><div className="text-gray-400 font-medium">SIM Lock Checks</div></div>
                <div><div className="font-bold text-[#333]">{plan.work}</div><div className="text-gray-400 font-medium">Workstation</div></div>
                <div><div className="font-bold text-[#333]">{plan.history}</div><div className="text-gray-400 font-medium">Month of work history</div></div>
              </div>

              {/* Feature List */}
              <div className="min-h-[240px]">
                <p className="text-[13px] font-bold mb-4 text-gray-700 leading-tight">
                    Everything {idx === 0 ? 'you need in a test pilot:' : <span>{plans[idx-1].name}, <span className="font-normal italic text-gray-500 underline decoration-pink-300">plus:</span></span>}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start text-[13px] text-gray-600 leading-[1.3]">
                      <svg className="w-4 h-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className="w-full mt-6 bg-[#b02665] text-white py-3.5 rounded font-bold text-[15px] hover:bg-[#8e1f52] transition-colors shadow-md active:scale-95">
                {plan.btn}
              </button>
            </div>
          </div>
        ))}

        {/* 3. Enterprise Column (Unique Styling) */}
        <div className="flex-1 p-7 pt-12 bg-white">
          <div className="mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" className="mb-2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            <h3 className="text-2xl font-bold text-[#333]">Enterprise</h3>
          </div>
          <div className="mb-8">
             <p className="text-lg font-bold text-[#333]">Contact Us</p>
          </div>
          <div className="h-20 mb-10 text-[15px] text-gray-600 leading-snug">
            A solution tailored specifically to your business.
          </div>
          
          <div className="pt-6 border-t border-gray-100 mb-8">
            <p className="text-[14px] font-bold mb-5 text-gray-700">Our <span className="text-[#b02665]">Enterprise</span> package offers:</p>
            <ul className="space-y-4">
              {['Custom services', 'Custom numbers', 'Special discounts'].map((item, i) => (
                <li key={i} className="flex items-center text-[13px] text-gray-600">
                  <span className="text-yellow-500 mr-3 text-lg">★</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[12px] text-gray-400 mb-6 italic leading-tight">Get in touch with our sales team to discuss your needs.</p>
          <button className="w-full bg-[#2d3436] text-white py-3.5 rounded font-bold text-[15px] hover:bg-black transition-colors shadow-md">
            Contact Us
          </button>
        </div>
      </div>

      {/* Compare Features Footer Button */}
      <button className="mt-12 bg-[#b02665] text-white px-10 py-3 rounded-md font-bold text-sm shadow-[0_5px_15px_rgba(176,38,101,0.3)] hover:bg-[#8e1f52] transition-all uppercase tracking-wide">
        Compare Features
      </button>
    </div>
  );
};

export default PricingPage;