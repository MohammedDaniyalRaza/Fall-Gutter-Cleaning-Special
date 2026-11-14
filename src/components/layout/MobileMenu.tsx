import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Phone, X } from 'lucide-react';
import { SITE } from '../../data/site';
import { formatPhoneHref } from '../../lib/utils';
import { Button } from '../ui/Button';
import { FacebookIcon } from '../ui/FacebookIcon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { pathname } = useLocation();
  const hasPhone = SITE.phone.trim().length > 0;

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Body scroll lock & Escape key handling
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow || '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[80] h-[100dvh] w-full bg-[#0F1F3D] text-white flex flex-col justify-between overflow-y-auto topo-texture-dark lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-20 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1.5 w-11 h-11 flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  src="/images/logo.png"
                  alt={SITE.businessName}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-base tracking-tight text-white">
                {SITE.businessName}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-11 h-11 rounded-sm border border-white/25 bg-[#14284B] text-white flex items-center justify-center hover:border-[#F26A1B] hover:text-[#F26A1B] transition-colors cursor-pointer"
            >
              <X size={22} />
            </button>
          </div>

          {/* Primary links */}
          <nav aria-label="Mobile links" className="px-6 py-8 flex-1 flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF8A3D] mb-4">
              Navigation
            </span>
            <ul className="space-y-2">
              {SITE.navLinks.map((link, index) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex items-center justify-between py-3 border-b border-white/10 font-display text-3xl font-bold tracking-tight transition-colors ${
                        isActive ? 'text-[#F26A1B]' : 'text-white hover:text-[#FF8A3D]'
                      }`
                    }
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-[#D9DEE5]/50 font-normal">
                        0{index + 1}
                      </span>
                      {link.label}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-[#F26A1B] opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom actions */}
          <div className="px-6 pb-8 pt-4 border-t border-white/10 bg-[#091429]/70 space-y-3 shrink-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D9DEE5]/70">
              {SITE.serviceArea}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button to="/contact" onClick={onClose} variant="primary" size="lg" className="w-full">
                Get a Free Quote
              </Button>
              {hasPhone ? (
                <Button
                  href={formatPhoneHref(SITE.phone)}
                  variant="outlineLight"
                  size="lg"
                  className="w-full"
                >
                  <Phone size={17} />
                  Call {SITE.phone}
                </Button>
              ) : (
                <Button
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlineLight"
                  size="lg"
                  className="w-full"
                >
                  <FacebookIcon size={17} />
                  Message on Facebook
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
