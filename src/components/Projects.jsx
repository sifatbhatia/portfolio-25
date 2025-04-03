import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({});

  const projects = [
    {
      id: 1,
      title: "JWorra",
      description: "Professional website for DJ and producer J. Worra featuring music, tour dates, and latest updates",
      detailedDescription: "J. Worra is the professional alias of Jamie Sitter, a DJ and producer originally from Chicago, now based in Los Angeles. She has carved a niche in the dance music scene by blending classic house rhythms with contemporary tech elements, resulting in a distinctive and captivating sound. Her official website, jworra.com, serves as a central hub for her music releases, tour dates, and latest updates.",
      image: "/jworra.png",
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
      id: 2,
      title: "L'Affaire Musicale",
      description: "Artist management firm with 20+ years of industry experience",
      detailedDescription: "L'Affaire Musicale is a distinguished artist management firm with over two decades of experience in the music industry. Specializing in artist development and career management, the firm has built a reputation for nurturing talent and creating successful careers through strategic partnerships, thoughtful mentorship, and customized content strategies. Their clients have achieved significant milestones including releases on major labels, features in top publications, and performances at major festivals worldwide.",
      image: "/laffaire.png",
      technologies: ["Squarespace", "Custom CSS", "JavaScript", "HTML", "Responsive Design"],
      link: "#",
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
      image: "/star-con.jpeg",
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
          title: "Random Cat GIF Generator",
          description: "A fun web app that generates random cat GIFs using the Cat API",
          image: "/cat-gen.png",
          technologies: ["React", "API Integration", "CSS", "HTML"],
          link: "https://cat-gen.onrender.com/",
          features: [
            "Real-time random cat GIF generation",
            "Clean and intuitive user interface",
            "Responsive design for all devices",
            "Seamless API integration",
            "Instant loading of new GIFs"
          ]
        },
        {
          id: 2,
          title: "Random Dog GIF Generator",
          description: "Interactive web application that fetches random dog GIFs",
          image: "/dog-gen.png",
          technologies: ["React", "API Integration", "CSS", "HTML"],
          link: "https://dog-gen.onrender.com/",
          features: [
            "Random dog GIF generation",
            "User-friendly interface",
            "Mobile-responsive design",
            "Efficient API handling",
            "Quick GIF loading"
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
    <section id="projects" className="bg-[#d1cdc2] text-[#030a1f] py-20 px-4 md:px-8">
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
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-[#030a1f] h-full">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#030a1f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-8 text-[#d1cdc2]">
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
            {otherProjects.map((project) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030a1f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-6 text-[#d1cdc2]">
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
                  className="w-full flex items-center justify-between p-4 bg-[#030a1f] rounded-lg shadow-md hover:bg-[#030a1f]/90 transition-colors text-[#d1cdc2]"
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
                          <div className="absolute inset-0 bg-gradient-to-t from-[#030a1f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 p-6 text-[#d1cdc2]">
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