import { Award, Code, Mail, MapPin, Phone, Users } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const About = () => {
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftColRef.current) {
              entry.target.classList.add('translate-x-0', 'opacity-100');
            } else if (entry.target === rightColRef.current) {
              entry.target.classList.add('translate-x-0', 'opacity-100');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (leftColRef.current) observer.observe(leftColRef.current);
    if (rightColRef.current) observer.observe(rightColRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="section py-20 bg-white"
      style={{ '--delay': 1 } as React.CSSProperties}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-resume-primary mb-8 text-center">
          About <span className="text-resume-accent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            ref={leftColRef}
            className="transform -translate-x-10 opacity-0 transition-all duration-700 ease-out"
          >
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate Software Engineer with extensive experience in
              full-stack development, cloud technologies, and software
              architecture. My journey in software development has equipped me
              with a comprehensive understanding of the entire development
              lifecycle, from concept to deployment.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              My expertise spans across various technologies including
              JavaScript, TypeScript, React, Node.js, and cloud services like
              Google Cloud Platform. I'm dedicated to creating efficient,
              scalable, and secure applications while continuously improving my
              skills and learning new technologies.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me playing badminton, reading
              manga, or enjoying movies.
            </p>
          </div>

          <div
            ref={rightColRef}
            className="bg-resume-light p-6 rounded-lg shadow-md transform translate-x-10 opacity-0 transition-all duration-700 ease-out"
          >
            <h3 className="text-xl font-semibold text-resume-primary mb-4">
              Personal Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <MapPin
                  className="text-resume-accent flex-shrink-0"
                  size={20}
                />
                <span>Cebu City, Province Of Cebu, CEB 6000</span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <Phone className="text-resume-accent flex-shrink-0" size={20} />
                <span>+63 906 892 5683</span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <Mail className="text-resume-accent flex-shrink-0" size={20} />
                <span className="break-all">antonio.telimban.jr@gmail.com</span>
              </div>

              <hr className="border-gray-300 my-4" />

              <h3 className="text-xl font-semibold text-resume-primary mb-2">
                Key Strengths
              </h3>

              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <Code className="text-resume-accent flex-shrink-0" size={20} />
                <span>Full-stack development with modern technologies</span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <Award className="text-resume-accent flex-shrink-0" size={20} />
                <span>Multiple Google Cloud certifications</span>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <Users className="text-resume-accent flex-shrink-0" size={20} />
                <span>Leadership and mentoring experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
