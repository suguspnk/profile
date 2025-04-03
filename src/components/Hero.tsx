import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronDown, Mail, User } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-resume-light to-resume-secondary/90 text-resume-text-primary w-full">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 text-center relative z-10 flex flex-col items-center gap-10 md:gap-16">
        <div
          ref={profileRef}
          className="flex justify-center transform translate-y-10 opacity-0 transition-all duration-700 mb-8 md:mb-12"
        >
          <div
            className={`relative mx-auto ${
              isMobile ? 'w-40 h-40' : 'md:w-64 md:h-64 lg:w-80 lg:h-80'
            } rounded-full overflow-hidden border-4 border-resume-bg-alt shadow-lg md:shadow-xl transition-transform duration-300`}
          >
            <img
              src="/lovable-uploads/e86a25c1-b140-4266-8aed-dd77878a31e4.png"
              alt="Antonio Telimban Jr"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-resume-primary mb-5 transform translate-y-10 opacity-0 transition-all duration-700"
          >
            ANTONIO TELIMBAN JR
          </h1>
          <h2
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-resume-primary mb-8 md:mb-10 font-medium transform translate-y-10 opacity-0 transition-all duration-700"
          >
            <span className="text-resume-primary">SOFTWARE ENGINEER</span>
          </h2>
          <p
            ref={descriptionRef}
            className="text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-10 md:mb-14 text-resume-text-secondary transform translate-y-10 opacity-0 transition-all duration-700"
          >
            Full Stack Developer with a decade of experience building scalable
            applications and optimizing software performance.
          </p>
          <div
            ref={buttonsRef}
            className="flex flex-wrap justify-center gap-4 md:gap-5 transform translate-y-10 opacity-0 transition-all duration-700 mb-10"
          >
            <button
              onClick={() => scrollToSection('experience')}
              className="flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3 bg-resume-primary text-white rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-resume-primary focus:ring-opacity-50"
            >
              <User size={isMobile ? 18 : 20} />
              View Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3 border border-resume-primary text-resume-primary rounded-lg hover:bg-resume-primary hover:text-white transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-resume-primary focus:ring-opacity-50"
            >
              <Mail size={isMobile ? 18 : 20} />
              Contact Me
            </button>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce p-2 rounded-full bg-resume-primary/20 hover:bg-resume-primary/30 transition-colors mt-8"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} className="text-resume-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
