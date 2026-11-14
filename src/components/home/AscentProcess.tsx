import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';
import { cn, prefersReducedMotion } from '../../lib/utils';
import { RidgeDivider } from '../ui/RidgeDivider';
import { SectionHeading } from '../ui/SectionHeading';

interface AscentStep {
  number: string;
  elevationLabel: string;
  title: string;
  description: string;
}

const ASCENT_STEPS: AscentStep[] = [
  {
    number: '01',
    elevationLabel: 'BASE CAMP',
    title: 'Request a Quote',
    description:
      'Send your town, property type, and what you are seeing along the roofline via our form or Facebook message.',
  },
  {
    number: '02',
    elevationLabel: 'TRAILHEAD',
    title: 'Free Estimate',
    description:
      'We provide a straightforward, no-obligation estimate tailored to your roofline height, linear runs, and needed fixes.',
  },
  {
    number: '03',
    elevationLabel: 'CLIMB',
    title: 'Clean & Inspect',
    description:
      'We hand-clear every trough and valley into buckets while checking fasteners, fascia tightness, pitch, and corner joints.',
  },
  {
    number: '04',
    elevationLabel: 'RIDGE',
    title: 'Repair or Upgrade',
    description:
      'With your approval, we swap loose spikes for hidden hangers, reset sagging runs, and reseal dripping end caps.',
  },
  {
    number: '05',
    elevationLabel: 'SUMMIT',
    title: 'Flush Test & Cleanup',
    description:
      'Every downspout is water-flushed for unobstructed flow, and all walkways, decks, and lawns are swept spotless.',
  },
];

export const AscentProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPolylineElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pathEl = pathRef.current;
    if (!section || !pathEl) return;

    const totalLen = pathEl.getTotalLength ? pathEl.getTotalLength() : 900;
    pathEl.style.strokeDasharray = `${totalLen}`;

    if (prefersReducedMotion()) {
      pathEl.style.strokeDashoffset = '0';
      setActiveStep(ASCENT_STEPS.length - 1);
      return;
    }

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      pathEl.style.strokeDashoffset = `${totalLen}`;

      gsap.to(pathEl, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(
              ASCENT_STEPS.length - 1,
              Math.floor(self.progress * ASCENT_STEPS.length)
            );
            setActiveStep(idx);
          },
        },
      });
    });

    mm.add('(max-width: 1023px)', () => {
      pathEl.style.strokeDashoffset = `${totalLen}`;
      gsap.to(pathEl, {
        strokeDashoffset: 0,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0F1F3D] text-white overflow-hidden topo-texture-dark"
    >
      <RidgeDivider fillColor="#0F1F3D" flip accentLine={false} className="bg-[#F6F4F0]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <SectionHeading
          elevation="ELEV. 03 · THE ASCENT"
          titleLight="Five disciplined steps to a"
          titleBold="clear, sound roofline."
          subtitle="From first quote to final downspout flush, every job follows a repeatable climb."
          dark
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Ridgeline SVG Graphic */}
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-white/15 bg-[#091429]/80 p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-[#D9DEE5]/70 mb-4">
                <span>Elevation Path</span>
                <span className="text-[#FF8A3D] tabular-nums">
                  {ASCENT_STEPS[activeStep]?.elevationLabel}
                </span>
              </div>

              <svg
                viewBox="0 0 420 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                aria-hidden="true"
              >
                {/* Faint background ridge silhouette */}
                <polygon
                  points="0,260 85,205 155,222 230,145 305,170 390,48 420,85 420,280 0,280"
                  fill="#14284B"
                />
                {/* Guide dashed ridge */}
                <polyline
                  points="20,248 95,195 165,212 240,136 315,160 390,48"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinejoin="round"
                />
                {/* Animated orange ascent line */}
                <polyline
                  ref={pathRef}
                  points="20,248 95,195 165,212 240,136 315,160 390,48"
                  stroke="#F26A1B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* 5 Summit Waypoint Dots */}
                {[
                  { x: 20, y: 248 },
                  { x: 95, y: 195 },
                  { x: 240, y: 136 },
                  { x: 315, y: 160 },
                  { x: 390, y: 48 },
                ].map((pt, idx) => {
                  const reached = idx <= activeStep;
                  const current = idx === activeStep;
                  return (
                    <g key={pt.x}>
                      {current && (
                        <circle cx={pt.x} cy={pt.y} r="13" fill="#F26A1B" fillOpacity="0.28" />
                      )}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={current ? 7 : 5}
                        fill={reached ? '#F26A1B' : '#0F1F3D'}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                      />
                    </g>
                  );
                })}
              </svg>

              <p className="mt-4 text-xs text-[#D9DEE5]/75 leading-relaxed">
                Select or scroll through each checkpoint to see how we inspect, clean, reinforce, and test your gutter system.
              </p>
            </div>
          </div>

          {/* 5 Step Cards */}
          <div className="lg:col-span-7 space-y-3">
            {ASCENT_STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    'w-full text-left rounded-sm border p-4 sm:p-5 transition-all duration-200 cursor-pointer flex items-start gap-4 sm:gap-5',
                    isActive
                      ? 'bg-[#14284B] border-[#F26A1B] shadow-lg'
                      : 'bg-[#091429]/50 border-white/10 hover:border-white/30'
                  )}
                >
                  <span
                    className={cn(
                      'font-mono text-sm font-bold px-2.5 py-1 rounded-sm shrink-0 tabular-nums transition-colors',
                      isActive ? 'bg-[#F26A1B] text-white' : 'bg-white/10 text-[#D9DEE5]'
                    )}
                  >
                    {step.number}
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF8A3D]">
                        {step.elevationLabel}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-[#D9DEE5]/85 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <RidgeDivider fillColor="#FFFFFF" accentLine />
    </section>
  );
};
