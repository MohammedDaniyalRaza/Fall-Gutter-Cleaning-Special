import React, { useRef } from 'react';
import { GENERAL_FAQS } from '../../data/faqs';
import { useReveal } from '../../hooks/useReveal';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div data-reveal className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <SectionHeading
              elevation="ELEV. 09 · COMMON QUESTIONS"
              titleLight="Straight answers"
              titleBold="before we climb."
              subtitle="Everything homeowners and property managers usually ask about scheduling, downspout clearing, hangers, and free estimates."
              className="mb-4"
            />
            <div className="flex flex-wrap items-center gap-3">
              <Button to="/faq" variant="primary">
                View all FAQs
              </Button>
              <Button to="/contact" variant="outline">
                Request a Quote
              </Button>
            </div>
          </div>

          <div data-reveal className="lg:col-span-7 space-y-6">
            <Accordion items={GENERAL_FAQS} />
            <div className="pt-2">
              <Button to="/faq" variant="ghost" className="px-0 font-semibold">
                View all FAQs &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
