import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Projects = ({ projects }) => {
   const [selectedProject, setSelectedProject] = useState(null);
   const [hoveredId, setHoveredId] = useState(null);

   return (
      <div className="min-h-screen bg-[#180e0d] py-20 px-4 md:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
               <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => setSelectedProject(project)}
               >
                  <div className="relative overflow-hidden rounded-xl bg-gray-900 p-8">
                     <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                        <motion.img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover"
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.3 }}
                        />
                     </div>

                     <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                           {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-2">
                           {project.overview}
                        </p>

                        <div className="flex flex-wrap gap-2">
                           {project.technologies?.map((tech, index) => (
                              <span
                                 key={index}
                                 className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>

         <AnimatePresence>
            {selectedProject && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
               >
                  <motion.div
                     initial={{ scale: 0.95, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.95, opacity: 0 }}
                     onClick={(e) => e.stopPropagation()}
                     className="bg-[#180e0d] max-w-4xl w-full rounded-2xl overflow-hidden"
                  >
                     <div className="relative h-[40vh] overflow-hidden">
                        <img
                           src={selectedProject.image}
                           alt={selectedProject.title}
                           className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#180e0d] to-transparent" />
                     </div>

                     <div className="p-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                           {selectedProject.title}
                        </h2>

                        <div className="flex flex-wrap gap-2 mb-6">
                           {selectedProject.technologies?.map((tech, index) => (
                              <span
                                 key={index}
                                 className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>

                        <div className="prose prose-invert max-w-none">
                           <p className="text-gray-300 leading-relaxed">
                              {selectedProject.description || selectedProject.overview}
                           </p>
                        </div>

                        <div className="mt-8 flex gap-4">
                           {selectedProject.liveUrl && (
                              <a
                                 href={selectedProject.liveUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="px-6 py-2 bg-white text-[#180e0d] rounded-lg font-medium hover:bg-gray-200 transition-colors"
                              >
                                 View Live
                              </a>
                           )}
                           {selectedProject.githubUrl && (
                              <a
                                 href={selectedProject.githubUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="px-6 py-2 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                              >
                                 View Code
                              </a>
                           )}
                        </div>
                     </div>

                     <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 text-white rounded-full hover:bg-white/10 transition-colors"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-6 w-6"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                           />
                        </svg>
                     </button>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default Projects;