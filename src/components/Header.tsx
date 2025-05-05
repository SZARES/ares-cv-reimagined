
import React from 'react';
import { useCV } from '../context/CVContext';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  const { cvData } = useCV();
  
  return (
    <header className="relative overflow-hidden rounded-2xl shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-cv-primary to-cv-secondary opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="relative z-10 py-16 px-6 text-center text-white">
        <div className="animate-slide-in">
          <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight mb-2">
            {cvData.name}
          </h1>
          <div className="h-1 w-24 bg-cv-accent mx-auto my-4 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white/90">
            {cvData.jobTitle}
          </h2>
          <p className="text-lg md:text-xl mt-3 text-white/80">
            {cvData.contact}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href={cvData.github} target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center transition-all">
              <Button variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-cv-primary border-white/20">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
            
            <Button 
              onClick={onContactClick}
              className="bg-cv-accent text-white hover:bg-cv-accent/90"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contactame
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
