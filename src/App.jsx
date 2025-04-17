import { Analytics } from '@vercel/analytics/react';
import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from './components/Footer';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  // Pixy Mode state
  const [pixyMode, setPixyMode] = useState(false);

  useEffect(() => {
    console.log('Pixy Mode:', pixyMode);
    if (pixyMode) {
      document.body.classList.add('pixy-mode');
    } else {
      document.body.classList.remove('pixy-mode');
    }
  }, [pixyMode]);

  const handlePixyToggle = () => {
    setPixyMode((prev) => !prev);
  };

  return (
    <>
      <div className="fixed top-6 left-0 w-full flex items-center justify-between px-6 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <HamburgerMenu menuItems={[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' },
          ]} />
        </div>
        <div className="pointer-events-auto">
          <button
            onClick={handlePixyToggle}
            className="pixy-toggle-btn"
            aria-pressed={pixyMode}
            style={{
              background: pixyMode ? '#111' : '#fff',
              color: pixyMode ? '#fff' : '#000',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              border: '4px solid #000',
              boxShadow: '4px 4px 0 #000',
              outline: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              borderRadius: 0,
              filter: 'contrast(200%)',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            {`Pixy Mode ${pixyMode ? 'ON' : 'OFF'}`}
          </button>
        </div>
      </div>
      <div className="min-h-screen bg-[#030a1f]">
        <HeroSection />
        <About />
        <Projects />
        <Footer />
        <Analytics />
      </div>
    </>
  );
}

export default App;