import React from 'react';
import { ArrowRight, CheckCircle2, Droplets, MapPin, Shield, Wrench } from 'lucide-react';
import { CTABand } from '../components/home/CTABand';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { RidgeDivider } from '../components/ui/RidgeDivider';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SmartImage } from '../components/ui/SmartImage';
import { SITE } from '../data/site';

const VALUES = [
  {
    code: '01',
    title: 'Thorough By Hand',
    description:
      'We scoop packed leaves, pine needles, and wet sludge directly into buckets—never flinging mess across your siding, decks, or flower beds.',
    icon: <Shield size={20} className="text-[#F26A1B]" />,
  },
  {
    code: '02',
    title: 'Downspouts Always Tested',
    description:
      'A clean trough cannot drain through a clogged elbow. Every downspout is checked and water-flushed so runoff moves clear of your foundation.',
    icon: <Droplets size={20} className="text-[#F26A1B]" />,
  },
  {
    code: '03',
    title: 'Fix What Needs Fixing',
    description:
      'If we spot backed-out spikes, sagging pitches, or leaking end caps while on the ladder, we explain it clearly and give you an honest repair option.',
    icon: <Wrench size={20} className="text-[#F26A1B]" />,
  },
  {
    code: '04',
    title: 'Spotless Cleanup Included',
    description:
      'Before we load the ladders back onto the truck, driveways, walkways, and patios are cleared so the only thing left behind is working drainage.',
    icon: <CheckCircle2 size={20} className="text-[#F26A1B]" />,
  },
];

const About: React.FC = () => {
  return (
    <PageTransition>
      <PageHero
        elevation="ELEV. 01 · ABOUT PEAKLINE"
        titleLight="Service at a"
        titleBold="higher standard."
        subtitle={`Honest, detail-driven exterior gutter care and property maintenance serving ${SITE.serviceArea}.`}
        imageSlot="aboutHero"
        objectPosition="50% 60%"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
      />

      {/* Brand Emblem & Story */}
      <section className="bg-[#F6F4F0] py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-6">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-white border-4 border-[#0F1F3D] ring-4 ring-[#F26A1B] p-6 flex items-center justify-center shadow-xl overflow-hidden">
              <img
                src="/images/logo.png"
                alt={SITE.businessName}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#6B7686] text-center lg:text-left">
              Peakline Home Services · {SITE.serviceAreaShort}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
              Our Approach
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1F3D]">
              Straightforward workmanship you do not have to chase down.
            </h2>
            <p className="text-base sm:text-lg text-[#6B7686] leading-relaxed">
              Gutters rarely get attention until rainwater is cascading over a porch roof or pooling beside a basement wall. Peakline Home Services was built around a simple goal: show up when we say we will, treat every roofline carefully, and leave every property cleaner than we found it.
            </p>
            <p className="text-base text-[#6B7686] leading-relaxed">
              Across Western Massachusetts and Connecticut, heavy oak leaves, pine needles, spring seed pods, and harsh freeze-thaw winters put real stress on aluminum gutter systems. Whether a home needs a thorough seasonal cleaning, hidden screw-in hangers to replace loose spikes, or bare-metal end cap resealing, we handle the details cleanly from start to finish.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary" size="lg">
                Get a Free Estimate
                <ArrowRight size={17} />
              </Button>
              <Button to="/projects" variant="outline" size="lg">
                See Field Photos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="relative bg-[#0F1F3D] text-white overflow-hidden topo-texture-dark">
        <RidgeDivider fillColor="#0F1F3D" flip accentLine={false} className="bg-[#F6F4F0]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <SectionHeading
            elevation="ELEV. 02 · OUR STANDARD"
            titleLight="How we work on"
            titleBold="every property."
            subtitle="Consistent field habits that protect your fascia boards, siding, landscaping, and foundation."
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map((val) => (
              <div
                key={val.code}
                className="rounded-sm border border-white/15 bg-[#14284B] p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center justify-between">
                  {val.icon}
                  <span className="font-mono text-xs text-[#D9DEE5]/60 tabular-nums">
                    STANDARD {val.code}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{val.title}</h3>
                <p className="text-sm sm:text-base text-[#D9DEE5] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <RidgeDivider fillColor="#FFFFFF" accentLine />
      </section>

      {/* Field Safety & Service Area Summary */}
      <section className="bg-white py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[16/11] w-full rounded-sm overflow-hidden border border-[#D9DEE5] shadow-md">
              <SmartImage slot="cloggedOverflow" className="w-full h-full" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5">
              <MapPin size={18} className="text-[#F26A1B]" />
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
                Local Territory
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F1F3D]">
              Serving {SITE.serviceArea}.
            </h2>
            <p className="text-base text-[#6B7686] leading-relaxed">
              We serve single-family homes, multi-family properties, and commercial buildings throughout Western Massachusetts and Connecticut. In addition to gutter care, we also offer interior vinyl flooring installation and dependable property maintenance.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#D9DEE5]">
              {SITE.safeHighlights.map((item) => (
                <div key={item.label}>
                  <div className="font-display font-bold text-lg text-[#0F1F3D]">
                    {item.value}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B7686]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </PageTransition>
  );
};

export default About;
