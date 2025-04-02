import { useEffect } from 'react';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Antonio Telimban Jr - Software Engineer';

    // IntersectionObserver setup for .section elements
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -50px 0px', // Adjust trigger point slightly upwards
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Touch swipe detection logic (can be kept if needed, but currently unused)
    let touchStartX = 0;
    let touchEndX = 0;

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const swipeDistance = touchEndX - touchStartX;

      if (Math.abs(swipeDistance) > swipeThreshold) {
        // Could implement section navigation here in the future
        console.log(`Swipe detected: ${swipeDistance > 0 ? 'right' : 'left'}`);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    // Cleanup function
    return () => {
      observer.disconnect(); // Disconnect observer on cleanup
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    // Ensured background color continuity if needed, though components define their own
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        {/* Wrapped sections in main for semantic structure */}
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
