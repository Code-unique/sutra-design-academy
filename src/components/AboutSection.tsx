
import React from 'react';
import { Scissors, PenTool, Shirt } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutSection = () => {
  const designTools = [
    {
      name: 'Pattern Making',
      icon: <Scissors className="h-12 w-12 text-sutra-accent mb-4" />,
      description: 'Learn the art of pattern making and construction techniques from industry professionals.'
    },
    {
      name: 'Fashion Illustration',
      icon: <PenTool className="h-12 w-12 text-sutra-accent mb-4" />,
      description: 'Develop your unique design style through illustration and sketching workshops.'
    },
    {
      name: 'Garment Construction',
      icon: <Shirt className="h-12 w-12 text-sutra-accent mb-4" />,
      description: 'Master the techniques of garment construction and fabric manipulation.'
    }
  ];

  return (
    <section id="about" className="section bg-sutra-darker relative overflow-hidden">
      {/* Enhanced fashion-inspired decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sutra-darker via-sutra-accent/30 to-sutra-darker"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 border border-sutra-accent/20 rounded-full"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 border border-sutra-accent/10 rounded-full"></div>
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-sutra-accent/20 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-sutra-accent/30 rounded-full"></div>

      <div className="container-custom relative z-10">
        <SectionTitle title="Our Story" alignment="center" />
        
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          <p className="text-lg leading-relaxed text-sutra-cream/90 mb-6">
            Sutra Design Academy, an initiative by the emerging fashion brand Sutra by Merina, 
            is dedicated to nurturing the next generation of fashion designers. With a fresh presence in 
            the market and a growing community, we aim to provide aspiring designers with the skills 
            and inspiration they need to succeed.
          </p>
          <p className="text-lg leading-relaxed text-sutra-cream/90">
            Our philosophy is rooted in combining traditional craftsmanship with contemporary design sensibilities, 
            creating a unique approach to fashion education that balances creativity with practical skills.
          </p>
          
          {/* Fashion-inspired decorative element */}
          <div className="absolute -right-10 -bottom-10 w-20 h-20">
            <div className="w-full h-full border-r-2 border-b-2 border-sutra-accent/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-sutra-dark p-8 rounded-sm border border-sutra-accent/20 text-center hover:border-sutra-accent transition-colors duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-sutra-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-center">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-serif mb-3">{tool.name}</h3>
                <p className="text-sutra-cream/70">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
