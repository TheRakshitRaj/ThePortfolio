import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { motion, useAnimation } from 'framer-motion';
import airplaneImg from '../assets/aeroplane.png';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// ── Utility: Custom Text Splitter ──
const SplitText = ({ text, className }) => {
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {text.split('').map((char, i) => (
        <span key={i} className="char" style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
          {char}
        </span>
      ))}
    </span>
  );
};

// ── Magnetic Button ──
const MagneticButton = ({ children, className = '', style = {}, onClick }) => {
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

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={style}
    >
      {children}
    </motion.button>
  );
};

// ── Orbital Logo ──
const OrbitalSphere = () => {
  const ringRef = useRef(null);
  useEffect(() => {
    gsap.to(ringRef.current, { rotate: 360, duration: 60, repeat: -1, ease: 'linear' });
  }, []);

  return (
    <div className="relative w-[150px] h-[150px] flex items-center justify-center">
      {/* Glow */}
      <div className="absolute inset-0 bg-[#C9A26D] blur-[50px] opacity-20 rounded-full" />
      {/* Rings */}
      <div ref={ringRef} className="absolute inset-0">
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#C9A26D" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#C9A26D" strokeWidth="0.3" />
          <circle cx="10" cy="100" r="3" fill="#C9A26D" filter="drop-shadow(0 0 5px #C9A26D)" />
        </svg>
      </div>
      {/* Center Sphere */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-[70px] h-[70px] rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #E8C98A 0%, #C9A26D 40%, #1A1A1A 100%)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.5), inset -5px -5px 15px rgba(0,0,0,0.8), inset 5px 5px 15px rgba(255,255,255,0.4)'
        }}
      >
        <span className="text-[#111] font-bold text-[24px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>RR.</span>
      </motion.div>
    </div>
  );
};

