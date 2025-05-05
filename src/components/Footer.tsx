
import React from 'react';
import { Mail } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer = ({ onContactClick }: FooterProps) => {
  return (
    <footer className="mt-12 pb-8">
      <div className="bg-gradient-to-r from-cv-primary to-cv-secondary rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">¿Listo para trabajar juntos?</h3>
              <p className="opacity-90">¡Contáctame y hablemos de tu proyecto!</p>
            </div>
            
            <button
              onClick={onContactClick}
              className="px-6 py-3 bg-white text-cv-primary rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center"
            >
              <Mail size={18} className="mr-2" />
              Envíame un mensaje
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center text-cv-text/70 text-sm mt-8">
        &copy; {new Date().getFullYear()} Bruss Antonio Silva Riofrio • Desarrollado con React y Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;
