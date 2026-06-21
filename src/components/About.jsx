import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Icons ──────────────────────────────────────────────────────────────
const IconPen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);
const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

// ── Premium Golden Arc (cinematic, layered, animated) ───────────────────
const CinematicArc = () => {
  const arc1Ref = useRef(null);
  const arc2Ref = useRef(null);
  const arc3Ref = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!arc1Ref.current) return;
    // Layer 1 — very slow outer arc rotation
    gsap.to(arc1Ref.current, { rotate: 360, duration: 120, repeat: -1, ease: 'linear', transformOrigin: '50% 50%' });
    // Layer 2 — slightly faster counter-rotation
    gsap.to(arc2Ref.current, { rotate: -360, duration: 90, repeat: -1, ease: 'linear', transformOrigin: '50% 50%' });
    // Layer 3 — pulse scale
    gsap.to(arc3Ref.current, { rotate: 360, duration: 150, repeat: -1, ease: 'linear', transformOrigin: '50% 50%' });
    // Glow pulse
    gsap.to(glowRef.current, {
      opacity: 0.4,
      scale: 1.05,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div className="absolute right-0 top-0 w-[45vw] h-full pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Deep volumetric background fog - reduced intensity */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 80% at 85% 35%, rgba(201,162,109,0.03) 0%, transparent 60%)' }} />

      {/* SVG Arc system - Reduced size but brought into view and thickened */}
      <div className="absolute" style={{ width: '65vh', height: '65vh', right: '-2vh', top: '5vh' }}>

        {/* Ambient glow behind the arcs - reduced */}
        <div ref={glowRef} className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(201,162,109,0.1) 0%, transparent 60%)', borderRadius: '50%' }} />

        {/* Layer 3 — outermost faint track - thinner lines */}
        <svg ref={arc3Ref} viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 2px rgba(201,162,109,0.1))' }}>
          <defs>
            <linearGradient id="arcFaint" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A26D" stopOpacity="0"/>
              <stop offset="30%" stopColor="#C9A26D" stopOpacity="0.2"/>
              <stop offset="70%" stopColor="#C9A26D" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#C9A26D" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="98" fill="none" stroke="url(#arcFaint)" strokeWidth="0.4"/>
        </svg>

        {/* Layer 2 — mid arc, counter-rotating - thinner lines */}
        <svg ref={arc2Ref} viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 4px rgba(201,162,109,0.15))' }}>
          <defs>
            <linearGradient id="arcMid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" stopOpacity="0"/>
              <stop offset="20%" stopColor="#C9A26D" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#E8C98A" stopOpacity="0.6"/>
              <stop offset="80%" stopColor="#C9A26D" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Partial arc ~270 degrees */}
          <path d="M 100 2 A 98 98 0 1 1 2 100" fill="none" stroke="url(#arcMid)" strokeWidth="0.6" strokeLinecap="round"/>
        </svg>

        {/* Layer 1 — main bright arc, rotating - thinner lines, reduced glow */}
        <svg ref={arc1Ref} viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(201,162,109,0.3))' }}>
          <defs>
            <linearGradient id="arcMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" stopOpacity="0"/>
              <stop offset="10%" stopColor="#C9A26D" stopOpacity="0.5"/>
              <stop offset="40%" stopColor="#F0D9A8" stopOpacity="1"/>
              <stop offset="60%" stopColor="#C9A26D" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
            </linearGradient>
            <radialGradient id="brightDot" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="1"/>
              <stop offset="40%" stopColor="#F0D9A8" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#C9A26D" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Bright partial arc */}
          <path d="M 100 2 A 98 98 0 0 1 198 100" fill="none" stroke="url(#arcMain)" strokeWidth="0.8" strokeLinecap="round"/>
          {/* Bright hotspot dot at the start of arc */}
          <circle cx="100" cy="2" r="1.5" fill="url(#brightDot)" />
        </svg>

        {/* Floating particles - subtle */}
        <div className="absolute" style={{ top: '10%', left: '45%', transform: 'translateX(-50%)' }}>
          <div className="w-1 h-1 rounded-full animate-ping" style={{ background: '#fff', opacity: 0.4, boxShadow: '0 0 8px 2px rgba(255,255,255,0.6)', animationDuration: '4s' }} />
        </div>
      </div>
    </div>
  );
};

