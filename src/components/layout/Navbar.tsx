import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { SITE } from '../../data/site';
import { cn, formatPhoneHref } from '../../lib/utils';
import { AnnouncementBar } from '../promo/AnnouncementBar';
import { Button } from '../ui/Button';
import { FacebookIcon } from '../ui/FacebookIcon';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  promoVisible: boolean;
  onDismissPromo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  promoVisible,
  onDismissPromo,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isLightTop = pathname === '/' || pathname === '/not-found';
  const hasPhone = SITE.phone.trim().length > 0;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const useDarkText = scrolled || isLightTop;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar visible={promoVisible} onDismiss={onDismissPromo} />

        <header
          className={cn(
            'transition-all duration-300',
            scrolled
              ? 'bg-white/95 backdrop-blur-md shadow-sm border-b-2 border-[#F26A1B]'
              : 'bg-transparent border-b border-transparent'
          )}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 lg:gap-6">
            {/* Brand Zone: circular framed logo + single-line wordmark */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A1B] rounded-sm"
            >
              <div className="w-12 h-12 rounded-full bg-white border-2 border-[#0F1F3D] ring-2 ring-[#F26A1B] p-1 flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0">
                <img
                  src="/images/logo.png"
                  alt={SITE.businessName}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={cn(
                  'font-display font-bold text-base sm:text-lg tracking-tight whitespace-nowrap transition-colors',
                  useDarkText ? 'text-[#0F1F3D]' : 'text-white'
                )}
              >
                Peakline <span className="text-[#F26A1B]">Home Services</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-6"
            >
              {SITE.navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors',
                      useDarkText
                        ? isActive
                          ? 'text-[#F26A1B]'
                          : 'text-[#0F1F3D] hover:text-[#F26A1B]'
                        : isActive
                          ? 'text-[#FF8A3D]'
                          : 'text-white/90 hover:text-white'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#F26A1B] transition-transform duration-200 origin-left',
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        )}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action Zone */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Peakline Home Services on Facebook"
                className={cn(
                  'w-10 h-10 rounded-sm border flex items-center justify-center transition-colors shrink-0',
                  useDarkText
                    ? 'border-[#D9DEE5] text-[#0F1F3D] hover:border-[#F26A1B] hover:text-[#F26A1B]'
                    : 'border-white/25 text-white hover:border-[#F26A1B] hover:text-[#FF8A3D]'
                )}
              >
                <FacebookIcon size={17} />
              </a>

              {hasPhone && (
                <Button
                  href={formatPhoneHref(SITE.phone)}
                  variant={useDarkText ? 'outline' : 'outlineLight'}
                  size="sm"
                >
                  <Phone size={15} />
                  {SITE.phone}
                </Button>
              )}

              <Button to="/contact" variant="primary" size="sm">
                Get a Free Quote
              </Button>
            </div>

            {/* Mobile Hamburger Trigger ONLY (44x44px tap area) */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className={cn(
                'lg:hidden w-11 h-11 rounded-sm border flex items-center justify-center transition-colors shrink-0 cursor-pointer',
                useDarkText
                  ? 'border-[#0F1F3D]/20 bg-white/90 text-[#0F1F3D] hover:border-[#F26A1B]'
                  : 'border-white/30 bg-[#0F1F3D]/70 text-white hover:border-[#F26A1B]'
              )}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={closeMenu} />
    </>
  );
};
