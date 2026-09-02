import React, { useState, useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechArsenal from './components/TechArsenal';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isLoading]);

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />
      <SmoothScroll isLoading={isLoading}>
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
    </>
  );
}

export default App;
