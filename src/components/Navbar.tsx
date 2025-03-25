
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 lg:px-12',
        isScrolled ? 'frosted-glass' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="font-display text-xl sm:text-2xl font-bold tracking-tight"
        >
          Ahson Shaikh
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium relative hover:text-primary/80 transition-colors',
                    'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300',
                    'hover:after:scale-x-100',
                    activeSection === link.href.slice(1) && 'after:scale-x-100'
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "w-6 h-0.5 bg-primary transition-transform duration-300",
              isMobileMenuOpen && "transform rotate-45 translate-y-2"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-primary transition-opacity duration-300",
              isMobileMenuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-primary transition-transform duration-300",
              isMobileMenuOpen && "transform -rotate-45 -translate-y-2"
            )} 
          />
        </button>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "fixed inset-0 frosted-glass md:hidden flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out",
            isMobileMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none -z-10"
          )}
        >
          <nav>
            <ul className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(
                      "text-xl font-medium py-2 px-4 rounded-md transition-colors",
                      activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-primary/80"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
