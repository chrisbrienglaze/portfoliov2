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
              <h4 className="text-xl font-medium">Application Developer</h4>
              <p className="text-gray-600">TrojanTechnologies | 2023 - Present</p>
              <p className="mt-2">Responsibilities:</p>
              <p> 
                <ul className="list-disc ml-6 inline-block">
                    <li>Develop, deploy, and maintain software applications using various technologies.</li>
                    <li>Perform code reviews, versioning with Gitlab to assert code integrity and collaboration.</li>
                    <li>Train and mentor new hire, providing guidance and support to ensure their successful integration.</li>
                    <li>Document code thoroughly to maintain clarity and facilitate future maintenance and development.</li>
                    <li>Implement innovative software solutions, leveraging cutting-edge technology to streamline processes and boost operational efficiency.</li>
                </ul>
              </p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium">Software Developer</h4>
              <p className="text-gray-600">Itel International | 2021 - 2023</p>
              <p className="mt-2">Responsibilities:</p>
                <p> 
                  <ul className="list-disc ml-6 inline-block ">
                    <li>Triage front line issues and reproduce if possible. Coordinate with QA team to update test case.</li>
                    <li>Coordinating the engineering team to fix or troubleshoot issue.</li>
                    <li>Update documentation for RunBuggy software and technical notes.</li>
                    <li>Write scripts in Nodejs and Python to augment system data structure.</li>
                    <li>for migration or to automate the process of fixing issue.</li>
                    <li>Monitoring of the systems health and uptime.</li>
                  </ul>
                </p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium">Operations Tech Support</h4>
              <p className="text-gray-600">MBJ Airports Ltd | 2018 - 2021</p>
              <p className="mt-2">Responsibilities:</p>
                <p> 
                  <ul className="list-disc ml-6 inline-block ">
                    <li>Administered Airport Management System.</li>
                    <li>Analyze complex data to optimize application functionality, ensuring solutions align with strategic business goals and enhance user satisfaction.</li>
                    <li>Develop solutions to foster efficiency within the operations department.</li>
                    <li>Provide system training and documentation for new hires.</li>
                    <li>Perform data analysis and generate reports for executives to aid in operational planning.</li> 
                  </ul>
                </p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium">Software Development Specialist (.Net developer)</h4>
              <p className="text-gray-600">Conduent | 2007 - 2017</p>
              <p className="mt-2">Responsibilities:</p>
                <p> 
                  <ul className="list-disc ml-6 inline-block ">
                    <li>Developed and implemented multiple desktop and web solutions.</li>
                    <li>Create client reports using Microsoft Reporting Services.</li>
                    <li>Optimize,test and debug existing programs within workflow.</li>
                    <li>Technologies used: SP.NET, MVC, HTML5, TFS, JavaScript and SQL.</li>
                    <li>Perform data analysis and generate reports for executives to aid in operational planning.</li> 
                  </ul>
                </p>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <GraduationCap size={24} className="text-blue-600 mr-2" />
              Education
            </h3>
            <div className="mb-6">
              <h4 className="text-xl font-medium">Postgraduate Diploma in Mobile Application Programming</h4>
              <p className="text-gray-600">Fanshawe College | Graduated 2023</p>
              <h5 className="text-gray-600 font-medium"> Ontario, Canada.</h5>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium">Bachelors Degree in Management Information System</h4>
              <p className="text-gray-600">MBCC College | Graduated 2013</p>
              <h5 className="text-gray-600 font-medium">Montego Bay, Jamaica.</h5>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-medium">Diploma Certificate in Software Design and Programming,</h4>
              <p className="text-gray-600">Caribbean Inst. Technology | Graduated 2003</p>
              <h5 className="text-gray-600 font-medium">Montego Bay, Jamaica.</h5>
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
              <li>MongoDB</li>
              <li>C#</li>
              <li>PHP</li> 
              <li>Flutter (Dart)</li>
              <li>C,C++</li>
              <li>MSSQL</li>
              <li>MySql</li>
              <li>Swift</li>
              <li>Kotlin</li>
              <li>Jira</li>
              <li>Kotlin</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;