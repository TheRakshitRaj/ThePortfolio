import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import bgBlack from '../assets/hackathon_bg_new.png';

gsap.registerPlugin(ScrollTrigger);

// ── Magnetic Button Component ──
const MagneticButton = ({ children, className = '', variant = 'outline-bronze' }) => {
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
  if (variant === 'outline-bronze') {
    style = {
      background: 'transparent',
      color: '#C9A26D',
      border: '1px solid rgba(201,162,109,0.4)',
      padding: '10px 20px',
      borderRadius: '100px',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      fontSize: '11px',
      fontWeight: 500,
      boxShadow: 'inset 0 0 20px rgba(201,162,109,0)'
    };
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: 1.05, boxShadow: 'inset 0 0 20px rgba(201,162,109,0.1), 0 0 20px rgba(201,162,109,0.2)', backgroundColor: 'rgba(201,162,109,0.05)' }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`flex items-center justify-center gap-3 transition-all duration-300 ${className}`}
      style={style}
    >
      {children}
    </motion.button>
  );
};

// ── Orbital Sphere (Dark/Bronze Variant) ──
const OrbitalSphereDark = () => {
  const ringRef = useRef(null);
  useEffect(() => {
    gsap.to(ringRef.current, { rotate: 360, duration: 80, repeat: -1, ease: 'linear', transformOrigin: 'center center' });
  }, []);

  return (
    <div className="absolute right-[2%] top-[2%] w-[180px] h-[180px] pointer-events-none hidden lg:block z-30">
      {/* Outer ambient bronze glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(201,162,109,0.25)_0%,_transparent_65%)] blur-[30px] rounded-full" />
      
      {/* Rotating rings */}
      <div ref={ringRef} className="absolute inset-0">
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-80">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#C9A26D" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.6" />
          <circle cx="100" cy="100" r="72" fill="none" stroke="#C9A26D" strokeWidth="0.2" opacity="0.4" />
          <circle cx="10" cy="100" r="2.5" fill="#FFF" filter="drop-shadow(0 0 6px #FFF)" />
          <path d="M 172 28 L 174 32 L 172 36 L 170 32 Z" fill="#C9A26D" filter="drop-shadow(0 0 4px #C9A26D)" />
        </svg>
      </div>

      {/* The 3D CSS Sphere */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[80px] h-[80px] rounded-full relative flex items-center justify-center"
          style={{ 
            background: 'radial-gradient(circle at 35% 30%, #E8C98A 0%, #C9A26D 30%, #4A3520 70%, #111 100%)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 10px 20px rgba(201,162,109,0.2), inset -10px -10px 20px rgba(0,0,0,0.5), inset 10px 10px 20px rgba(255,255,255,0.4)'
          }}>
          <span className="text-[#111] text-[28px] tracking-tighter relative z-10 font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>RR.</span>
        </motion.div>
      </div>
    </div>
  );
};

// ── Floating Glass Frame Component ──
const HackathonCard = ({ hackathon }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -2 }}
      className="w-full relative rounded-[28px] mb-6 last:mb-0 transition-all duration-300 hackathon-card"
      style={{
        background: 'linear-gradient(135deg, rgba(201,162,109,0.4) 0%, rgba(255,255,255,0.05) 50%, rgba(201,162,109,0.1) 100%)',
        padding: '1px', 
        boxShadow: '0 0 30px rgba(201,162,109,0.15), 0 10px 30px rgba(0,0,0,0.4)',
        height: '185px' 
      }}
    >
      <div className="w-full h-full rounded-[27px] flex flex-row p-4 relative overflow-hidden"
           style={{ 
             background: 'linear-gradient(135deg, rgba(15,15,18,0.95), rgba(5,5,8,0.9))',
             backdropFilter: 'blur(20px)',
             WebkitBackdropFilter: 'blur(20px)'
           }}>
        
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

        {/* ── Preview Image ── */}
        <div className="w-[38%] h-full rounded-[20px] relative overflow-hidden flex-shrink-0 border border-white/5 bg-[#111]">
          <div className="absolute inset-0" style={{ background: hackathon.imageGradient }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
          <div className="absolute bottom-4 left-0 w-full px-5 flex justify-between items-end">
            <div>
              <div className="text-[#C9A26D] text-[10px] font-bold tracking-widest uppercase mb-1">{hackathon.eventTitle}</div>
              <div className="text-white text-[16px] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>WINNERS</div>
            </div>
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center backdrop-blur-md">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A26D" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="w-[62%] px-6 py-1 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full border border-[#C9A26D]/30 flex items-center justify-center bg-[#C9A26D]/5 shadow-[0_0_10px_rgba(201,162,109,0.15)] flex-shrink-0">
              {hackathon.icon}
            </div>
            <div>
              <h4 className="text-[14px] text-white/90 font-medium leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{hackathon.eventTitle}</h4>
              <h3 className="text-[17px] text-[#C9A26D] font-medium leading-tight truncate" style={{ fontFamily: "'Inter', sans-serif" }}>{hackathon.projectTitle}</h3>
            </div>
          </div>

          <p className="text-[12px] text-white/60 leading-[1.6] mb-3 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            {hackathon.description}
          </p>

          <div className="mt-auto">
            <div className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-semibold mb-2">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {hackathon.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 rounded-[100px] text-[10px] text-white/80 border border-white/10 bg-white/5 backdrop-blur-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// ── Main Hackathons Section ──
const Hackathons = () => {
  const containerRef = useRef(null);
  const sectionContentRef = useRef(null);
  const bgRef = useRef(null);
  const timelineLineRef = useRef(null);
  
  const hackathons = [
    {
      id: 1,
      eventTitle: 'DevHeat Hackathon',
      projectTitle: 'AI Legal Lens',
      description: 'Built an AI-powered legal document analyzer using RAG architecture to instantly summarize massive contracts under 24 hours.',
      tech: ['React', 'Node.js', 'OpenAI'],
      imageGradient: 'radial-gradient(circle at 50% 50%, #2a2015 0%, #111 100%)',
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A26D" strokeWidth="1.5"><path d="M8 21h8M12 17v4M7 4h10M6 4v6c0 3.3 2.7 6 6 6s6-2.7 6-6V4"/></svg>
    },
    {
      id: 2,
      eventTitle: 'Odoo Indus Hackathon',
      projectTitle: 'Inventra',
      description: 'Product innovation platform developed during the national-level hackathon. Engineered a real-time collaborative workspace.',
      tech: ['React', 'Supabase', 'Tailwind'],
      imageGradient: 'radial-gradient(circle at 50% 50%, #1c1c2a 0%, #0a0a11 100%)',
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A26D" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    },
    {
      id: 3,
      eventTitle: 'Electrosphere Winner',
      projectTitle: '1st Prize Winner',
      description: 'Winning project that secured first place among competing teams. Built a highly scalable automated cloud pipeline processing data.',
      tech: ['MERN', 'AI', 'Cloud Services'],
      imageGradient: 'radial-gradient(circle at 50% 50%, #151a25 0%, #050811 100%)',
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A26D" strokeWidth="1.5"><path d="M12 15l-2 5l9 -9l-9 -2l2 -5l-9 9l9 2z"/></svg>
    }
  ];

  useEffect(() => {
    // ── Full Page Entrance Animation ──
    const tlReveal = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
      }
    });

    // Epic circular clip-path reveal
    tlReveal.fromTo(sectionContentRef.current,
      { clipPath: 'circle(0% at 50% 100%)' },
      { clipPath: 'circle(150% at 50% 50%)', duration: 1.5, ease: 'power3.inOut' }
    );

    // Dark background fade and scale
    tlReveal.fromTo(bgRef.current, 
      { scale: 1.1, filter: 'brightness(0)' },
      { scale: 1, filter: 'brightness(1)', duration: 2, ease: 'power2.out' },
      '-=1.2'
    );

    // Stagger in the text on the left
    tlReveal.fromTo('.hackathon-text', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'back.out(1.2)' },
      '-=1.5'
    );

    // Drop down the main timeline line
    tlReveal.fromTo(timelineLineRef.current,
      { scaleY: 0 },
      { scaleY: 1, transformOrigin: 'top', duration: 1.5, ease: 'power3.inOut' },
      '-=1.0'
    );

    // Stagger in the nodes and branches
    tlReveal.fromTo('.hackathon-node',
      { opacity: 0, scale: 0, x: -20 },
      { opacity: 1, scale: 1, x: 0, stagger: 0.2, duration: 0.6, ease: 'back.out(2)' },
      '-=1.0'
    );

    // Stagger in the floating cards from the right
    tlReveal.fromTo('.hackathon-card',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' },
      '-=1.2'
    );

  }, []);

  return (
    <>
      <section ref={containerRef} id="hackathons" className="relative w-full overflow-hidden bg-[#000000]">
        
        {/* The revealed inner container - allowing height to overflow naturally */}
        <div ref={sectionContentRef} className="relative w-full min-h-[100vh]" style={{ background: '#050508' }}>
          
          {/* ── Background Layer ── 
              Locked to 100vh absolute so it doesn't stretch when content overflows */}
          <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden pointer-events-none">
            <div ref={bgRef} className="w-full h-full" 
                 style={{ 
                   backgroundImage: `url(${bgBlack})`, 
                   backgroundSize: 'cover', 
                   backgroundPosition: 'top center', 
                   backgroundRepeat: 'no-repeat',
                   opacity: 0.95
                 }} />
            {/* Soft dark vignette that seamlessly merges the bottom of the image to the solid #050508 background below it */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/10 via-transparent to-[#050508]" />
          </div>

          {/* ── Content Container ── */}
          <div className="relative w-full min-h-[100vh] max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 z-10 flex flex-col justify-start">
            
            <div className="flex flex-col lg:flex-row items-start justify-between pt-[15vh] pb-[10vh]">
              
              {/* ── Left Side: Text Content ── */}
              <div className="w-full lg:w-[36%] relative flex flex-col justify-start">
                
                <div className="flex items-center gap-4 mb-4 transform -rotate-90 origin-left absolute -left-12 top-[20%] -translate-y-1/2 opacity-20 hidden xl:flex hackathon-text">
                   <span className="text-white text-[10px] tracking-[0.6em] uppercase">HACKATHONS</span>
                </div>

                <div className="pl-0 xl:pl-8">
                  <span className="uppercase tracking-[0.3em] text-[#C9A26D] text-[10px] font-semibold mb-4 flex items-center gap-2 hackathon-text">
                    MY JOURNEY
                  </span>
                  
                  <h2 className="text-white leading-[1.0] mb-2 hackathon-text" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 4.5vw, 68px)' }}>
                    Building<br/>
                    Solutions<br/>
                    Under Pressure
                  </h2>
                  
                  <p className="text-[#C9A26D] leading-[1.0] mb-6 hackathon-text" 
                     style={{ fontFamily: "'Allura', cursive", fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
                    through innovation.
                  </p>
                  
                  <p className="text-white/70 max-w-[90%] leading-[1.6] mb-4 font-light hackathon-text" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px' }}>
                    Hackathons have shaped my journey as a developer, pushing me to rapidly build, learn and solve complex problems under tight deadlines.
                  </p>

                  <p className="text-white/70 max-w-[90%] leading-[1.6] mb-8 font-light hackathon-text" style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px' }}>
                    From AI-powered legal document analysis to blockchain applications and innovative product ideas, each event strengthened my ability to transform ideas into working solutions.
                  </p>

                  <div className="hackathon-text mt-8">
                    <MagneticButton variant="outline-bronze">
                      View My Achievements <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                    </MagneticButton>
                  </div>
                </div>
              </div>

              {/* ── Center: Branching Timeline ── */}
              <div className="hidden lg:flex w-[60px] relative justify-center mt-[10px]">
                 <div ref={timelineLineRef} className="absolute top-[90px] bottom-[90px] w-[1px] bg-[#C9A26D] shadow-[0_0_15px_rgba(201,162,109,0.8)] z-0" />

                 <div className="w-full flex flex-col justify-start z-10">
                   {[1, 2, 3].map((num) => {
                     return (
                       <div key={num} className="relative w-full flex items-center justify-center mb-6 last:mb-0 hackathon-node" style={{ height: '185px' }}>
                         <span className="absolute -left-8 text-[16px] font-light text-[#C9A26D] drop-shadow-[0_0_8px_rgba(201,162,109,0.8)]"
                               style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                           0{num}
                         </span>
                         <div className="w-2 h-2 rounded-full bg-[#C9A26D] shadow-[0_0_12px_rgba(201,162,109,1)]" />
                         {/* Branch Line */}
                         <div className="absolute left-[50%] h-[1px] w-[150%] bg-gradient-to-r from-[#C9A26D] to-transparent shadow-[0_0_8px_rgba(201,162,109,0.5)] origin-left" />
                       </div>
                     );
                   })}
                 </div>
              </div>

              {/* ── Right Side: Floating Frame Cards ── */}
              <div className="w-full lg:w-[56%] flex flex-col justify-start relative z-20">
                <div className="w-full flex flex-col">
                  {hackathons.map((hackathon) => (
                    <HackathonCard key={hackathon.id} hackathon={hackathon} />
                  ))}
                </div>

                {/* Bottom CTA positioned naturally below cards */}
                <div className="flex justify-center mt-12 w-full hackathon-text">
                  <MagneticButton variant="outline-bronze" className="!px-8 !py-3">
                    Explore All Hackathons <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </MagneticButton>
                </div>
              </div>

            </div>
          </div>

          <OrbitalSphereDark />
        </div>
      </section>
      
    </>
  );
};

export default Hackathons;
