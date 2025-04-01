
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-resume-primary">
          <span className="text-resume-accent">A</span>ntonio
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-resume-dark hover:text-resume-accent transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-resume-dark hover:text-resume-accent transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-resume-dark hover:text-resume-accent transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-resume-dark hover:text-resume-accent transition-colors"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-resume-dark hover:text-resume-accent transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-resume-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
          <ul className="flex flex-col">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-4 py-3 hover:bg-resume-secondary transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="w-full text-left px-4 py-3 hover:bg-resume-secondary transition-colors"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className="w-full text-left px-4 py-3 hover:bg-resume-secondary transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('education')}
                className="w-full text-left px-4 py-3 hover:bg-resume-secondary transition-colors"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-4 py-3 hover:bg-resume-secondary transition-colors"
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
