
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-resume-light to-resume-secondary">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-resume-primary mb-4">
          ANTONIO TELIMBAN JR
        </h1>
        <h2 className="text-2xl md:text-3xl text-resume-dark mb-8 font-medium">
          <span className="text-resume-accent">SOFTWARE ENGINEER</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-resume-dark">
          Full Stack Developer with 7+ years of experience building scalable applications
          and optimizing software performance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => scrollToSection('experience')}
            className="px-6 py-3 bg-resume-primary text-white rounded-md hover:bg-opacity-90 transition-all"
          >
            View Experience
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 border border-resume-primary text-resume-primary rounded-md hover:bg-resume-primary hover:text-white transition-all"
          >
            Contact Me
          </button>
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
