import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import profileImg from '../assets/IMG_20260320_223318.png';

// Inline SVG Icons
const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);
const IconArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
  </svg>
);
const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const Hero = () => {
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const portraitRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x: clientX, y: clientY });
      
      if (orbitRef.current) {
        gsap.to(orbitRef.current, { x: x * 40, y: y * 40, duration: 2, ease: 'power2.out' });
      }
      if (portraitRef.current) {
        gsap.to(portraitRef.current, { x: x * -15, y: y * -15, duration: 2, ease: 'power2.out' });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nameVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: 0.6 + i * 0.05, duration: 1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const socialLinks = [
    { href: 'https://linkedin.com', Icon: IconLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com', Icon: IconGithub, label: 'GitHub' },
    { href: 'https://instagram.com', Icon: IconInstagram, label: 'Instagram' },
    { href: 'mailto:rakshit@example.com', Icon: IconMail, label: 'Email' },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-8 lg:pt-24 lg:pb-0" style={{ background: 'linear-gradient(180deg, #000000 0%, #030303 60%, #080808 100%)' }} id="home">
      
      {/* ── BACKGROUND DEPTH ── */}
      {/* Film grain noise layer */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-noise" />
      
      {/* Subtle bottom-left glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-3/4 h-3/4 z-0 opacity-10"
        style={{ background: 'radial-gradient(circle at 0% 100%, rgba(255,255,255,0.08), transparent 70%)' }} />

      {/* Mouse follow glow */}
      <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden lg:block opacity-40 mix-blend-screen"
        style={{ background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 50%)` }} />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 z-10 relative items-center">

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col justify-center lg:col-span-6 order-2 lg:order-1 pt-12 lg:pt-0 relative z-20">

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="tracking-[0.4em] text-[11px] mb-8 font-light uppercase text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            HELLO, I'M
          </motion.p>

          <div className="relative mb-6">
            {/* Increased typography size */}
            <h1 className="leading-[0.9] text-white tracking-[-0.02em] flex flex-col"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(64px, 10vw, 130px)', fontWeight: 500 }}>
              <div className="flex overflow-hidden pb-2">
                {'Rakshit'.split('').map((char, i) => (
                  <motion.span key={`f-${i}`} custom={i} variants={nameVariants} initial="hidden" animate="visible" className="inline-block origin-bottom">
                    {char}
                  </motion.span>
                ))}
              </div>
              {/* Raj + Cursive role text inline — matching reference exactly */}
              <div className="flex items-baseline gap-6 overflow-visible pb-4" style={{ marginTop: '-0.1em' }}>
                <div className="flex overflow-hidden">
                  {'Raj'.split('').map((char, i) => (
                    <motion.span key={`l-${i}`} custom={i + 7} variants={nameVariants} initial="hidden" animate="visible" className="inline-block origin-bottom">
                      {char}
                    </motion.span>
                  ))}
                </div>
                {/* Cursive role text — beside 'Raj', matching the reference */}
                <motion.div
                  initial={{ opacity: 0, x: -20, rotate: -4 }}
                  animate={{ opacity: 1, x: 0, rotate: -2 }}
                  transition={{ delay: 1.6, duration: 1.2, ease: "easeOut" }}
                  className="flex flex-col leading-[1.2] pointer-events-none"
                  style={{
                    fontFamily: "'Allura', cursive",
                    color: '#C9A26D',
                    fontSize: 'clamp(26px, 3.2vw, 44px)',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    marginBottom: '0.1em',
                  }}>
                  Full Stack Developer<br />
                  &amp; Blockchain Builder
                </motion.div>
              </div>
            </h1>
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
            className="text-gray-400/80 max-w-md leading-[1.8] mb-12 mt-4"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', fontWeight: 300 }}>
            I build modern digital experiences through code, design and innovation.
            Passionate about MERN Stack, Blockchain, AI and creating impactful products.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1, duration: 1, ease: "easeOut" }}>
            <button className="glass-button group flex items-center gap-5 rounded-full pl-2 pr-8 py-2 transition-all duration-500 w-max cursor-pointer">
              <span className="flex items-center justify-center rounded-full p-3 transition-colors duration-500 bg-[#C9A26D]/10 border border-[#C9A26D]/20 group-hover:bg-[#0B0D12] group-hover:border-[#0B0D12]">
                <span className="text-[#C9A26D] -rotate-45 group-hover:rotate-0 transition-all duration-500 inline-block group-hover:text-[#C9A26D]">
                  <IconArrowRight />
                </span>
              </span>
              <span className="tracking-[0.25em] text-[10px] text-[#C9A26D] group-hover:text-[#0B0D12] transition-colors duration-500 uppercase"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.25em', fontWeight: 500 }}>
                VIEW MY WORK
              </span>
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 1.5 }}
            className="mt-24 flex items-center gap-8">
            <span className="tracking-[0.3em] text-gray-500/80" style={{ fontSize: '9px', fontFamily: "'Inter', sans-serif" }}>
              FIND ME ON
            </span>
            <div className="flex gap-6 text-gray-400/60">
              {socialLinks.map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="transition-all duration-300 hover:text-white hover:-translate-y-1"
                  style={{ filter: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(201,162,109,0.4))'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.filter = 'none'; }}>
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: portrait + depth ── */}
        <div className="relative flex justify-center items-center lg:col-span-6 order-1 lg:order-2 h-[60vh] lg:h-[100vh] w-full lg:absolute lg:right-0 lg:top-0 lg:w-[45vw] lg:ml-auto">
          {/* Multiple layered orbit circles */}
          <div ref={orbitRef} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            {/* Outer dotted/dashed orbit */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
              className="absolute rounded-full border border-white/5" style={{ width: '90%', height: '90%', borderStyle: 'dashed' }} />
            
            {/* Solid orbits */}
            <div className="absolute rounded-full border border-white-[0.03]" style={{ width: '70%', height: '70%' }} />
            <div className="absolute rounded-full border border-white-[0.02]" style={{ width: '45%', height: '45%' }} />
            <div className="absolute rounded-full border border-[#C9A26D]/10" style={{ width: '115%', height: '115%' }} />

            {/* Glowing points/particles */}
            <motion.div animate={{ y: [0, -40, 0], opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute rounded-full glow-radial" style={{ width: 4, height: 4, background: '#C9A26D', top: '15%', left: '25%', boxShadow: '0 0 15px 2px #C9A26D' }} />
            <motion.div animate={{ y: [0, 50, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute rounded-full" style={{ width: 3, height: 3, background: '#fff', bottom: '20%', right: '25%', boxShadow: '0 0 10px 1px #fff' }} />
            <motion.div animate={{ x: [0, -30, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
              className="absolute rounded-full" style={{ width: 5, height: 5, background: '#C9A26D', top: '60%', right: '10%' }} />
          </div>

          {/* Portrait Container - Larger and shifted upwards */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(15px)', y: 40 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: -45 }}
            transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 h-[90%] w-[95%] md:w-[75%] lg:w-[85%] lg:h-[95%] flex items-center justify-center -translate-y-8 lg:-translate-y-16"
            ref={portraitRef}
          >
            {/* Strong white radial light source behind the head and shoulders */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[120%] aspect-square pointer-events-none opacity-100 mix-blend-screen blur-[80px] z-0"
              style={{ background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 40%, transparent 70%)' }} />

            {/* Inner rim light effect created via drop shadow */}
            <img
              src={profileImg}
              alt="Rakshit Raj"
              className="w-full h-full object-cover object-top transition-all duration-1000 relative z-10"
              style={{
                filter: 'grayscale(100%) contrast(1.15) brightness(0.85) drop-shadow(0 0 25px rgba(255,255,255,0.12))',
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 95%, transparent 100%)',
                maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 95%, transparent 100%)',
              }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(30%) contrast(1.1) brightness(0.95) drop-shadow(0 0 35px rgba(255,255,255,0.25))'; }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%) contrast(1.15) brightness(0.85) drop-shadow(0 0 25px rgba(255,255,255,0.12))'; }}
            />
            {/* Atmospheric haze / vignette over the bottom of the image */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #000000 0%, transparent 25%)' }} />
          </motion.div>
        </div>
      </div>

      {/* Right-side page indicators */}
      <div className="hidden lg:flex flex-col items-center absolute right-10 top-1/2 -translate-y-1/2 gap-4 z-30">
        <span className="text-white/80 tracking-widest mb-2" style={{ fontSize: '9px', fontFamily: "'Inter', sans-serif" }}>01</span>
        <div className="w-[5px] h-[5px] rounded-full" style={{ background: '#C9A26D', boxShadow: '0 0 10px rgba(201,162,109,0.8)' }} />
        <div className="w-[4px] h-[4px] rounded-full bg-white/15" />
        <div className="w-[4px] h-[4px] rounded-full bg-white/15" />
        <div className="w-[4px] h-[4px] rounded-full bg-white/15" />
        <div className="w-[4px] h-[4px] rounded-full bg-white/15" />
      </div>

      {/* Scroll down indicator */}
      <div className="hidden lg:flex flex-col items-center absolute right-10 bottom-12 z-30 gap-3">
        <span className="text-gray-500/80 -rotate-90 mb-10 tracking-[0.35em]" style={{ fontSize: '8px', fontFamily: "'Inter', sans-serif", writingMode: 'vertical-rl' }}>SCROLL DOWN</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-14 origin-top"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.6), transparent)' }}
        />
        <span className="text-white/30 mt-1"><IconArrowDown /></span>
      </div>
    </section>
  );
};

export default Hero;
