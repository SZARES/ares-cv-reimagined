
import React from 'react';
import { useCV } from '../context/CVContext';

const Profile = () => {
  const { cvData } = useCV();
  
  return (
    <section className="my-8 animate-slide-in" style={{ animationDelay: '100ms' }}>
      <h3 className="section-title">Perfil Profesional</h3>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-cv-primary/60 to-transparent rounded-full"></div>
        <div className="pl-6">
          <p 
            dangerouslySetInnerHTML={{ __html: cvData.profile }} 
            className="text-lg leading-relaxed text-cv-text"
          ></p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
