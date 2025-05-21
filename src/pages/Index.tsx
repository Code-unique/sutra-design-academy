
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-sutra-dark text-sutra-cream min-h-screen overflow-x-hidden">
      <Navigation />
      <div className="relative">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ApplicationForm />
        <Footer />
        
        {/* Logo floating in corner */}
        <div className="fixed bottom-4 right-4 w-16 h-16 opacity-20 pointer-events-none z-10">
          <img 
            src="" 
            alt="Sutra Design Academy" 
            className="w-full h-full object-contain" 
          />
        </div>
        
        {/* Enhanced floating decorative fashion elements */}
        <div className="fixed top-1/4 left-10 w-2 h-2 bg-sutra-accent/30 rounded-full animate-pulse"></div>
        <div className="fixed top-1/3 right-20 w-3 h-3 bg-sutra-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="fixed bottom-1/4 left-20 w-2 h-2 bg-sutra-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="fixed bottom-1/3 right-10 w-2 h-2 bg-sutra-accent/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Fashion-specific decorative elements */}
        <div className="fixed top-1/2 left-5 w-10 h-px bg-sutra-accent/30 rotate-45"></div>
        <div className="fixed top-1/2 right-5 w-10 h-px bg-sutra-accent/30 -rotate-45"></div>
        <div className="fixed top-2/3 left-1/4 w-px h-20 bg-sutra-accent/20"></div>
        <div className="fixed top-1/3 right-1/4 w-px h-20 bg-sutra-accent/20"></div>
      </div>
    </div>
  );
};

export default Index;