// ── Main Contact Section ──
const Contact = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const planeRef = useRef(null);
  const pathRef = useRef(null);
  const orbitRef = useRef(null);
  const [formState, setFormState] = useState('idle'); // idle, sending, sent

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        }
      });

      // 1. Split Text Animation
      const chars = textRef.current.querySelectorAll('.char');
      const mid = Math.floor(chars.length / 2);
      
      tl.to(chars, {
        x: (i) => (i < mid ? -300 : 300),
        opacity: 0,
        filter: 'blur(10px)',
        scale: 1.5,
        duration: 2,
        ease: "power2.inOut",
        stagger: { amount: 0.5, from: "center" }
      }, 0);

      // 2. Paper Airplane Journey
      // We animate the plane along the SVG path
      tl.to(planeRef.current, {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        duration: 3,
        ease: "power1.inOut"
      }, 0);

      // Path dash offset for the light trail
      tl.fromTo(pathRef.current, 
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 3, ease: "power1.inOut" },
      0);

      // 3. Reveal Orbit and Form
      tl.fromTo('.contact-content', 
        { opacity: 0, y: 100, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" },
        1.5
      );

      tl.fromTo(orbitRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" },
        2
      );
    });

    return () => mm.revert();
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    setFormState('sending');
    
    // Animate the button plane flying away
    gsap.to('.btn-plane', {
      x: 100,
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in"
    });

    setTimeout(() => {
      setFormState('sent');
    }, 1200);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative w-full h-[100vh] bg-[#050508] overflow-hidden flex items-center justify-center">
      
      {/* ── Background Noise & Ambient Glow ── */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,_rgba(201,162,109,0.08)_0%,_transparent_70%)] rounded-full blur-[100px] pointer-events-none" />
      
      {/* ── SVG Path for Airplane Journey ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 800">
        <path 
          ref={pathRef}
          d="M-100,600 C200,600 300,200 720,400 C1100,600 1200,200 1540,100" 
          fill="none" 
          stroke="url(#bright-glow)" 
          strokeWidth="4"
          opacity="1"
          style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.5))' }}
        />
        <defs>
          <linearGradient id="bright-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#FFF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="liquid-glass-contact">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.015" numOctaves="3" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* ── The Flying Airplane Image with Glitter ── */}
      <div ref={planeRef} className="absolute z-10 w-[120px] h-auto flex items-center justify-center pointer-events-none" style={{ top: -60, left: -60, x: -100, y: 600 }}>
        {/* Glitter Particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[20%] w-1.5 h-1.5 bg-white rounded-full blur-[1px] animate-[ping_1.5s_infinite]" style={{ boxShadow: '0 0 10px #fff, 0 0 20px #C9A26D' }} />
          <div className="absolute top-[80%] left-[30%] w-1 h-1 bg-[#E8C98A] rounded-full blur-[0.5px] animate-[ping_2s_infinite_0.5s]" style={{ boxShadow: '0 0 8px #E8C98A' }} />
          <div className="absolute top-[40%] right-[10%] w-2 h-2 bg-white rounded-full blur-[1px] animate-[ping_1.2s_infinite_1s]" style={{ boxShadow: '0 0 12px #fff, 0 0 24px #C9A26D' }} />
          <div className="absolute bottom-[10%] right-[40%] w-1.5 h-1.5 bg-[#C9A26D] rounded-full blur-[1px] animate-[ping_1.8s_infinite_0.2s]" style={{ boxShadow: '0 0 10px #C9A26D' }} />
          <div className="absolute -top-[10%] right-[50%] w-1 h-1 bg-white rounded-full animate-[ping_1s_infinite_0.7s]" style={{ boxShadow: '0 0 5px #fff' }} />
        </div>
        
        {/* The Image */}
        <img 
          src={airplaneImg} 
          alt="Flight"
          className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
          style={{ 
            animation: 'sparkleImage 2s infinite alternate',
          }}
        />
        <style>{`
          @keyframes sparkleImage {
            0% { filter: drop-shadow(0 0 10px rgba(201,162,109,0.5)) brightness(1); }
            100% { filter: drop-shadow(0 0 25px rgba(201,162,109,0.9)) brightness(1.2); }
          }
        `}</style>
      </div>

      {/* ── Editorial Typography (Splits on Scroll) ── */}
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h2 className="text-[#888888] tracking-widest uppercase text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(60px, 10vw, 150px)', lineHeight: 0.9, textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <SplitText text="LET'S" className="block mb-10 md:mb-16" />
          <SplitText text="CONNECT" className="block" />
        </h2>
      </div>

      {/* ── Main Contact Content ── */}
      <div className="contact-content relative z-20 w-full max-w-[1200px] px-6 mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 opacity-0">
        
        {/* Left: Info & Methods */}
        <div className="w-full lg:w-[40%] flex flex-col relative">
          
          <div className="absolute -top-32 -left-16" ref={orbitRef}>
            <OrbitalSphere />
          </div>

          <h3 className="text-white text-[40px] leading-[1.1] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Let's build something<br/>
            <span className="text-[#C9A26D] italic" style={{ fontFamily: "'Allura', cursive", fontSize: '50px' }}>extraordinary.</span>
          </h3>
          <p className="text-white/60 font-light text-[14px] leading-[1.6] mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Whether you have a visionary project in mind or just want to say hello, my inbox is always open. Let's create the next big thing together.
          </p>

          <div className="flex gap-4 flex-wrap">
            {[
              { name: 'GitHub', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/> },
              { name: 'LinkedIn', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/> },
              { name: 'Email', icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"/> },
              { name: 'Resume', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"/> }
            ].map((link) => (
              <MagneticButton key={link.name} className="group relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A26D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'inset 0 0 15px rgba(201,162,109,0.3)' }} />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-[#C9A26D] transition-colors duration-300 relative z-10">
                  {link.icon}
                </svg>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Right: Liquid Glass Form */}
        <div className="w-full lg:w-[50%] relative">
          <div className="relative w-full rounded-[30px] p-[1px] overflow-hidden"
               style={{ background: 'linear-gradient(135deg, rgba(201,162,109,0.4) 0%, rgba(255,255,255,0.05) 50%, rgba(201,162,109,0.1) 100%)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
            
            <div className="relative w-full h-full rounded-[29px] p-8 md:p-10"
                 style={{ 
                   background: 'rgba(10,10,12,0.6)', 
                   backdropFilter: 'blur(30px)',
                   WebkitBackdropFilter: 'blur(30px)' 
                 }}>
              
              {/* Liquid distortion background layer */}
              <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ filter: 'url(#liquid-glass-contact)', background: 'radial-gradient(circle at 50% 0%, #C9A26D 0%, transparent 70%)' }} />

              {formState === 'sent' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex flex-col items-center justify-center text-center py-20 relative z-10"
                >
                  <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center" style={{ background: 'rgba(201,162,109,0.1)', border: '1px solid rgba(201,162,109,0.3)', boxShadow: '0 0 30px rgba(201,162,109,0.2)' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A26D" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <h4 className="text-white text-[24px] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Message Sent Successfully</h4>
                  <p className="text-white/60 font-light text-[14px]">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSend} className="relative z-10 flex flex-col gap-6">
                  
                  {['Name', 'Email'].map((field) => (
                    <div key={field} className="relative group">
                      <input 
                        type={field === 'Email' ? 'email' : 'text'} 
                        required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white text-[14px] font-light outline-none transition-all duration-300 focus:bg-white/[0.05] focus:border-[#C9A26D]/50 peer"
                        placeholder=" "
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                      <label className="absolute left-5 top-4 text-white/40 text-[14px] font-light pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#C9A26D] peer-focus:bg-[#0A0A0C] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-[10px] peer-valid:px-2 peer-valid:bg-[#0A0A0C]">
                        {field}
                      </label>
                      {/* Focus wave light */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A26D] to-transparent opacity-0 transition-all duration-500 peer-focus:w-full peer-focus:opacity-100" />
                    </div>
                  ))}

                  <div className="relative group">
                    <textarea 
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white text-[14px] font-light outline-none transition-all duration-300 focus:bg-white/[0.05] focus:border-[#C9A26D]/50 peer resize-none h-[120px]"
                      placeholder=" "
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                    <label className="absolute left-5 top-4 text-white/40 text-[14px] font-light pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#C9A26D] peer-focus:bg-[#0A0A0C] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-[10px] peer-valid:px-2 peer-valid:bg-[#0A0A0C]">
                      Message
                    </label>
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A26D] to-transparent opacity-0 transition-all duration-500 peer-focus:w-full peer-focus:opacity-100" />
                  </div>

                  <button 
                    type="submit"
                    disabled={formState !== 'idle'}
                    className="group relative w-full overflow-hidden rounded-xl bg-white/5 border border-white/10 py-4 mt-2 transition-all duration-300 hover:border-[#C9A26D]/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C9A26D]/0 via-[#C9A26D]/10 to-[#C9A26D]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="relative z-10 flex items-center justify-center gap-3 text-[#E8C98A] text-[12px] font-semibold tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <span>Send Message</span>
                      <img 
                        src={airplaneImg} 
                        alt="Send"
                        className="w-8 h-auto btn-plane relative drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                      />
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
