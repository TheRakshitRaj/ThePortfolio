import React, { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1100; // 1.1s for progress line fill

    let frameId;
    const tick = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(pct));
      if (elapsed < duration) {
        frameId = requestAnimationFrame(tick);
      } else {
        // Hold for 100ms at 100% before starting fade out
        setTimeout(() => {
          setIsFadingOut(true);
          if (onComplete) onComplete();
        }, 100);
      }
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  useEffect(() => {
    if (isFadingOut) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // 300ms fade-out transition
      return () => clearTimeout(timer);
    }
  }, [isFadingOut]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#000000] text-white select-none transition-opacity duration-300 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transform: 'translateZ(0)' }}
    >
      <style>{`
        @keyframes drawStroke {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fadeInSolid {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleContainer {
          from {
            transform: scale(0.97) translateZ(0);
          }
          to {
            transform: scale(1.0) translateZ(0);
          }
        }
        @keyframes fadeInText {
          from {
            opacity: 0;
            transform: translateY(6px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }
        .logo-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawStroke 0.75s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .logo-path-ring {
          animation: drawStroke 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          animation-delay: 0.05s;
        }
        .logo-path-stem-1 { animation-delay: 0s; }
        .logo-path-stem-2 { animation-delay: 0.1s; }
        .logo-path-bowl-1 { animation-delay: 0.15s; }
        .logo-path-bowl-2 { animation-delay: 0.25s; }
        .logo-path-leg-1 { animation-delay: 0.35s; }
        .logo-path-leg-2 { animation-delay: 0.45s; }
        .logo-path-tick {
          animation: drawStroke 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          animation-delay: 0.4s;
        }
        
        .solid-monogram {
          opacity: 0;
          animation: fadeInSolid 0.45s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          animation-delay: 0.65s;
        }
        .center-container {
          animation: scaleContainer 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .fade-in-text {
          opacity: 0;
          animation: fadeInText 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.5s;
        }
      `}</style>

      {/* Fullscreen Grid & CAD Blueprint Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.04 }}>
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="1.2" fill="#FFFFFF" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          
          {/* Large Concentric Blueprint Circles */}
          <circle cx="50%" cy="50%" r="180" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="320" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.5" />
          
          {/* Coordinate Axes */}
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="1 5" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="1 5" />

          {/* Full-screen Diagonal guides */}
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="8 8" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* Blueprint corner crop markings */}
      <div className="absolute top-10 left-10 w-8 h-8 pointer-events-none opacity-20 border-t border-l border-white">
        <span className="absolute top-1 left-2 font-mono text-[8px] text-white tracking-widest uppercase">SEC. 01</span>
      </div>
      <div className="absolute top-10 right-10 w-8 h-8 pointer-events-none opacity-20 border-t border-r border-white text-right">
        <span className="absolute top-1 right-2 font-mono text-[8px] text-white tracking-widest uppercase">SYS. RR</span>
      </div>
      <div className="absolute bottom-10 left-10 w-8 h-8 pointer-events-none opacity-20 border-b border-l border-white">
        <span className="absolute bottom-1 left-2 font-mono text-[8px] text-white tracking-widest uppercase">SCALE 1:1</span>
      </div>
      <div className="absolute bottom-10 right-10 w-8 h-8 pointer-events-none opacity-20 border-b border-r border-white text-right">
        <span className="absolute bottom-1 right-2 font-mono text-[8px] text-white tracking-widest uppercase">45.000°</span>
      </div>

      {/* Content Container */}
      <div className="center-container flex flex-col items-center justify-center relative z-10">
        
        {/* Geometric Monogram SVG */}
        <svg
          viewBox="0 0 200 200"
          className="w-48 h-48 select-none pointer-events-none mb-6"
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Construction Blueprint guides (within logo) */}
          <g stroke="#FFFFFF" strokeWidth="0.5" opacity="0.05">
            {/* Horizontal guidelines */}
            <line x1="10" y1="55" x2="190" y2="55" strokeDasharray="2 2" />
            <line x1="10" y1="100" x2="190" y2="100" strokeDasharray="3 3" />
            <line x1="10" y1="145" x2="190" y2="145" strokeDasharray="2 2" />
            
            {/* Vertical guidelines */}
            <line x1="70" y1="20" x2="70" y2="180" strokeDasharray="2 2" />
            <line x1="115" y1="20" x2="115" y2="180" strokeDasharray="2 2" />
            
            {/* Circular geometry guides for bowls */}
            <circle cx="90" cy="77.5" r="22.5" fill="none" strokeDasharray="2 2" />
            <circle cx="135" cy="77.5" r="22.5" fill="none" strokeDasharray="2 2" />
          </g>

          {/* Thin outline drawing group */}
          <g stroke="#FFFFFF" strokeWidth="1.0" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Compass Ring & Ticks */}
            <circle cx="100" cy="100" r="85" className="logo-path logo-path-ring" pathLength="1" />
            <path d="M 100,10 L 100,15" className="logo-path logo-path-tick" pathLength="1" />
            <path d="M 100,185 L 100,190" className="logo-path logo-path-tick" pathLength="1" />
            <path d="M 15,100 L 20,100" className="logo-path logo-path-tick" pathLength="1" />
            <path d="M 180,100 L 185,100" className="logo-path logo-path-tick" pathLength="1" />

            {/* R1 */}
            <path d="M 70,55 L 70,145" className="logo-path logo-path-stem-1" pathLength="1" />
            <path d="M 70,55 H 90 C 105,55 105,100 90,100 H 70" className="logo-path logo-path-bowl-1" pathLength="1" />
            <path d="M 85,100 C 92,100 98,120 105,145" className="logo-path logo-path-leg-1" pathLength="1" />

            {/* R2 */}
            <path d="M 115,55 L 115,145" className="logo-path logo-path-stem-2" pathLength="1" />
            <path d="M 115,55 H 135 C 150,55 150,100 135,100 H 115" className="logo-path logo-path-bowl-2" pathLength="1" />
            <path d="M 130,100 C 137,100 143,120 150,145" className="logo-path logo-path-leg-2" pathLength="1" />
          </g>

          {/* Solid fill monogram (thickened strokes) */}
          <g stroke="#FFFFFF" strokeWidth="11" fill="none" strokeLinecap="round" strokeLinejoin="round" className="solid-monogram">
            {/* R1 */}
            <path d="M 70,55 L 70,145" />
            <path d="M 70,55 H 90 C 105,55 105,100 90,100 H 70" />
            <path d="M 85,100 C 92,100 98,120 105,145" />

            {/* R2 */}
            <path d="M 115,55 L 115,145" />
            <path d="M 115,55 H 135 C 150,55 150,100 135,100 H 115" />
            <path d="M 130,100 C 137,100 143,120 150,145" />
          </g>
        </svg>

        {/* Staggered Text & Progress Elements */}
        <div className="fade-in-text flex flex-col items-center justify-center">
          {/* Text Details */}
          <h2 
            className="text-white text-[10px] font-light tracking-[0.8em] uppercase select-none mr-[-0.8em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            RAKSHIT RAJ
          </h2>

          {/* Progress Line */}
          <div className="w-64 h-[1px] bg-white/10 overflow-hidden relative mt-10">
            <div
              className="absolute inset-0 bg-white origin-left"
              style={{
                transform: `scaleX(${progress / 100}) translateZ(0)`,
                transition: 'transform 0.08s linear',
              }}
            />
          </div>

          {/* Loading percentage text */}
          <span 
            className="text-[9px] text-white/40 font-mono tracking-[0.2em] mt-3 select-none"
          >
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
