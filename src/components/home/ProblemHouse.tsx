import React, { useRef, useState } from 'react';
import { AlertTriangle, Droplets, Home, Snowflake } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface ProblemHotspot {
  id: string;
  code: string;
  title: string;
  riskArea: string;
  description: string;
  solution: string;
  x: number;
  y: number;
  icon: React.ReactNode;
}

const HOTSPOTS: ProblemHotspot[] = [
  {
    id: 'fascia',
    code: '01',
    title: 'Fascia & Soffit Rot',
    riskArea: 'Roofline Trim & Eaves',
    description:
      'When wet leaves pack a trough, rainwater backs up behind the gutter lip and soaks exposed wood fascia and soffits—softening trim and loosening spike fasteners.',
    solution: 'Hand cleaning + hidden screw-in hangers tight under drip edge flashing.',
    x: 105,
    y: 138,
    icon: <AlertTriangle size={18} />,
  },
  {
    id: 'ice-dam',
    code: '02',
    title: 'Winter Ice Dams',
    riskArea: 'Roof Edge & Valleys',
    description:
      'In Western MA and Connecticut winters, trapped slush freezes solid inside clogged troughs. Meltwater backs up beneath shingles and strains brackets with hundreds of pounds of ice.',
    solution: 'Late-fall clearing and pitch inspection before temperatures lock below freezing.',
    x: 345,
    y: 120,
    icon: <Snowflake size={18} />,
  },
  {
    id: 'overflow',
    code: '03',
    title: 'Siding Overflow & Leaks',
    riskArea: 'End Caps, Miters & Seams',
    description:
      'Blocked outlets and brittle end-cap sealant let water pour down exterior siding, streaking paint and soaking window trim and porch stairs.',
    solution: 'Downspout clearing plus bare-metal scraping and elastomeric resealing.',
    x: 382,
    y: 196,
    icon: <Droplets size={18} />,
  },
  {
    id: 'foundation',
    code: '04',
    title: 'Foundation Pooling',
    riskArea: 'Basement & Walkways',
    description:
      'A single 100% clogged downspout drops roof runoff right beside your foundation wall, eroding mulch beds and inviting basement dampness.',
    solution: 'Full downspout disassembly/clearing and high-flow outlet flush testing.',
    x: 92,
    y: 274,
    icon: <Home size={18} />,
  },
];

