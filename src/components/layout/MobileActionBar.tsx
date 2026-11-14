import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Phone } from 'lucide-react';
import { SITE } from '../../data/site';
import { formatPhoneHref } from '../../lib/utils';
import { FacebookIcon } from '../ui/FacebookIcon';

export const MobileActionBar: React.FC = () => {
  const hasPhone = SITE.phone.trim().length > 0;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#091429]/95 backdrop-blur-md border-t border-white/15 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-lg mx-auto">
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 rounded-sm bg-[#F26A1B] hover:bg-[#FF8A3D] text-white font-semibold text-xs py-2.5 px-3 whitespace-nowrap transition-colors min-h-[42px]"
        >
          <FileText size={15} />
          <span>Get a Free Quote</span>
        </Link>

        {hasPhone ? (
          <a
            href={formatPhoneHref(SITE.phone)}
            className="flex items-center justify-center gap-2 rounded-sm border border-white/25 bg-[#14284B] text-white font-semibold text-xs py-2.5 px-3 whitespace-nowrap transition-colors min-h-[42px]"
          >
            <Phone size={15} className="text-[#F26A1B]" />
            <span>Call Now</span>
          </a>
        ) : (
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-sm border border-white/25 bg-[#14284B] hover:bg-[#1E3A68] text-white font-semibold text-xs py-2.5 px-3 whitespace-nowrap transition-colors min-h-[42px]"
          >
            <FacebookIcon size={15} className="text-[#F26A1B]" />
            <span>Message on Facebook</span>
          </a>
        )}
      </div>
    </div>
  );
};
