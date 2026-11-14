import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ImageSlotName } from '../../data/images';
import { SmartImage } from './SmartImage';
import { RidgeDivider } from './RidgeDivider';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  elevation: string;
  titleLight: string;
  titleBold: string;
  subtitle: string;
  imageSlot: ImageSlotName;
  breadcrumbs: BreadcrumbItem[];
  bottomFill?: string;
  objectPosition?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  elevation,
  titleLight,
  titleBold,
  subtitle,
  imageSlot,
  breadcrumbs,
  bottomFill = '#F6F4F0',
  objectPosition,
}) => {
  return (
    <section className="relative bg-[#0F1F3D] text-white overflow-hidden pt-28 sm:pt-32">
      {/* Sharp hero background photo with directional navy contrast scrim (never blurred) */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          slot={imageSlot}
          priority
          objectPosition={objectPosition}
          className="w-full h-full"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#091429]/95 via-[#0F1F3D]/85 to-[#0F1F3D]/60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 topo-texture-dark opacity-70"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-6">
        {/* Mono Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#D9DEE5]/80">
            {breadcrumbs.map((crumb, idx) => (
              <li key={crumb.label} className="inline-flex items-center gap-2">
                {idx > 0 && <ChevronRight size={13} className="text-[#F26A1B]" />}
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className="hover:text-[#F26A1B] transition-colors whitespace-nowrap"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
              <path d="M1 11L9 2L17 11" stroke="#F26A1B" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF8A3D]">
              {elevation}
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.25rem,4.8vw,3.9rem)] leading-[1.03] tracking-tight text-white">
            <span className="font-light">{titleLight} </span>
            <span className="font-extrabold">{titleBold}</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#D9DEE5] leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <RidgeDivider fillColor={bottomFill} accentLine />
      </div>
    </section>
  );
};
