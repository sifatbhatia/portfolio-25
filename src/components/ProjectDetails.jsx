import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const ProjectDetails = ({ projects }) => {
   const { id } = useParams();
   const location = useLocation();
   const projectFromState = location.state?.project;
   const project = projectFromState || projects.find((p) => p.id === id);

   useEffect(() => {
      console.log("ProjectDetails - ID:", id);
      console.log("ProjectDetails - Location:", location);
      console.log("ProjectDetails - Project (from state):", projectFromState);
      console.log("ProjectDetails - Project (resolved):", project);
   }, [id, location, projectFromState, project, projects]);

   if (!project) {
      return (
         <div className="min-h-screen bg-[#180e0d] py-20 px-4 md:px-8 text-white">
            <div className="max-w-3xl mx-auto">
               <h1>Project Not Found</h1>
               <p>Sorry, the project you are looking for could not be found.</p>
               <Link to="/">Back to Home</Link>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-[#180e0d] py-20 px-4 md:px-8 text-white">
         <div className="max-w-3xl mx-auto">
            <Link
               to="/"
               className="block mb-4 text-blue-400 hover:text-blue-300"
            >
               &larr; Back to Portfolio
            </Link>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <img
               src={project.image}
               alt={project.title}
               className="w-full rounded-lg shadow-md mb-6"
            />
            <p className="text-lg leading-relaxed mb-6">{project.overview}</p>

            <h2 className="text-2xl font-bold mb-2">Objectives</h2>
            <ul className="list-disc list-inside mb-4">
               {project.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
               ))}
            </ul>

            <h2 className="text-2xl font-bold mb-2">Process</h2>
            <ul className="list-disc list-inside mb-4">
               {project.process.map((processItem, index) => (
                  <li key={index}>{processItem}</li>
               ))}
            </ul>

            <h2 className="text-2xl font-bold mb-2">Key Features</h2>
            <ul className="list-disc list-inside mb-4">
               {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
               ))}
            </ul>

            <h2 className="text-2xl font-bold mb-2">Outcome</h2>
            <p className="text-lg leading-relaxed mb-6">{project.outcome}</p>

            {project.link && (
               <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
               >
                  Visit Website
               </a>
            )}
         </div>
      </div>
   );
};

export default ProjectDetails;
