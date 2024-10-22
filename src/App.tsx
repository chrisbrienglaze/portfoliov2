import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Experience from './components/Experience';
//import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Resume />
        <Experience />
        {/* <Pricing /> */}
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Chris-Brien  Glaze. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;