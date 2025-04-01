
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ['about', 'experience', 'skills', 'education', 'contact'];
      let currentSection = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-resume-primary transform transition-transform hover:scale-105">
          <span className="text-resume-accent">A</span>ntonio
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className={`relative text-resume-dark hover:text-resume-accent transition-colors py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-resume-accent after:transition-all after:duration-300 ${
                  isActive('about') ? 'text-resume-accent after:w-full' : 'after:w-0'
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className={`relative text-resume-dark hover:text-resume-accent transition-colors py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-resume-accent after:transition-all after:duration-300 ${
                  isActive('experience') ? 'text-resume-accent after:w-full' : 'after:w-0'
                }`}
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`relative text-resume-dark hover:text-resume-accent transition-colors py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-resume-accent after:transition-all after:duration-300 ${
                  isActive('skills') ? 'text-resume-accent after:w-full' : 'after:w-0'
                }`}
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('education')}
                className={`relative text-resume-dark hover:text-resume-accent transition-colors py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-resume-accent after:transition-all after:duration-300 ${
                  isActive('education') ? 'text-resume-accent after:w-full' : 'after:w-0'
                }`}
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`relative text-resume-dark hover:text-resume-accent transition-colors py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-resume-accent after:transition-all after:duration-300 ${
                  isActive('contact') ? 'text-resume-accent after:w-full' : 'after:w-0'
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-resume-primary relative z-20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="animate-fade-in" /> : <Menu size={24} className="animate-fade-in" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-10 pt-16 animate-fade-in">
          <ul className="flex flex-col">
            <li className="border-b border-gray-100">
              <button 
                onClick={() => scrollToSection('about')}
                className={`w-full text-left px-4 py-4 hover:bg-resume-secondary transition-colors ${
                  isActive('about') ? 'text-resume-accent' : ''
                }`}
              >
                About
              </button>
            </li>
            <li className="border-b border-gray-100">
              <button 
                onClick={() => scrollToSection('experience')}
                className={`w-full text-left px-4 py-4 hover:bg-resume-secondary transition-colors ${
                  isActive('experience') ? 'text-resume-accent' : ''
                }`}
              >
                Experience
              </button>
            </li>
            <li className="border-b border-gray-100">
              <button 
                onClick={() => scrollToSection('skills')}
                className={`w-full text-left px-4 py-4 hover:bg-resume-secondary transition-colors ${
                  isActive('skills') ? 'text-resume-accent' : ''
                }`}
              >
                Skills
              </button>
            </li>
            <li className="border-b border-gray-100">
              <button 
                onClick={() => scrollToSection('education')}
                className={`w-full text-left px-4 py-4 hover:bg-resume-secondary transition-colors ${
                  isActive('education') ? 'text-resume-accent' : ''
                }`}
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`w-full text-left px-4 py-4 hover:bg-resume-secondary transition-colors ${
                  isActive('contact') ? 'text-resume-accent' : ''
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
