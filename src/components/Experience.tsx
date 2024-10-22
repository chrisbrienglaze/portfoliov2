import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Trojan Technologies',
      position: 'Software Developer',
      period: 'May 2023 - Present',
      description: 'Worked as a software developer for itel international ',
      image: './images/trojan_logo.jpeg',
    },
    {
      company: 'Itel International',
      position: 'Software Developer',
      period: 'Mar 2021 - May 2023',
      description: 'Worked as outsourced software developer in Jamaica for RunBuggy (U.S.A based vehicle transportation company).',
      image: './images/itel_logo.jpeg'
    },
    {
      company: 'MBJ Airport Ltd',
      position: 'Operation Tech Support',
      period: 'Jan 2018 - May 2021',
      description: 'Worked as operations Technician support for MBJ Airports Ltd. at Sangster International Airport.',
      image: './images/mbj_logo.jpeg',
    },
    {
      company: 'Conduent',
      position: 'Software Development Specialist',
      period: 'Jul 2007 - Dec 2017',
      description: 'Worked as outsourced developer in Jamaica for Cigna (U.S.A based Insurance Company), to aid in migrating to a paperless environment.',
      image: './images/conduent_logo.jpeg',
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={exp.image} alt="logo" width="50" className="m-2"/>
                 <h3 className="text-xl font-semibold">{exp.position}</h3>
              </div>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;