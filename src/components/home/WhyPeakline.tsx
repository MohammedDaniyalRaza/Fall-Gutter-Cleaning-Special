import React, { useRef } from 'react';
import { Check, Droplets, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import { SITE } from '../../data/site';
import { useReveal } from '../../hooks/useReveal';
import { RidgeDivider } from '../ui/RidgeDivider';
import { SectionHeading } from '../ui/SectionHeading';

export const WhyPeakline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0F1F3D] text-white overflow-hidden topo-texture-dark"
    >
      <RidgeDivider fillColor="#0F1F3D" flip accentLine={false} className="bg-[#F6F4F0]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div data-reveal>
          <SectionHeading
            elevation="ELEV. 06 · THE PEAKLINE DIFFERENCE"
            titleLight="Built around doing the"
            titleBold="small details right."
            subtitle="We do not rush rooflines or toss soggy leaves onto your shrubs. Every crew follows the same careful standard."
            dark
          />
        </div>

        {/* Asymmetric Bento Grid (varied spans, NOT equal clones) */}
        <div data-reveal className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5">
          {/* Card 1: Wide feature */}
          <div className="md:col-span-4 rounded-sm border border-white/15 bg-[#14284B] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <Sparkles size={22} className="text-[#F26A1B]" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#D9DEE5]/60">
                01 · Ground Cleanup
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Cleanup is always included—never an add-on.
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#D9DEE5] leading-relaxed max-w-2xl">
                We scoop gutter sludge straight into buckets rather than flinging it onto lawns, decks, or flower beds, then sweep and blow clear patios and driveways before leaving.
              </p>
            </div>
          </div>

          {/* Card 2: Compact */}
          <div className="md:col-span-2 rounded-sm border border-[#F26A1B]/50 bg-[#F26A1B] text-white p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <Droplets size={22} className="text-[#0F1F3D]" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#0F1F3D] font-semibold">
                02 · Flow Verified
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-[#0F1F3D]">
                Every downspout flush-tested.
              </h3>
              <p className="mt-2 text-sm text-[#0F1F3D]/90 leading-relaxed font-medium">
                Clearing the top trough means little if an elbow is packed solid. We test outflow at every drop.
              </p>
            </div>
          </div>

          {/* Card 3: Compact */}
          <div className="md:col-span-2 rounded-sm border border-white/15 bg-[#091429] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <ShieldCheck size={22} className="text-[#F26A1B]" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#D9DEE5]/60">
                03 · Care
              </span>
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Stabilized ladder standoffs.
              </h3>
              <p className="mt-2 text-sm text-[#D9DEE5]/85 leading-relaxed">
                Ladders never crush soft aluminum gutters or scrape exterior siding.
              </p>
            </div>
          </div>

          {/* Card 4: Medium */}
          <div className="md:col-span-2 rounded-sm border border-white/15 bg-[#14284B] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <Wrench size={22} className="text-[#F26A1B]" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#D9DEE5]/60">
                04 · Repairs
              </span>
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Fix small issues early.
              </h3>
              <p className="mt-2 text-sm text-[#D9DEE5]/85 leading-relaxed">
                From hidden hangers to bare-metal end cap resealing, we stop minor drips before fascia wood rots.
              </p>
            </div>
          </div>

          {/* Card 5: Medium */}
          <div className="md:col-span-2 rounded-sm border border-white/15 bg-[#14284B] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <Check size={22} className="text-[#F26A1B]" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#D9DEE5]/60">
                05 · Estimates
              </span>
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Honest, free quotes.
              </h3>
              <p className="mt-2 text-sm text-[#D9DEE5]/85 leading-relaxed">
                Clear scope and upfront pricing with zero surprise add-ons or high-pressure upsells.
              </p>
            </div>
          </div>
        </div>

        {/* Safe Counters Bar */}
        <div
          data-reveal
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-white/10"
        >
          {SITE.safeHighlights.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="font-display text-lg sm:text-xl font-bold text-white">
                {item.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF8A3D]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <RidgeDivider fillColor="#FFFFFF" accentLine />
    </section>
  );
};
