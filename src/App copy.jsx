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
  const projects = [
    {
      id: "jworra",
      title: "J.Worra.com",
      image: "https://i.ibb.co/18F3WPQ/Screenshot-2024-11-18-030303.png",
      overview:
        "J.Worra.com is the official website for Jamie Sitter, professionally known as J. Worra, a Chicago native and Los Angeles-based DJ and producer renowned for blending classic house with modern tech. The site serves as a central hub for her music releases, tour dates, and personal brand.",
      objectives: [
        "Design a modern, user-friendly website that reflects J. Worra's unique style and musical identity.",
        "Provide easy access to music, tour information, and contact details.",
      ],
      process: [
        "Collaborated with J. Worra to understand her brand aesthetics and target audience.",
        "Crafted a sleek, minimalist design emphasizing high-quality visuals and intuitive navigation.",
      ],
      features: [
        "Direct links to platforms like Spotify, Apple Music, YouTube, and Beatport.",
        "Up-to-date information on upcoming performances with options to purchase tickets.",
      ],
      outcome:
        "The revamped J.Worra.com successfully encapsulates the artist's dynamic persona, offering fans an engaging platform to explore her work and stay updated on her latest endeavors.",
      link: "https://www.jworra.com",
    },
    {
      id: "laffaire",
      title: "Laffairemusicale.com",
      image: "https://i.ibb.co/x1x1T0h/Screenshot-2024-11-18-024652.png",
      overview:
        "Laffairemusicale.com is the digital presence for L'Affaire Musicale, an artist management firm with over 20 years of experience in the dance music industry. The website aims to showcase their roster of artists, music releases, and company ethos.",
      objectives: [
        "Develop a professional and visually appealing website that reflects the firm's expertise and passion for music.",
        "Highlight the artists under their management and their musical works.",
      ],
      process: [
        "Engaged with the L'Affaire Musicale team to grasp their vision and requirements.",
        "Created a clean and modern layout with a focus on high-resolution imagery and straightforward navigation.",
      ],
      features: [
        "Dedicated pages for each artist featuring bios, photos, and links to their music.",
        "A curated selection of tracks and albums managed by the firm.",
      ],
      outcome:
        "The new Laffairemusicale.com effectively portrays the firm's dedication to empowering the next generation of dance music artists, providing a platform that is both informative and visually engaging.",
      link: "https://www.laffairemusicale.com",
    }, {
      id: "starconsciousness",
      title: "Star Consciousness Website",
      image: "https://i.ibb.co/4PMvj2Z/Screenshot-2024-11-18-025736.png", // Replace with actual image URL
      overview:
        "Star Consciousness is a website designed to promote spiritual growth, self-discovery, and connection to the universe. The site offers resources, articles, and guidance for individuals seeking to expand their consciousness and live a more fulfilling life.",
      description:
        "The Star Consciousness website was created to provide a welcoming and informative platform for individuals on a spiritual journey. The design emphasizes a sense of peace, wonder, and connection to the cosmos, while the content aims to empower visitors with knowledge and tools for personal transformation.",
      objectives: [
        "Create a visually appealing and user-friendly website that reflects the essence of Star Consciousness.",
        "Provide a central hub for articles, resources, and guidance related to spiritual growth and self-discovery.",
        "Foster a sense of community and connection among visitors.",
        "Offer opportunities for visitors to engage with the content and connect with the creator.",
      ],
      process: [
        "Collaborated with the client to understand their vision and target audience.",
        "Developed a design concept that incorporates celestial imagery, calming colors, and intuitive navigation.",
        "Implemented the design using a responsive web framework to ensure accessibility across devices.",
        "Created a content management system (CMS) to allow the client to easily update and manage the website's content.",
      ],
      features: [
        "A blog featuring articles on various topics related to spiritual growth, self-discovery, and consciousness.",
        "A resources section with links to helpful books, websites, and other materials.",
        "A contact form for visitors to connect with the creator and ask questions.",
        "Social media integration to allow visitors to share content and connect with the community.",
        "A visually appealing design that incorporates celestial imagery and calming colors.",
      ],
      outcome:
        "The Star Consciousness website successfully provides a welcoming and informative platform for individuals on a spiritual journey. The site's design and content effectively convey a sense of peace, wonder, and connection to the cosmos, empowering visitors with knowledge and tools for personal transformation.",
      link: "http://starconsciousness.com",
    }, {
      id: "wickedparadise",
      title: "Wicked Paradise Website",
      image: "https://i.ibb.co/QKDt3FT/Screenshot-2024-11-18-030731.png", // Replace with actual image URL
      overview:
        "Wicked Paradise is a website showcasing a unique brand, likely related to fashion, art, or lifestyle. The site aims to create an immersive and engaging experience that reflects the brand's edgy and unconventional aesthetic.",
      description:
        "The Wicked Paradise website was designed to capture the brand's distinctive and rebellious spirit. The design incorporates bold visuals, dynamic layouts, and interactive elements to create a memorable and engaging experience for visitors.",
      objectives: [
        "Develop a visually striking and unconventional website that embodies the Wicked Paradise brand.",
        "Showcase the brand's products, artwork, or services in an engaging and memorable way.",
        "Create a seamless and intuitive user experience that encourages exploration and interaction.",
        "Drive brand awareness and generate interest in Wicked Paradise.",
      ],
      process: [
        "Collaborated with the client to understand their brand identity and target audience.",
        "Developed a design concept that incorporates bold typography, striking imagery, and dynamic layouts.",
        "Implemented the design using modern web technologies to ensure responsiveness and optimal performance.",
        "Integrated e-commerce functionality (if applicable) to allow visitors to purchase products directly from the website.",
      ],
      features: [
        "A visually arresting design that captures the brand's edgy and unconventional aesthetic.",
        "High-quality imagery and video content that showcases the brand's products, artwork, or services.",
        "Interactive elements and animations that enhance the user experience.",
        "A user-friendly navigation system that allows visitors to easily explore the website's content.",
        "E-commerce functionality (if applicable) that allows visitors to purchase products directly from the website.",
      ],
      outcome:
        "The Wicked Paradise website successfully captures the brand's distinctive and rebellious spirit, creating an immersive and engaging experience for visitors. The site's design and functionality effectively showcase the brand's products, artwork, or services, driving brand awareness and generating interest in Wicked Paradise.",
      link: "https://www.wckdparadise.com",
    },

  ];

  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <main className="flex-grow p-4" style={{ padding: "2rem" }}>
          <section id="about">{/* About Section Content */}</section>
          <section className="pt-[40px]" id="projects">
            <h1 className="text-8xl font-bold mb-6 ">Projects</h1>
            <AnimatedRoutes projects={projects} />
          </section>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

function AnimatedRoutes({ projects }) {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>

              <Projects projects={projects} />
            </>
          }
        />
        <Route
          path="/projects/:id"
          element={<ProjectDetails projects={projects} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
