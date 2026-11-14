import React from 'react';

interface WaterDropsIllustrationProps {
  className?: string;
}

export const WaterDropsIllustration: React.FC<WaterDropsIllustrationProps> = ({
  className = 'w-full h-full',
}) => {
  return (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="480" height="340" fill="#0F1F3D" />
      <path d="M90 95 H390" stroke="#D9DEE5" strokeWidth="6" strokeLinecap="round" />
      <path d="M120 95 V240 Q120 268 150 268 H205" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" />
      <path d="M250 145 C250 145 276 178 276 196 A26 26 0 1 1 224 196 C224 178 250 145 250 145 Z" fill="#3B82C4" />
      <path d="M335 178 C335 178 352 200 352 212 A17 17 0 1 1 318 212 C318 200 335 178 335 178 Z" fill="#3B82C4" fillOpacity="0.7" />
      <path d="M210 268 H350" stroke="#3B82C4" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 6" />
    </svg>
  );
};
