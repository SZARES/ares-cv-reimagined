
import React from 'react';
import { useCV } from '../context/CVContext';

const Experience = () => {
  const { cvData } = useCV();
  
  return (
    <section className="my-8 animate-slide-in" style={{ animationDelay: '200ms' }}>
      <h3 className="section-title">Experiencia Relevante</h3>
      
      <div className="mt-6 space-y-8">
        {cvData.experience.map((job, index) => (
          <div 
            key={index} 
            className="relative pl-8 card-hover"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-cv-primary"></div>
            
            {/* Timeline vertical line */}
            <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-cv-primary/30"></div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h4 className="text-xl font-bold text-cv-dark">{job.jobTitle}</h4>
                <span className="px-3 py-1 bg-cv-primary/10 text-cv-primary rounded-full text-sm font-medium">
                  {job.duration}
                </span>
              </div>
              
              <div className="mb-3">
                <span className="text-lg font-medium text-cv-secondary">
                  {job.company} - <span className="text-cv-accent">{job.project}</span>
                </span>
              </div>
              
              <p className="text-cv-text leading-relaxed">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
