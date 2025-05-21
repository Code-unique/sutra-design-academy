
import React from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  duration?: string;
}

const ProgramCard = ({ title, description, image, duration }: ProgramCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-sm bg-sutra-dark border border-sutra-accent/20 hover:border-sutra-accent transition-all duration-300">
      {/* Decorative corner elements - fashion-inspired sewn corners */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-sutra-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-sutra-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-sutra-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-sutra-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Image with enhanced overlay */}
      <div 
        className="h-56 bg-cover bg-center relative overflow-hidden" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sutra-dark to-transparent"></div>
        <div className="absolute inset-0 bg-sutra-accent/10 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 relative">
        {duration && (
          <span className="absolute top-0 right-0 transform translate-y-2 -translate-x-2 bg-sutra-accent text-sutra-darker text-xs uppercase tracking-wider px-3 py-1 rounded-sm font-medium">
            {duration}
          </span>
        )}
        <h3 className="text-xl font-serif mb-3 group-hover:text-sutra-accent transition-colors duration-300">{title}</h3>
        <p className="text-sutra-cream/70 text-sm">{description}</p>
        
        {/* Read more indicator with fashion-inspired thread line */}
        <div className="mt-4 flex items-center text-sm text-sutra-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span>Learn more</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
