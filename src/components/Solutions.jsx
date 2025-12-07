import React from "react";

function Solutions() {
    const items = [
        {
            icon: "🎯",
            title: "Unified Attribution Models",
            desc: "See the complete customer journey across all touchpoints with advanced modeling that actually works."
        },
        {
            icon: "🟣",
            title: "First-Party, Transparent Data",
            desc: "Your data, your pixel, your truth. No black boxes or mysterious algorithms hiding what matters."
        },
        {
            icon: "📊",
            title: "Easy-to-Read Dashboards",
            desc: "Actionable insights in seconds, not hours. Built for marketers who need to move fast and scale smart."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">

            <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white border shadow-sm px-4 py-1 rounded-full">
                    <span className="text-purple-600">★</span>
                    <span className="text-sm font-medium">Our Solutions</span>
                </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                A Clearer Picture = Better Decisions
            </h2>

            <p className="text-center text-gray-600 text-lg mb-16">
                We don't just show numbers. We guide action.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition bg-white"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl text-xl mb-6">
                            {item.icon}
                        </div>

                        <h3 className="font-semibold text-lg text-gray-900 mb-3">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Solutions;
