import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { CORE_SERVICES } from '../../data/services';
import { SITE } from '../../data/site';
import { formatPhoneHref } from '../../lib/utils';
import { FacebookIcon } from '../ui/FacebookIcon';
import { RidgeDivider } from '../ui/RidgeDivider';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const hasPhone = SITE.phone.trim().length > 0;

  return (
    <footer className="relative bg-[#091429] text-white overflow-hidden">
      {/* Top Ridgeline transition */}
      <div className="bg-[#F26A1B]">
        <RidgeDivider fillColor="#091429" accentLine={false} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pb-12 topo-texture-dark">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#14284B] ring-2 ring-[#F26A1B] p-1.5 flex items-center justify-center overflow-hidden shadow-md shrink-0">
                <img
                  src="/images/logo.png"
                  alt={SITE.businessName}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[#FF8A3D] transition-colors">
                  {SITE.businessName}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF8A3D] mt-0.5">
                  {SITE.tagline}
                </div>
              </div>
            </Link>

            <p className="text-sm text-[#D9DEE5]/85 leading-relaxed max-w-sm">
              Dedicated residential and commercial gutter cleaning, repair, hidden hanger upgrades, and end cap resealing across {SITE.serviceArea}.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm border border-white/20 bg-[#0F1F3D] text-xs font-medium text-white hover:border-[#F26A1B] hover:text-[#FF8A3D] transition-colors"
              >
                <FacebookIcon size={15} className="text-[#F26A1B]" />
                <span>Message on Facebook</span>
                <ArrowUpRight size={13} />
              </a>

              {hasPhone && (
                <a
                  href={formatPhoneHref(SITE.phone)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm border border-white/20 bg-[#0F1F3D] text-xs font-medium text-white hover:border-[#F26A1B] hover:text-[#FF8A3D] transition-colors"
                >
                  <Phone size={15} className="text-[#F26A1B]" />
                  <span>{SITE.phone}</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-[#FF8A3D] mb-4">
              Pages
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D9DEE5]">
              {SITE.navLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-[#F26A1B] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-[#FF8A3D] mb-4">
              Core Gutter Services
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D9DEE5]">
              {CORE_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-[#F26A1B] transition-colors inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-[#FF8A3D]">
              Service Region
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-[#D9DEE5]">
              <MapPin size={17} className="text-[#F26A1B] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{SITE.serviceArea}</p>
                <p className="text-xs text-[#D9DEE5]/70 mt-1">
                  Residential &amp; commercial properties. Free estimates with cleanup included.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F26A1B] hover:text-[#FF8A3D] transition-colors"
            >
              <span>Request a Free Quote</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Outlined Wordmark with Ridgeline */}
        <div className="py-8 overflow-hidden select-none" aria-hidden="true">
          <svg
            viewBox="0 0 1200 130"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              points="0,38 180,14 340,34 600,4 860,34 1020,16 1200,36"
              stroke="#F26A1B"
              strokeOpacity="0.45"
              strokeWidth="2"
            />
            <text
              x="600"
              y="112"
              textAnchor="middle"
              fill="none"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="1.5"
              fontFamily="'Bricolage Grotesque', sans-serif"
              fontWeight="800"
              fontSize="94"
              letterSpacing="12"
            >
              PEAKLINE
            </text>
          </svg>
        </div>

        {/* Copyright Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#D9DEE5]/65">
          <p>
            &copy; {year} {SITE.businessName}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            {SITE.serviceAreaShort} · Residential &amp; Commercial
          </p>
        </div>
      </div>
    </footer>
  );
};
