import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion, useInView } from 'framer-motion';
const bgImage = 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1788349724/bg3_jg39yx.png';

gsap.registerPlugin(ScrollTrigger);

// ── Certificate Data ──
const certificatesData = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Feb 2024',
    description: 'Demonstrates foundational understanding of AWS Cloud, services, security, architecture and pricing.',
    tags: ['AWS', 'Cloud'],
    accent: '#FF9900',
    previewBg: '#FFFAF0',
    imageUrl: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1770272796/ElectroSpehere-Certificate_snhsp2.png', // Link to certificate image if available
    logo: <svg viewBox="0 0 60 24" width="40" height="16" fill="none"><text x="0" y="18" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="18" fill="#FF9900">aws</text></svg>,
    badge: (
      <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,#232F3E 60%,#FF9900 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', border: '2px solid rgba(255,255,255,0.3)' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" /></svg>
        <span style={{ fontSize: 5, color: '#FF9900', fontWeight: 700, marginTop: 1 }}>CERTIFIED</span>
      </div>
    )
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: 'Oct 2024',
    description: 'Explores the fundamentals of AI, machine learning and responsible AI for real-world applications.',
    tags: ['AI', 'Prompting'],
    accent: '#4285F4',
    previewBg: '#F8FAFF',
    imageUrl: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1775906108/odoo_x_indus_certificate_fhrthk.jpg', // Link to certificate image if available
    logo: <svg viewBox="0 0 74 20" width="50" height="16"><text x="0" y="15" fontFamily="Arial,sans-serif" fontSize="16" fill="#4285F4">G</text><text x="11" y="15" fontFamily="Arial,sans-serif" fontSize="16" fill="#EA4335">o</text><text x="21" y="15" fontFamily="Arial,sans-serif" fontSize="16" fill="#FBBC05">o</text><text x="31" y="15" fontFamily="Arial,sans-serif" fontSize="16" fill="#4285F4">g</text><text x="41" y="15" fontFamily="Arial,sans-serif" fontSize="16" fill="#34A853">l</text><text x="49" y="15" fontFamily="Arial,sans-serif" fontSize="16" fill="#EA4335">e</text></svg>,
    badge: (
      <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'conic-gradient(#4285F4 0deg 90deg,#EA4335 90deg 180deg,#FBBC05 180deg 270deg,#34A853 270deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.4)' }}>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="14" height="14" viewBox="0 0 24 24"><text x="1" y="14" fontSize="12" fontFamily="sans-serif" fill="#4285F4" fontWeight="bold">AI</text></svg></div>
      </div>
    )
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta',
    date: 'Sep 2024',
    description: 'Gained expertise in building responsive, accessible and performant web applications using React.',
    tags: ['React', 'JavaScript'],
    accent: '#0081FB',
    previewBg: '#F0F7FF',
    imageUrl: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1775907289/Screenshot_2026-04-11_170410_aw9bvq.png', // Link to certificate image if available
    logo: <svg viewBox="0 0 60 20" width="42" height="16"><text x="0" y="15" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="16" fill="#0081FB">Meta</text></svg>,
    badge: (
      <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,#0081FB 0%,#00C2E0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.35)', flexDirection: 'column' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="12" r="5" stroke="white" strokeWidth="1.5" /><ellipse cx="16" cy="12" rx="3" ry="5" stroke="white" strokeWidth="1.5" /></svg>
      </div>
    )
  },
  {
    title: 'Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'Aug 2024',
    description: 'Completed advanced JavaScript concepts and solved real-world algorithmic challenges.',
    tags: ['Algorithms', 'JS'],
    accent: '#F5A623',
    previewBg: '#FAFAF5',
    imageUrl: 'https://res.cloudinary.com/dphtrtpjx/image/upload/v1776623945/Screenshot_2026-04-20-00-06-57-376_com.google.android.apps.docs_lrvkin.png', // Link to certificate image if available
    logo: <svg viewBox="0 0 120 18" width="80" height="14"><text x="0" y="13" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="11" fill="#0A0A23">freeCodeCamp</text></svg>,
    badge: (
      <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,#1B1B32 0%,#3b3b4f 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.2)', flexDirection: 'column' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="#F5A623" strokeWidth="1.5" /><path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M7.05 7.05L5.636 5.636M18.364 18.364l-1.414-1.414M7.05 16.95l-1.414 1.414M18.364 5.636l-1.414 1.414" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" /></svg>
      </div>
    )
  }
];

