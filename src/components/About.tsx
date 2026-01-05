import { Award, Code, Mail, MapPin, Phone, Users } from 'lucide-react';
import React from 'react';

const About = () => {
  // Remove refs and useEffect for IntersectionObserver
  // const leftColRef = useRef<HTMLDivElement>(null);
  // const rightColRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           if (entry.target === leftColRef.current) {
  //             entry.target.classList.add('translate-x-0', 'opacity-100');
  //           } else if (entry.target === rightColRef.current) {
  //             entry.target.classList.add('translate-x-0', 'opacity-100');
  //           }
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.2,
  //       rootMargin: '0px 0px -100px 0px',
  //     }
  //   );

  //   if (leftColRef.current) observer.observe(leftColRef.current);
  //   if (rightColRef.current) observer.observe(rightColRef.current);

  //   return () => observer.disconnect();
  // }, []);

  return (
    <section
      id="about"
      className="section py-16 md:py-24 bg-background text-foreground"
      style={{ '--delay': 1 } as React.CSSProperties}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 md:mb-12 text-center">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-5 md:space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Software Engineer with extensive experience in
              full-stack development, cloud technologies, and software
              architecture. My journey in software development has equipped me
              with a comprehensive understanding of the entire development
              lifecycle, from concept to deployment.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My expertise spans across various technologies including
              JavaScript, TypeScript, React, Node.js, and cloud services like
              Google Cloud Platform. I'm dedicated to creating efficient,
              scalable, and secure applications while continuously improving my
              skills and learning new technologies.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me playing badminton, reading
              manga, or enjoying movies.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-lg border border-border shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-5 md:mb-6">
              Personal Information
            </h3>

            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <MapPin
                  className="text-accent flex-shrink-0 mt-0.5"
                  size={18}
                />
                <span className="text-muted-foreground">
                  Cebu City, Province Of Cebu, Philippines
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <span className="text-muted-foreground">+63 919 504 3421</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <span className="text-muted-foreground break-all">
                  antonio.telimban.jr@gmail.com
                </span>
              </div>

              <hr className="border-border my-5 md:my-6" />

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-5">
                Key Strengths
              </h3>

              <div className="space-y-4 text-sm md:text-base">
                <div className="flex items-start gap-3">
                  <Code
                    className="text-accent flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-muted-foreground">
                    Full-stack development with modern technologies
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Award
                    className="text-accent flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-muted-foreground">
                    Multiple Google Cloud certifications
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Users
                    className="text-accent flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-muted-foreground">
                    Leadership and mentoring experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
