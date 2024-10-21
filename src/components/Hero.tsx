import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-32 md:py-64">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">I'm John Doe</h1>
        <p className="text-xl md:text-2xl mb-8">Web Designer | Developer | Photographer</p>
        <a href="#contact" className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;