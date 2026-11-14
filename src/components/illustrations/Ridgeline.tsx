import React from 'react';

interface RidgelineIllustrationProps {
  className?: string;
}

export const RidgelineIllustration: React.FC<RidgelineIllustrationProps> = ({
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
      <path d="M0 245 L95 165 L175 210 L275 105 L365 185 L430 140 L480 180 L480 340 L0 340 Z" fill="#14284B" />
      <path d="M0 280 L130 195 L220 245 L335 150 L480 235 L480 340 L0 340 Z" fill="#091429" />
      <polyline
        points="0,245 95,165 175,210 275,105 365,185 430,140 480,180"
        stroke="#F26A1B"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="275" cy="105" r="5" fill="#F26A1B" />
    </svg>
  );
};
