import React from 'react';

interface HouseIllustrationProps {
  className?: string;
}

export const HouseIllustration: React.FC<HouseIllustrationProps> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="480" height="340" fill="#14284B" />
      <path d="M0 280 L110 215 L210 250 L330 190 L480 260 L480 340 L0 340 Z" fill="#0F1F3D" />
      {/* House Structure */}
      <polygon points="85,155 240,68 395,155" fill="#1E3A68" stroke="#F6F4F0" strokeWidth="2.5" />
      <polygon points="240,68 395,155 395,146 240,59" fill="#F26A1B" />
      <rect x="320" y="74" width="24" height="44" fill="#0F1F3D" stroke="#F26A1B" strokeWidth="2" />
      <rect x="110" y="155" width="260" height="125" fill="#0F1F3D" stroke="#D9DEE5" strokeWidth="2" />
      {/* 4-pane window */}
      <g transform="translate(222 108)">
        <rect x="0" y="0" width="16" height="16" fill="#F26A1B" />
        <rect x="20" y="0" width="16" height="16" fill="#F26A1B" />
        <rect x="0" y="20" width="16" height="16" fill="#F26A1B" />
        <rect x="20" y="20" width="16" height="16" fill="#F26A1B" />
      </g>
      {/* Gutters and downspouts */}
      <rect x="74" y="153" width="332" height="8" rx="2" fill="#FFFFFF" />
      <rect x="92" y="161" width="10" height="114" fill="#D9DEE5" />
      <rect x="378" y="161" width="10" height="114" fill="#D9DEE5" />
      {/* Sky blue rain flow */}
      <path d="M76 276 Q 55 276 42 292" stroke="#3B82C4" strokeWidth="3" strokeLinecap="round" />
      <path d="M402 276 Q 425 276 438 292" stroke="#3B82C4" strokeWidth="3" strokeLinecap="round" />
      <circle cx="38" cy="298" r="3" fill="#3B82C4" />
      <circle cx="442" cy="298" r="3" fill="#3B82C4" />
    </svg>
  );
};
