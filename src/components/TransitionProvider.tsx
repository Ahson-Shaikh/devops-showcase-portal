
import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface TransitionContextType {
  isVisible: boolean;
}

const TransitionContext = createContext<TransitionContextType>({ isVisible: false });

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    const staggeredElements = document.querySelectorAll('.staggered-fade-in');

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    staggeredElements.forEach((element) => {
      observer.observe(element);
    });

    setIsVisible(true);

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
      staggeredElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <TransitionContext.Provider value={{ isVisible }}>
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
