
import React from 'react';
import { useCV } from '../context/CVContext';

const Education = () => {
  const { cvData } = useCV();
  
  return (
    <section className="my-8 animate-slide-in" style={{ animationDelay: '400ms' }}>
      <h3 className="section-title">Formación Académica</h3>
      
      <div className="mt-6">
        {cvData.education.map((edu, index) => (
          <div 
            key={index} 
            className="relative pl-8 mb-6 card-hover"
          >
            {/* Academic icon */}
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-cv-accent"></div>
            
            {/* Connecting line */}
            <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-cv-accent/30"></div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h4 className="text-xl font-bold text-cv-dark">{edu.degree}</h4>
                  <p className="text-cv-text">{edu.institution}</p>
                </div>
                <span className="px-3 py-1 bg-cv-accent/10 text-cv-accent rounded-full text-sm font-medium whitespace-nowrap">
                  {edu.year}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-8 bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h4 className="text-lg font-semibold text-cv-primary mb-3">Habilidades Adicionales</h4>
          <ul className="space-y-2 text-cv-text">
            {cvData.extras.map((extra, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cv-primary mt-2 mr-2"></span>
                {extra}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
