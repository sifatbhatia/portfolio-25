import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
   return (
      <section className="bg-[#180e0d] text-white min-h-[calc(100vh-80px)] flex flex-col justify-start relative">

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[calc(100vh - 160px)]">
            {projects.map((project) => (
               <Link
                  to={{
                     pathname: `/projects/${project.id}`,
                     state: { project },
                  }}
                  key={project.id}
               >
                  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200 h-full flex flex-col">
                     <div className="aspect-w-4 aspect-h-3 mb-4">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover rounded-md"
                        />
                     </div>
                     <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                     <p className="text-gray-400 flex-grow">{project.overview}</p>
                  </div>
               </Link>
            ))}
         </div>
      </section>
   );
};

export default Projects;
