import React from "react";
import iconsBg from "../assets/Icons.png";

function Home() {
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center text-center 
      bg-cover bg-center bg-no-repeat relative px-4"
      style={{ backgroundImage: `url(${iconsBg})` }}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white shadow-sm border px-4 py-1 rounded-full mb-6">
        <span className="text-purple-600 text-lg">★</span>
        <span className="text-sm font-medium">Smarter spend. Better returns</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Unlock Clarity on <br className="hidden md:block" /> Every Ad Dollar
      </h1>

      {/* Subtext */}
      <p className="text-gray-700 text-base md:text-lg max-w-xl mb-6 px-2">
        AdShark is your single source of truth for marketing attribution.
        Cut through channel noise and drive efficient growth.
      </p>

      {/* Email Input + Button */}
      <div className="border border-gray-400 rounded-xl flex items-center overflow-hidden p-0.5">
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-3 w-full md:w-64 focus:outline-none"
        />

        <button className="px-2 md:px-6 py-3 bg-[#7D53FF] w-[60%] text-white font-medium rounded-xl">
          Book Demo
        </button>
      </div>
    </div>
  );
}

export default Home;
