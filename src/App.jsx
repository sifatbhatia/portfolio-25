import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from "framer-motion";
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
function App() {

  return (
    <>
      <HeroSection />
      <Analytics />
    </>

  );
}



export default App;
