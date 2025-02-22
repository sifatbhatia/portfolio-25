import React from "react";
import Logo from "../assets/logo.svg?react";

const HeroSection = () => {
   return (
      <section className="bg-[#180e0d] text-white min-h-[calc(100vh-80px)] flex flex-col justify-end relative">
         <div className="w-full px-4 md:px-8 lg:px-16 mb-8">
            <Logo className="w-full h-auto" />
         </div>
      </section>
   );
};

export default HeroSection;