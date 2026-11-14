import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../../lib/gsap';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.body.style.overflow = '';
    const id = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
};
