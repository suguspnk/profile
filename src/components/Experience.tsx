import { Calendar } from 'lucide-react';
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Software Engineer',
      company: 'Symph, Inc.',
      location: 'Cebu City, Province Of Cebu, Philippines (Remote)',
      period: '03/2022 - Current',
      responsibilities: [
        'Delivered high-quality software solutions on schedule by prioritizing tasks effectively and managing project timelines.',
        'Maintained application security by conducting regular code reviews and fixing vulnerabilities as needed.',
        'Proactively identified opportunities for improvement in existing systems while adhering to industry best practices efficiently.',
        'Improved software performance by optimizing full stack code and implementing efficient algorithms.',
        'Contributed to the success of software projects by providing expert guidance during all phases of the development life cycle.',
        'Implemented best practices for coding standards and documentation, fostering a culture of excellence within the team.',
        'Increased system stability by identifying and resolving performance bottlenecks in both front-end and back-end components.',
        'Optimized database queries to improve data retrieval speeds, enhancing overall application performance significantly.',
        'Integrated cutting-edge technology into existing systems seamlessly without compromising performance or reliability.',
        'Supported junior developers through mentorship, sharing insights on best practices, technologies, and problem-solving strategies.',
        'Consistently met client expectations by delivering scalable solutions that addressed specific business requirements promptly.',
      ],
    },
    {
      title: 'Software Supervisor',
      company: 'Rococo Global Technologies Corp.',
      location: 'Cebu City, PH',
      period: '07/2018 - 03/2021',
      responsibilities: [
        'Mentored junior developers, fostering their growth and enhancing overall team performance.',
        'Provided expert guidance on software architecture decisions, ensuring alignment with business objectives and long-term technical strategy.',
        'Ensured seamless integration between front-end and back-end systems through effective API design and implementation strategies.',
        'Delivered secure applications by incorporating security principles throughout the development lifecycle.',
        'Collaborated with stakeholders to gather requirements and translate them into technical specifications.',
        'Effectively managed project risks by identifying potential issues early on and developing contingency plans accordingly.',
        'Improved system stability by conducting thorough code reviews and implementing robust testing protocols.',
      ],
    },
    {
      title: 'Associate Software Engineer',
      company: 'Advanced World Solutions, Inc.',
      location: 'Cebu City, PH',
      period: '06/2015 - 03/2018',
      responsibilities: [
        'Collaborated with cross-functional teams to develop, test, and deploy high-quality software solutions for clients.',
        'Enhanced application performance through optimization of algorithms and data structures.',
        'Developed well-organized training materials for end-users, enabling seamless adoption of new software features.',
        'Authored code fixes and enhancements for inclusion in future code releases and patches.',
        'Built databases and table structures for web applications.',
        'Corrected, modified and upgraded software to improve performance.',
        'Proved successful working within tight deadlines and a fast-paced environment.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section bg-background text-foreground relative overflow-hidden"
      style={{ '--delay': 2 } as React.CSSProperties}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 md:mb-16 text-center">
          Work <span className="text-accent">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-1 sm:gap-4">
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <h4 className="text-base md:text-lg font-medium text-primary mb-1 sm:mb-0">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex items-center text-muted-foreground text-sm md:text-base font-medium mt-1 sm:mt-0 flex-shrink-0">
                  <Calendar size={16} className="mr-1.5 flex-shrink-0" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm md:text-base mb-4">
                {exp.location}
              </p>

              <ul className="space-y-2.5 text-sm md:text-base">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-2.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent mt-[7px] flex-shrink-0"></span>
                    <span className="text-muted-foreground break-words">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
