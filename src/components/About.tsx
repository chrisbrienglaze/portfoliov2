import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-48 h-48 mx-auto bg-gray-300 rounded-full overflow-hidden">
              <img src="https://source.unsplash.com/random/200x200?face" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-md mb-4">
              Hello! I'm Chris-Brien Glaze,</p>
             <p className="text-md mb-4">  
             As a software developer with over 14+ years of experience in the industry, I have a proven track record of success in software development and design.
             My strengths lie in a diverse range of areas, including web, desktop, and mobile development, as well as extensive backend experience.
             With my comprehensive skill set, I am equipped to handle all aspects of the software development life cycle, from conceptualization and design to development, testing, and deployment.
            </p>
            <p className="text-md mb-4 mt-2">
              My skills include HTML, CSS, JavaScript, React, and Node.js. I'm always eager to learn new technologies and stay up-to-date with the latest web development trends.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <User size={20} className="text-blue-600 mr-2" />
                <span>Chris-Brien Glaze</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-600 mr-2" />
                <a href="mailto:chrisbrien.glaze@gmail.com" className="hover:text-blue-600">cb.glaze@glazedev.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-600 mr-2" />
                <a href="tel:+1234567890" className="hover:text-blue-600">+1 (226) 998-4202</a>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="text-blue-600 mr-2" />
                <span>London, Ontario, Canada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;