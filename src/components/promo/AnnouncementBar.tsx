import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { SITE } from '../../data/site';
import { FacebookIcon } from '../ui/FacebookIcon';

interface AnnouncementBarProps {
  visible: boolean;
  onDismiss: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  visible,
  onDismiss,
}) => {
  if (!SITE.promo.active || !visible) return null;

  return (
    <div
      role="region"
      aria-label={SITE.promo.title}
      className="w-full bg-[#091429] text-white border-b border-[#F26A1B]/45 px-3 sm:px-6 py-2"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            aria-hidden="true"
            className="shrink-0 hidden sm:block"
          >
            <path
              d="M1 9L7 1.5L13 9"
              stroke="#F26A1B"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-xs sm:text-sm font-medium truncate">
            <span className="font-bold text-[#FF8A3D]">{SITE.promo.title}:</span>{' '}
            <span className="font-semibold text-white">{SITE.promo.priceLabel}</span>{' '}
            <span className="hidden md:inline text-[#D9DEE5]/80">
              · {SITE.promo.note}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#F26A1B] hover:bg-[#FF8A3D] text-white font-semibold text-[11px] sm:text-xs whitespace-nowrap transition-colors"
          >
            <FacebookIcon size={12} />
            <span className="hidden xs:inline sm:inline">{SITE.promo.cta}</span>
            <span className="sm:hidden">Book</span>
          </a>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-[#D9DEE5] hover:text-white whitespace-nowrap transition-colors"
          >
            <span>Quote</span>
            <ArrowRight size={12} />
          </Link>

          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss announcement"
            className="w-7 h-7 rounded-sm flex items-center justify-center text-[#D9DEE5]/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
