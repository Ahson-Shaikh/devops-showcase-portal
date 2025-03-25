
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTransition } from './TransitionProvider';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useTransition();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navTop = navRef.current.offsetTop || 0;
        const navHeight = navRef.current.offsetHeight || 0;
        const scrollY = window.scrollY;
        
        setIsScrolled(scrollY > navTop + navHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold">
          <span className="text-primary">Ahson</span> Shaikh
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${isScrolled ? 'hover:bg-accent hover:text-accent-foreground' : 'hover:bg-white/10 hover:text-primary'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-2 inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-6 bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground rounded-md p-2 hover:bg-accent"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <a href="#" className="text-2xl font-display font-bold">
                <span className="text-primary">Ahson</span> Shaikh
              </a>
              <button 
                className="text-foreground rounded-md p-2 hover:bg-accent"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-lg font-medium rounded-md hover:bg-accent"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="mt-4 inline-flex items-center justify-center rounded-md text-base font-medium h-12 px-6 bg-primary text-primary-foreground shadow hover:bg-primary/90"
                onClick={toggleMenu}
              >
                Hire Me
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
