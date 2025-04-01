import { CheckCircle2 } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          if (entry.target === toolsRef.current) {
            entry.target.classList.add('translate-y-0', 'opacity-100');
          } else {
            setTimeout(() => {
              entry.target.classList.add('translate-y-0', 'opacity-100');
            }, index * 150);
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (toolsRef.current) observer.observe(toolsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages & Frameworks',
      skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'React Native',
        'Node.js',
        'NestJS',
        'PHP',
        'Laravel',
        'Java',
        'Spring MVC',
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'Google Cloud Platform',
        'Continuous Integration',
        'Continuous Deployment',
        'DevOps Practices',
        'Microservices Architecture',
        'Opentofu',
      ],
    },
    {
      title: 'Databases & Systems',
      skills: [
        'MySQL',
        'Database Administration',
        'API Design and Integration',
        'RESTful Services',
      ],
    },
    {
      title: 'Software Engineering',
      skills: [
        'Object-oriented Programming',
        'Web Application Development',
        'Software Architecture',
        'Code Review and Refactoring',
        'Performance Optimization',
        'Security Best Practices',
        'Data Structures and Algorithms',
        'Full-stack Development',
        'Git',
        'Version Control Systems',
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        'Team Collaboration',
        'Problem-solving Aptitude',
        'Reliability',
        'Continuous Improvement',
        'Agile',
      ],
    },
  ];

  const softwareTools = [
    'Git',
    'Javascript',
    'Typescript',
    'NestJS',
    'Google Cloud Platform',
    'MySQL',
    'React',
    'React Native',
    'Node JS',
    'Spring MVC',
    'PHP',
    'Laravel',
    'Java',
    'Google Cloud Platform',
    'Agile',
    'Opentofu',
  ];

  return (
    <section
      id="skills"
      className="section py-20 bg-white relative overflow-hidden"
      style={{ '--delay': 3 } as React.CSSProperties}
    >
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/src/assets/code-pattern.png')] opacity-5 rotate-180"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-resume-primary mb-12 text-center">
          Skills & <span className="text-resume-accent">Expertise</span>
        </h2>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-resume-primary mb-6">
            Skill Categories
          </h3>

          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (categoryRefs.current[index] = el)}
              className="skill-category transform translate-y-10 opacity-0 transition-all duration-500 ease-out"
            >
              <h4 className="text-lg font-medium text-resume-primary mb-3 flex items-center">
                <CheckCircle2
                  size={20}
                  className="text-resume-accent mr-2 flex-shrink-0"
                />
                {category.title}
              </h4>

              <div className="flex flex-wrap gap-2 mb-8">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-pill hover:scale-105 hover:bg-resume-accent hover:text-white transition-all duration-300"
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          ref={toolsRef}
          className="transform translate-y-10 opacity-0 transition-all duration-700 ease-out"
        >
          <h3 className="text-xl font-semibold text-resume-primary mb-6">
            Software & Tools
          </h3>

          <div className="flex flex-wrap gap-3">
            {softwareTools.map((tool, index) => (
              <div
                key={index}
                className="bg-resume-secondary rounded-md p-3 text-resume-dark hover:bg-resume-primary hover:text-white transition-colors hover:scale-105 transform"
                style={{ transitionDelay: `${index * 0.03}s` }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
