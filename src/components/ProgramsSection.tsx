
import React from 'react';
import SectionTitle from './SectionTitle';
import ProgramCard from './ProgramCard';
import { Star, Scissors, PenTool, Shirt } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Fashion Design Workshops",
      description: "Immersive hands-on workshops focusing on design principles, fabric selection, and trendsetting techniques.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      duration: "4 weeks"
    },
    {
      title: "Styling and Draping Sessions",
      description: "Learn advanced styling and draping techniques through practical, instructor-guided sessions.",
      image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      duration: "6 weeks"
    },
    {
      title: "Branding and Marketing for Fashion",
      description: "Develop a comprehensive understanding of branding, marketing, and business aspects of fashion design.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      duration: "8 weeks"
    },
    {
      title: "Portfolio Development",
      description: "Create a professional design portfolio showcasing your unique style and technical abilities.",
      image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      duration: "10 weeks"
    }
  ];

  const scrollToApply = () => {
    const element = document.querySelector('#apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="section bg-sutra-dark relative overflow-hidden">
      {/* Fashion-inspired decorative pattern element */}
      <div className="absolute right-0 top-0 h-full w-1/6 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.344 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413L30 11.8l7.07 7.414z' fill='%23d4c5a9' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle 
          title="What We Offer" 
          subtitle="Comprehensive programs designed to nurture your creative talents"
          alignment="center"
        />
        
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 text-sutra-accent fill-sutra-accent" />
            ))}
          </div>
          <span className="ml-2 text-sutra-cream-light/80 text-sm">Rated 4.9/5 by our students</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index} 
              title={program.title} 
              description={program.description} 
              image={program.image} 
              duration={program.duration}
            />
          ))}
        </div>
        
        <div className="flex justify-center">
          <button onClick={scrollToApply} className="btn-primary relative overflow-hidden group">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-gradient-to-r from-sutra-accent to-sutra-cream-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>
        </div>
        
        {/* Fashion-inspired decorative element */}
        <div className="mt-20 py-10 border-t border-b border-sutra-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-sutra-accent font-serif text-xl mb-2">15+</h4>
              <p className="text-sutra-cream/70">Expert Instructors</p>
            </div>
            <div>
              <h4 className="text-sutra-accent font-serif text-xl mb-2">200+</h4>
              <p className="text-sutra-cream/70">Successful Graduates</p>
            </div>
            <div>
              <h4 className="text-sutra-accent font-serif text-xl mb-2">95%</h4>
              <p className="text-sutra-cream/70">Industry Placement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
