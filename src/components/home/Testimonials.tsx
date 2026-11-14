import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import { useReveal } from '../../hooks/useReveal';
import { SectionHeading } from '../ui/SectionHeading';

export const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });

  useReveal(sectionRef);

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.min(400, el.clientWidth * 0.85);
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - dragStartRef.current.x) * 1.3;
    trackRef.current.scrollLeft = dragStartRef.current.scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <section ref={sectionRef} className="bg-[#F6F4F0] py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            elevation="ELEV. 08 · HOMEOWNER NOTES"
            titleLight="What neighbors say"
            titleBold="after the rain."
            subtitle="Straightforward feedback from homeowners we have served across Western MA and Connecticut."
            align="split"
            rightSlot={
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  aria-label="Previous reviews"
                  className="w-11 h-11 rounded-sm border border-[#D9DEE5] bg-white text-[#0F1F3D] hover:border-[#F26A1B] hover:text-[#F26A1B] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft size={19} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  aria-label="Next reviews"
                  className="w-11 h-11 rounded-sm border border-[#D9DEE5] bg-white text-[#0F1F3D] hover:border-[#F26A1B] hover:text-[#F26A1B] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            }
          />
        </div>

        {/* Horizontally draggable quote track */}
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className={`flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[360px] lg:w-[390px] rounded-sm border border-[#D9DEE5] bg-white p-6 sm:p-7 flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote size={20} className="text-[#F26A1B]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B7686]">
                    {item.service}
                  </span>
                </div>

                <blockquote className="text-base text-[#0F1F3D] leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#D9DEE5] flex items-center justify-between text-xs">
                <span className="font-display font-bold text-sm text-[#0F1F3D]">
                  {item.name}
                </span>
                <span className="font-mono uppercase tracking-[0.12em] text-[#6B7686]">
                  {item.town}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
