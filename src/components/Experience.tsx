import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Tech Company A',
      position: 'Senior Software Developer',
      period: 'Jan 2020 - Present',
      description: 'Led a team of 5 developers in creating a scalable e-commerce platform. Implemented microservices architecture and improved system performance by 40%.',
    },
    {
      company: 'Tech Startup B',
      position: 'Full Stack Developer',
      period: 'Mar 2017 - Dec 2019',
      description: 'Developed and maintained multiple web applications using React and Node.js. Collaborated with UX designers to implement responsive designs.',
    },
    {
      company: 'Software Corp C',
      position: 'Junior Developer',
      period: 'Jun 2015 - Feb 2017',
      description: 'Assisted in the development of internal tools and participated in code reviews. Gained experience in Agile methodologies and version control systems.',
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
                <Briefcase size={24} className="text-blue-600 mr-2" />
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