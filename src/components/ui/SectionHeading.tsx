import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  elevation: string;
  titleLight: string;
  titleBold: string;
  subtitle?: string;
  dark?: boolean;
  align?: 'left' | 'split';
  rightSlot?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  elevation,
  titleLight,
  titleBold,
  subtitle,
  dark = false,
  align = 'left',
  rightSlot,
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'split' && 'flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6',
        className
      )}
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M1 11L9 2L17 11" stroke="#F26A1B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className={cn(
              'font-mono text-xs uppercase tracking-[0.18em] font-medium',
              dark ? 'text-[#F6F4F0]/70' : 'text-[#6B7686]'
            )}
          >
            {elevation}
          </span>
        </div>

        <h2
          className={cn(
            'font-display text-[clamp(1.95rem,3.6vw,3.1rem)] leading-[1.06] tracking-tight',
            dark ? 'text-white' : 'text-[#0F1F3D]'
          )}
        >
          <span className="font-light">{titleLight} </span>
          <span className="font-extrabold">{titleBold}</span>
        </h2>

        {subtitle && (
          <p
            className={cn(
              'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl',
              dark ? 'text-[#D9DEE5]' : 'text-[#6B7686]'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {rightSlot && <div className="shrink-0">{rightSlot}</div>}
    </div>
  );
};
