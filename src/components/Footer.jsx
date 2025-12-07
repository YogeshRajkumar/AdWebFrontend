import { FaTiktok, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const logos = [FaFacebook, FaLinkedin, FaTiktok, AiFillInstagram, FaXTwitter];

  return (
    <footer className="bg-white border border-gray-300 mt-20">
      <div className="w-full mx-auto px-15 py-16 grid md:grid-cols-6 gap-12">

        {/* BRAND */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-3">AdShark</h2>

          <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
            AdShark empowers businesses to grow with smarter marketing insights
            and seamless integrations.
          </p>

          {/* EMAIL INPUT */}
          <div className="flex bg-white border rounded-xl overflow-hidden max-w-sm shadow-sm p-0.5">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 w-full outline-none"
            />
            <button className="bg-purple-600 w-[50%] text-white px-5 py-3 rounded-xl">
              Book Demo
            </button>
          </div>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Features</li>
            <li>Pricing</li>
            <li>API</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <svg width="18" height="18" fill="none" stroke="rgb(147 51 234)" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="m4 4 8 8 8-8" />
              </svg>
              support@adshark.io
            </li>

            <li className="flex items-center gap-2">
              <svg width="18" height="18" fill="none" stroke="rgb(147 51 234)" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.05 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.36-1.26a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +12365478941
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM AREA */}
      <div className=" bg-gray-50 py-4">
        <div className="w-full mx-auto px-15 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 AdShark. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3">
            {logos.map((Icon, i) => (
              <button
                key={i}
                className="p-2.5 rounded-xl bg-linear-to-br from-purple-50 to-white 
                border border-purple-100 hover:shadow-lg hover:scale-105 transition-all"
              >
                <Icon className="text-[#7D53FF] text-lg" />
              </button>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
