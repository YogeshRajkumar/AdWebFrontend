import React from "react";

function Setup() {
  const steps = [
    {
      number: "1",
      title: "Connect Platforms",
      description:
        "Easily link Meta, Google, Shopify, TikTok, and more to centralize your marketing data in just a few clicks.",
      bg: "bg-gradient-to-br from-purple-500 to-indigo-500 text-white z-20",
    },
    {
      number: "2",
      title: "Install Pixel",
      description:
        "Install our tracking pixel with one click—no developer required. Start collecting powerful attribution data instantly without the technical hassle.",
      bg: "bg-gray-200 text-gray-900 z-20",
    },
    {
      number: "3",
      title: "Get Insights",
      description:
        "Quickly access unified reports across all platforms. Gain clear visibility into your campaign performance within hours, not days or weeks.",
      bg: "bg-gray-200 text-gray-900 z-10",
    },
  ];

  return (
    <section id="Setup" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20">
      
      {/* LEFT CONTENT */}
      <div>
        <div className="inline-flex items-center gap-2 bg-white border shadow-sm px-4 py-1 rounded-full mb-6">
          <span className="text-purple-600 text-lg">★</span>
          <span className="text-sm font-medium">Setup Simplicity</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Setup That<br />Doesn't Suck
        </h2>

        <p className="text-gray-600 text-lg">
          Trusted by growth leaders who demand real results, not just pretty reports.
        </p>
      </div>

      {/* RIGHT CONTENT — STEPS */}
      <div className="relative">

        {/* Vertical dotted line */}
        <div className="absolute left-6 top-0 bottom-0 border-s-2 border-dashed border-gray-300"></div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-[50px_1fr] gap-6 items-start">

              {/* Number Bubble */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-semibold ${step.bg}`}
              >
                {step.number}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Setup;
