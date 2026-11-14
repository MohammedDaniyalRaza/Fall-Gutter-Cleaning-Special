import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Phone, Search, X } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { FacebookIcon } from '../components/ui/FacebookIcon';
import { PageHero } from '../components/ui/PageHero';
import { RidgeDivider } from '../components/ui/RidgeDivider';
import { ALL_FAQS, FAQ_CATEGORIES, FAQCategory } from '../data/faqs';
import { SITE } from '../data/site';
import { cn, formatPhoneHref } from '../lib/utils';

const FAQPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('All');
  const [expandAll, setExpandAll] = useState(false);
  const [openId, setOpenId] = useState<string | null>(ALL_FAQS[0]?.id || null);

  const hasPhone = SITE.phone.trim().length > 0;

  // Optional #hash deep-link support
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const matched = ALL_FAQS.find((item) => item.id === hash);
    if (matched) {
      setActiveCategory('All');
      setOpenId(matched.id);
      window.setTimeout(() => {
        document.getElementById(matched.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 220);
    }
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_FAQS.length };
    for (const cat of FAQ_CATEGORIES) {
      if (cat !== 'All') {
        counts[cat] = ALL_FAQS.filter((item) => item.category === cat).length;
      }
    }
    return counts;
  }, []);

  const filteredFaqs = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ALL_FAQS.filter((item) => {
      const matchesCat = activeCategory === 'All' || item.category === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, search]);

  const handleToggleItem = (id: string) => {
    if (expandAll) {
      setExpandAll(false);
      setOpenId(id);
      return;
    }
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <PageTransition>
      <PageHero
        elevation="ELEV. 01 · FREQUENTLY ASKED QUESTIONS"
        titleLight="Straight answers,"
        titleBold="before you book."
        subtitle="Everything Western Massachusetts and Connecticut homeowners ask about pricing, seasonal cleanings, hidden hangers, end cap resealing, and property safety."
        imageSlot="faqHero"
        objectPosition="78% 45%"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'FAQ' },
        ]}
      />

      {/* Search & Category Explorer */}
      <section className="bg-[#F6F4F0] py-14 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Live Search Bar + Expand All Toggle */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-2xl">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F26A1B] pointer-events-none"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions (e.g. downspouts, $150, hidden hangers, ice dams)..."
                aria-label="Search frequently asked questions"
                className="w-full rounded-sm border border-[#D9DEE5] bg-white pl-11 pr-10 py-3.5 text-sm sm:text-base text-[#0F1F3D] placeholder:text-[#6B7686]/70 focus:border-[#F26A1B] focus:outline-none focus:ring-2 focus:ring-[#F26A1B]/25 shadow-sm"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-sm flex items-center justify-center text-[#6B7686] hover:text-[#0F1F3D] cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between md:justify-end gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#6B7686] tabular-nums">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? 'Question' : 'Questions'}
              </span>
              <button
                type="button"
                onClick={() => setExpandAll((prev) => !prev)}
                className="px-4 py-2 rounded-sm border border-[#D9DEE5] bg-white text-xs font-semibold text-[#0F1F3D] hover:border-[#F26A1B] transition-colors cursor-pointer whitespace-nowrap"
              >
                {expandAll ? 'Collapse All' : 'Expand All'}
              </button>
            </div>
          </div>

          {/* Mobile Horizontal Scrollable Category Chips */}
          <div className="lg:hidden mb-7 -mx-4 px-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center gap-2 w-max pb-1" role="tablist" aria-label="FAQ categories">
              {FAQ_CATEGORIES.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      'px-3.5 py-2 rounded-sm border text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2',
                      active
                        ? 'bg-[#0F1F3D] border-[#0F1F3D] text-white'
                        : 'bg-white border-[#D9DEE5] text-[#0F1F3D] hover:border-[#F26A1B]'
                    )}
                  >
                    <span>{category}</span>
                    <span
                      className={cn(
                        'font-mono text-[11px] tabular-nums',
                        active ? 'text-[#FF8A3D]' : 'text-[#6B7686]'
                      )}
                    >
                      {categoryCounts[category]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Grid: Sticky Desktop Categories + Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Desktop Left Sticky Category List */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-32 space-y-2">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#6B7686] mb-3 px-1">
                Filter by Topic
              </div>
              <div className="rounded-sm border border-[#D9DEE5] bg-white divide-y divide-[#D9DEE5] overflow-hidden">
                {FAQ_CATEGORIES.map((category) => {
                  const active = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        'w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium text-left transition-colors cursor-pointer',
                        active
                          ? 'bg-[#0F1F3D] text-white font-semibold'
                          : 'bg-white text-[#0F1F3D] hover:bg-[#F6F4F0]'
                      )}
                    >
                      <span>{category}</span>
                      <span
                        className={cn(
                          'font-mono text-xs tabular-nums',
                          active ? 'text-[#F26A1B]' : 'text-[#6B7686]'
                        )}
                      >
                        {categoryCounts[category]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Right Column: Accessible Accordion */}
            <div className="lg:col-span-8">
              {filteredFaqs.length === 0 ? (
                <div className="rounded-sm border border-[#D9DEE5] bg-white p-8 sm:p-10 text-center space-y-4">
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
                    No Matching Questions
                  </div>
                  <h2 className="font-display text-2xl font-bold text-[#0F1F3D]">
                    Did not find what you are looking for?
                  </h2>
                  <p className="text-sm sm:text-base text-[#6B7686] max-w-md mx-auto">
                    Send us your question directly through our quote form or Facebook message—we are happy to clarify anything about your roofline.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setSearch('');
                        setActiveCategory('All');
                      }}
                    >
                      Reset Filters
                    </Button>
                    <Button to="/contact" variant="primary">
                      Get a Free Quote
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="rounded-sm border border-[#D9DEE5] bg-white divide-y divide-[#D9DEE5]">
                  {filteredFaqs.map((item) => {
                    const isOpen = expandAll || openId === item.id;
                    const panelId = `faq-panel-${item.id}`;
                    const triggerId = `faq-trigger-${item.id}`;

                    return (
                      <div key={item.id} id={item.id} className="px-5 sm:px-7">
                        <button
                          id={triggerId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => handleToggleItem(item.id)}
                          className="w-full flex items-start justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A1B]"
                        >
                          <div className="space-y-1">
                            <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-[#F26A1B]">
                              {item.category}
                            </span>
                            <span
                              className={cn(
                                'block font-display text-lg sm:text-xl font-semibold tracking-tight transition-colors',
                                isOpen
                                  ? 'text-[#F26A1B]'
                                  : 'text-[#0F1F3D] group-hover:text-[#F26A1B]'
                              )}
                            >
                              {item.question}
                            </span>
                          </div>
                          <span
                            aria-hidden="true"
                            className={cn(
                              'mt-1 shrink-0 w-9 h-9 rounded-sm border flex items-center justify-center transition-all duration-200',
                              isOpen
                                ? 'bg-[#F26A1B] border-[#F26A1B] text-white rotate-180'
                                : 'border-[#D9DEE5] text-[#0F1F3D] group-hover:border-[#F26A1B]'
                            )}
                          >
                            <ChevronDown size={17} />
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={panelId}
                              role="region"
                              aria-labelledby={triggerId}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="pb-6 pr-4 sm:pr-10 text-sm sm:text-base text-[#6B7686] leading-relaxed">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Orange CTA Band: Still have a question? */}
      <section className="relative bg-[#F26A1B] text-white overflow-hidden">
        <RidgeDivider fillColor="#F26A1B" flip accentLine={false} className="bg-[#F6F4F0]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#0F1F3D] font-semibold">
                {SITE.serviceArea}
              </span>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.3rem)] leading-[1.05] tracking-tight text-[#0F1F3D]">
                <span className="font-light">Still have a </span>
                <span className="font-extrabold text-white">question?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#0F1F3D]/90 font-medium max-w-2xl">
                Ask us directly about your home&rsquo;s roofline, multi-story access, or seasonal availability—we will confirm details at your free estimate.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button to="/contact" variant="navy" size="lg" className="w-full">
                Get a Free Quote
                <ArrowRight size={18} />
              </Button>
              {hasPhone ? (
                <Button
                  href={formatPhoneHref(SITE.phone)}
                  variant="outline"
                  size="lg"
                  className="w-full border-[#0F1F3D] text-[#0F1F3D] bg-white/95 hover:bg-white"
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
                  className="w-full border-[#0F1F3D] text-[#0F1F3D] bg-white/95 hover:bg-white"
                >
                  <FacebookIcon size={18} />
                  Message on Facebook
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default FAQPage;
