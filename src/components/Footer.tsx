
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-8 lg:px-12 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-display text-xl font-bold tracking-tight">Ahson Shaikh</h3>
            <p className="text-primary-foreground/70 mt-2 text-sm">DevOps Engineer & Cloud Infrastructure Expert</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="h-px w-full bg-primary-foreground/10 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-primary-foreground/60 mb-4 md:mb-0">
            &copy; {currentYear} Ahson Shaikh. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/ahson-shaikh-974b2b197/" 
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a 
              href="https://github.com/Ahson-Shaikh" 
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
