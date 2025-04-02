import { BookOpen, Clapperboard, GraduationCap, Sparkles } from 'lucide-react';
import React from 'react';

const Education = () => {
  const interests = [
    { name: 'Badminton', icon: Sparkles },
    { name: 'Manhwa/Manhua/Manga', icon: BookOpen },
    { name: 'Movies', icon: Clapperboard },
  ];

  return (
    <section
      id="education"
      className="section bg-background text-foreground relative overflow-hidden"
      style={{ '--delay': 4 } as React.CSSProperties}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 md:mb-16 text-center">
          Edu<span className="text-accent">cation</span>
        </h2>

        <div className="flex justify-center mb-16 md:mb-20">
          <div className="bg-card p-6 md:p-8 rounded-lg border border-border shadow-sm transition-shadow duration-300 hover:shadow-md max-w-lg w-full">
            <div className="flex items-center mb-5 md:mb-6">
              <GraduationCap
                size={24}
                className="text-accent mr-3 flex-shrink-0"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="border-l-2 border-accent pl-4 md:pl-5 py-1">
              <h4 className="text-base md:text-lg font-medium text-foreground">
                Bachelor of Science: Computer Science
              </h4>
              <p className="text-muted-foreground text-sm md:text-base mt-1">
                University of The Philippines - Eastern Visayas
              </p>
              <p className="text-muted-foreground/80 text-sm mt-0.5">
                Tacloban City, Province Of Leyte, Philippines
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 md:mb-10 text-center">
            Interests
          </h3>

          <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border shadow-sm text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <interest.icon
                  size={32}
                  className="text-accent mb-3 mx-auto"
                  strokeWidth={1.5}
                />
                <h4 className="text-base md:text-lg font-medium text-foreground">
                  {interest.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
