import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechArsenal from './components/TechArsenal';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#000000] selection:bg-[#C9A26D]/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechArsenal />
          <Projects />
          <Hackathons />
          <Certificates />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;
