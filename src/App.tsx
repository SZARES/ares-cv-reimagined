
import React, { useState } from 'react';
import { CVProvider } from './context/CVContext';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { Toaster } from '@/components/ui/sonner';

const App = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <CVProvider>
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
        <Toaster position="top-right" />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Header onContactClick={() => setContactModalOpen(true)} />
          <main className="rounded-2xl bg-white shadow-xl p-6 md:p-8 mt-8 animate-fade-in">
            <Profile />
            <div className="h-px bg-gradient-to-r from-transparent via-cv-primary/20 to-transparent my-8"></div>
            <Experience />
            <div className="h-px bg-gradient-to-r from-transparent via-cv-primary/20 to-transparent my-8"></div>
            <Skills />
            <div className="h-px bg-gradient-to-r from-transparent via-cv-primary/20 to-transparent my-8"></div>
            <Education />
            <div className="h-px bg-gradient-to-r from-transparent via-cv-primary/20 to-transparent my-8"></div>
            <Portfolio />
          </main>
          <Footer onContactClick={() => setContactModalOpen(true)} />
        </div>
        <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      </div>
    </CVProvider>
  );
};

export default App;
