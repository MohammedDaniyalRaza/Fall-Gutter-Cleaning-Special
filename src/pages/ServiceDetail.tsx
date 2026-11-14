import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { CTABand } from '../components/home/CTABand';
import { PageTransition } from '../components/layout/PageTransition';
import { FallSpecialCompact } from '../components/promo/FallSpecialCompact';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { FacebookIcon } from '../components/ui/FacebookIcon';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SmartImage } from '../components/ui/SmartImage';
import { CORE_SERVICES, getServiceBySlug } from '../data/services';
import { SITE } from '../data/site';
import { formatPhoneHref } from '../lib/utils';
import NotFound from './NotFound';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);
  const hasPhone = SITE.phone.trim().length > 0;

  if (!service) {
    return <NotFound />;
  }

  const related = CORE_SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <PageTransition>
      <PageHero
        elevation={`SERVICE ${service.number} · ${service.category}`}
        titleLight=""
        titleBold={service.title}
        subtitle={service.tagline}
        imageSlot={service.imageSlot}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.shortTitle },
        ]}
      />

      {/* Problem & Field Reality Split */}
      <section className="bg-[#F6F4F0] py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
              The Problem
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1F3D]">
              {service.problemHeading}
            </h2>
            <p className="text-base sm:text-lg text-[#6B7686] leading-relaxed">
              {service.problemCopy}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary" size="lg">
                Get a Free Quote
                <ArrowRight size={17} />
              </Button>
              {hasPhone ? (
                <Button href={formatPhoneHref(SITE.phone)} variant="outline" size="lg">
                  <Phone size={17} />
                  Call {SITE.phone}
                </Button>
              ) : (
                <Button
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  <FacebookIcon size={17} className="text-[#F26A1B]" />
                  Message on Facebook
                </Button>
              )}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/11] w-full rounded-sm overflow-hidden border border-[#D9DEE5] shadow-md">
              <SmartImage slot={service.secondaryImageSlot} className="w-full h-full" />
            </div>
          </div>
        </div>
        {service.slug === 'professional-gutter-cleaning' && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
            <FallSpecialCompact variant="dark" />
          </div>
        )}
      </section>

      {/* What We Do + Benefits */}
      <section className="bg-white py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              elevation="SCOPE OF WORK"
              titleLight="What Peakline"
              titleBold="actually does."
              className="mb-6"
            />
            <ul className="space-y-4">
              {service.whatWeDo.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 rounded-sm border border-[#D9DEE5] bg-[#F6F4F0] p-4"
                >
                  <CheckCircle2 size={18} className="text-[#F26A1B] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#0F1F3D] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm bg-[#0F1F3D] text-white p-6 sm:p-8 space-y-5 topo-texture-dark">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-[#F26A1B]" />
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#FF8A3D]">
                  Homeowner Benefits
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold">
                Why it pays off before the next storm.
              </h3>
              <ul className="space-y-3 pt-2 border-t border-white/10">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#D9DEE5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26A1B] mt-2 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="bg-[#F6F4F0] py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            elevation="FIELD PROCEDURE"
            titleLight="Step-by-step"
            titleBold="on your property."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch auto-rows-fr">
            {service.steps.map((step, i) => (
              <div
                key={step.title}
                className="h-full rounded-sm border border-[#D9DEE5] bg-white p-6 space-y-3 flex flex-col"
              >
                <span className="font-mono text-xs font-bold text-[#F26A1B] tabular-nums">
                  STEP 0{i + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-[#0F1F3D]">{step.title}</h3>
                <p className="text-sm text-[#6B7686] leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQ + Related Services */}
      <section className="bg-white py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                elevation="SERVICE FAQ"
                titleLight="Questions about"
                titleBold={`${service.shortTitle}.`}
                className="mb-0"
              />
            </div>
            <div className="lg:col-span-7">
              <Accordion items={service.faqs} />
            </div>
          </div>

          <div className="pt-12 border-t border-[#D9DEE5]">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h3 className="font-display text-2xl font-bold text-[#0F1F3D]">
                Other Gutter Services
              </h3>
              <Link
                to="/services"
                className="font-mono text-xs uppercase tracking-[0.14em] text-[#F26A1B] hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch auto-rows-fr">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/services/${rel.slug}`}
                  className="h-full group rounded-sm border border-[#D9DEE5] bg-[#F6F4F0] p-5 hover:bg-white hover:border-[#F26A1B] transition-all flex flex-col justify-between gap-4"
                >
                  <div>
                    <span className="font-mono text-xs text-[#F26A1B] font-semibold">
                      {rel.number} · {rel.category}
                    </span>
                    <h4 className="font-display text-lg font-bold text-[#0F1F3D] mt-1 group-hover:text-[#F26A1B] transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#6B7686] mt-2 leading-relaxed line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F1F3D]">
                    Read details <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </PageTransition>
  );
};

export default ServiceDetail;
