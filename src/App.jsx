import { Analytics } from '@vercel/analytics/react';
import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030a1f]">
      <HeroSection />
      <About />
      <Projects />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;