import React from "react";

import amazon from "../assets/amazon.png";
import shopify from "../assets/shopify.png";
import meta from "../assets/meta.png";
import gAds from "../assets/googleads.png";
import tiktok from "../assets/tiktok.png";

function LogoMover() {
  const logos = [amazon, shopify, meta, gAds, tiktok];

  return (
    <div className="w-full overflow-hidden relative py-30">
      
      {/* Fade Edges (like screenshot) */}
      <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-white to-transparent z-10"></div>

      {/* SCROLLER */}
      <div className="flex items-center gap-16 animate-scroll whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            className="h-10 opacity-60 hover:opacity-100 transition"
            alt="logo"
          />
        ))}

        {/* Duplicate logos to create infinite loop */}
        {logos.map((logo, index) => (
          <img
            key={`copy-${index}`}
            src={logo}
            className="h-10 opacity-60 hover:opacity-100 transition"
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
}

export default LogoMover;
