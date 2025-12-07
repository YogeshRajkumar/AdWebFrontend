import React from "react";
import RightSideImage from "./RightSideImage.png";

function Problem() {
    return (
        <div id="Problem" className="max-w-7xl mx-auto px-6">

            <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">

                <div>
                    <div className="inline-flex items-center gap-2 bg-white shadow-sm border px-4 py-1 rounded-full mb-6">
                        <span className="text-purple-600 text-lg">★</span>
                        <span className="text-sm font-medium">Smarter spend. Better returns</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        The Attribution Problem <br /> Nobody Solved Well
                    </h2>

                    <p className="text-gray-600 mb-12 text-lg">
                        iOS 14.5 shattered tracking. Cookies are dying. Platform dashboards lie.
                        Meanwhile, you're stuck making million-dollar decisions with broken data.
                    </p>

                    <ul className="space-y-6">
                        {[
                            "Hacked-together spreadsheets that break every month",
                            "Trusting inflated platform dashboards that don't match",
                            "Vanity tools with pretty charts but no actionable direction",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-purple-500 text-xl mt-1">✦</span>
                                <span className="text-gray-800 text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:pl-8 rounded">
                    <img
                        src={RightSideImage}
                        alt="Image"
                        className="rounded-xl shadow-lg"
                    />
                </div>

            </div>


            <div className="block md:hidden mt-10">

                <div className="inline-flex items-center gap-2 bg-white shadow-sm border px-4 py-1 rounded-full mb-6">
                    <span className="text-purple-600 text-lg">★</span>
                    <span className="text-sm font-medium">Smarter spend. Better returns</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
                    The Attribution Problem <br /> Nobody Solved Well
                </h2>

                <p className="text-gray-600 text-base mb-10">
                    iOS 14.5 shattered tracking. Cookies are dying. Platform dashboards lie.
                    Meanwhile, you're stuck making million-dollar decisions with broken data.
                </p>

                <ul className="space-y-5">
                    {[
                        "Hacked-together spreadsheets that break every month",
                        "Trusting inflated platform dashboards that don't match",
                        "Vanity tools with pretty charts but no actionable direction",
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-purple-500 text-xl mt-1">✦</span>
                            <span className="text-gray-800 text-base">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-10">
                    <img
                        src={RightSideImage}
                        alt="Mobile"
                        className="rounded-xl shadow-lg w-full"
                    />
                </div>

            </div>

        </div>
    );
}

export default Problem;
