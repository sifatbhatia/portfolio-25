import React from "react";

const Header = () => {
   return (
      <header className="bg-[#180e0d] p-4">
         <nav className="flex justify-center gap-8 text-xl">
            <a href="/" className="text-[#d1cdc2] no-underline hover:underline">
               Home
            </a>
            <a href="/#about" className="text-[#d1cdc2] no-underline hover:underline">
               About
            </a>
            <a
               href="/#projects"
               className="text-[#d1cdc2] no-underline hover:underline"
            >
               Projects
            </a>
         </nav>
      </header>
   );
};

export default Header;
