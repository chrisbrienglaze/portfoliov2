import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Briefcase size={24} className="text-blue-600 mr-2" />
              Work Experience
            </h3>
            <div className="mb-6">
              <h4 className="text-xl font-medium">Senior Web Developer</h4>
              <p className="text-gray-600">Tech Company A | 2020 - Present</p>
              <p className="mt-2">Led a team of developers in creating scalable web applications using React and Node.js.</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium">Full Stack Developer</h4>
              <p className="text-gray-600">Tech Startup B | 2017 - 2020</p>
              <p className="mt-2">Developed and maintained multiple web applications, focusing on performance optimization and user experience.</p>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <GraduationCap size={24} className="text-blue-600 mr-2" />
              Education
            </h3>
            <div className="mb-6">
              <h4 className="text-xl font-medium">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-600">University Name | Graduated 2017</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Award size={24} className="text-blue-600 mr-2" />
              Skills
            </h3>
            <ul className="list-disc list-inside grid grid-cols-2 gap-2">
              <li>JavaScript (React, Node.js)</li>
              <li>HTML5 & CSS3</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Git</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;