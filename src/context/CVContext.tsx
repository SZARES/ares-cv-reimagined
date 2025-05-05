
import React, { createContext, useState, useContext } from 'react';

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Experience {
  jobTitle: string;
  company: string;
  duration: string;
  project: string;
  description: string;
}

interface Portfolio {
  projectName: string;
  description: string;
  link?: string;
}

interface CVData {
  name: string;
  jobTitle: string;
  contact: string;
  github: string;
  profile: string;
  skills: string[];
  experience: Experience[];
  portfolio: Portfolio[];
  education: Education[];
  extras: string[];
}

interface CVContextType {
  cvData: CVData;
  setCvData: React.Dispatch<React.SetStateAction<CVData>>;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

export const useCV = () => {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
};

export const CVProvider = ({ children }: { children: React.ReactNode }) => {
  const [cvData, setCvData] = useState<CVData>({
    name: 'Bruss Antonio Silva Riofrio',
    jobTitle: 'Frontend Developer (React + AI)',
    contact: 'Piura, Perú | 969455288 | brusssilva904@gmail.com',
    github: 'https://github.com/SZARES',
    profile: `Estudiante de Ingeniería de Sistemas en la UTP (7mo ciclo) con especialización en desarrollo Frontend y una fuerte pasión por crear experiencias digitales modernas. Con experiencia práctica en el desarrollo con <b>React.js</b>, <b>TailwindCSS</b> y <b>Figma</b>, me enfoco en construir interfaces intuitivas, reutilizables y completamente responsivas. Además, tengo un enfoque proactivo en el uso de herramientas de asistencia como <b>ChatGPT</b>, <b>GitHub Copilot</b> y <b>Lovable</b>, lo que optimiza mi flujo de trabajo y calidad de código. Apasionado por aplicar <b>Inteligencia Artificial</b> para mejorar la experiencia del usuario y potenciar el rendimiento de las aplicaciones web. Busco oportunidades para contribuir a proyectos innovadores y seguir aprendiendo en un entorno colaborativo.`,
    skills: [
      'HTML', 'CSS', 'JavaScript', 'React.js (Hooks, Context API)', 'Python',
      'TailwindCSS', 'Figma', 'Responsive Design', 'Componentes reutilizables',
      'ChatGPT', 'GitHub Copilot', 'Fetch', 'Consumo de APIs', 'Git y GitHub',
      'Metodologías ágiles (Scrum básico)', 'Buenas prácticas de UI/UX'
    ],
    experience: [
      {
        jobTitle: 'Frontend Developer',
        company: 'UTP',
        duration: '2025',
        project: 'InnovaEd',
        description: `Desarrollo de una plataforma educativa con gamificación e inteligencia artificial. Implementación de interfaz con React y diseño modular con TailwindCSS. Creación de componentes reutilizables y consumo de APIs para contenidos dinámicos. Uso de ChatGPT, Copilot y Lovable como asistente de código en tareas clave. Coordinación con el equipo bajo principios de Scrum.`
      }
    ],
    portfolio: [
      { 
        projectName: 'InnovaEd - Sistema de Asistencia Académica Inteligente', 
        description: 'Aplicación web diseñada para asistir en la gestión académica mediante el uso de Inteligencia Artificial y técnicas de estudio personalizadas. El sistema permite a los usuarios (estudiantes y administradores) iniciar sesión, ver su progreso, gestionar planes de estudio, y acceder a un panel de control interactivo con múltiples funciones, como el seguimiento de actividades y progreso semanal. Esta aplicación fue desarrollada con React, React Router, Sonner, y TailwindCSS, con un enfoque en la experiencia de usuario y la accesibilidad.',
        link: 'https://github.com/SZARES/inno-ed-study-smart'
      },
      { 
        projectName: 'Rick & Morty Character Finder', 
        description: 'Aplicación que permite explorar los personajes del universo de Rick and Morty. Utilizando la API oficial de la serie, esta app carga y muestra detalles de los personajes como su nombre, estado, especie y número de episodios en los que aparecen. Puedes buscar los personajes con un solo clic y verlos en una interfaz interactiva. La aplicación utiliza React.js, useState, y la manipulación de datos JSON obtenidos desde la API.',
        link: 'https://github.com/SZARES/primer-react-api'
      },  
    ],
    education: [
      { degree: 'Ingeniería de Sistemas e Informática', institution: 'UTP', year: 'Actualmente en 7timo ciclo' }
    ],
    extras: [
      'Interés constante en aplicar IA para mejorar la experiencia de usuario.',
      'Buen manejo de herramientas de diseño (Figma) para prototipos.',
      'Creatividad, iniciativa y aprendizaje autodidacta.'
    ]
  });

  return (
    <CVContext.Provider value={{ cvData, setCvData }}>
      {children}
    </CVContext.Provider>
  );
};

export default CVContext;
