import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { prefersReducedMotion } from '../lib/utils';

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion()) return;

    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice && window.innerWidth < 1024) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    const handleScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on('scroll', handleScroll);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.off('scroll', handleScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
