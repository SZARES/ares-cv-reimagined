
import React from 'react';
import { useCV } from '../context/CVContext';

const Portfolio = () => {
  const { cvData } = useCV();
  
  return (
    <section className="my-8 animate-slide-in" style={{ animationDelay: '500ms' }}>
      <h3 className="section-title">Portafolio Personal</h3>
      
      <div className="mt-6 grid gap-6 md:grid-cols-1">
        {cvData.portfolio.map((project, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="h-2 bg-gradient-to-r from-cv-primary to-cv-accent"></div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold text-cv-dark group-hover:text-cv-primary transition-colors mb-3">
                {project.projectName}
              </h4>
              
              <p className="text-cv-text mb-4">
                {project.description}
              </p>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-4 py-2 bg-cv-primary/10 text-cv-primary rounded-lg hover:bg-cv-primary hover:text-white transition-colors font-medium text-sm"
                >
                  Ver Proyecto
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
