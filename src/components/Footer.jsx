import { motion, useScroll } from "framer-motion";
import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
   const { scrollYProgress } = useScroll();

   return (
      <motion.footer
         className="footer"
         style={{ opacity: scrollYProgress }}
         initial={{ y: 50 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.5, delay: 0.2 }}
      >
         <div className="footer-container">
            {/* Top Section */}
            <div className="footer-top">
               {/* Logo Section */}
               <div className="footer-logo">
                  <h1>Sifat Bhatia</h1>
               </div>

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
            </div>

            <div className="footer-divider" />

            {/* Bottom Section */}
            <div className="footer-bottom">
               {/* Links Section */}
               <div className="footer-links">
                  <ul>
                     <li>Instagram</li>
                     <li>Twitter</li>
                     <li>Facebook</li>
                     <li>LinkedIn</li>
                     <li>Email</li>
                  </ul>
               </div>

               {/* Copyright Section */}
               <div className="footer-copyright">© 2025 Siftion</div>
            </div>
         </div>
      </motion.footer>
   );
};

export default Footer;
