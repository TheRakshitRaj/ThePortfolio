import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import {
  IconJS, IconTS, IconHTML, IconCSS, IconReact, IconNode, IconBootstrap, IconTailwind, IconCpp,
  IconNextjs, IconGit, IconGitHub, IconVSCode, IconFigma, IconPostman, IconMongoDB, IconFirebase, IconVercel
} from './TechIcons';

gsap.registerPlugin(ScrollTrigger);

// ── Skill Icons ──
const SkillIconResponsive = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const SkillIconState = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
  </svg>
);
const SkillIconAPI = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);
const SkillIconProblem = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 12 3.53 4.65 4.65 0 0 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5h6.18z"/>
  </svg>
);
const SkillIconCleanCode = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const SkillIconPerformance = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconRocket = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A26D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

// ── Realistic Leaf Shadow Background ──
const LeafShadows = () => {
  const leaf1Ref = useRef(null);
  const leaf2Ref = useRef(null);

  useEffect(() => {
    // Gentle wind animation
    gsap.to(leaf1Ref.current, {
      rotation: 5,
      x: 15,
      y: 10,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to(leaf2Ref.current, {
      rotation: -8,
      x: -20,
      y: 15,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Top-left realistic leaf (Monstera style silhouette) */}
      <svg ref={leaf1Ref} className="absolute" style={{ top: '-10%', left: '-5%', width: '40vw', opacity: 0.08, filter: 'blur(16px)', transformOrigin: 'top left' }}
        viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0 C150 0 350 100 350 250 C350 300 300 350 250 350 C200 350 180 300 150 250 C120 200 100 250 80 300 C50 350 0 300 0 200 C0 100 0 0 50 0 Z" fill="#2D1A0C" />
        <path d="M150 50 C200 100 250 150 250 200" stroke="#2D1A0C" strokeWidth="15" fill="none" />
      </svg>
      
      {/* Top-right realistic leaf */}
      <svg ref={leaf2Ref} className="absolute" style={{ top: '-5%', right: '-10%', width: '45vw', opacity: 0.06, filter: 'blur(20px)', transform: 'scaleX(-1)', transformOrigin: 'top right' }}
        viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50 C250 0 450 100 450 300 C450 400 350 450 250 450 C150 450 200 350 150 250 C100 150 50 300 0 250 C-50 200 0 100 100 50 Z" fill="#2D1A0C" />
      </svg>
    </div>
  );
};

// ── Orbital Sphere ──
const OrbitalSphere = () => {
  const ringRef = useRef(null);
  useEffect(() => {
    gsap.to(ringRef.current, { rotate: 360, duration: 60, repeat: -1, ease: 'linear', transformOrigin: 'center center' });
  }, []);

  return (
    <div className="absolute right-[-2%] top-[-12%] w-[260px] h-[260px] pointer-events-none hidden lg:block">
      {/* Orbital rings */}
      <div ref={ringRef} className="absolute inset-0">
        <svg viewBox="0 0 200 200" className="w-full h-full" style={{ opacity: 0.7 }}>
          <circle cx="100" cy="100" r="88" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#D4AF37" strokeWidth="0.4" />
          <circle cx="100" cy="12" r="3" fill="#D4AF37" filter="drop-shadow(0 0 6px #D4AF37)" />
          <circle cx="188" cy="100" r="2" fill="#D4AF37" filter="drop-shadow(0 0 4px #D4AF37)" />
          <path d="M 100 6 L 103 12 L 100 18 L 97 12 Z" fill="#D4AF37" />
        </svg>
      </div>
      {/* The sphere itself */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[100px] h-[100px] rounded-full flex items-center justify-center relative"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #FDF7EF 30%, #E8D5C1 70%, #B89B7A 100%)',
            boxShadow: '0 20px 40px rgba(184,155,122,0.4), 0 5px 15px rgba(0,0,0,0.1), inset -10px -10px 20px rgba(0,0,0,0.1), inset 8px 8px 20px rgba(255,255,255,1)'
          }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#111', letterSpacing: '-0.02em', textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>RR.</span>
        </motion.div>
      </div>
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }} />
    </div>
  );
};

// ── Icon Tile ──
const IconTile = ({ icon: Icon, label }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.05 }}
    className="flex flex-col items-center justify-center gap-1.5 cursor-pointer rounded-[14px] group relative overflow-hidden"
    style={{ 
      padding: '12px 6px', 
      background: '#FAFAF7', 
      boxShadow: '4px 8px 16px rgba(160,140,120,0.1), -4px -4px 12px rgba(255,255,255,0.9), inset 0 1px 2px rgba(255,255,255,1)', 
      border: '1px solid rgba(255,255,255,0.8)' 
    }}
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />
    <div className="group-hover:scale-110 transition-transform duration-300 relative z-10">
      <Icon size={30} />
    </div>
    <span className="relative z-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 600, color: '#444', letterSpacing: '0.02em' }}>{label}</span>
    {/* Accent bottom line on hover */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-8 rounded-t-full transition-all duration-300" style={{ background: '#D4AF37' }} />
  </motion.div>
);

// ── Skill Row ──
const SkillRow = ({ icon: Icon, label, score }) => (
  <div className="flex items-center justify-between group cursor-default" style={{ padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center rounded-[10px] transition-all duration-300 group-hover:bg-[#fff] group-hover:shadow-sm"
        style={{ width: '34px', height: '34px', background: 'rgba(0,0,0,0.03)', color: '#555' }}>
        <Icon />
      </div>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#333' }}>{label}</span>
    </div>
    <div className="flex gap-1.5">
      {[1,2,3,4,5].map(i => (
        <div key={i} className="w-2 h-2 rounded-full shadow-inner" style={{ background: i <= score ? '#D4AF37' : '#E8DFD5', boxShadow: i <= score ? '0 0 6px rgba(212,175,55,0.5)' : 'inset 0 1px 2px rgba(0,0,0,0.1)' }} />
      ))}
    </div>
  </div>
);

// ── 3D Cube SVG ──
const CubeIllustration = () => (
  <motion.div 
    animate={{ y: [-5, 5, -5] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-52 h-32" style={{ mixBlendMode: 'screen' }}
  >
    <svg viewBox="0 0 220 140" className="w-full h-full">
      <defs>
        <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="1"/>
          <stop offset="100%" stopColor="#8A6A45" stopOpacity="0.3"/>
        </linearGradient>
        <linearGradient id="cg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#fff" stopOpacity="0.1"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Left small cube */}
      <g stroke="url(#cg2)" strokeWidth="0.8" fill="none" opacity="0.6">
        <path d="M 30 65 L 55 52 L 55 82 L 30 95 L 5 82 L 5 52 Z"/>
        <path d="M 30 65 L 30 95 M 30 65 L 55 52 M 30 65 L 5 52"/>
      </g>
      {/* Center main cube */}
      <g stroke="url(#cg1)" strokeWidth="1.5" fill="rgba(212,175,55,0.05)" filter="url(#glow)">
        <path d="M 110 18 L 168 48 L 168 108 L 110 138 L 52 108 L 52 48 Z"/>
        <path d="M 110 18 L 110 78 L 168 108 M 110 78 L 52 108"/>
      </g>
      {/* Right secondary cube */}
      <g stroke="url(#cg2)" strokeWidth="0.8" fill="none" opacity="0.6">
        <path d="M 188 45 L 215 30 L 215 65 L 188 80 L 161 65 L 161 30 Z"/>
        <path d="M 188 45 L 188 80 M 188 45 L 215 30 M 188 45 L 161 30"/>
      </g>
      {/* Glowing dots */}
      <circle cx="110" cy="78" r="4" fill="#fff" filter="drop-shadow(0 0 8px #fff)"/>
      <circle cx="168" cy="108" r="2.5" fill="#D4AF37" filter="drop-shadow(0 0 6px #D4AF37)"/>
      <circle cx="52" cy="108" r="2.5" fill="#D4AF37" filter="drop-shadow(0 0 6px #D4AF37)"/>
      <circle cx="110" cy="18" r="2" fill="#fff" opacity="0.9"/>
    </svg>
  </motion.div>
);

// ── Main Component ──
const TechArsenal = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium sweeping transition reveal
      gsap.fromTo(bgRef.current,
        { clipPath: 'ellipse(0% 0% at 50% 0%)' },
        { 
          clipPath: 'ellipse(150% 150% at 50% 0%)', 
          duration: 1.5, 
          ease: 'power3.inOut',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } 
        }
      );

      // Stagger cards with a smooth float up
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { opacity: 0, y: 60, scale: 0.95 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 1.2, 
            stagger: 0.15, 
            ease: 'back.out(1.2)',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } 
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="tech" className="relative w-full overflow-hidden flex flex-col justify-center"
      style={{ minHeight: '100vh', padding: '3rem 0 2rem', background: '#000' /* Start black for blend */ }}>

      {/* ── Animated Background Reveal Layer ── */}
      <div ref={bgRef} className="absolute inset-0" style={{ background: '#F4EFEA', zIndex: 1 }}>
        {/* Warm ambient light */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(255,255,255,0.8) 0%, transparent 80%)' }} />
        {/* Leaf Shadows */}
        <LeafShadows />
      </div>

      <div className="relative max-w-[1400px] mx-auto w-full" style={{ padding: '0 3rem', zIndex: 10 }}>

        {/* ── Header Row ── */}
        <div className="relative flex items-start justify-between mb-8">
          {/* Left: Title block */}
          <div className="flex flex-col">
            <span className="uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', letterSpacing: '0.3em', color: '#8A6A45', fontWeight: 600 }}>
              MY TECH
            </span>
            <h2 className="leading-none mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(56px, 7vw, 90px)', color: '#111', fontWeight: 500, letterSpacing: '-0.02em', textShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              Tech Arsenal<span style={{ color: '#D4AF37', fontSize: '0.4em', verticalAlign: 'super', marginLeft: '-2px' }}>*</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#555', lineHeight: 1.6, fontWeight: 400 }}>
              The technologies, tools and weapons<br/>
              I use to <strong style={{ color: '#D4AF37', fontWeight: 600 }}>build</strong>,{' '}
              <strong style={{ color: '#8A6A45', fontWeight: 600 }}>design</strong> and bring{' '}
              <strong style={{ color: '#D4AF37', fontWeight: 600 }}>ideas</strong> to life.
            </p>
          </div>

          {/* Center: Cursive quote */}
          <div className="absolute hidden lg:block" style={{ left: '42%', top: '10%' }}>
            <p style={{ fontFamily: "'Allura', cursive", fontSize: 'clamp(32px, 3.5vw, 48px)', color: '#3D2B1A', lineHeight: 1.2, transform: 'rotate(-4deg)', opacity: 0.9 }}>
              Great tools<br/>build great<br/>experiences.
            </p>
          </div>

          {/* Right: Orbital sphere */}
          <OrbitalSphere />
        </div>

        {/* ── 3-Column Cards ── */}
        <div ref={cardsRef} className="grid grid-cols-3 gap-6">

          {/* ── CARD 1: Languages ── */}
          <div className="rounded-[32px] overflow-hidden relative flex flex-col group"
            style={{ 
              background: '#F7F4EF', 
              boxShadow: '15px 25px 50px rgba(160, 140, 120, 0.15), -10px -10px 30px rgba(255, 255, 255, 0.9), inset 0 2px 4px rgba(255, 255, 255, 1)', 
              border: '1px solid rgba(255,255,255,0.7)',
              padding: '24px'
            }}>
            {/* Animated Bright Flowing Border Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                 style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 60%)' }} />
            
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white flex-shrink-0"
                style={{ background: '#111', boxShadow: '0 8px 20px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.2)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#111', fontWeight: 600, lineHeight: 1 }}>Languages</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#777', marginTop: '4px' }}>The foundation I build on.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 flex-1 relative z-10">
              <IconTile icon={IconJS} label="JavaScript" />
              <IconTile icon={IconTS} label="TypeScript" />
              <IconTile icon={IconCSS} label="CSS" />
              <IconTile icon={IconHTML} label="HTML" />
              <IconTile icon={IconReact} label="React" />
              <IconTile icon={IconNode} label="Node.js" />
              <IconTile icon={IconBootstrap} label="Bootstrap" />
              <IconTile icon={IconTailwind} label="Tailwind CSS" />
              <IconTile icon={IconCpp} label="C++" />
            </div>
          </div>

          {/* ── CARD 2: Tools & Frameworks ── */}
          <div className="rounded-[32px] overflow-hidden relative flex flex-col group"
            style={{ 
              background: '#F7F4EF', 
              boxShadow: '15px 25px 50px rgba(160, 140, 120, 0.15), -10px -10px 30px rgba(255, 255, 255, 0.9), inset 0 2px 4px rgba(255, 255, 255, 1)', 
              border: '1px solid rgba(255,255,255,0.7)',
              padding: '24px'
            }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                 style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 60%)' }} />

            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white flex-shrink-0"
                style={{ background: '#111', boxShadow: '0 8px 20px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.2)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#111', fontWeight: 600, lineHeight: 1 }}>Tools & Frameworks</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#777', marginTop: '4px' }}>The power behind the process.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 flex-1 relative z-10">
              <IconTile icon={IconNextjs} label="Next.js" />
              <IconTile icon={IconGit} label="Git" />
              <IconTile icon={IconGitHub} label="GitHub" />
              <IconTile icon={IconVSCode} label="VS Code" />
              <IconTile icon={IconFigma} label="Figma" />
              <IconTile icon={IconPostman} label="Postman" />
              <IconTile icon={IconMongoDB} label="MongoDB" />
              <IconTile icon={IconFirebase} label="Firebase" />
              <IconTile icon={IconVercel} label="Vercel" />
            </div>
          </div>

          {/* ── CARD 3: Other Skills ── */}
          <div className="rounded-[32px] overflow-hidden relative flex flex-col group"
            style={{ 
              background: '#F7F4EF', 
              boxShadow: '15px 25px 50px rgba(160, 140, 120, 0.15), -10px -10px 30px rgba(255, 255, 255, 0.9), inset 0 2px 4px rgba(255, 255, 255, 1)', 
              border: '1px solid rgba(255,255,255,0.7)',
              padding: '24px'
            }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                 style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 60%)' }} />

            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0"
                style={{ background: '#111', boxShadow: '0 8px 20px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.2)', color: '#D4AF37' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#111', fontWeight: 600, lineHeight: 1 }}>Other Skills</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#777', marginTop: '4px' }}>More than just code.</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 relative z-10 pt-2">
              <SkillRow icon={() => <IconFigma size={16} />} label="UI / UX Design" score={4} />
              <SkillRow icon={SkillIconResponsive} label="Responsive Design" score={5} />
              <SkillRow icon={SkillIconState} label="State Management" score={4} />
              <SkillRow icon={SkillIconAPI} label="RESTful APIs" score={5} />
              <SkillRow icon={SkillIconProblem} label="Problem Solving" score={5} />
              <SkillRow icon={SkillIconCleanCode} label="Clean Code" score={4} />
              <SkillRow icon={SkillIconPerformance} label="Performance Optimization" score={4} />
            </div>
          </div>
        </div>

        {/* ── Bottom Dark Panel ── */}
        <div className="mt-8 rounded-[28px] overflow-hidden relative flex items-center group"
          style={{ background: 'linear-gradient(110deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)', padding: '24px 40px', boxShadow: '0 24px 60px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.05)', minHeight: '120px' }}>

          {/* Animated Glow on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.1) 0%, transparent 60%)' }} />

          <div className="relative z-10 flex items-center gap-10 w-full">
            {/* Rocket Icon block */}
            <div className="flex items-center gap-6 flex-shrink-0">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="w-16 h-16 rounded-[18px] flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.02))', border: '1px solid rgba(212,175,55,0.3)', boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.3)' }}>
                <IconRocket />
              </motion.div>
              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', color: '#fff', fontWeight: 500, lineHeight: 1 }}>Continuous Learner</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '6px', lineHeight: 1.5 }}>
                  Exploring new technologies and<br/>pushing my limits every day.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-16 w-px flex-shrink-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)' }} />

            {/* Stats */}
            <div className="flex items-center justify-between flex-1 pr-8">
              {[
                { val: '30+', label: 'Technologies\nExplored' },
                { val: '5+', label: 'Frameworks\nMastered' },
                { val: '10+', label: 'Projects\nBuilt' },
                { val: '∞', label: 'Curiosity\nNever Ends' }
              ].map((s, i) => (
                <motion.div whileHover={{ y: -5 }} key={i} className="cursor-default">
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '34px', color: '#fff', fontWeight: 300, lineHeight: 1, textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>{s.val}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#D4AF37', letterSpacing: '0.15em', marginTop: '6px', whiteSpace: 'pre-line', lineHeight: 1.4, fontWeight: 600 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* 3D Cube illustration */}
            <div className="flex-shrink-0 hidden xl:block">
              <CubeIllustration />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechArsenal;
