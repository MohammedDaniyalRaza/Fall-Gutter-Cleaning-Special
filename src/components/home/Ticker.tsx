import React from 'react';

const TICKER_ITEMS = [
  'Professional Gutter Cleaning',
  'Downspout Flush & Unclogging',
  'Gutter Cleaning + Repair',
  'Hidden Hanger Installation',
  'End Cap & Miter Resealing',
  'Residential & Commercial',
  'Western MA & Connecticut',
  'Free Estimates & Full Cleanup',
];

const PeakSeparator = () => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M1 9L7 1.5L13 9" stroke="#0F1F3D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Ticker: React.FC = () => {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="relative bg-[#F26A1B] text-[#0F1F3D] py-3.5 overflow-hidden border-y border-[#0F1F3D]/15 select-none"
      aria-label="Peakline service highlights"
    >
      <div className="animate-marquee flex items-center gap-8">
        {repeated.map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center gap-8 shrink-0">
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] whitespace-nowrap">
              {item}
            </span>
            <PeakSeparator />
          </div>
        ))}
      </div>
    </div>
  );
};
