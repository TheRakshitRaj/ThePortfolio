import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import bgImage from '../assets/bg1.png';

gsap.registerPlugin(ScrollTrigger);

// ── Magnetic Button Component ──
const MagneticButton = ({ children, className = '', variant = 'light', isIcon = false }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  let style = {};

  if (variant === 'primary') {
    style = {
      background: 'linear-gradient(135deg, #a67c52 0%, #8b6038 100%)',
      color: '#fff',
      border: 'none',
      boxShadow: '0 4px 10px rgba(166,124,82,0.3)',
      padding: '8px 16px',
      borderRadius: '8px'
    };
  } else if (variant === 'outline-dark') {
    style = {
      background: 'transparent',
      color: '#111',
      border: '1px solid rgba(0,0,0,0.2)',
      padding: '8px 16px',
      borderRadius: '8px'
    };
  } else if (variant === 'outline-light') {
    style = {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.2)',
      padding: '8px 16px',
      borderRadius: '8px'
    };
  } else if (variant === 'square-icon') {
    style = {
      background: 'linear-gradient(135deg, #1f1f1f 0%, #0a0a0a 100%)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.1)',
      width: '42px',
      height: '42px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
    };
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`flex items-center justify-center gap-2 text-[12px] font-medium transition-all duration-300 hover:scale-105 ${className}`}
      style={style}
    >
      {children}
    </motion.button>
  );
};

// ── Project Cards ──

