
import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToApply = () => {
    const element = document.querySelector('#apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Enhanced background with fashion-inspired patterns and color overlays */}
      <div className="absolute inset-0 bg-sutra-darker overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e6dcca' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
          }}
        ></div>
      </div>

      {/* Fashion-inspired colorful background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sutra-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D4B996]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E6C4A2]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sutra-accent/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-sutra-accent" />
            <span className="text-sm font-medium text-sutra-cream-light">Fashion Design Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-sutra-cream leading-tight">
            <span className="relative inline-block">
              Step into the World
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sutra-accent to-sutra-accent/0"></span>
            </span>
            <br /> of Fashion with Sutra Design Academy
          </h1>
          
          <p className="text-xl md:text-2xl text-sutra-cream-light/80 mb-10 leading-relaxed">
            Where creativity meets craftsmanship. Join our community of aspiring designers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToApply} 
              className="btn-primary relative overflow-hidden group"
            >
              <span className="relative z-10">Apply Today</span>
              <span className="absolute inset-0 bg-gradient-to-r from-sutra-accent to-sutra-cream-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            
            <a 
              href="#programs" 
              className="btn-outline relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Programs</span>
              <span className="absolute inset-0 bg-gradient-to-r from-sutra-accent to-sutra-cream-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>

        {/* Enhanced fashion-inspired decorative elements */}
        <div className="absolute bottom-20 right-0 w-1/3 h-80 bg-sutra-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-sutra-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 bg-sutra-accent/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
