import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    { title: 'Project 1', category: 'Web Design', image: 'https://source.unsplash.com/random/800x600?website' },
    { title: 'Project 2', category: 'Mobile App', image: 'https://source.unsplash.com/random/800x600?app' },
    { title: 'Project 3', category: 'UI/UX Design', image: 'https://source.unsplash.com/random/800x600?design' },
    { title: 'Project 4', category: 'Branding', image: 'https://source.unsplash.com/random/800x600?brand' },
    { title: 'Project 5', category: 'Web Development', image: 'https://source.unsplash.com/random/800x600?coding' },
    { title: 'Project 6', category: 'Photography', image: 'https://source.unsplash.com/random/800x600?photography' },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;