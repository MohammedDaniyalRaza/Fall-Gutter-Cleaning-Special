import React from 'react';

interface GutterIllustrationProps {
  className?: string;
}

export const GutterIllustration: React.FC<GutterIllustrationProps> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="480" height="340" fill="#0F1F3D" />
      <path d="M0 120 L180 65 L340 130 L480 85" stroke="#1E3A68" strokeWidth="1.5" />
      <path d="M0 155 L200 100 L350 165 L480 120" stroke="#1E3A68" strokeWidth="1.5" />
      {/* Roof fascia cross-section */}
      <polygon points="40,70 290,170 40,170" fill="#1E3A68" />
      <line x1="40" y1="70" x2="295" y2="172" stroke="#F26A1B" strokeWidth="5" strokeLinecap="round" />
      {/* K-style gutter profile */}
      <path
        d="M286 164 L286 218 L342 218 C348 218 352 210 348 202 L342 192 C338 186 346 176 354 176 L354 164 Z"
        fill="#FFFFFF"
        stroke="#D9DEE5"
        strokeWidth="2"
      />
      {/* Hidden hanger screw */}
      <rect x="282" y="176" width="66" height="6" rx="2" fill="#F26A1B" />
      <line x1="252" y1="179" x2="288" y2="179" stroke="#F6F4F0" strokeWidth="3" strokeDasharray="4 3" />
      {/* Clean water stream */}
      <path d="M312 192 C312 204 328 204 328 192" stroke="#3B82C4" strokeWidth="3" strokeLinecap="round" />
      <path d="M320 226 L320 278" stroke="#3B82C4" strokeWidth="4" strokeLinecap="round" />
      <path d="M320 288 C320 294 313 300 320 306 C327 300 320 294 320 288 Z" fill="#3B82C4" />
    </svg>
  );
};
