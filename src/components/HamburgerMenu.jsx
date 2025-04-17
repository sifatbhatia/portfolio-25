import React, { useState } from "react";

const HamburgerMenu = ({ menuItems = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 left-6 z-50">
      {/* Hamburger Button */}
      <button
        className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#d1cdc2] bg-black/20 backdrop-blur-lg hover:bg-white/20 transition-all focus:outline-none group shadow-lg"
        style={{ boxShadow: "0 2px 24px 0 rgba(30,30,60,0.15)" }}
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="relative flex flex-col items-center justify-center w-8 h-8">
          {/* Circle outline */}
          <span className="absolute inset-0 rounded-full  pointer-events-none"  />
          {/* Hamburger lines */}
          <span className="block w-6 h-0.5 bg-[#d1cdc2] mb-1 rounded-full transition-all" />
          <span className="block w-6 h-0.5 bg-[#d1cdc2] mb-1 rounded-full transition-all" />
          <span className="block w-6 h-0.5 bg-[#d1cdc2] rounded-full transition-all" />
        </span>
      </button>
      {/* Glassy Blur Menu */}
      {open && (
        <div className="absolute left-0 mt-4 w-56 rounded-2xl bg-white/20 backdrop-blur-2xl border border-[#d1cdc2]/30 shadow-2xl p-6 flex flex-col gap-3 animate-fade-in">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-lg text-[#030a1f] font-semibold px-4 py-2 rounded-lg hover:bg-[#d1cdc2]/30 hover:text-[#18181b] transition-all"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
