
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 0 },
      { ref: subtitleRef, delay: 300 },
      { ref: descriptionRef, delay: 600 },
      { ref: buttonsRef, delay: 900 },
      { ref: profileRef, delay: 450 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('translate-y-0', 'opacity-100');
        }, delay);
      }
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-resume-light to-resume-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('/src/assets/code-pattern.png')] opacity-5 animate-pulse"></div>
      <div className="container mx-auto px-4 py-12 md:py-20 text-center relative z-10 flex flex-col-reverse md:flex-row md:items-center md:text-left md:justify-between gap-8">
        <div className="md:w-3/5">
          <h1 
            ref={titleRef}
            className="text-3xl md:text-6xl font-bold text-resume-primary mb-4 transform translate-y-10 opacity-0 transition-all duration-700"
          >
            ANTONIO TELIMBAN JR
          </h1>
          <h2 
            ref={subtitleRef}
            className="text-xl md:text-3xl text-resume-dark mb-6 md:mb-8 font-medium transform translate-y-10 opacity-0 transition-all duration-700"
          >
            <span className="text-resume-accent">SOFTWARE ENGINEER</span>
          </h2>
          <p 
            ref={descriptionRef}
            className="text-base md:text-lg max-w-2xl mx-auto md:mx-0 mb-8 md:mb-12 text-resume-dark transform translate-y-10 opacity-0 transition-all duration-700"
          >
            Full Stack Developer with 9 years of experience building scalable applications
            and optimizing software performance.
          </p>
          <div 
            ref={buttonsRef}
            className="flex flex-wrap justify-center md:justify-start gap-4 transform translate-y-10 opacity-0 transition-all duration-700"
          >
            <button 
              onClick={() => scrollToSection('experience')}
              className="px-4 md:px-6 py-2 md:py-3 bg-resume-primary text-white rounded-md hover:bg-opacity-90 transition-all hover:scale-105"
            >
              View Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 md:px-6 py-2 md:py-3 border border-resume-primary text-resume-primary rounded-md hover:bg-resume-primary hover:text-white transition-all hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div 
          ref={profileRef} 
          className="flex justify-center md:block md:w-2/5 transform translate-y-10 opacity-0 transition-all duration-700"
        >
          <div className={`relative mx-auto ${isMobile ? 'w-48 h-48' : 'w-80 h-80'} rounded-full overflow-hidden border-4 border-resume-accent shadow-xl hover:scale-105 transition-transform duration-300`}>
            <img 
              src="/lovable-uploads/e86a25c1-b140-4266-8aed-dd77878a31e4.png" 
              alt="Antonio Telimban Jr" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-resume-primary opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} className="text-resume-accent" />
      </button>
    </section>
  );
};

export default Hero;
