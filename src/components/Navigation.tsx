
import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Apply', href: '#apply' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-sutra-darker/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo with icon */}
        <div className="flex items-center">
          <div className="mr-2 text-sutra-accent">
            <Scissors className="h-6 w-6" />
          </div>
          <a href="#home" className="text-2xl font-serif text-sutra-cream group">
            <span className="inline-block group-hover:text-sutra-accent transition-colors duration-300">Sutra</span> 
            <span className="text-sutra-accent">Design</span> Academy
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
              href={item.href}
              className="text-sutra-cream hover:text-sutra-accent relative py-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-sutra-accent after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}
          <button className="btn-primary relative overflow-hidden group">
            <span className="relative z-10">Join Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-sutra-accent to-sutra-cream-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-sutra-cream hover:text-sutra-accent transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sutra-darker/95 backdrop-blur-md shadow-lg border-t border-sutra-accent/20 animate-fade-in">
          <div className="py-4 px-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                href={item.href}
                className="text-sutra-cream py-2 hover:text-sutra-accent transition-colors flex items-center"
              >
                <span className="w-1 h-1 bg-sutra-accent rounded-full mr-2"></span>
                {item.name}
              </a>
            ))}
            <button className="btn-primary w-full mt-4 relative overflow-hidden group">
              <span className="relative z-10">Join Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-sutra-accent to-sutra-cream-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
