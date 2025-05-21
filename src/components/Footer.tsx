
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Scissors, Heart, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would normally send the email to your backend
    console.log('Newsletter signup:', email);
    
    toast({
      title: "Thank You!",
      description: "You've been subscribed to our newsletter."
    });
    
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-sutra-darker text-sutra-cream relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-sutra-darker via-sutra-accent/30 to-sutra-darker"></div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <div className="mr-2 text-sutra-accent">
                <Scissors className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl">
                <span>Sutra </span>
                <span className="text-sutra-accent">Design</span> Academy
              </h3>
            </div>
            <p className="text-sutra-cream/70 leading-relaxed">
              Nurturing the next generation of fashion designers through education, inspiration, and community.
            </p>
            
            {/* Fashion quote */}
            <div className="mt-8 p-4 border-l-2 border-sutra-accent/30">
              <p className="text-sm italic text-sutra-cream-light/70">
                "Style is a way to say who you are without having to speak."
              </p>
              <p className="text-xs text-sutra-accent mt-2">— Rachel Zoe</p>
            </div>
          </div>
          
          {/* Contact Info Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl mb-4 pb-2 border-b border-sutra-accent/20">Contact Us</h4>
            <div className="space-y-4">
              <p className="flex items-center space-x-2">
                <span className="text-sutra-accent">Email:</span>
                <a href="mailto:info@sutradesignacademy.com" className="text-sutra-cream/70 hover:text-sutra-cream transition-colors">
                  info@sutradesignacademy.com
                </a>
              </p>
              
              <p className="flex items-center space-x-2">
                <span className="text-sutra-accent">Phone:</span>
                <a href="tel:+9779804304000" className="text-sutra-cream/70 hover:text-sutra-cream transition-colors">
                  +977 9804304000
                </a>
              </p>
            </div>
            
            <div className="pt-6">
              <h5 className="text-sutra-cream mb-4 pb-2 border-b border-sutra-accent/20">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://tiktok.com/@sutrabymerina" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sutra-cream/70 hover:text-sutra-accent transition-colors flex items-center space-x-2"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.15-1.75V11.9a6.32 6.32 0 003.31 6.3 6.3 6.3 0 01-1.8-4.38V6.69z"></path>
                  </svg>
                  <span>TikTok</span>
                </a>
                <a 
                  href="https://instagram.com/sutrabymerina" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sutra-cream/70 hover:text-sutra-accent transition-colors flex items-center space-x-2"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h4 className="font-serif text-xl mb-4 pb-2 border-b border-sutra-accent/20">Newsletter</h4>
            <p className="text-sutra-cream/70 mb-4">
              Stay updated with our latest programs and events.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="input-custom w-full pr-12 bg-sutra-dark/70 focus:border-sutra-accent"
                />
                <button 
                  type="submit" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-sutra-accent text-sutra-darker px-3 py-1 rounded-sm text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            {/* Newsletter benefits */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sutra-cream/60 text-sm">
                <Heart className="h-4 w-4 text-sutra-accent mr-2" />
                <span>Exclusive fashion tips & trends</span>
              </div>
              <div className="flex items-center text-sutra-cream/60 text-sm">
                <Heart className="h-4 w-4 text-sutra-accent mr-2" />
                <span>Early access to workshops</span>
              </div>
              <div className="flex items-center text-sutra-cream/60 text-sm">
                <Heart className="h-4 w-4 text-sutra-accent mr-2" />
                <span>Student showcase highlights</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sutra-accent/20 mt-12 pt-6 text-center text-sutra-cream/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Sutra Design Academy. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-4 text-xs">
            <a href="#" className="hover:text-sutra-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sutra-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sutra-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
