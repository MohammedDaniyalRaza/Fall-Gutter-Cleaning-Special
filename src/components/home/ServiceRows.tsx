import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Droplets, Layers, Shield, Wrench } from 'lucide-react';
import { ALSO_AVAILABLE_SERVICES, CORE_SERVICES } from '../../data/services';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { SmartImage } from '../ui/SmartImage';

const SERVICE_ICONS = {
  droplets: Droplets,
  wrench: Wrench,
  shield: Shield,
  layers: Layers,
};

export const ServiceRows: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useReveal(sectionRef);

  return (
    <section ref={sectionRef} className="bg-[#F6F4F0] py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            elevation="ELEV. 02 · CORE SERVICES"
            titleLight="Four ways we protect"
            titleBold="your roofline."
            subtitle="Every service includes careful ladder placement, full downspout flow checks, and spotless ground cleanup."
            align="split"
            rightSlot={
              <Button to="/services" variant="outline">
                All Services Overview
              </Button>
            }
          />
        </div>

        {/* Editorial Expanding Rows (NOT a plain card grid) */}
        <div className="border-t border-[#D9DEE5]">
          {CORE_SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.iconName];
            const isHovered = hoveredId === service.id;

            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  'group relative block border-b border-[#D9DEE5] py-7 sm:py-9 transition-colors duration-250',
                  isHovered ? 'bg-white' : 'bg-transparent hover:bg-white/60'
                )}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-2 sm:px-4">
                  {/* Editorial Outlined Number + Mono Label */}
                  <div className="lg:col-span-2 flex items-center lg:flex-col lg:items-start gap-3">
                    <span
                      className={cn(
                        'font-display text-4xl sm:text-5xl font-extrabold tracking-tighter transition-colors duration-200 tabular-nums',
                        isHovered ? 'text-[#F26A1B]' : 'text-[#0F1F3D]/20'
                      )}
                    >
                      {service.number}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#6B7686]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div className="lg:col-span-6 space-y-2.5">
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-[#F26A1B] shrink-0" />
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F1F3D] group-hover:text-[#F26A1B] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-[#6B7686] leading-relaxed max-w-xl">
                      {service.summary}
                    </p>
                  </div>

                  {/* Image Preview + Arrow */}
                  <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-5">
                    <div className="w-40 sm:w-48 h-24 sm:h-28 rounded-sm overflow-hidden border border-[#D9DEE5] shrink-0 transition-transform duration-300 group-hover:scale-[1.03]">
                      <SmartImage
                        slot={service.imageSlot}
                        className="w-full h-full"
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      className={cn(
                        'w-12 h-12 rounded-sm border flex items-center justify-center shrink-0 transition-all duration-200',
                        isHovered
                          ? 'bg-[#F26A1B] border-[#F26A1B] text-white translate-x-1'
                          : 'border-[#D9DEE5] text-[#0F1F3D] bg-white'
                      )}
                    >
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Also Available Secondary Strip */}
        <div
          data-reveal
          className="mt-14 pt-10 border-t border-[#D9DEE5] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
              Also Available
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F1F3D] mt-1">
              Additional home &amp; property services
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:max-w-2xl w-full items-stretch auto-rows-fr">
            {ALSO_AVAILABLE_SERVICES.map((item) => (
              <Link
                key={item.id}
                to="/services#also-available"
                className="h-full group flex items-start justify-between gap-4 rounded-sm border border-[#D9DEE5] bg-white p-4 hover:border-[#F26A1B] transition-colors"
              >
                <div>
                  <div className="font-display font-bold text-base text-[#0F1F3D] group-hover:text-[#F26A1B] transition-colors">
                    {item.title}
                  </div>
                  <p className="text-xs text-[#6B7686] mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#6B7686] group-hover:text-[#F26A1B] shrink-0 mt-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