// ── Ribbon Badge ──
const RibbonBadge = ({ number }) => (
  <div style={{ position: 'absolute', top: -10, right: 24, zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', filter: 'drop-shadow(0 8px 8px rgba(0,0,0,0.15))' }}>
    <div style={{ position: 'relative', width: 32, height: 44, borderRadius: '3px 3px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#F0D5A3 0%,#C9A26D 50%,#9C743D 100%)', boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.5),inset -1px -1px 3px rgba(0,0,0,0.3)' }}>
      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, fontWeight: 600, color: 'white', textShadow: '0 2px 2px rgba(0,0,0,0.4)' }}>0{number}</span>
      <div style={{ position: 'absolute', bottom: -10, left: 0, width: '100%', height: 10, display: 'flex' }}>
        <div style={{ width: '50%', height: '100%', background: 'linear-gradient(to right,#9C743D,#B68D53)', clipPath: 'polygon(0 0,100% 0,0 100%)' }} />
        <div style={{ width: '50%', height: '100%', background: 'linear-gradient(to left,#9C743D,#B68D53)', clipPath: 'polygon(0 0,100% 0,100% 100%)' }} />
      </div>
    </div>
  </div>
);

// ── Liquid Glass Certificate Card ──
const CertCard = ({ cert, index, inView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10, scale: 1.015, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      animate={inView ? {
        opacity: 1, y: [0, -4, 0], scale: 1,
        transition: {
          opacity: { duration: 0.7, delay: index * 0.12 },
          y: { duration: 5 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 },
          scale: { duration: 0.7, delay: index * 0.12 }
        }
      } : { opacity: 0, y: 50, scale: 0.95 }}
      style={{
        position: 'relative', height: '100%', borderRadius: 22,
        overflow: 'hidden', cursor: 'pointer',
        boxShadow: hovered
          ? '0 32px 64px rgba(0,0,0,0.12), 0 12px 24px rgba(0,0,0,0.07)'
          : '0 8px 32px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* ── Apple Frosted Glass Layers ── */}
      {/* Layer 0: Frosted blur */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backdropFilter: 'blur(28px) saturate(200%) brightness(1.06)', WebkitBackdropFilter: 'blur(28px) saturate(200%) brightness(1.06)', borderRadius: 22 }} />
      {/* Layer 1: White tint */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(255,255,255,0.60)', borderRadius: 22 }} />
      {/* Layer 2: Top-left light reflection */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(135deg,rgba(255,255,255,0.55) 0%,transparent 40%)', borderRadius: 22 }} />
      {/* Layer 3: Specular border */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 3, borderRadius: 22, border: '1px solid rgba(255,255,255,0.7)', boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,1),inset 1px 0 0 rgba(255,255,255,0.6),inset -1px 0 0 rgba(255,255,255,0.3),inset 0 -1px 0 rgba(255,255,255,0.25)' }} />

      <RibbonBadge number={index + 1} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', padding: '14px 14px 16px' }}>

        {/* Certificate Preview Area */}
        <div style={{ width: '100%', height: 118, borderRadius: 14, flexShrink: 0, marginBottom: 14, position: 'relative', overflow: 'hidden', background: cert.previewBg, boxShadow: '0 2px 10px rgba(0,0,0,0.05),inset 0 1px 0 rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.7)' }}>
          {cert.imageUrl ? (
            <img
              src={cert.imageUrl}
              alt={cert.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                transform: hovered ? 'scale(1.05)' : 'scale(1)'
              }}
            />
          ) : (
            <>
              {/* Subtle lined paper lines */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(0deg,#000 0px,#000 1px,transparent 1px,transparent 18px)', backgroundSize: '100% 18px', backgroundPosition: '0 28px' }} />
              {/* Logo */}
              <div style={{ position: 'absolute', top: 10, left: 12, zIndex: 3 }}>{cert.logo}</div>
              {/* "Certificate of Completion" */}
              <div style={{ position: 'absolute', top: 10, left: cert.issuer === 'freeCodeCamp' ? 100 : 60, zIndex: 3 }}>
                <div style={{ fontSize: 6, fontFamily: 'Inter,sans-serif', color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.4 }}>Certificate of<br />Completion</div>
              </div>
              {/* Name & Title */}
              <div style={{ position: 'absolute', top: 34, left: 12, zIndex: 3 }}>
                <div style={{ fontSize: 8, fontFamily: 'Inter,sans-serif', color: '#444', fontWeight: 500, marginBottom: 2 }}>Rakshit Ranjan</div>
                <div style={{ fontSize: 9, fontFamily: 'Inter,sans-serif', color: '#111', fontWeight: 700, maxWidth: 130, lineHeight: 1.3 }}>{cert.title}</div>
              </div>
              {/* Date */}
              <div style={{ position: 'absolute', bottom: 8, left: 12, zIndex: 3 }}>
                <div style={{ fontSize: 7, fontFamily: 'Inter,sans-serif', color: '#aaa', letterSpacing: '0.05em' }}>{cert.date}</div>
              </div>
              {/* Badge */}
              <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 3 }}>{cert.badge}</div>
            </>
          )}
          {/* Accent right strip */}
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 5, background: cert.accent, opacity: 0.65, zIndex: 2 }} />
        </div>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingLeft: 2, paddingRight: 2 }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#A6804B', marginBottom: 3, fontFamily: 'Inter,sans-serif' }}>{cert.issuer}</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#1A1A1A', lineHeight: 1.15, fontFamily: "'Cormorant Garamond',Georgia,serif", marginBottom: 6, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cert.title}</div>
          <div style={{ fontSize: 11, color: '#555', lineHeight: 1.55, fontFamily: 'Inter,sans-serif', flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 12 }}>{cert.description}</div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {cert.tags.map(t => (
                <span key={t} style={{ padding: '4px 9px', borderRadius: 100, fontSize: 9.5, fontWeight: 600, color: '#444', fontFamily: 'Inter,sans-serif', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,1),0 1px 3px rgba(0,0,0,0.04)' }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.85)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,1),0 2px 6px rgba(0,0,0,0.06)' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#A6804B" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ── Orbital Sphere (Light theme) ──
const OrbitalSphere = () => {
  const ringRef = useRef(null);
  useEffect(() => {
    gsap.to(ringRef.current, { rotate: 360, duration: 90, repeat: -1, ease: 'linear', transformOrigin: 'center center' });
  }, []);

  return (
    <div style={{ position: 'absolute', right: '2%', top: '3%', width: 150, height: 150, pointerEvents: 'none', zIndex: 30 }}>
      <div ref={ringRef} style={{ position: 'absolute', inset: 0 }}>
        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', opacity: 0.5 }}>
          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(201,162,109,0.45)" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(201,162,109,0.3)" strokeWidth="0.3" />
          <circle cx="10" cy="100" r="2.5" fill="#C9A26D" />
        </svg>
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 65, height: 65, borderRadius: '50%', background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgba(255,255,255,0.75)', boxShadow: '0 8px 20px rgba(0,0,0,0.08),inset 0 2px 4px rgba(255,255,255,1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 'bold', color: '#333' }}>RR.</span>
        </motion.div>
      </div>
    </div>
  );
};

// ── Main Certificates Section ──
const Certificates = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const leftRef = useRef(null);
  const timelineRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-10% 0px' });

  useEffect(() => {
    if (!inView) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Cinematic letterbox reveal for the entire section background container
    tl.fromTo(bgRef.current,
      { clipPath: 'inset(50% 0% 50% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power4.inOut' }
    );

    // 2. Background image scale-in from slightly zoomed-out
    tl.fromTo(bgRef.current.firstChild,
      { scale: 1.08, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.6 },
      '-=1.2'
    );

    // 3. Left text block slides up staggered
    const leftChildren = leftRef.current?.children;
    if (leftChildren) {
      tl.fromTo(Array.from(leftChildren),
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.1, duration: 0.9, ease: 'back.out(1.2)' },
        '-=1.0'
      );
    }

    // 4. Timeline line draws down
    tl.fromTo(timelineRef.current,
      { scaleY: 0 },
      { scaleY: 1, transformOrigin: 'top', duration: 1 },
      '-=0.6'
    );

  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="certificates"
      style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#F6F2EC' }}
    >
      {/* ── Background Image ── */}
      <div ref={bgRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{ width: '100%', height: '100%', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        {/* Subtle vignette to soften edges */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center,transparent 50%,rgba(246,242,236,0.15) 100%)' }} />
      </div>

      {/* Ambient top-right sunlight glow */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 500, height: 500, background: 'radial-gradient(circle at top right,rgba(255,255,255,0.7) 0%,transparent 65%)', pointerEvents: 'none', zIndex: 1 }} />

      {/* ── Main Layout ── */}
      <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: 1440, margin: '0 auto', padding: '0 56px', zIndex: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '100%', paddingTop: '9vh', paddingBottom: '6vh', gap: 20 }}>

          {/* ── Left Side ── */}
          <div ref={leftRef} style={{ width: '28%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14, flexShrink: 0 }}>

            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A6804B', fontFamily: 'Inter,sans-serif' }}>
              MY CREDENTIALS
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(34px,4vw,50px)', color: '#1A1A1A', lineHeight: 1.0, margin: 0 }}>
              Certificates<br />& Achievements
            </h2>

            <p style={{ fontFamily: "'Allura',cursive", fontSize: 'clamp(26px,3vw,34px)', color: '#B58D54', lineHeight: 1.0, margin: 0 }}>
              Milestones that fuel my journey.
            </p>

            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#555', lineHeight: 1.7, margin: 0 }}>
              A collection of certifications and achievements that represent my commitment to continuous learning, innovation and professional growth.
            </p>

            {/* View All Button */}
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(201,162,109,0.06)' }}
              whileTap={{ scale: 0.97 }}
              style={{ width: 'fit-content', padding: '10px 22px', borderRadius: 100, background: 'transparent', border: '1px solid rgba(201,162,109,0.45)', color: '#A6804B', fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Inter,sans-serif' }}>
              View All Credentials
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </motion.button>

            {/* Claymorphism Stat Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ width: '90%', borderRadius: 18, padding: '14px 16px', background: 'rgba(255,255,255,0.62)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '10px 10px 25px rgba(0,0,0,0.05),-10px -10px 25px rgba(255,255,255,0.9),inset 3px 3px 8px rgba(255,255,255,0.95),inset -3px -3px 8px rgba(0,0,0,0.03)' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 8px' }}>
                {[['15+', 'Certificates'], ['7+', 'Technologies'], ['3+', 'Achievements'], ['∞', 'Learning Mindset']].map(([n, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 'bold', color: '#111', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 8, color: '#666', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{ width: '90%', borderRadius: 18, padding: '12px 14px', background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.75)', boxShadow: '10px 10px 25px rgba(0,0,0,0.05),-10px -10px 25px rgba(255,255,255,0.9),inset 3px 3px 8px rgba(255,255,255,0.95),inset -3px -3px 8px rgba(0,0,0,0.03)' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ fontFamily: 'serif', fontSize: 28, lineHeight: 1, color: '#C9A26D', opacity: 0.8, marginTop: -4, flexShrink: 0 }}>"</span>
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: '#333', lineHeight: 1.45, margin: '0 0 7px', fontWeight: 600 }}>
                    The beautiful thing about learning is that no one can take it away from you.
                  </p>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 8, color: '#888', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700 }}>— B. B. King</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ── Center Timeline ── */}
          <div style={{ width: 40, height: '78%', position: 'relative', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
            <div ref={timelineRef} style={{ position: 'absolute', top: '5%', bottom: '5%', width: 1, background: 'linear-gradient(to bottom,rgba(201,162,109,0.2),rgba(201,162,109,0.7),rgba(201,162,109,0.2))' }} />
            <div style={{ position: 'absolute', top: '5%', bottom: '5%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {[1, 2, 3, 4].map((num, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.12, ease: 'back.out(2)' }}
                  style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'white', border: '1px solid #C9A26D', boxShadow: '0 0 8px rgba(201,162,109,0.5)' }} />
                  <div style={{ position: 'absolute', left: '50%', height: 1, width: 50, background: 'linear-gradient(to right,rgba(201,162,109,0.8),transparent)' }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right Side: 2×2 Card Grid ── */}
          <div style={{ width: '62%', height: '82%', display: 'flex', alignItems: 'center', zIndex: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, width: '100%', height: '100%' }}>
              {certificatesData.map((cert, i) => (
                <CertCard key={i} cert={cert} index={i} inView={inView} />
              ))}
            </div>
          </div>

        </div>
      </div>

      <OrbitalSphere />
    </section>
  );
};

export default Certificates;
