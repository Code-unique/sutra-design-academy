
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  light?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'left',
  light = false 
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]}`}>
      <h2 className={`text-3xl md:text-4xl font-serif mb-2 relative inline-block ${light ? 'text-sutra-cream-light' : 'text-sutra-cream'}`}>
        {title}
        <span className={`absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-sutra-accent to-transparent`}></span>
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl mt-4 ${light ? 'text-sutra-cream-light/80' : 'text-sutra-cream/80'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-[2px] w-20 mt-4 ${alignment === 'center' ? 'mx-auto' : ''} bg-gradient-to-r from-sutra-accent to-transparent`} />
      
      {/* Decorative elements */}
      {alignment === 'center' && (
        <div className="relative mt-6">
          <div className="absolute left-1/2 -translate-x-1/2 -top-2">
            <div className="w-10 h-px bg-sutra-accent/50"></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0">
            <div className="w-6 h-px bg-sutra-accent/30"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
