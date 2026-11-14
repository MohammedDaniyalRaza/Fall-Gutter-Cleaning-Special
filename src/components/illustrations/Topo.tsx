import React from 'react';

interface TopoIllustrationProps {
  className?: string;
}

export const TopoIllustration: React.FC<TopoIllustrationProps> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="480" height="340" fill="#14284B" />
      <g stroke="#F6F4F0" strokeOpacity="0.16" strokeWidth="1.25">
        <path d="M-20 70 Q 110 15 240 80 T 500 55" />
        <path d="M-20 115 Q 130 50 265 120 T 500 95" />
        <path d="M-20 165 Q 140 95 280 165 T 500 140" />
        <path d="M-20 215 Q 150 140 295 215 T 500 190" />
        <path d="M-20 265 Q 160 195 310 260 T 500 245" />
      </g>
      <path d="M90 250 L240 120 L390 250" stroke="#F26A1B" strokeWidth="3" />
    </svg>
  );
};
