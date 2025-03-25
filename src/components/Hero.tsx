
import { ChevronDown } from 'lucide-react';
import { useTransition } from './TransitionProvider';

const Hero = () => {
  const { isVisible } = useTransition();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-12 section-padding"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        <div className={`staggered-fade-in ${isVisible ? 'active' : ''} text-center`}>
          <span className="inline-block py-1 px-3 mb-4 text-sm bg-accent rounded-full">DevOps Engineer</span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
            Ahson Shaikh
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transforming infrastructure into <span className="text-primary font-medium">scalable</span>, <span className="text-primary font-medium">efficient</span>, and <span className="text-primary font-medium">automated</span> environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-primary text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              Get in Touch
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 border border-input bg-background shadow-sm hover:bg-accent transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/50 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-accent/50 rounded-full blur-3xl -z-10 opacity-60"></div>
    </section>
  );
};

export default Hero;
