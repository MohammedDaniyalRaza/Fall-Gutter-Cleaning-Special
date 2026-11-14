import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { SITE } from '../../data/site';
import { formatPhoneHref } from '../../lib/utils';
import { Button } from '../ui/Button';
import { FacebookIcon } from '../ui/FacebookIcon';
import { RidgeDivider } from '../ui/RidgeDivider';

export const CTABand: React.FC = () => {
  const hasPhone = SITE.phone.trim().length > 0;

  return (
    <section className="relative bg-[#F26A1B] text-white overflow-hidden">
      <RidgeDivider fillColor="#F26A1B" flip accentLine={false} className="bg-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#0F1F3D] font-semibold">
              {SITE.serviceArea} · Free Estimates
            </span>
            <h2 className="font-display text-[clamp(2.1rem,4.4vw,3.5rem)] leading-[1.04] tracking-tight text-[#0F1F3D]">
              <span className="font-light">Ready for gutters that </span>
              <span className="font-extrabold text-white">drain right?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#0F1F3D]/90 font-medium max-w-2xl">
              Request your free estimate online or message Peakline Home Services directly on Facebook—cleanup and downspout flush testing included.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Button to="/contact" variant="navy" size="lg" className="w-full sm:w-auto lg:w-full">
              Get a Free Quote
              <ArrowRight size={18} />
            </Button>

            {hasPhone ? (
              <Button
                href={formatPhoneHref(SITE.phone)}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto lg:w-full border-[#0F1F3D] text-[#0F1F3D] bg-white/90 hover:bg-white"
              >
                <Phone size={18} />
                Call {SITE.phone}
              </Button>
            ) : (
              <Button
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto lg:w-full border-[#0F1F3D] text-[#0F1F3D] bg-white/95 hover:bg-white"
              >
                <FacebookIcon size={18} />
                Message on Facebook
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
