import React from 'react';

interface LadderIllustrationProps {
  className?: string;
}

export const LadderIllustration: React.FC<LadderIllustrationProps> = ({
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
      <rect width="480" height="340" fill="#14284B" />
      {/* Roofline */}
      <polygon points="80,140 240,65 400,140" fill="#1E3A68" />
      <line x1="70" y1="145" x2="240" y2="65" stroke="#F6F4F0" strokeWidth="3" />
      <line x1="240" y1="65" x2="410" y2="145" stroke="#F26A1B" strokeWidth="4" />
      {/* Ladder rails */}
      <line x1="175" y1="305" x2="225" y2="130" stroke="#D9DEE5" strokeWidth="5" strokeLinecap="round" />
      <line x1="215" y1="305" x2="265" y2="130" stroke="#D9DEE5" strokeWidth="5" strokeLinecap="round" />
      {/* Rungs */}
      <line x1="183" y1="278" x2="223" y2="278" stroke="#F26A1B" strokeWidth="3" />
      <line x1="191" y1="248" x2="231" y2="248" stroke="#F26A1B" strokeWidth="3" />
      <line x1="200" y1="218" x2="240" y2="218" stroke="#F26A1B" strokeWidth="3" />
      <line x1="208" y1="188" x2="248" y2="188" stroke="#F26A1B" strokeWidth="3" />
      <line x1="217" y1="158" x2="257" y2="158" stroke="#F26A1B" strokeWidth="3" />
      {/* Standoff stabilizer */}
      <path d="M214 135 H276" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};
