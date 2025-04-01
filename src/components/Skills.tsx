
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: [
        "JavaScript", "TypeScript", "React", "React Native", "Node.js", "NestJS", 
        "PHP", "Laravel", "Java", "Spring MVC"
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Google Cloud Platform", "Continuous Integration", "Continuous Deployment", "DevOps Practices",
        "Microservices Architecture", "Opentofu"
      ]
    },
    {
      title: "Databases & Systems",
      skills: [
        "MySQL", "Database Administration", "API Design and Integration", "RESTful Services"
      ]
    },
    {
      title: "Software Engineering",
      skills: [
        "Object-oriented Programming", "Web Application Development", "Software Architecture",
        "Code Review and Refactoring", "Performance Optimization", "Security Best Practices",
        "Data Structures and Algorithms", "Full-stack Development", "Git", "Version Control Systems"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Team Collaboration", "Problem-solving Aptitude", "Reliability", "Continuous Improvement",
        "Agile"
      ]
    }
  ];

  const softwareTools = [
    "Git", "Javascript", "Typescript", "NestJS", "Google Cloud Platform", "MySQL",
    "React", "React Native", "Node JS", "Spring MVC", "PHP", "Laravel", "Java", 
    "Google Cloud Platform", "Agile", "Opentofu"
  ];

  return (
    <section id="skills" className="section py-20 bg-white" style={{ '--delay': 3 } as React.CSSProperties}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-resume-primary mb-12 text-center">
          Skills & <span className="text-resume-accent">Expertise</span>
        </h2>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-resume-primary mb-6">Skill Categories</h3>
          
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h4 className="text-lg font-medium text-resume-dark mb-3 flex items-center">
                <CheckCircle2 size={20} className="text-resume-accent mr-2" />
                {category.title}
              </h4>
              
              <div className="flex flex-wrap gap-2">
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
          <h3 className="text-xl font-semibold text-resume-primary mb-6">Software & Tools</h3>
          
          <div className="flex flex-wrap gap-3">
            {softwareTools.map((tool, index) => (
              <div key={index} className="bg-resume-secondary rounded-md p-3 text-resume-dark hover:bg-resume-primary hover:text-white transition-colors">
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
