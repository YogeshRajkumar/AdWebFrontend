import React, { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-5 fixed top-0 left-0 w-full z-50 bg-gray-50">
      <nav className="px-6 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-semibold">AdShark</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-900">
          <a href="#" className="hover:text-black">Features</a>
          <a href="#" className="hover:text-black">Problem</a>
          <a href="#" className="hover:text-black">Solutions</a>
          <a href="#" className="hover:text-black">Setup</a>
          <a href="#" className="hover:text-black">Audience</a>
          <a href="#" className="hover:text-black">Testimonials</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 text-sm">Login</button>
          <button className="px-4 py-2 rounded-xl bg-[#7D53FF] text-white text-sm">
            Book Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 bg-[#7D53FF] rounded-xl" onClick={() => setOpen(true)}>
          <svg width="26" height="26" fill="none" stroke="white">
            <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-white p-6 z-50">
          <div className="flex justify-between items-center border-b pb-4">
            <h1 className="text-xl font-bold">AdShark</h1>

            <button onClick={() => setOpen(false)}>
              <svg width="26" height="26" fill="none" stroke="black">
                <path d="M6 6l12 12M18 6l-12 12" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <div className="mt-6 space-y-3 text-lg font-medium">
            <a className="block">Features</a>
            <a className="block">Problem</a>
            <a className="block">Solutions</a>
            <a className="block">Setup</a>
            <a className="block">Audience</a>
            <a className="block">Testimonials</a>
          </div>

          <div className="mt-10">
            <p className="text-center mb-4">Login</p>
            <button className="w-full bg-[#7D53FF] text-white py-2 rounded-lg">
              Book Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
