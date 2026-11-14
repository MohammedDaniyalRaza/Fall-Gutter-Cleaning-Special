import React from 'react';
import { ArrowUpRight, Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { FallSpecialCompact } from '../components/promo/FallSpecialCompact';
import { Accordion } from '../components/ui/Accordion';
import { FacebookIcon } from '../components/ui/FacebookIcon';
import { PageHero } from '../components/ui/PageHero';
import { QuoteForm } from '../components/ui/QuoteForm';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GENERAL_FAQS } from '../data/faqs';
import { SITE } from '../data/site';
import { formatPhoneHref } from '../lib/utils';

const Contact: React.FC = () => {
  const hasPhone = SITE.phone.trim().length > 0;

  return (
    <PageTransition>
      <PageHero
        elevation="ELEV. 01 · FREE ESTIMATES"
        titleLight="Request your"
        titleBold="free quote."
        subtitle={`Serving ${SITE.serviceArea}. Tell us what your roofline needs and we will follow up promptly.`}
        imageSlot="contactHero"
        objectPosition="78% 55%"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* Two-Column Quote Form & Info Cards */}
      <section className="bg-[#F6F4F0] py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 space-y-5">
            <FallSpecialCompact variant="dark" />
            {/* Facebook Direct Card */}
            <div className="rounded-sm border border-[#D9DEE5] bg-white p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
                  Direct Messaging
                </span>
                <FacebookIcon size={20} className="text-[#0F1F3D]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0F1F3D]">
                Message Peakline on Facebook
              </h3>
              <p className="text-sm text-[#6B7686] leading-relaxed">
                Prefer sending a quick message or attaching a photo of a dripping corner or sagging gutter run? Reach us directly on our Facebook page.
              </p>
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-sm bg-[#0F1F3D] hover:bg-[#1E3A68] text-white text-sm font-semibold transition-colors"
              >
                <FacebookIcon size={16} className="text-[#F26A1B]" />
                <span>Message on Facebook</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Conditional Phone Card (only visible when phone is configured in src/data/site.ts) */}
            {hasPhone && (
              <div className="rounded-sm border border-[#D9DEE5] bg-white p-6 sm:p-7 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
                    Phone Line
                  </span>
                  <Phone size={19} className="text-[#0F1F3D]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F1F3D]">
                  Call for an estimate
                </h3>
                <a
                  href={formatPhoneHref(SITE.phone)}
                  className="inline-flex items-center gap-2 text-lg font-bold text-[#F26A1B] hover:text-[#FF8A3D]"
                >
                  <Phone size={18} />
                  {SITE.phone}
                </a>
              </div>
            )}

            {/* Service Area Card */}
            <div className="rounded-sm border border-[#D9DEE5] bg-white p-6 sm:p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
                  Service Area
                </span>
                <MapPin size={19} className="text-[#0F1F3D]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#0F1F3D]">
                {SITE.serviceArea}
              </h3>
              <p className="text-sm text-[#6B7686] leading-relaxed">
                Serving residential homes and commercial properties across Western Massachusetts and Northern/Central Connecticut.
              </p>
            </div>

            {/* Response Promise Card */}
            <div className="rounded-sm border border-[#0F1F3D] bg-[#0F1F3D] text-white p-6 sm:p-7 space-y-3 topo-texture-dark">
              <div className="flex items-center gap-2.5 text-[#FF8A3D]">
                <Clock size={18} />
                <span className="font-mono text-xs uppercase tracking-[0.16em]">
                  Our Estimate Promise
                </span>
              </div>
              <h3 className="font-display text-xl font-bold">
                Clear quotes. Zero pressure.
              </h3>
              <p className="text-sm text-[#D9DEE5] leading-relaxed">
                We review every request promptly and give you an honest price before any ladder goes up—with full ground cleanup included on every job.
              </p>
              <div className="pt-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF8A3D]">
                <ShieldCheck size={15} />
                <span>Residential &amp; Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact FAQ before Footer */}
      <section className="bg-white py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            elevation="BEFORE YOU REACH OUT"
            titleLight="Quick"
            titleBold="answers."
          />
          <Accordion items={GENERAL_FAQS.slice(0, 4)} />
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
