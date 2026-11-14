import { useEffect, RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion } from '../lib/utils';

interface UseRevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  selector?: string;
}

export function useReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: UseRevealOptions = {}
) {
  const { y = 24, duration = 0.75, stagger = 0.08, selector = '[data-reveal]' } = options;

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll(selector);
      if (targets.length === 0) return;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: 'top 84%',
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [containerRef, y, duration, stagger, selector]);
}