export const ProblemHouse: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>(HOTSPOTS[0].id);

  useReveal(sectionRef);

  const activeSpot = HOTSPOTS.find((h) => h.id === activeId) || HOTSPOTS[0];

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            elevation="ELEV. 01 · WHY GUTTERS FAIL"
            titleLight="What happens when water"
            titleBold="cannot leave the roof."
            subtitle="Explore the four points on a New England home where clogged gutters and worn seals quietly cause expensive exterior damage."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Interactive House Cross-Section SVG */}
          <div data-reveal className="lg:col-span-7">
            <div className="relative rounded-sm border border-[#D9DEE5] bg-[#0F1F3D] p-4 sm:p-6 shadow-md overflow-hidden topo-texture-dark">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF8A3D]">
                  Interactive Cross-Section
                </span>
                <span className="font-mono text-[11px] text-[#D9DEE5]/70">
                  Select a point (01–04)
                </span>
              </div>

              <div className="relative w-full aspect-[480/320]">
                <svg
                  viewBox="0 0 480 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  role="img"
                  aria-label="House cross section showing gutter failure points"
                >
                  {/* Ground line */}
                  <rect x="0" y="275" width="480" height="45" fill="#091429" />
                  <line x1="0" y1="275" x2="480" y2="275" stroke="#2C4A7C" strokeWidth="2" />

                  {/* Foundation & Basement cross section */}
                  <rect x="115" y="255" width="250" height="45" fill="#14284B" stroke="#6B7686" strokeWidth="1.5" />
                  {/* Water pooling near foundation when active */}
                  <ellipse
                    cx="92"
                    cy="279"
                    rx={activeId === 'foundation' ? 38 : 22}
                    ry="7"
                    fill="#3B82C4"
                    fillOpacity={activeId === 'foundation' ? 0.85 : 0.4}
                  />

                  {/* Main house walls */}
                  <rect x="120" y="148" width="240" height="127" fill="#1A325C" stroke="#D9DEE5" strokeWidth="2" />
                  {/* Windows */}
                  <rect x="160" y="182" width="44" height="50" fill="#091429" stroke="#D9DEE5" strokeWidth="1.5" />
                  <line x1="182" y1="182" x2="182" y2="232" stroke="#D9DEE5" strokeWidth="1.2" />
                  <line x1="160" y1="207" x2="204" y2="207" stroke="#D9DEE5" strokeWidth="1.2" />

                  <rect x="276" y="182" width="44" height="50" fill="#091429" stroke="#D9DEE5" strokeWidth="1.5" />
                  <line x1="298" y1="182" x2="298" y2="232" stroke="#D9DEE5" strokeWidth="1.2" />
                  <line x1="276" y1="207" x2="320" y2="207" stroke="#D9DEE5" strokeWidth="1.2" />

                  {/* Roof */}
                  <polygon points="82,148 240,48 398,148" fill="#14284B" stroke="#F6F4F0" strokeWidth="2.5" />
                  <line x1="240" y1="48" x2="398" y2="148" stroke="#F26A1B" strokeWidth="5" />
                  {/* Attic window */}
                  <g transform="translate(226 92)">
                    <rect x="0" y="0" width="12" height="12" fill="#F26A1B" />
                    <rect x="16" y="0" width="12" height="12" fill="#F26A1B" />
                    <rect x="0" y="16" width="12" height="12" fill="#F26A1B" />
                    <rect x="16" y="16" width="12" height="12" fill="#F26A1B" />
                  </g>

                  {/* Gutters & Downspouts */}
                  <rect x="74" y="144" width="332" height="9" rx="1" fill="#FFFFFF" />
                  <rect x="96" y="153" width="10" height="118" fill="#D9DEE5" />
                  <rect x="374" y="153" width="10" height="118" fill="#D9DEE5" />

                  {/* Ice dam graphic */}
                  <path
                    d="M322 140 L372 140 L370 156 L364 148 L358 162 L352 148 L345 160 L338 148 L328 154 Z"
                    fill="#93C5FD"
                    fillOpacity={activeId === 'ice-dam' ? 0.95 : 0.45}
                  />

                  {/* Overflow water drips on right */}
                  <path
                    d="M385 153 V225"
                    stroke="#3B82C4"
                    strokeWidth={activeId === 'overflow' ? 4 : 2}
                    strokeDasharray="6 5"
                  />

                  {/* Clickable SVG Hotspot Pins */}
                  {HOTSPOTS.map((spot) => {
                    const isActive = spot.id === activeId;
                    return (
                      <g
                        key={spot.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`Inspect ${spot.title}`}
                        onClick={() => setActiveId(spot.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveId(spot.id);
                          }
                        }}
                        className="cursor-pointer focus:outline-none"
                      >
                        {isActive && (
                          <circle
                            cx={spot.x}
                            cy={spot.y}
                            r="22"
                            fill="#F26A1B"
                            fillOpacity="0.24"
                          />
                        )}
                        <circle
                          cx={spot.x}
                          cy={spot.y}
                          r="15"
                          fill={isActive ? '#F26A1B' : '#091429'}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                        <text
                          x={spot.x}
                          y={spot.y + 4}
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontFamily="'JetBrains Mono', monospace"
                          fontSize="10"
                          fontWeight="600"
                        >
                          {spot.code}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Hotspot Tabs & Active Explanation */}
          <div data-reveal className="lg:col-span-5 space-y-5">
            <div className="grid grid-cols-2 gap-2.5">
              {HOTSPOTS.map((spot) => {
                const active = spot.id === activeId;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveId(spot.id)}
                    className={cn(
                      'flex items-center gap-2.5 px-3.5 py-3 rounded-sm border text-left transition-all cursor-pointer',
                      active
                        ? 'bg-[#0F1F3D] border-[#0F1F3D] text-white shadow-sm'
                        : 'bg-[#F6F4F0] border-[#D9DEE5] text-[#0F1F3D] hover:border-[#F26A1B]'
                    )}
                  >
                    <span
                      className={cn(
                        'font-mono text-xs font-semibold shrink-0',
                        active ? 'text-[#F26A1B]' : 'text-[#6B7686]'
                      )}
                    >
                      {spot.code}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold truncate">
                      {spot.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-sm border border-[#D9DEE5] bg-[#F6F4F0] p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-[#F26A1B]">
                  {activeSpot.icon}
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#6B7686]">
                    {activeSpot.riskArea}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-[#0F1F3D]">
                  POINT {activeSpot.code}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#0F1F3D]">
                {activeSpot.title}
              </h3>

              <p className="text-sm sm:text-base text-[#6B7686] leading-relaxed">
                {activeSpot.description}
              </p>

              <div className="pt-4 border-t border-[#D9DEE5]">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#0F1F3D] font-semibold mb-1">
                  Peakline Prevention
                </div>
                <p className="text-sm text-[#0F1F3D] font-medium">
                  {activeSpot.solution}
                </p>
              </div>
            </div>

            <div>
              <Button to="/services" variant="outline" size="md">
                See How We Fix Each Issue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
