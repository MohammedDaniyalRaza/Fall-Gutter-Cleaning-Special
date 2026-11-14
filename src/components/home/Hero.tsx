import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { SITE } from '../../data/site';
import { gsap } from '../../lib/gsap';
import { formatPhoneHref, prefersReducedMotion } from '../../lib/utils';
import { Button } from '../ui/Button';
import { FacebookIcon } from '../ui/FacebookIcon';
import { RidgeDivider } from '../ui/RidgeDivider';
import { SmartImage } from '../ui/SmartImage';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const hasPhone = SITE.phone.trim().length > 0;

  useEffect(() => {
    const el = heroRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-stagger]',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        }
      );

      gsap.fromTo(
        '[data-hero-underline]',
        { strokeDashoffset: 340 },
        {
          strokeDashoffset: 0,
          duration: 0.9,
          delay: 0.35,
          ease: 'power2.out',
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-[#F6F4F0] text-[#0F1F3D] pt-24 sm:pt-28 overflow-hidden topo-texture-light"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div data-hero-stagger className="flex flex-wrap items-center gap-3">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                <path
                  d="M1 11L9 2L17 11"
                  stroke="#F26A1B"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#0F1F3D]/75 font-medium">
                WESTERN MA &amp; CT · RESIDENTIAL &amp; COMMERCIAL
              </span>
            </div>

            <h1
              data-hero-stagger
              className="font-display text-[clamp(2.5rem,5.2vw,4.35rem)] leading-[1.02] tracking-tight text-[#0F1F3D]"
            >
              <span className="font-light block sm:inline">Service at a </span>
              <span className="relative inline-block font-extrabold">
                higher standard.
                <svg
                  viewBox="0 0 340 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full h-3.5 pointer-events-none"
                >
                  <path
                    data-hero-underline
                    d="M3 12 C 85 3, 210 3, 337 10"
                    stroke="#F26A1B"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeDasharray="340"
                    strokeDashoffset="0"
                  />
                </svg>
              </span>
            </h1>

            <p
              data-hero-stagger
              className="text-base sm:text-lg lg:text-xl text-[#6B7686] leading-relaxed max-w-xl pt-2"
            >
              Thorough gutter cleaning, downspout clearing, structural repairs, hidden hanger upgrades, and leak-free end cap resealing across {SITE.serviceArea}.
            </p>

            <div data-hero-stagger className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button to="/contact" variant="primary" size="lg">
                Get a Free Quote
                <ArrowRight size={17} />
              </Button>

              {hasPhone ? (
                <Button href={formatPhoneHref(SITE.phone)} variant="navy" size="lg">
                  <Phone size={17} />
                  Call {SITE.phone}
                </Button>
              ) : (
                <Button
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  <FacebookIcon size={17} className="text-[#F26A1B]" />
                  Message on Facebook
                </Button>
              )}
            </div>

            {/* Clean unboxed metadata bar */}
            <div
              data-hero-stagger
              className="pt-5 border-t border-[#D9DEE5] flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-[#6B7686]"
            >
              <span>4 Core Gutter Services</span>
              <span aria-hidden="true" className="text-[#F26A1B]">
                ·
              </span>
              <span>Downspouts Flush-Tested</span>
              <span aria-hidden="true" className="text-[#F26A1B]">
                ·
              </span>
              <span>Free Estimates</span>
            </div>
          </div>

          {/* Right Column: Peak-Clipped Tall Photo with Offset Orange Frame */}
          <div data-hero-stagger className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none pt-4 pb-6 px-2 sm:px-4">
              {/* Offset Orange Peak Outline behind frame */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 pointer-events-none"
              >
                <div className="w-full h-full bg-[#F26A1B] clip-peak-frame opacity-90" />
              </div>

              {/* Main Peak-Shaped Sharp Photo Frame */}
              <div className="relative z-10 aspect-[4/5] w-full clip-peak-frame bg-[#0F1F3D] shadow-2xl border-b-4 border-[#0F1F3D]">
                <SmartImage
                  slot="heroMain"
                  priority
                  objectPosition="82% 52%"
                  className="w-full h-full"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#091429]/80 via-transparent to-transparent"
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF8A3D]">
                      Peakline Field Work
                    </div>
                    <div className="font-display text-base sm:text-lg font-bold leading-snug">
                      Clean troughs &amp; clear flow
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Info Chips anchored outside overflow danger */}
              <div className="relative z-20 -mt-5 mx-3 sm:mx-6 grid grid-cols-2 gap-3">
                <div className="bg-white border border-[#D9DEE5] px-3.5 py-2.5 rounded-sm shadow-md flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F26A1B] shrink-0" />
                  <span className="text-xs font-semibold text-[#0F1F3D] whitespace-nowrap">
                    Free Estimates
                  </span>
                </div>
                <div className="bg-[#0F1F3D] border border-[#1E3A68] px-3.5 py-2.5 rounded-sm shadow-md flex items-center gap-2.5">
                  <Sparkles size={16} className="text-[#F26A1B] shrink-0" />
                  <span className="text-xs font-semibold text-white whitespace-nowrap">
                    Cleanup Included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jagged Ridgeline sweeping into the orange ticker */}
      <RidgeDivider fillColor="#F26A1B" accentLine={false} />
    </section>
  );
};
