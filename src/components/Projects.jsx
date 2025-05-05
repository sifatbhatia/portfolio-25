import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({});

  const projects = [
    {
      id: 0,
      title: "JWorra",
      description: "Professional website for DJ and producer J. Worra featuring music, tour dates, and latest updates",
      detailedDescription: "J. Worra is the professional alias of Jamie Sitter, a DJ and producer originally from Chicago, now based in Los Angeles. She has carved a niche in the dance music scene by blending classic house rhythms with contemporary tech elements, resulting in a distinctive and captivating sound. Her official website, jworra.com, serves as a central hub for her music releases, tour dates, and latest updates.",
      image: "webp/jworra.webp",
      technologies: ["PHP", "JavaScript", "FontAwesome", "CSS", "HTML"],
      link: "https://www.jworra.com/",
      features: [
        "Home page showcasing featured content and recent releases",
        "Interactive tour calendar with ticket purchasing",
        "Music section with streaming platform integrations",
        "Detailed artist biography and career highlights",
        "Contact management and booking information",
        "Responsive design for all devices",
        "Integration with major music platforms"
      ],
      challenges: [
        "Implementing real-time tour date updates and ticket availability",
        "Creating seamless integration with multiple music streaming platforms",
        "Designing an intuitive user experience for fans and industry professionals",
        "Optimizing performance for media-rich content",
        "Ensuring cross-platform compatibility"
      ]
    },
    {
      id: 1,
      title: "Food Calorie Counter",
      description: "A modern, responsive PWA for tracking daily food intake, calories, and macros. Built with Next.js, React, and USDA FoodData Central API.",
      detailedDescription: `A modern, responsive Progressive Web App (PWA) for tracking daily food intake, calories, and macronutrients. Features food search (USDA API), barcode entry, nutrition charts, diary/history, dark mode, PWA install, and offline fallback. All data is stored locally for privacy.`,
      image: "webp/food-calorie-counter.webp",
      technologies: ["Next.js", "React", "USDA FoodData Central API", "Open Food Facts", "Recharts", "Lucide Icons", "Radix UI", "PWA"],
      link: "https://calorie-tracker.siftion.com",
      features: [
        "Add foods by search (USDA) or barcode (Open Food Facts fallback)",
        "Daily diary & history with edit/delete/re-add",
        "Nutrition charts for calories and macronutrients",
        "Set daily calorie goal and toggle dark mode",
        "PWA: install on phone or desktop, works offline",
        "All data stored in browser (no account needed)",
        "Customizable mock foods and theming"
      ],
      challenges: [
        "Integrating multiple APIs (USDA, Open Food Facts)",
        "Ensuring reliable offline support with mock data",
        "Balancing privacy (local storage) with usability",
        "Building a seamless, mobile-friendly PWA experience",
        "Visualizing nutrition data in an accessible way"
      ]
    },
   
    {
      id: 2,
      title: "L'Affaire Musicale",
      description: "Artist management firm with 20+ years of industry experience",
      detailedDescription: "L'Affaire Musicale is a distinguished artist management firm with over two decades of experience in the music industry. Specializing in artist development and career management, the firm has built a reputation for nurturing talent and creating successful careers through strategic partnerships, thoughtful mentorship, and customized content strategies. Their clients have achieved significant milestones including releases on major labels, features in top publications, and performances at major festivals worldwide.",
      image: "webp/laffaire.webp",
      technologies: ["Squarespace", "Custom CSS", "JavaScript", "HTML", "Responsive Design"],
      link: "https://www.laffairemusicale.com/",
      features: [
        "Artist management and career development",
        "Strategic music promotion and marketing",
        "Industry relationship building",
        "Booking and tour management",
        "Custom content strategy development",
        "Major label and festival connections",
        "Media and publication outreach"
      ],
      challenges: [
        "Creating a professional yet approachable brand identity",
        "Showcasing 20+ years of industry experience effectively",
        "Balancing portfolio display with service offerings",
        "Maintaining client confidentiality while demonstrating success",
        "Optimizing for both artist and industry professional audiences"
      ]
    },
    {
      id: 3,
      title: "StarConsciousness",
      description: "Transformative platform for spiritual awakening and consciousness development",
      detailedDescription: "StarConsciousness.com is a comprehensive platform dedicated to spiritual awakening and consciousness development. The site features a unique blend of content including the Lighttoformiam Mindset, Cosmic Crest, and the New R.A.C.E. Paradigm (Respect, Appreciation, Compassionate, Empowerment). It serves as a hub for spiritual education, offering resources like eBooks, videos, and interactive content to help users unlock their STARPower and achieve self-mastery.",
      image: "webp/star-con.webp",
      technologies: ["WordPress", "Custom Theme", "PHP", "JavaScript", "CSS", "HTML"],
      link: "http://starconsciousness.com/",
      features: [
        "Interactive spiritual content platform",
        "E-commerce integration for digital products",
        "Multimedia content including videos and eBooks",
        "Community engagement features",
        "Responsive design for all devices",
        "Custom content management system",
        "Integration with social media platforms"
      ],
      challenges: [
        "Creating an intuitive navigation for complex spiritual concepts",
        "Balancing aesthetic appeal with content depth",
        "Implementing secure e-commerce functionality",
        "Optimizing performance for media-rich content",
        "Ensuring accessibility across different devices and browsers"
      ]
    },
    {
      id: 4,
      title: "Wicked Paradise",
      description: "A premier day club and intimate boat party series website",
      detailedDescription: "Wicked Paradise is a premier day club and intimate boat party series that has become beloved by crowds in LA, Miami, New York, and Chicago. The website showcases their exclusive events including Cafe Mambo residencies, Wicked Delight parties, Dreamboat experiences, and special artist series featuring top DJs like Justin Jay, Will Clarke, Moon Boots, and more. The platform serves as a hub for event information, ticket sales, and maintaining the brand's exclusive, high-energy atmosphere.",
      image: "webp/wickedparadise.webp",
      technologies: ["React", "JavaScript", "CSS", "HTML", "Responsive Design", "Animation"],
      link: "https://www.wckdparadise.com/",
      features: [
        "Event showcase and ticket sales",
        "Artist series and lineup display",
        "Partnership and marketing inquiries",
        "Newsletter subscription system",
        "Responsive design for all devices",
        "Gallery of past events",
        "Contact form integration",
        "Social media integration"
      ],
      challenges: [
        "Creating an exclusive, high-end user experience",
        "Managing multiple event types and locations",
        "Handling high traffic during ticket releases",
        "Maintaining brand consistency across different event types",
        "Integrating various event platforms and ticketing systems"
      ]
    }
  ];

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  const miscProjects = [
    {
      folderName: "API Projects",
      icon: "📡",
      projects: [
        {
          id: 1,
          title: "SkyPulse",
          description: "Real-time weather application with interactive maps and detailed forecasts",
          image: "webp/skypulse.webp",
          technologies: ["React", "OpenWeatherMap API", "Mapbox API", "CSS", "HTML"],
          link: "https://skypulse.siftion.com/",
          features: [
            "Real-time weather data visualization",
            "Interactive map integration",
            "Detailed forecast information",
            "Location-based weather updates",
            "Responsive design for all devices",
            "Seamless API integration"
          ]
        },
        {
          id: 2,
          title: "Meow Gen",
          description: "A fun web app that generates random cat GIFs using the Cat API",
          image: "webp/meow-gen.webp",
          technologies: ["React", "API Integration", "CSS", "HTML"],
          link: "https://meowgen.siftion.com/",
          features: [
            "Real-time random cat GIF generation",
            "Clean and intuitive user interface",
            "Responsive design for all devices",
            "Seamless API integration",
            "Instant loading of new GIFs"
          ]
        },
        {
          id: 3,
          title: "Pup Gen",
          description: "Interactive web application that fetches random dog GIFs",
          image: "webp/pup-gen.webp",
          technologies: ["React", "API Integration", "CSS", "HTML"],
          link: "https://pupgen.siftion.com/",
          features: [
            "Random dog GIF generation",
            "User-friendly interface",
            "Mobile-responsive design",
            "Efficient API handling",
            "Quick GIF loading"
          ]
        },
        {
          id: 4,
          title: "FilmFlow",
          description: "Streamlined Movie Discovery web app for exploring and tracking films.",
          image: "webp/filmflow.webp",
          technologies: ["React", "Redux", "Node.js", "Express", "Sequelize", "Bcrypt", "API Integration", "CSS", "HTML"],
          link: "https://filmflow.siftion.com/",
          features: [
            "Modern UI for movie exploration and discovery",
            "User authentication with Bcrypt",
            "API server, database, and custom routes",
            "Weekly stand-up progress tracking",
            "Deployment to Vercel",
            "Redux for state management"
          ],
          progress: [
            "Week 1: Improved React knowledge, created layouts for API server, database, server, and routes.",
            "Week 2: Learned Bcrypt and worked on user authentication, fixing API routes.",
            "Week 3: Added Bcrypt, controllers, Redux; researched Sequelize relationships.",
            "Week 4: Explored deployment options, cleaned up GitHub repo."
          ]
        }
      ]
    },
    {
      folderName: "Web Tools",
      icon: "🛠️",
      projects: [
        {
          id: 1,
          title: "PixSqueeze",
          description: "Image compression tool that makes your images lighter while maintaining quality",
          image: "webp/pixsqueeze.webp",
          technologies: ["React", "JavaScript", "CSS", "HTML", "Image Processing"],
          link: "https://pixsqueeze.siftion.com/",
          features: [
            "Drag-and-drop interface for easy image upload",
            "Supports images up to 500MB",
            "Efficient image compression algorithms",
            "Maintains image quality while reducing size",
            "Simple and intuitive user interface",
            "Fast processing times",
            "No registration required"
          ]
        }
      ]
    }
  ];

  const [featuredProject, ...otherProjects] = projects;

  const ProjectModal = ({ project, onClose }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#180e0d]/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-4xl w-full bg-[#180e0d] rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto text-white"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>
            <p className="text-lg text-gray-300/70 mb-6">{project.detailedDescription}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300/70">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 bg-white/10 rounded-full text-sm text-gray-300/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Challenges & Solutions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300/70">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <a
              href={project.link}
              className="inline-block px-6 py-3 bg-white text-[#180e0d] rounded-lg font-medium hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="bg-[#bebde2] text-[#03012f] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Project */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f]">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-[#18181b]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-8 bg-[#18181b]/90 rounded-b-xl text-white">
                  <h3 className="text-3xl font-bold mb-3">{featuredProject.title}</h3>
                  <p className="text-lg mb-6">{featuredProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 bg-[#d1cdc2]/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-block px-8 py-3 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-[#d1cdc2]/90 transition-colors text-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 gap-8">
            {otherProjects.slice(0, 2).map((project) => (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f]">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#18181b]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="w-full p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#d1cdc2]/20 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button className="inline-block px-6 py-2 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-[#d1cdc2]/90 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wicked Paradise Project */}
        <div className="mt-12 flex justify-center gap-8">
          <motion.div
            className="relative group cursor-pointer w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject(projects[3])}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f]">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-[#18181b]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{projects[3].title}</h3>
                  <p className="text-sm mb-4">{projects[3].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[3].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#d1cdc2]/20 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="inline-block px-6 py-2 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-[#d1cdc2]/90 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CineSky Project */}
          <motion.div
            className="relative group cursor-pointer w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject({
              id: 5,
              title: "CineSky",
              description: "Modern weather application with real-time forecasts",
              detailedDescription: "CineSky is a modern weather application built with Next.js that provides real-time weather information and forecasts. The app features a clean, responsive UI and integrates with OpenWeatherMap API for accurate weather data. Users can search for weather in any city worldwide, save favorite locations, and view their current location on a map.",
              image: "webp/cine-sky.webp",
              technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "OpenWeatherMap API", "React Icons"],
              link: "https://cinesky.siftion.com",
              features: [
                "Real-time weather information",
                "Weather search for any city",
                "Location management",
                "Interactive map view",
                "User authentication",
                "Responsive design",
                "Weather animations",
                "Live clock integration"
              ],
              challenges: [
                "Integrating multiple APIs seamlessly",
                "Implementing real-time weather updates",
                "Managing user location data securely",
                "Creating smooth weather animations",
                "Optimizing performance for mobile devices"
              ]
            })}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f]">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="webp/cine-sky.webp"
                  alt="CineSky"
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-[#18181b]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">CineSky</h3>
                  <p className="text-sm mb-4">Modern weather application with real-time forecasts</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Next.js", "TypeScript", "Tailwind CSS", "Firebase"].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#d1cdc2]/20 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="inline-block px-6 py-2 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-[#d1cdc2]/90 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Misc Projects Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Other Projects
          </h2>
          <div className="max-w-4xl mx-auto">
            {miscProjects.map((folder) => (
              <div key={folder.folderName} className="mb-8">
                <button
                  onClick={() => toggleFolder(folder.folderName)}
                  className="w-full flex items-center justify-between p-8 bg-[#030a1f] rounded-lg shadow-md hover:bg-[#030a1f]/90 transition-colors text-[#d1cdc2]"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{folder.icon}</span>
                    <h3 className="text-xl font-semibold">{folder.folderName}</h3>
                  </div>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${expandedFolders[folder.folderName] ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedFolders[folder.folderName] ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    {folder.projects.map((project) => (
                      <motion.div
                        key={project.id}
                        className="relative group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f]">
                          <div className="aspect-w-16 aspect-h-9">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="absolute inset-0 bg-[#18181b]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="w-full p-6 text-white">
                              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                              <p className="text-sm mb-4">{project.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-[#d1cdc2]/20 rounded-full text-xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <a
                                href={project.link}
                                className="inline-block px-6 py-2 bg-[#d1cdc2] text-[#030a1f] rounded-full font-medium hover:bg-[#d1cdc2]/90 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Project
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <div className="text-center mt-20">
        <p className="text-2xl text-[#030a1f]/70">Adding more projects soon!</p>
      </div>
    </section>
  );
};

export default Projects; 