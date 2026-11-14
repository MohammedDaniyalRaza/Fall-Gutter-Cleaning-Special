import React, { useEffect, useState } from 'react';
import { Expand, X } from 'lucide-react';
import { IMAGE_SLOTS } from '../../data/images';
import { SITE } from '../../data/site';
import { FallSpecialIllustration } from '../illustrations/FallSpecialIllustration';
import { Button } from '../ui/Button';
import { FacebookIcon } from '../ui/FacebookIcon';

const FALLING_LEAVES = [
  { left: '6%', delay: '0s', duration: '9s', color: '#F26A1B' },
  { left: '22%', delay: '2.2s', duration: '11s', color: '#D97706' },
  { left: '48%', delay: '1.1s', duration: '10s', color: '#DC2626' },
  { left: '74%', delay: '3.4s', duration: '12s', color: '#EA580C' },
  { left: '91%', delay: '0.7s', duration: '9.5s', color: '#F59E0B' },
];

export const FallSpecialSection: React.FC = () => {
  const [flyerExists, setFlyerExists] = useState(false);
  const [flyerOpen, setFlyerOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (!cancelled && img.naturalWidth > 0) {
        setFlyerExists(true);
      }
    };
    img.onerror = () => {
      if (!cancelled) setFlyerExists(false);
    };
    img.src = IMAGE_SLOTS.promoFlyer.local;
    return () => {
      cancelled = true;
    };
  }, []);

  if (!SITE.promo.active) return null;

  return (
    <section
      aria-label={SITE.promo.title}
      className="relative bg-[#F6F4F0] py-14 sm:py-20 overflow-hidden topo-texture-light"
    >
      {/* Lightweight Falling SVG Leaves (respects prefers-reduced-motion via CSS) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {FALLING_LEAVES.map((leaf, i) => (
          <svg
            key={i}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute -top-8 animate-fall-leaf opacity-75"
            style={{
              left: leaf.left,
              animationDelay: leaf.delay,
              animationDuration: leaf.duration,
            }}
          >
            <path
              d="M12 2C14 6 19 8 20 13C17 14 15 16 14 20C11 19 9 17 6 16C7 12 6 8 12 2Z"
              fill={leaf.color}
            />
            <path d="M12 4L11 21" stroke="#091429" strokeOpacity="0.3" strokeWidth="1.2" />
          </svg>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-sm border-2 border-[#0F1F3D] bg-white shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Flyer Typography & Brush Banners */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center gap-6 bg-[#F6F4F0] relative">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#0F1F3D]/70 font-semibold">
                  {SITE.serviceAreaShort} · Seasonal Offer
                </span>
              </div>

              {/* Dark Brush-Stroke Headline Banner flanked by autumn leaves */}
              <div className="relative inline-block max-w-md">
                <div className="relative -rotate-1 bg-[#091429] px-5 sm:px-7 py-4 sm:py-5 shadow-lg border-b-4 border-[#F26A1B]">
                  <div className="font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-extrabold leading-[1.0] tracking-tight text-white uppercase">
                    {SITE.promo.headlineTop}
                  </div>
                  <div className="font-display text-[clamp(1.65rem,3.3vw,2.55rem)] font-extrabold leading-[1.05] tracking-tight text-[#F59E0B] uppercase mt-1">
                    {SITE.promo.headlineBottom}
                  </div>
                </div>
                {/* Decorative autumn leaf accents flanking banner */}
                <svg
                  aria-hidden="true"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="absolute -left-3 -top-3 -rotate-12 text-[#DC2626]"
                >
                  <path
                    d="M12 2C14 6 19 8 20 13C17 14 15 16 14 20C11 19 9 17 6 16C7 12 6 8 12 2Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  aria-hidden="true"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="absolute -right-2 -bottom-3 rotate-45 text-[#F26A1B]"
                >
                  <path
                    d="M12 2C14 6 19 8 20 13C17 14 15 16 14 20C11 19 9 17 6 16C7 12 6 8 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Orange Brush-Stroke Price Block + Note Banner */}
              <div className="space-y-2.5 max-w-sm">
                <div className="-rotate-1 bg-[#F26A1B] px-6 py-3.5 shadow-md inline-block w-full">
                  <div className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-extrabold text-white tracking-tight leading-none">
                    {SITE.promo.priceLabel}
                  </div>
                </div>
                <div className="bg-[#0F1F3D] px-4 py-2 text-white font-display text-sm sm:text-base font-semibold tracking-tight inline-block">
                  {SITE.promo.note}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B7686] leading-relaxed max-w-lg">
                Hand-cleared troughs, flushed downspouts, and spotless yard cleanup before winter freeze-up. Larger or multi-story homes? Request a fast free estimate.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  <FacebookIcon size={17} />
                  Message us to book
                </Button>
                <Button to="/contact" variant="navy" size="lg">
                  Get a Free Quote
                </Button>
              </div>
            </div>

            {/* Right Flyer Scene (Local /images/flyer.jpg if present, or SVG illustration) */}
            <div className="lg:col-span-6 relative bg-[#14284B] min-h-[280px] lg:min-h-full overflow-hidden">
              {flyerExists ? (
                <button
                  type="button"
                  onClick={() => setFlyerOpen(true)}
                  aria-label="View full Fall Gutter Cleaning Special flyer"
                  className="group relative w-full h-full cursor-pointer block"
                >
                  <img
                    src={IMAGE_SLOTS.promoFlyer.local}
                    alt={IMAGE_SLOTS.promoFlyer.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute top-4 right-4 bg-[#091429]/85 text-white px-3 py-1.5 rounded-sm font-mono text-[11px] uppercase tracking-[0.14em] inline-flex items-center gap-1.5">
                    <Expand size={13} />
                    View Flyer
                  </span>
                </button>
              ) : (
                <FallSpecialIllustration className="w-full h-full object-cover" />
              )}
            </div>
          </div>

          {/* Solid Navy Footer Bar matching the Flyer Footer */}
          <div className="bg-[#091429] text-white px-5 sm:px-8 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* Peakline orange mountain-roofline mark */}
              <svg width="26" height="16" viewBox="0 0 26 16" fill="none" aria-hidden="true">
                <path d="M1 14L11 3L16 8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 3L25 14" stroke="#F26A1B" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="font-display font-extrabold tracking-wide text-sm sm:text-base uppercase">
                PEAKLINE HOME SERVICES
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block w-px h-5 bg-white/40" aria-hidden="true" />
              <span className="w-2 h-2 rounded-full bg-[#F26A1B] shrink-0" aria-hidden="true" />
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-sm sm:text-base text-white hover:text-[#FF8A3D] transition-colors"
              >
                {SITE.promo.cta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Flyer Lightbox if /images/flyer.jpg exists */}
      {flyerOpen && flyerExists && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={SITE.promo.title}
          onClick={() => setFlyerOpen(false)}
          className="fixed inset-0 z-[95] bg-[#091429]/95 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#0F1F3D] border border-white/20 rounded-sm overflow-hidden shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setFlyerOpen(false)}
              aria-label="Close flyer preview"
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-sm bg-[#091429]/90 border border-white/25 text-white flex items-center justify-center hover:border-[#F26A1B] cursor-pointer"
            >
              <X size={20} />
            </button>
            <img
              src={IMAGE_SLOTS.promoFlyer.local}
              alt={IMAGE_SLOTS.promoFlyer.alt}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
