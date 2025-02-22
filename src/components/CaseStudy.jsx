// src/components/CaseStudy.jsx
import React from 'react';

const CaseStudy = ({ title, overview, objectives, process, features, outcome }) => {
   return (
      <div className="container mx-auto px-4 py-12">
         <h2 className="text-3xl font-bold mb-4">{title}</h2>
         <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Project Overview</h3>
            <p className="text-gray-700">{overview}</p>
         </section>
         <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Objectives</h3>
            <ul className="list-disc list-inside text-gray-700">
               {objectives.map((obj, index) => (
                  <li key={index}>{obj}</li>
               ))}
            </ul>
         </section>
         <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Design & Development Process</h3>
            <ul className="list-disc list-inside text-gray-700">
               {process.map((step, index) => (
                  <li key={index}>{step}</li>
               ))}
            </ul>
         </section>
         <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-700">
               {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
               ))}
            </ul>
         </section>
         <section>
            <h3 className="text-2xl font-semibold mb-2">Outcome</h3>
            <p className="text-gray-700">{outcome}</p>
         </section>
      </div>
   );
};

export default CaseStudy;
