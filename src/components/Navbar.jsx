import React, { useState, useEffect } from 'react';

// Inline SVG to avoid lucide-react version issues
const IconArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'HACKATHONS', href: '#hackathons' },
    { label: 'TECH ARSENAL', href: '#tech' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out"
      style={{
        background: scrolled ? 'rgba(11,13,18,0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.03)' : 'none',
        padding: scrolled ? '16px 0' : '28px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            color: '#C9A26D', 
            fontSize: '1.75rem', 
            fontWeight: 400, 
            letterSpacing: '0.08em',
            lineHeight: '1'
          }} 
          className="hover:text-white transition-colors duration-500 cursor-pointer flex items-center"
        >
          RR.
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="relative group transition-colors duration-300 hover:text-white py-2">
              {label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] transition-all duration-500 ease-out group-hover:w-full" style={{ background: 'linear-gradient(90deg, transparent, #C9A26D, transparent)' }} />
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          className="hidden md:flex items-center gap-3 rounded-full transition-all duration-500 group cursor-pointer"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            border: '1px solid #C9A26D',
            padding: '10px 28px',
            color: '#C9A26D',
            fontWeight: 400,
            background: 'rgba(201,162,109,0.03)',
            backdropFilter: 'blur(5px)',
            transition: 'all 0.5s ease-out'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#C9A26D';
            e.currentTarget.style.color = '#0B0D12';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(201,162,109,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(201,162,109,0.03)';
            e.currentTarget.style.color = '#C9A26D';
            e.currentTarget.style.transform = 'translateY(0px) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span>LET'S CONNECT</span>
          <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 inline-block text-[#C9A26D] group-hover:text-[#0B0D12]">
            <IconArrowUpRight />
          </span>
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex flex-col gap-2 cursor-pointer group">
          <span className="w-7 h-[1px] bg-white/70 block transition-all duration-300 group-hover:bg-[#C9A26D]" />
          <span className="w-7 h-[1px] bg-white/70 block transition-all duration-300 group-hover:bg-[#C9A26D]" />
          <span className="w-4 h-[1px] bg-white/70 block ml-auto transition-all duration-300 group-hover:bg-[#C9A26D] group-hover:w-7" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
