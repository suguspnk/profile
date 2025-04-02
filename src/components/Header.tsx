import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        'hero',
        'about',
        'experience',
        'certifications',
        'skills',
        'education',
        'contact',
      ];
      let currentSection = 'hero';
      const scrollOffset = 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
            currentSection = sectionId;
            break;
          }
        }
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="focus:outline-none"
        >
          <h1
            className={`text-xl md:text-2xl font-bold text-foreground transition-transform hover:scale-105`}
          >
            <span className={`text-accent`}>A</span>
            ntonio
          </h1>
        </button>

        <nav className="hidden md:flex items-center">
          <ul className="flex gap-6 lg:gap-8 items-center">
            {[
              'About',
              'Experience',
              'Certifications',
              'Skills',
              'Education',
              'Contact',
            ].map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative transition-colors duration-300 py-2 text-sm lg:text-base font-medium ${
                      isActive(sectionId)
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item}
                    {isActive(sectionId) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent animate-fade-in duration-300"></span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          className={`md:hidden p-2 relative z-20 text-foreground`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={26} className="animate-fade-in" />
          ) : (
            <Menu size={26} className="animate-fade-in" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-background z-10 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <ul className="flex flex-col mt-20 px-6">
          {[
            'About',
            'Experience',
            'Certifications',
            'Skills',
            'Education',
            'Contact',
          ].map((item) => {
            const sectionId = item.toLowerCase();
            return (
              <li key={item} className="border-b border-border">
                <button
                  onClick={() => scrollToSection(sectionId)}
                  className={`w-full text-left py-5 text-lg font-medium transition-colors duration-200 ${
                    isActive(sectionId)
                      ? 'text-accent'
                      : 'text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
