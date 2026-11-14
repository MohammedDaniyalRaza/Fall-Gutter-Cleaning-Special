import React, { useRef } from 'react';
import { ArrowRight, Check, Droplets, Layers, Shield, Wrench } from 'lucide-react';
import { CTABand } from '../components/home/CTABand';
import { PageTransition } from '../components/layout/PageTransition';
import { FallSpecialCompact } from '../components/promo/FallSpecialCompact';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { RidgeDivider } from '../components/ui/RidgeDivider';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SmartImage } from '../components/ui/SmartImage';
import { ALSO_AVAILABLE_SERVICES, CORE_SERVICES } from '../data/services';
import { useReveal } from '../hooks/useReveal';
import { cn } from '../lib/utils';

const ICONS = {
  droplets: Droplets,
  wrench: Wrench,
  shield: Shield,
  layers: Layers,
};

const Services: React.FC = () => {
  const listRef = useRef<HTMLElement>(null);
  const secondaryRef = useRef<HTMLElement>(null);

  useReveal(listRef);
  useReveal(secondaryRef);

  return (
    <PageTransition>
      <PageHero
        elevation="ELEV. 01 · SERVICES OVERVIEW"
        titleLight="Complete roofline &"
        titleBold="gutter care."
        subtitle="Four core gutter services built for New England weather—plus dependable interior vinyl flooring and property maintenance."
        imageSlot="servicesHero"
        objectPosition="78% 45%"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Core Services Editorial Showcase */}
      <section ref={listRef} className="bg-[#F6F4F0] py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          <FallSpecialCompact variant="dark" />
          {CORE_SERVICES.map((service, idx) => {
            const Icon = ICONS[service.iconName];
            const imageLeft = idx % 2 === 1;

            return (
              <article
                key={service.id}
                data-reveal
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#D9DEE5] pb-14 sm:pb-20 last:border-b-0 last:pb-0"
              >
                <div className={cn('lg:col-span-6', imageLeft ? 'lg:order-1' : 'lg:order-2')}>
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="hidden sm:block absolute -inset-2 translate-x-3 translate-y-3 border-2 border-[#F26A1B]/50 rounded-sm pointer-events-none"
                    />
                    <div className="relative aspect-[16/11] w-full rounded-sm overflow-hidden border border-[#D9DEE5] shadow-md">
                      <SmartImage slot={service.imageSlot} className="w-full h-full" />
                    </div>
                  </div>
                </div>

                <div className={cn('lg:col-span-6 space-y-5', imageLeft ? 'lg:order-2' : 'lg:order-1')}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-sm bg-[#0F1F3D] text-white tabular-nums">
                      {service.number}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
                      {service.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Icon size={22} className="text-[#F26A1B] shrink-0" />
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1F3D]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-base sm:text-lg text-[#6B7686] leading-relaxed">
                    {service.summary}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {service.whatWeDo.slice(0, 3).map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-[#0F1F3D]">
                        <Check size={16} className="text-[#F26A1B] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Button to={`/services/${service.slug}`} variant="primary">
                      View Service Details
                      <ArrowRight size={16} />
                    </Button>
                    <Button to="/contact" variant="outline">
                      Request Free Quote
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Also Available Section */}
      <section
        id="also-available"
        ref={secondaryRef}
        className="relative bg-[#0F1F3D] text-white overflow-hidden topo-texture-dark"
      >
        <RidgeDivider fillColor="#0F1F3D" flip accentLine={false} className="bg-[#F6F4F0]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div data-reveal>
            <SectionHeading
              elevation="ELEV. 02 · ALSO AVAILABLE"
              titleLight="Additional home &"
              titleBold="property care."
              subtitle="Beyond exterior roofline protection, Peakline handles select interior flooring and ongoing property upkeep."
              dark
            />
          </div>

          <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch auto-rows-fr">
            {ALSO_AVAILABLE_SERVICES.map((item) => (
              <div
                key={item.id}
                className="h-full rounded-sm border border-[#D9DEE5]/20 bg-[#14284B] overflow-hidden flex flex-col justify-between"
              >
                <div className="aspect-[16/10] w-full shrink-0 overflow-hidden">
                  <SmartImage
                    slot={item.imageSlot}
                    objectPosition={item.id === 'vinyl-flooring' ? '50% 55%' : '50% 45%'}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
                  <div className="space-y-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF8A3D]">
                      Also Available
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#D9DEE5] leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2 pt-2">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#D9DEE5]/90">
                          <Check size={15} className="text-[#F26A1B] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Button to="/contact" variant="primary" size="md">
                      Inquire About {item.title}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageTransition>
  );
};

export default Services;
