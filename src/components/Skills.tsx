
import React from 'react';
import { useCV } from '../context/CVContext';

const Skills = () => {
  const { cvData } = useCV();
  
  // Categorized skills
  const categories = {
    "Desarrollo Frontend": ['HTML', 'CSS', 'JavaScript', 'React.js (Hooks, Context API)', 'TailwindCSS', 'Responsive Design', 'Componentes reutilizables'],
    "Herramientas": ['ChatGPT', 'GitHub Copilot', 'Figma', 'Git y GitHub', 'Fetch', 'Consumo de APIs'],
    "Otros": ['Python', 'Metodologías ágiles (Scrum básico)', 'Buenas prácticas de UI/UX']
  };
  
  const getCategory = (skill) => {
    for (const [category, skills] of Object.entries(categories)) {
      if (skills.includes(skill)) return category;
    }
    return "Otros";
  };
  
  return (
    <section className="my-8 animate-slide-in" style={{ animationDelay: '300ms' }}>
      <h3 className="section-title">Habilidades Técnicas</h3>
      
      <div className="mt-6 space-y-6">
        {Object.entries(categories).map(([category, _]) => (
          <div key={category} className="mb-6">
            <h4 className="text-lg font-semibold text-cv-primary mb-3">{category}</h4>
            <div className="flex flex-wrap gap-3">
              {cvData.skills
                .filter(skill => getCategory(skill) === category)
                .map((skill, index) => (
                  <span 
                    key={index} 
                    className="skill-tag"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: 'fade-in 0.5s ease-out forwards',
                      opacity: 0
                    }}
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
