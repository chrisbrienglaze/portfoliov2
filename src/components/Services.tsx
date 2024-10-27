import React from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Web Development',
      description: 'I offer comprehensive web development services focused on creating robust web systems tailored to meet your specific business needs. Utilizing the latest technologies and frameworks, I develop scalable and secure web applications that enhance user experience and drive engagement. Whether you require a dynamic website, a complex web application, or an integrated system, I work closely with you to ensure the final product aligns perfectly with your vision and objectives. My commitment to quality and attention to detail guarantee that your web system will perform seamlessly across all devices and platforms.',
    },
    {
      icon: <Palette size={48} />,
      title: 'Desktop App Development',
      description: `I specialize in desktop app development, delivering powerful applications designed to enhance productivity and user experience. With a focus on both Windows and macOS platforms, I create tailored solutions that integrate seamlessly with your existing systems. My expertise in various programming languages and frameworks enables me to develop intuitive, high-performance desktop applications that cater to your specific requirements. Whether you're looking for a standalone software solution or a more complex system that requires custom functionality, I am committed to providing robust and efficient desktop applications that meet your business goals.`,
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile App Development',
      description: 'I specialize in mobile app development, creating innovative and user-friendly applications tailored for both iOS and Android platforms. Whether you need native apps designed to leverage the full capabilities of each operating system or cross-platform solutions that ensure a consistent experience across devices, I provide end-to-end development services. My approach combines modern design principles with robust functionality, ensuring your mobile application stands out in a competitive market.',
    },
    {
      icon: <Globe size={48} />,
      title: 'Consultation',
      description: `I offer comprehensive consulting services for mobile, desktop, and web systems, ensuring you have the expert guidance needed to make informed decisions for your projects. Whether you're looking to develop native or cross-platform mobile applications, robust desktop software, or dynamic web systems, I provide tailored strategies that align with your business objectives. My extensive experience across various platforms allows me to assess your needs accurately, recommend the best technologies, and streamline the development process. Let me help you navigate the complexities of software development, optimizing your solutions for performance, usability, and scalability`,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-800 font-bold mb-8 text-center">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-orange-600 mb-4">{service.icon}</div>
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