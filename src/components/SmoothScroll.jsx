import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children, isLoading }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      if (lenisRef.current) {
        lenisRef.current.stop();
      }
      return;
    }

    const lenis = new Lenis({ lerp: 0.05, duration: 1.5, smoothTouch: true });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [isLoading]);

  return <>{children}</>;
}
