
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const certifications = [
    "Google Cloud Certified - Professional Cloud Architect",
    "Google Cloud Certified - Professional Cloud Developer",
    "Google Cloud Certified - Database Engineer",
    "Google Cloud Certified - DevOps Engineer",
    "Java SE 8 Professional",
    "PhilNITS Applied Information (AP)"
  ];

  return (
    <section id="education" className="section py-20 bg-resume-light" style={{ '--delay': 4 } as React.CSSProperties}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-resume-primary mb-12 text-center">
          Education & <span className="text-resume-accent">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <GraduationCap size={28} className="text-resume-accent mr-3" />
              <h3 className="text-xl font-semibold text-resume-primary">Education</h3>
            </div>

            <div className="border-l-2 border-resume-accent pl-6 py-2">
              <h4 className="text-lg font-medium text-resume-primary">Bachelor of Science: Computer Science</h4>
              <p className="text-resume-dark mt-1">University of The Philippines - Eastern Visayas</p>
              <p className="text-resume-dark/70 mt-1">Tacloban City, Province Of Leyte, Philippines</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Award size={28} className="text-resume-accent mr-3" />
              <h3 className="text-xl font-semibold text-resume-primary">Certifications</h3>
            </div>

            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 bg-resume-accent rounded-full mr-3"></span>
                  <span className="text-resume-dark">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-resume-primary mb-6 text-center">Interests</h3>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[280px] text-center">
              <div className="text-4xl mb-3">🏸</div>
              <h4 className="text-lg font-medium text-resume-primary">Badminton</h4>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[280px] text-center">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-lg font-medium text-resume-primary">Manhwa/Manhua/Manga</h4>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[280px] text-center">
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
