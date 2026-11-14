import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE } from '../../data/site';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { FacebookIcon } from '../ui/FacebookIcon';

interface FallSpecialCompactProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const FallSpecialCompact: React.FC<FallSpecialCompactProps> = ({
  variant = 'dark',
  className,
}) => {
  if (!SITE.promo.active) return null;

  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'rounded-sm border p-5 sm:p-6 relative overflow-hidden',
        isDark
          ? 'bg-[#091429] border-[#F26A1B]/60 text-white'
          : 'bg-white border-[#D9DEE5] text-[#0F1F3D] shadow-sm',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF8A3D] font-semibold">
              {SITE.promo.title}
            </span>
            <span className="bg-[#F26A1B] text-white font-display font-extrabold text-xs px-2.5 py-0.5 rounded-sm">
              {SITE.promo.priceLabel}
            </span>
          </div>
          <p
            className={cn(
              'text-sm font-medium',
              isDark ? 'text-[#D9DEE5]' : 'text-[#6B7686]'
            )}
          >
            {SITE.promo.note} · {SITE.promo.cta}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <Button
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
          >
            <FacebookIcon size={14} />
            Message to Book
          </Button>
          <Button
            to="/contact"
            variant={isDark ? 'outlineLight' : 'outline'}
            size="sm"
          >
            Free Quote
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};
