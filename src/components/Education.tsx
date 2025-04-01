
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  const certificationRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);
  const interestItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-y-0', 'opacity-100', 'scale-100');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });

    if (educationRef.current) observer.observe(educationRef.current);
    if (certificationRef.current) observer.observe(certificationRef.current);
    if (interestsRef.current) observer.observe(interestsRef.current);
    
    interestItemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const certifications = [
    "Google Cloud Certified - Professional Cloud Architect",
    "Google Cloud Certified - Professional Cloud Developer",
    "Google Cloud Certified - Database Engineer",
    "Google Cloud Certified - DevOps Engineer",
    "Java SE 8 Professional",
    "PhilNITS Applied Information (AP)"
  ];

  return (
    <section id="education" className="section py-20 bg-resume-light relative overflow-hidden" style={{ '--delay': 4 } as React.CSSProperties}>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/code-pattern.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-resume-primary mb-12 text-center">
          Education & <span className="text-resume-accent">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div 
            ref={educationRef}
            className="bg-white p-8 rounded-lg shadow-md transform translate-y-10 opacity-0 scale-95 transition-all duration-700 hover:shadow-xl"
          >
            <div className="flex items-center mb-6">
              <GraduationCap size={28} className="text-resume-accent mr-3" />
              <h3 className="text-xl font-semibold text-resume-primary">Education</h3>
            </div>

            <div className="border-l-2 border-resume-accent pl-6 py-2 hover:pl-8 transition-all duration-300">
              <h4 className="text-lg font-medium text-resume-primary">Bachelor of Science: Computer Science</h4>
              <p className="text-resume-dark mt-1">University of The Philippines - Eastern Visayas</p>
              <p className="text-resume-dark/70 mt-1">Tacloban City, Province Of Leyte, Philippines</p>
            </div>
          </div>

          <div 
            ref={certificationRef}
            className="bg-white p-8 rounded-lg shadow-md transform translate-y-10 opacity-0 scale-95 transition-all duration-700 hover:shadow-xl"
          >
            <div className="flex items-center mb-6">
              <Award size={28} className="text-resume-accent mr-3" />
              <h3 className="text-xl font-semibold text-resume-primary">Certifications</h3>
            </div>

            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li 
                  key={index} 
                  className="flex items-center hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <span className="h-2 w-2 bg-resume-accent rounded-full mr-3"></span>
                  <span className="text-resume-dark">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div 
          ref={interestsRef}
          className="mt-16 transform translate-y-10 opacity-0 transition-all duration-700"
        >
          <h3 className="text-xl font-semibold text-resume-primary mb-6 text-center">Interests</h3>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <div 
              ref={el => interestItemRefs.current[0] = el}
              className="bg-white p-6 rounded-lg shadow-md w-full max-w-[280px] text-center transform translate-y-10 opacity-0 scale-95 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-4xl mb-3">🏸</div>
              <h4 className="text-lg font-medium text-resume-primary">Badminton</h4>
            </div>
            
            <div 
              ref={el => interestItemRefs.current[1] = el}
              className="bg-white p-6 rounded-lg shadow-md w-full max-w-[280px] text-center transform translate-y-10 opacity-0 scale-95 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-lg font-medium text-resume-primary">Manhwa/Manhua/Manga</h4>
            </div>
            
            <div 
              ref={el => interestItemRefs.current[2] = el}
              className="bg-white p-6 rounded-lg shadow-md w-full max-w-[280px] text-center transform translate-y-10 opacity-0 scale-95 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="text-4xl mb-3">🎬</div>
              <h4 className="text-lg font-medium text-resume-primary">Movies</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
