import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SITE } from '../../data/site';
import { prefersReducedMotion } from '../../lib/utils';

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    if (prefersReducedMotion()) return false;
    return !sessionStorage.getItem('peakline_intro_shown');
  });

  useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem('peakline_intro_shown', '1');
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 950);
    const failsafe = window.setTimeout(() => {
      setVisible(false);
    }, 1350);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(failsafe);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#091429] px-6 pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <div className="bg-white rounded-sm p-3 shadow-2xl">
              <img
                src="/images/logo.png"
                alt={SITE.businessName}
                className="h-14 w-auto object-contain"
              />
            </div>
            <div className="w-40 h-0.5 bg-white/15 overflow-hidden rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full origin-left bg-[#F26A1B]"
              />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D9DEE5]/80">
              {SITE.tagline}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