// ── About Section ───────────────────────────────────────────────────────
const About = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statsRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Creative curtain reveal for the whole section
      gsap.fromTo(containerRef.current,
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: true
          }
        }
      );
      // Label line animation
      gsap.fromTo(labelRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
      );
      // Left column stagger
      gsap.fromTo(leftRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.4, stagger: 0.12, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
      );
      // Right column stagger
      gsap.fromTo(rightRef.current.children,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.4,
          scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } }
      );
      // Stats counter animation
      const statNumbers = statsRef.current?.querySelectorAll('.stat-number');
      if (statNumbers) {
        gsap.fromTo(statNumbers,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: statsRef.current, start: 'top 85%' } }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: 'DESIGN',
      desc: 'Crafting clean, modern and intuitive designs that connect and inspire.',
      Icon: IconPen,
    },
    {
      title: 'DEVELOP',
      desc: 'Building fast, responsive and scalable web experiences with clean code.',
      Icon: IconCode,
    },
    {
      title: 'FOCUS',
      desc: 'Focused on delivering real value through every project I work on.',
      Icon: IconTarget,
    },
  ];

  const stats = [
    { value: '3+', label: 'YEARS OF\nEXPERIENCE' },
    { value: '25+', label: 'PROJECTS\nCOMPLETED' },
    { value: '15+', label: 'HAPPY\nCLIENTS' },
    { value: '100%', label: 'DEDICATED TO\nQUALITY' },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full overflow-hidden"
      style={{
        background: '#000000', // Solid black base
        minHeight: '100vh',
        padding: '8rem 0 6rem',
      }}
    >
      {/* ── Background: subtle vignette + reduced noise ── */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(3,3,3,0.9) 100%)', zIndex: 2 }} />
      <div className="bg-noise pointer-events-none absolute inset-0" style={{ opacity: 0.15, zIndex: 3 }} />

      {/* ── Cinematic left-side light slash - much fainter ── */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(201,162,109,0.05) 30%, transparent 100%)', zIndex: 4 }} />

      {/* ── The cinematic golden arc (right side) ── */}
      <CinematicArc />

      {/* ── Main content grid: 60/40 ratio ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16 about-content-wrapper" style={{ zIndex: 10 }}>

        {/* ════ LEFT COLUMN (60%) ════ */}
        <div className="lg:col-span-6 flex flex-col justify-start">

          {/* Section label */}
          <div ref={labelRef} className="flex items-center gap-5 mb-16" style={{ opacity: 0 }}>
            <span
              className="uppercase tracking-[0.35em] text-white/50"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 400 }}
            >
              ABOUT ME
            </span>
            {/* Animated line + dot */}
            <div className="relative flex-1 max-w-[140px] h-px" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.08), rgba(201,162,109,0.4))' }}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full"
                style={{ background: '#C9A26D', boxShadow: '0 0 8px 2px rgba(201,162,109,0.6)' }} />
            </div>
          </div>

          {/* Left body */}
          <div ref={leftRef} className="flex flex-col gap-0 w-full lg:max-w-[90%]">

            {/* ── Main heading — Reduced size by 10%, improved spacing ── */}
            <h2
              className="text-[#f5f5f5] mb-0 leading-[1.12]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(38px, 4.8vw, 72px)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
              }}
            >
              I design with<br />
              purpose and
            </h2>

            {/* Cursive line — No longer overlapping */}
            <div
              className="text-[#C9A26D] leading-[1.0]"
              style={{
                fontFamily: "'Allura', cursive",
                fontSize: 'clamp(44px, 5.5vw, 76px)',
                marginTop: '0.1em',
                marginLeft: '0.1em',
                letterSpacing: '0.02em',
                textShadow: '0 4px 20px rgba(201,162,109,0.15)'
              }}
            >
              build with passion.
            </div>

            {/* Paragraphs - increased contrast, better available width */}
            <div
              className="mt-8 space-y-6 text-white/70"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.8 }}
            >
              <p>
                I'm a digital designer and developer who loves turning ideas into clean, functional and impactful digital experiences.
              </p>
              <p>
                With a strong foundation in both design and code, I create solutions that are not just visually appealing, but also user-centric and performance driven.
              </p>
            </div>

            {/* ── Stats row - moved higher, subtle shadow/glow ── */}
            <div
              ref={statsRef}
              className="mt-12 rounded-xl grid grid-cols-4 relative overflow-hidden"
              style={{
                border: '1px solid rgba(201,162,109,0.1)',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
              }}
            >
              {/* Inner highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: 'linear-gradient(to right, transparent, rgba(201,162,109,0.2), transparent)' }} />

              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-7 px-3 relative">
                  {i > 0 && (
                    <div className="absolute left-0 top-[25%] h-[50%] w-[1px]"
                      style={{ background: 'rgba(255,255,255,0.06)' }} />
                  )}
                  <span
                    className="stat-number text-[#C9A26D] block mb-2.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 2.8vw, 36px)', lineHeight: 1, fontWeight: 400 }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-center text-white/40 uppercase tracking-[0.18em] block"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '8px', lineHeight: 1.7, whiteSpace: 'pre-line' }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}

              {/* Bottom highlight */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px]"
                style={{ background: 'linear-gradient(to right, transparent, rgba(201,162,109,0.1), transparent)' }} />
            </div>
          </div>
        </div>

        {/* ════ RIGHT COLUMN (40%) ════ */}
        <div className="lg:col-span-4 flex flex-col justify-center pt-16 lg:pt-24 lg:pl-4">

          <div ref={rightRef} className="flex flex-col">

            {features.map((item, i) => (
              <div key={i} className="group relative">
                {/* Separator - thinner and subtler */}
                {i > 0 && (
                  <div className="w-full h-[1px]"
                    style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.04), rgba(201,162,109,0.05), transparent)' }} />
                )}
                
                {/* Reduced spacing between cards: py-6 instead of py-9 */}
                <div
                  className="flex items-center gap-6 py-6 transition-transform duration-500 hover:-translate-x-1"
                  style={{ cursor: 'default' }}
                >
                  {/* Icon ring - smaller size (52px) */}
                  <div
                    className="flex-shrink-0 w-[52px] h-[52px] rounded-full flex items-center justify-center transition-all duration-500"
                    style={{
                      border: '1px solid rgba(255,255,255,0.06)',
                      color: 'rgba(201,162,109,0.8)',
                      background: 'transparent',
                    }}
                  >
                    <item.Icon />
                  </div>

                  {/* Text - increased contrast */}
                  <div>
                    <h3
                      className="tracking-[0.25em] text-white/90 mb-1.5 uppercase"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 400 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-white/60 leading-[1.6] max-w-[260px]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 300 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Final separator */}
            <div className="w-full h-[1px]" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.04), rgba(201,162,109,0.05), transparent)' }} />

            {/* Quote - aligned consistently */}
            <div
              className="mt-10 flex gap-4 items-start max-w-[280px]"
              style={{ cursor: 'default' }}
            >
              <svg className="flex-shrink-0 mt-1 opacity-70"
                style={{ color: '#C9A26D' }} width="16" height="14" viewBox="0 0 24 20" fill="currentColor">
                <path d="M14 0v8h-4v12h10V8h-4V0H14zm-10 0v8H0v12h10V8H6V0H4z"/>
              </svg>
              <p
                className="text-white/50 leading-[1.7] italic"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 300 }}
              >
                I believe in combining creativity with logic to build meaningful and future-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
