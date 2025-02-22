import { motion } from "framer-motion";
import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
   return (
      <motion.footer
         className="footer"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.2 }}
      >
         <div className="footer-container">
            {/* Logo Section */}
            <div className="footer-logo">
               <h1>Sifat Bhatia</h1>
            </div>

            <div className="footer-divider" />

            {/* Subscription Section */}
            <div className="footer-subscription">
               <p className="footer-title">STAY UPDATED</p>
               <form className="subscription-form">
                  <input
                     type="email"
                     placeholder="Enter your email"
                     className="subscription-input"
                  />
                  <button type="submit" className="subscription-button">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="subscription-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M16 12H4m8 8l8-8m-8-8l8 8"
                        />
                     </svg>
                  </button>
               </form>
            </div>

            <div className="footer-divider" />

            {/* Links and Icon Section */}
            <div className="footer-links">
               <ul>
                  <li>Contact</li>
                  <li>Stores</li>
                  <li>FAQ</li>
                  <li>Return & Refund Policies</li>
                  <li>Terms & Privacy Policies</li>
               </ul>
               <div className="footer-logo-icon">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="icon"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20l-5.5-4.5 5.5-3.5 5.5 3.5-5.5 4.5z"
                     />
                  </svg>
               </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-copyright">
               © 2025 Weast Coast Studio
            </div>
         </div>
      </motion.footer>
   );
};

export default Footer;
