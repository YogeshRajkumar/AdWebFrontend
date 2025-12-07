import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTiktok } from "react-icons/fa6";
import { FaAmazon, FaShopify } from "react-icons/fa";

function CTA() {
  return (
    <section className="relative w-full p-15 mx-auto text-center rounded-3xl bg-white overflow-hidden">

      {/* Floating Icons */}
      <div className="absolute left-2/8 top-2/3 -rotate-35 bg-white p-3 rounded-xl shadow-md">
        <FcGoogle size={40} />
      </div>

      <div className="absolute left-1/8 top-1/3 rotate-35 bg-white p-3 rounded-xl shadow-md">
        <FaTiktok size={40} className="text-black" />
      </div>

      <div className="absolute right-1/8 top-1/3 -rotate-35 bg-white p-3 rounded-xl shadow-md">
        <FaAmazon size={40} className="text-black" />
      </div>

      <div className="absolute right-2/8 top-2/3 rotate-35 bg-white p-3 rounded-xl shadow-md">
        <FaShopify size={40} className="text-green-500" />
      </div>

      {/* Tag */}
      <div className="inline-flex items-center gap-2 bg-white border shadow px-4 py-1 rounded-full mb-6">
        <span className="text-purple-600 text-lg">★</span>
        <span className="text-sm font-semibold">Next Step</span>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Grow Smarter?</h2>

      {/* Subtitle */}
      <p className="text-gray-600 mb-10 text-lg">
        AdShark gives you the clarity to scale profitably.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl shadow-lg">
          Start Free Trial
        </button>

        <button className="px-6 py-3 bg-gray-900 text-white rounded-xl shadow-lg">
          Book Demo
        </button>
      </div>
    </section>
  );
}

export default CTA;
