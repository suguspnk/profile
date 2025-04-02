import { CheckCircle2 } from 'lucide-react';
import React from 'react';

const Skills = () => {
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
        'CI/CD',
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
        'API Design & Integration',
        'RESTful Services',
      ],
    },
    {
      title: 'Software Engineering',
      skills: [
        'Object-oriented Programming (OOP)',
        'Web Application Development',
        'Software Architecture',
        'Code Review & Refactoring',
        'Performance Optimization',
        'Security Best Practices',
        'Data Structures & Algorithms',
        'Full-stack Development',
        'Git & Version Control',
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        'Team Collaboration',
        'Problem-solving',
        'Reliability',
        'Continuous Improvement',
        'Agile Methodologies',
      ],
    },
  ];

  const softwareTools = [
    'Git',
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
    'MySQL',
    'Google Cloud Platform (GCP)',
    'Opentofu / Terraform',
    'Docker',
    'Agile Tools (Jira, etc.)',
  ];

  return (
    <section
      id="skills"
      className="section bg-secondary text-secondary-foreground relative overflow-hidden"
      style={{ '--delay': 3 } as React.CSSProperties}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 md:mb-16 text-center">
          Skills & <span className="text-accent">Expertise</span>
        </h2>

        <div className="mb-12 md:mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-5 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                {category.title}
              </h4>

              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 md:mb-8 text-center md:text-left">
            Software & Tools
          </h3>

          <div className="flex flex-wrap gap-2 md:gap-2.5 justify-center md:justify-start">
            {softwareTools.map((tool, index) => (
              <div key={index} className="skill-pill">
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
