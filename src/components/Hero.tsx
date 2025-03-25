
import { ChevronDown } from 'lucide-react';
import { useTransition } from './TransitionProvider';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { isVisible } = useTransition();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-12 section-padding overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center relative z-10">
        <div className={`staggered-fade-in ${isVisible ? 'active' : ''} text-center`}>
          <div className="inline-flex items-center gap-2 py-2 px-4 mb-6 rounded-full bg-accent">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium">DevOps Engineer & Consultant</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
            <span className="gradient-text">Ahson Shaikh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transforming infrastructure into <span className="text-primary font-medium">scalable</span>, <span className="text-primary font-medium">efficient</span>, and <span className="text-primary font-medium">automated</span> environments. <span className="font-medium">Providing comprehensive DevOps support services.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="gradient-bg text-white hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 hover:bg-accent/50"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
      
      {/* Modern background elements */}
      <div className="absolute top-1/3 right-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/30 rounded-full blur-[100px] -z-10 opacity-60"></div>
      <div className="absolute bottom-1/3 left-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-secondary/30 rounded-full blur-[100px] -z-10 opacity-60"></div>
      
      {/* Animated blob */}
      <div className="absolute top-[20%] right-[15%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-primary/20 to-secondary/20 blob-animation -z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern -z-20"></div>
    </section>
  );
};

export default Hero;
