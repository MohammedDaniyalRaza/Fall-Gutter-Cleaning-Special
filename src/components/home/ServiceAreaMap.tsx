import React, { useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { SITE } from '../../data/site';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export const ServiceAreaMap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeRegion, setActiveRegion] = useState<'all' | 'ma' | 'ct'>('all');

  useReveal(sectionRef);

  const displayedTowns =
    activeRegion === 'ma'
      ? SITE.serviceTowns.massachusetts
      : activeRegion === 'ct'
        ? SITE.serviceTowns.connecticut
        : [
            ...SITE.serviceTowns.massachusetts.slice(0, 6),
            ...SITE.serviceTowns.connecticut.slice(0, 6),
          ];

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            elevation="ELEV. 07 · SERVICE TERRITORY"
            titleLight="Serving"
            titleBold="Western MA & Connecticut."
            subtitle={`Proudly serving ${SITE.serviceArea} for residential homes and commercial properties.`}
          />
        </div>

        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Stylized SVG Regional Map */}
          <div className="lg:col-span-6">
            <div className="relative rounded-sm border border-[#D9DEE5] bg-[#0F1F3D] p-5 sm:p-7 overflow-hidden topo-texture-dark shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF8A3D]">
                  Regional Corridor Map
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#D9DEE5]/70">
                  MA / CT Border
                </span>
              </div>

              <svg
                viewBox="0 0 460 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                role="img"
                aria-label="Stylized map of Western Massachusetts and Connecticut service territory"
              >
                {/* Western MA stylized outline */}
                <path
                  d="M55 42 L268 42 L254 150 L58 150 Z"
                  fill={activeRegion === 'ct' ? '#14284B' : '#1E3A68'}
                  stroke={activeRegion === 'ma' ? '#F26A1B' : '#D9DEE5'}
                  strokeOpacity={activeRegion === 'ma' ? 1 : 0.45}
                  strokeWidth="2"
                  className="transition-colors duration-300 cursor-pointer"
                  onClick={() => setActiveRegion(activeRegion === 'ma' ? 'all' : 'ma')}
                />
                {/* Connecticut stylized outline */}
                <path
                  d="M62 156 L365 156 L352 262 L212 274 L68 278 Z"
                  fill={activeRegion === 'ma' ? '#14284B' : '#1E3A68'}
                  stroke={activeRegion === 'ct' ? '#F26A1B' : '#D9DEE5'}
                  strokeOpacity={activeRegion === 'ct' ? 1 : 0.45}
                  strokeWidth="2"
                  className="transition-colors duration-300 cursor-pointer"
                  onClick={() => setActiveRegion(activeRegion === 'ct' ? 'all' : 'ct')}
                />

                {/* Connecticut River stylized curve */}
                <path
                  d="M175 30 Q 192 92 178 150 T 188 278"
                  stroke="#3B82C4"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                />

                {/* State border highlight */}
                <line x1="48" y1="153" x2="375" y2="153" stroke="#F26A1B" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Region labels */}
                <text
                  x="96"
                  y="76"
                  fill="#FFFFFF"
                  fontFamily="'Bricolage Grotesque', sans-serif"
                  fontWeight="700"
                  fontSize="16"
                >
                  WESTERN MA
                </text>
                <text
                  x="220"
                  y="206"
                  fill="#FFFFFF"
                  fontFamily="'Bricolage Grotesque', sans-serif"
                  fontWeight="700"
                  fontSize="16"
                >
                  CONNECTICUT
                </text>

                {/* Marker points */}
                {[
                  { x: 162, y: 92, label: 'Amherst / Northampton' },
                  { x: 174, y: 132, label: 'Springfield / Westfield' },
                  { x: 180, y: 174, label: 'Suffield / Enfield' },
                  { x: 158, y: 215, label: 'Granby / Simsbury' },
                ].map((pt) => (
                  <g key={pt.label}>
                    <circle cx={pt.x} cy={pt.y} r="6" fill="#F26A1B" stroke="#FFFFFF" strokeWidth="1.8" />
                  </g>
                ))}
              </svg>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#D9DEE5]/80">
                <span>Click either state above to filter communities</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#3B82C4]">
                  CT River Valley Corridor
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Community Selector */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Communities' },
                { key: 'ma', label: 'Western Massachusetts' },
                { key: 'ct', label: 'Connecticut' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveRegion(tab.key as 'all' | 'ma' | 'ct')}
                  className={cn(
                    'px-4 py-2 text-xs font-semibold rounded-sm border transition-colors cursor-pointer whitespace-nowrap',
                    activeRegion === tab.key
                      ? 'bg-[#0F1F3D] border-[#0F1F3D] text-white'
                      : 'bg-[#F6F4F0] border-[#D9DEE5] text-[#0F1F3D] hover:border-[#F26A1B]'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {displayedTowns.map((town) => (
                <div
                  key={town}
                  className="flex items-center gap-2 rounded-sm border border-[#D9DEE5] bg-[#F6F4F0] px-3 py-2.5 text-sm font-medium text-[#0F1F3D]"
                >
                  <MapPin size={14} className="text-[#F26A1B] shrink-0" />
                  <span className="truncate">{town}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#6B7686] leading-relaxed">
              Do not see your exact town listed? We regularly travel throughout{' '}
              <strong className="text-[#0F1F3D]">{SITE.serviceArea}</strong>. Reach out with your town and we will confirm availability right away.
            </p>

            <Button to="/contact" variant="primary">
              Check Availability in Your Town
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