const Card1 = () => (
  <div className="w-full h-[220px] rounded-[20px] relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-6 flex-shrink-0"
    style={{ background: '#F8F5F1', border: '1px solid rgba(255,255,255,0.6)' }}>

    <div className="absolute left-0 top-0 bottom-0 w-[45%] z-10"
      style={{ filter: 'drop-shadow(25px 0 25px rgba(0,0,0,0.45))' }}>

      <div className="w-full h-full" style={{ background: '#15161A', clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' }}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6 text-white text-[12px] font-bold">
            <div className="w-4 h-4 bg-gray-500 rounded" /> SpendIQ.
          </div>
          <div className="text-white/50 text-[10px] mb-1">Total Expenses</div>
          <div className="text-white text-[24px] font-bold mb-4">$24.6B <span className="text-green-500 text-[10px]">+12.5%</span></div>
          <svg viewBox="0 0 100 20" className="w-full h-8 overflow-visible">
            <path d="M0,15 Q10,5 20,10 T40,15 T60,5 T80,10 T100,0" fill="none" stroke="#C9A26D" strokeWidth="1.5" />
            <circle cx="100" cy="0" r="2" fill="#C9A26D" />
          </svg>
        </div>
      </div>
    </div>

    <div className="absolute right-0 top-0 bottom-0 w-[60%] p-8 flex flex-col justify-center pl-16 z-0">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[12px] font-medium text-[#111]">01</span>
        <div className="w-8 h-px bg-black/10" />
      </div>
      <h3 className="text-[26px] font-medium text-[#111] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        SpendIQ &ndash; AI Expense Tracker
      </h3>
      <p className="text-[12px] text-[#555] leading-relaxed max-w-[90%] mb-6 font-light">
        A modern finance dashboard to track spending, analytics, and real-time budgets across multiple accounts seamlessly.
      </p>

      <div className="flex items-center justify-between w-full mt-auto pr-4">
        <div className="flex gap-3">
          <MagneticButton variant="primary">Live Demo <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg></MagneticButton>
          <MagneticButton variant="outline-dark">GitHub</MagneticButton>
          <MagneticButton variant="outline-dark">YouTube</MagneticButton>
        </div>
        <MagneticButton variant="square-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </MagneticButton>
      </div>
    </div>
  </div>
);

const Card2 = () => (
  <div className="w-full h-[220px] rounded-[20px] relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-6 flex-shrink-0"
    style={{ background: '#F8F5F1', border: '1px solid rgba(255,255,255,0.6)' }}>

    <div className="absolute left-0 top-0 bottom-0 w-[60%] p-8 flex flex-col justify-center z-0">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[12px] font-medium text-[#111]">02</span>
        <div className="w-8 h-px bg-black/10" />
      </div>
      <h3 className="text-[26px] font-medium text-[#111] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        EA FC &ndash; Analytics
      </h3>
      <p className="text-[12px] text-[#555] leading-relaxed max-w-[85%] mb-6 font-light">
        A sleek player comparison and squad builder UI for discovering and analyzing real-time match data seamlessly.
      </p>

      <div className="flex gap-3 mt-auto">
        <MagneticButton variant="primary">Live Demo</MagneticButton>
        <MagneticButton variant="outline-dark">GitHub</MagneticButton>
        <MagneticButton variant="outline-dark">YouTube</MagneticButton>
      </div>
    </div>

    <div className="absolute right-0 top-0 bottom-0 w-[45%] z-10"
      style={{ filter: 'drop-shadow(-20px 0 25px rgba(0,0,0,0.15))' }}>
      <div className="w-full h-full overflow-hidden" style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}>
        <div className="w-full h-full bg-gradient-to-br from-[#D4C5B3] to-[#A68352] opacity-80" />
        <div className="absolute bottom-6 right-6">
          <MagneticButton variant="square-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </MagneticButton>
        </div>
      </div>
    </div>
  </div>
);

const Card3 = () => (
  <div className="w-full h-[220px] rounded-[20px] relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.4)] mb-6 flex-shrink-0"
    style={{ background: '#1C1D21', border: '1px solid rgba(255,255,255,0.05)' }}>

    <div className="absolute left-0 top-0 bottom-0 w-[45%] z-10"
      style={{ filter: 'drop-shadow(30px 0 35px rgba(0,0,0,0.7))' }}>
      <div className="w-full h-full" style={{ background: '#111215', clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' }}>
        <div className="p-6 h-full flex flex-col justify-center items-center">
          <div className="w-32 h-48 bg-black/50 rounded-lg border border-white/5 flex flex-col p-4 shadow-2xl transform rotate-[-5deg]">
            <div className="w-1/2 h-2 bg-white/20 rounded mb-2" />
            <div className="w-full h-2 bg-white/10 rounded mb-1" />
            <div className="w-3/4 h-2 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </div>

    <div className="absolute right-0 top-0 bottom-0 w-[60%] p-8 flex flex-col justify-center pl-16 z-0">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[12px] font-medium text-white">03</span>
        <div className="w-8 h-px bg-white/10" />
      </div>
      <h3 className="text-[26px] font-medium text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Legal Lens AI &ndash; Scanner
      </h3>
      <p className="text-[12px] text-white/60 leading-relaxed max-w-[90%] mb-6 font-light">
        A secure and minimal AI scanner for managing complex legal documents across multiple networks.
      </p>

      <div className="flex items-center justify-between w-full mt-auto pr-4">
        <div className="flex gap-3">
          <MagneticButton variant="outline-light">Live Demo</MagneticButton>
          <MagneticButton variant="outline-light">GitHub</MagneticButton>
          <MagneticButton variant="outline-light">YouTube</MagneticButton>
        </div>
        <MagneticButton variant="square-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </MagneticButton>
      </div>
    </div>
  </div>
);

// ── Main Projects Section ──
const Projects = () => {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const cardsListRef = useRef(null);
  const bgRevealRef = useRef(null);
  const headerContentRef = useRef(null);

  const [activeProject, setActiveProject] = useState(1);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const tlReveal = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    tlReveal.fromTo(bgRevealRef.current,
      { clipPath: 'inset(50% 0% 50% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power4.inOut' }
    );

    if (headerContentRef.current) {
      tlReveal.fromTo(headerContentRef.current.children,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: 'back.out(1.2)' },
        '-=0.8'
      );
    }

    mm.add("(min-width: 1024px)", () => {
      const cardsHeight = cardsListRef.current.scrollHeight;
      const visibleHeight = scrollWrapperRef.current.offsetHeight;
      const scrollDistance = Math.max(0, cardsHeight - visibleHeight + 100);

      const tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${scrollDistance * 1.5}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.33) setActiveProject(1);
            else if (progress < 0.66) setActiveProject(2);
            else setActiveProject(3);
          }
        }
      });

      tlScroll.to(cardsListRef.current, { y: -scrollDistance, ease: 'none' });

      return () => { tlScroll.kill(); };
    });

    return () => { mm.revert(); };
  }, []);

  return (
    <section ref={containerRef} id="projects" className="relative w-full h-[100vh] overflow-hidden bg-[#000000]">

      <div ref={bgRevealRef} className="absolute inset-0 z-0 bg-[#F7F3EE]">
        <div className="w-full h-full"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dphtrtpjx/image/upload/v1782028494/bg1_u4d03q.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.95
          }} />
      </div>

      <div className="relative w-full h-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 z-10 flex flex-col pt-[8vh]">

        <div ref={headerContentRef} className="flex justify-between items-start mb-6 flex-shrink-0">
          <div className="flex flex-col pl-16 lg:pl-24">
            <span className="uppercase tracking-[0.3em] text-[#8A6A45] text-[11px] font-semibold mb-2 flex items-center gap-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A26D] shadow-[0_0_6px_rgba(201,162,109,0.8)]" /> MY WORK
            </span>
            <h2 className="text-[#111] leading-[1.0] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(56px, 6vw, 84px)' }}>
              Projects
            </h2>
            <p className="text-[#555] max-w-sm leading-[1.6]" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 400 }}>
              A collection of selected work that reflects my passion for design, development and building meaningful digital experiences.
            </p>
          </div>

          <div className="hidden lg:block absolute right-[12%] top-[5%]">
            <p className="text-[#A68352] text-center leading-[1.1]"
              style={{ fontFamily: "'Allura', cursive", fontSize: '42px', transform: 'rotate(-5deg)', opacity: 0.85 }}>
              Ideas turn into<br />impactful digital<br />experiences.
            </p>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden relative">

          <div className="hidden lg:flex flex-col items-center w-[120px] flex-shrink-0 h-full py-6">
            <div className="text-[10px] tracking-[0.4em] text-[#111] font-medium mb-12 uppercase"
              style={{ fontFamily: "'Inter', sans-serif", writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              PROJECTS
            </div>

            <div className="flex flex-col items-center justify-center gap-6 relative flex-1 w-full">
              {[1, 2, 3].map((num) => (
                <div key={num} className="relative z-10 flex flex-col items-center transition-all duration-300"
                  style={{ opacity: activeProject === num ? 1 : 0.4 }}>
                  <span className="text-[12px] font-medium mb-4" style={{ fontFamily: "'Inter', sans-serif", color: activeProject === num ? '#111' : '#666' }}>
                    0{num}
                  </span>
                  <div className={`w-3 h-3 rounded-full border-[#C9A26D] flex items-center justify-center bg-[#F7F3EE] transition-all duration-300 ${activeProject === num ? 'scale-125' : 'scale-100'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeProject === num ? 'bg-[#C9A26D]' : 'bg-transparent'}`} />
                  </div>
                  {num !== 3 && <div className="w-px h-6 bg-black/10 mt-6" />}
                </div>
              ))}
            </div>
          </div>

          <div ref={scrollWrapperRef} className="flex-1 w-full flex flex-col items-end lg:pr-8 h-full overflow-hidden">
            <div ref={cardsListRef} className="w-full pb-[20vh]">
              <Card1 />
              <Card2 />
              <Card3 />

              <div className="w-full flex justify-center mt-6">
                <MagneticButton variant="primary" className="!px-6 !py-2.5 !text-[12px] !rounded-[100px] !bg-[#a67c52]">
                  View all projects <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
