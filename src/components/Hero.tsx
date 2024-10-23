import React from 'react';
import Typewriter from './typewriter';

const Hero: React.FC = () => {

 // Function will execute on click of button
 const onDownloadCVClick = () => {
    
  // using Java Script method to get PDF file
  fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
      
          // Creating new object of PDF file
          const fileURL =
              window.URL.createObjectURL(blob);
              
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "Chris-Brien Glaze-SoftwareEngineer.pdf";
          alink.click();
      });
  });
};

  return (
    // <section id="home" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-32 md:py-64">
    //   <div className="container mx-auto px-4 text-center">
    //     <h1 className="text-4xl md:text-6xl font-bold mb-4">I'm <Typewriter text="<//Chris-Brien Glaze/>" delay={100}></Typewriter></h1>
    //     <p className="text-xl md:text-2xl mb-8">Web | Mobile | Desktop</p>
    //     <a href="#contact" className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
    //       Hire Me !
    //     </a>
    //   </div>
    // </section>
    <section id="home" className="min-h-screen bg-gradient-to-r from-white to-pink-50 py-32 md:py-64">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <p className="text-gray-700 text-4xl">Hi! I'm</p>
          <h1 className="text-red-500 font-bold text-4xl"><Typewriter text="<//Chris-Brien Glaze/>" delay={100}></Typewriter></h1>
          <h2 className="text-5xl md:text-4xl font-bold leading-tight text-gray-800">
            Mobile | Web | Backend Developer
          </h2>
          <p className="text-gray-700 max-w-xl">
          As a software developer with over 14+ years of experience in the industry, I have a proven track record of success in software development and design.
          </p>
<p className="text-gray-700 max-w-xl"> I am skilled in all stages of the software development life cycle, from design to deployment, using technologies like HTML, CSS, JavaScript, React, and Node.js. I'm also committed to staying current with new technologies and web development trends.</p>

          <div className="flex gap-4 pt-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition flex items-center gap-2">
              Hire Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            {/* <button class="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-[54px] px-6 py-2 min-w-[166px] gap-x-2">Download CV <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download "><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg></button>*/}
            <button className="border-2 bg-gray-800 border-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2" onClick={onDownloadCVClick}>
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative">
          <div className="w-[250px] h-[250px] md:w-[250px] md:h-[250px] bg-pink-600 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-100 rounded-full m-1">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <img src="./images/myphoto.jpeg" alt="Profile" className="w-full h-full object-cover rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />
             
                {/* <span className="text-gray-600">Profile Image</span> */}

              </div>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-1">
            <span className="text-sm text-gray-600"></span>
            <div className="flex gap-4">
            {['LinkedIn', 'Github'].map((social) => (
                <button 
                  key={social}
                  className="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300"
                >
                  {social === 'LinkedIn' ? (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8">
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

  );
};

export default Hero;