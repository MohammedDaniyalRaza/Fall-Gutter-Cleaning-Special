import React from 'react';
import { cn } from '../../lib/utils';

interface RidgeDividerProps {
  fillColor?: string;
  accentLine?: boolean;
  flip?: boolean;
  className?: string;
}

export const RidgeDivider: React.FC<RidgeDividerProps> = ({
  fillColor = '#F6F4F0',
  accentLine = true,
  flip = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden leading-none pointer-events-none select-none',
        flip && 'rotate-180',
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className="block w-full h-10 sm:h-14 md:h-16"
      >
        <polygon
          points="0,72 0,48 210,16 390,46 620,12 870,48 1110,18 1300,42 1440,22 1440,72"
          fill={fillColor}
        />
        {accentLine && (
          <polyline
            points="0,48 210,16 390,46 620,12 870,48 1110,18 1300,42 1440,22"
            fill="none"
            stroke="#F26A1B"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
};
