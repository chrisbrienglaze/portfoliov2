import React from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Web Development',
      description: 'Custom web applications tailored to your specific needs.',
    },
    {
      icon: <Palette size={48} />,
      title: 'UI/UX Design',
      description: 'Intuitive and visually appealing interfaces for optimal user experience.',
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: <Globe size={48} />,
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility and ranking on search engines.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;