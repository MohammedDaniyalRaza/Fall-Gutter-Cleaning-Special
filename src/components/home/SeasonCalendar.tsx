import React, { useRef, useState } from 'react';
import { CloudRain, Leaf, Snowflake, Sun } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

interface SeasonData {
  id: string;
  season: string;
  window: string;
  headline: string;
  summary: string;
  checklist: string[];
  icon: React.ReactNode;
}

const SEASONS: SeasonData[] = [
  {
    id: 'spring',
    season: 'Spring',
    window: 'April – May',
    headline: 'Pollen, maple helicopters & spring downpours',
    summary:
      'Winter freeze-thaw loosens gutter spikes and leaves grit behind. Late spring brings seed pods and blossoms that mat inside downspout elbows just as heavy rainstorms arrive.',
    checklist: [
      'Clear spring tree buds, seed pods, and shingle grit',
      'Check for winter-loosened spikes and re-anchor with hidden hangers',
      'Reseal leaking end caps and corners before summer thunderstorms',
    ],
    icon: <CloudRain size={20} />,
  },
  {
    id: 'summer',
    season: 'Summer',
    window: 'June – August',
    headline: 'Fast downpours & standing water checks',
    summary:
      'Sudden New England summer storms dump inches of water in minutes. Any sag in gutter pitch leaves standing pools behind, adding weight and attracting pests.',
    checklist: [
      'Correct low spots and sagging runs so troughs drain dry',
      'Unblock downspouts clogged by mid-summer storm twigs',
      'Verify outlet extensions direct water away from basement walls',
    ],
    icon: <Sun size={20} />,
  },
  {
    id: 'fall',
    season: 'Fall',
    window: 'October – November',
    headline: 'Peak oak, maple & pine needle season',
    summary:
      'Fall is the most critical service window in Western MA and Connecticut. Wet leaves pack solidly into troughs and elbows—and whatever stays in the gutter freezes solid by December.',
    checklist: [
      'Hand-clear full autumn leaf and pine needle buildup',
      'Flush every downspout top-to-bottom for unobstructed flow',
      'Inspect roof valleys and inside miter corners before freezing weather',
    ],
    icon: <Leaf size={20} />,
  },
  {
    id: 'winter',
    season: 'Winter',
    window: 'December – March',
    headline: 'Ice weight, freeze-thaw & eave protection',
    summary:
      'Clean gutters and tight hidden hangers let daytime snowmelt escape cleanly instead of locking into heavy ice dams along your fascia and eaves.',
    checklist: [
      'Properly pitched gutters reduce standing slush that turns to ice',
      'Screw-in hidden hangers hold far tighter under heavy snow load',
      'Tight end caps stop icy drips from forming slick steps below',
    ],
    icon: <Snowflake size={20} />,
  },
];

export const SeasonCalendar: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState('fall');

  useReveal(sectionRef);

  const active = SEASONS.find((s) => s.id === activeId) || SEASONS[2];

  return (
    <section ref={sectionRef} className="bg-[#F6F4F0] py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            elevation="ELEV. 05 · NEW ENGLAND SEASONS"
            titleLight="When your gutters"
            titleBold="need attention."
            subtitle="Western Massachusetts and Connecticut weather tests rooflines year-round. Pick a season to see what builds up."
          />
        </div>

        {/* Horizontal Interactive Strip */}
        <div data-reveal className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {SEASONS.map((item) => {
            const isSelected = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={cn(
                  'group rounded-sm border p-4 sm:p-5 text-left transition-all duration-200 cursor-pointer',
                  isSelected
                    ? 'bg-[#0F1F3D] border-[#0F1F3D] text-white shadow-md'
                    : 'bg-white border-[#D9DEE5] text-[#0F1F3D] hover:border-[#F26A1B]'
                )}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={cn(
                      'text-[#F26A1B]',
                      isSelected ? 'text-[#FF8A3D]' : 'text-[#F26A1B]'
                    )}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={cn(
                      'font-mono text-[11px] uppercase tracking-[0.14em]',
                      isSelected ? 'text-[#D9DEE5]/80' : 'text-[#6B7686]'
                    )}
                  >
                    {item.window}
                  </span>
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                  {item.season}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Season Detail Panel */}
        <div
          data-reveal
          className="rounded-sm border border-[#D9DEE5] bg-white p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
              {active.season} Focus · {active.window}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F1F3D]">
              {active.headline}
            </h3>
            <p className="text-base text-[#6B7686] leading-relaxed">{active.summary}</p>
          </div>

          <div className="lg:col-span-5 bg-[#F6F4F0] border border-[#D9DEE5] rounded-sm p-5 sm:p-6 space-y-4">
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-[#0F1F3D] font-semibold">
              Seasonal Checklist
            </div>
            <ul className="space-y-2.5 text-sm text-[#0F1F3D]">
              {active.checklist.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F26A1B] mt-2 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Button to="/contact" variant="primary" size="sm">
                Book {active.season} Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
