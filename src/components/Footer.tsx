
import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-y-0', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    if (contactRef.current) observer.observe(contactRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer id="contact" className="section bg-resume-primary text-white py-16 relative overflow-hidden" style={{ '--delay': 5 } as React.CSSProperties}>
      <div className="absolute inset-0 bg-[url('/src/assets/code-pattern.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Get In <span className="text-resume-accent">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div 
            ref={contactRef}
            className="transform translate-y-10 opacity-0 transition-all duration-700"
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <Mail className="mr-4 text-resume-accent flex-shrink-0" size={20} />
                <a href="mailto:antonio.telimban.jr@gmail.com" className="hover:text-resume-accent transition-colors break-all">
                  antonio.telimban.jr@gmail.com
                </a>
              </div>
              
              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <Phone className="mr-4 text-resume-accent flex-shrink-0" size={20} />
                <a href="tel:+639068925683" className="hover:text-resume-accent transition-colors">
                  +63 906 892 5683
                </a>
              </div>
              
              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <MapPin className="mr-4 text-resume-accent flex-shrink-0" size={20} />
                <span>Cebu City, Province Of Cebu, CEB 6000</span>
              </div>
              
              <div className="flex items-center mt-8 space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-resume-accent transition-colors hover:scale-110 transform">
                  <Github size={20} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-resume-accent transition-colors hover:scale-110 transform">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div 
            ref={formRef}
            className="transform translate-y-10 opacity-0 transition-all duration-700"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            <form>
              <div className="mb-4 transform hover:translate-y-[-2px] transition-transform">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-resume-accent text-white"
                />
              </div>
              
              <div className="mb-4 transform hover:translate-y-[-2px] transition-transform">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-resume-accent text-white"
                />
              </div>
              
              <div className="mb-4 transform hover:translate-y-[-2px] transition-transform">
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-resume-accent text-white"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-resume-accent text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors hover:scale-105 transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 text-center text-white/70">
          <p className="flex items-center justify-center">
            Designed with <Heart size={16} className="mx-1 text-resume-accent animate-pulse" /> by Antonio Telimban Jr
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
