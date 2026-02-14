import React from "react";

const plans = [
  {
    name: "Pilot",
    price: "€0",
    period: "Forever",
    devices: 4,
    checks: 4,
    sim: 0,
    workstations: 1,
    history: "1 month",
    features: [
      "Device diagnostics",
      "Device grading",
      "Device certification",
      "Certified data erasure",
      "Special discounts",
    ],
    button: "Register",
  },
  {
    name: "Starter",
    price: "€348",
    period: "year",
    devices: 200,
    checks: 50,
    sim: 0,
    workstations: 1,
    history: "6 months",
    features: [
      "SIM lock checks",
      "Custom templates",
      "Custom statuses",
      "Basic API access",
       "Basic API access",
    ],
    button: "Configure",
  },
  {
    name: "Professional",
    price: "€1,548",
    period: "year",
    devices: 1000,
    checks: 200,
    sim: 15,
    workstations: 3,
    history: "12 months",
    features: ["Batch operations", "Reports & statistics","Special discounts",],
    button: "Configure",
    highlight: true,
  },
  {
    name: "Business",
    price: "€2,868",
    period: "year",
    devices: 2000,
    checks: 500,
    sim: 50,
    workstations: 10,
    history: "24 months",
    features: ["Custom labels", "API access", "Priority support","Special discounts",],
    button: "Configure",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    devices: "Unlimited",
    checks: "Unlimited",
    sim: "Unlimited",
    workstations: "Unlimited",
    history: "Unlimited",
    features: ["Custom services", "Special discounts","Special discounts", "Dedicated manager"],
    button: "Contact Us",
  },
];

export default function Pricing1() {
  return (
    <div className="min-h-[120vh] bg-gray-200 flex justify-center items-center p-6">
      
      <div className="
        flex flex-col md:flex-row 
        gap-6 md:gap-0   /* mobile gap, desktop no gap */
        max-w-7xl w-full
      ">

        {plans.map((plan, i) => (
          <div
            key={i}
            className={`
              flex-1 p-9 relative text-center
              bg-white shadow
              
              leading-relaxed
              ${plan.highlight 
                ? "border-2 border-[#b2246a] scale-110 z-10" 
                : ""}
            `}
          >

            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b2246a] text-white px-3 py-1 text-xs font-semibold rounded">
                BEST VALUE
              </div>
            )}

            <h2 className="text-lg font-bold mb-3">{plan.name}</h2>

            <h3 className="text-3xl font-extrabold text-[#b2246a] mb-3">
              {plan.price}
              {plan.period && (
                <span className="text-sm text-gray-500">/{plan.period}</span>
              )}
            </h3>

            <div className="space-y-2 text-gray-600 text-sm">
              <p>{plan.devices} Devices</p>
              <p>{plan.checks} IMEI Checks</p>
              <p>{plan.sim} SIM Checks</p>
              <p>{plan.workstations} Workstations</p>
              <p>{plan.history}</p>
            </div>

            <ul className="mt-5 space-y-2 text-sm">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>

            <button className="mt-7 w-full bg-[#b2246a] text-white py-2 rounded hover:bg-pink-900">
              {plan.button}
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}
