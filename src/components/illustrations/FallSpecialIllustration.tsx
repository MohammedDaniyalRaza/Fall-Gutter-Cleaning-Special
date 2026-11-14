import React from 'react';

interface FallSpecialIllustrationProps {
  className?: string;
}

export const FallSpecialIllustration: React.FC<FallSpecialIllustrationProps> = ({
  className = 'w-full h-full',
}) => {
  return (
    <svg
      viewBox="0 0 640 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration of a Peakline Home Services technician on an extension ladder cleaning autumn leaves from gutters on a beige house with dormers and black shutters"
    >
      <defs>
        <linearGradient id="fallSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14284B" />
          <stop offset="65%" stopColor="#1E3A68" />
          <stop offset="100%" stopColor="#3B6296" />
        </linearGradient>
        <linearGradient id="sunLawn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5E7B3A" />
          <stop offset="60%" stopColor="#779647" />
          <stop offset="100%" stopColor="#4F6930" />
        </linearGradient>
      </defs>

      <rect width="640" height="440" fill="url(#fallSky)" />

      {/* Fall foliage trees framing left & right */}
      <g>
        <circle cx="65" cy="185" r="78" fill="#D97706" />
        <circle cx="115" cy="145" r="64" fill="#EA580C" />
        <circle cx="42" cy="238" r="56" fill="#B91C1C" />

        <circle cx="568" cy="175" r="82" fill="#B91C1C" />
        <circle cx="515" cy="142" r="66" fill="#F26A1B" />
        <circle cx="598" cy="235" r="60" fill="#EAB308" />
      </g>

      {/* Sunlit green lawn */}
      <path d="M0 342 Q320 322 640 348 L640 440 L0 440 Z" fill="url(#sunLawn)" />

      {/* Beige New England House */}
      <rect x="140" y="218" width="352" height="134" fill="#E8DEC8" stroke="#CBBFA4" strokeWidth="2" />
      {/* House Main Roof */}
      <polygon points="118,218 316,118 514,218" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />

      {/* Two Dormer Windows */}
      {[215, 365].map((dx) => (
        <g key={dx}>
          <polygon points={`${dx - 8},164 ${dx + 22},138 ${dx + 52},164`} fill="#0F1F3D" />
          <rect x={dx} y="164" width="44" height="40" fill="#E8DEC8" stroke="#CBBFA4" strokeWidth="1.5" />
          <rect x={dx + 8} y="170" width="28" height="28" fill="#14284B" stroke="#FFFFFF" strokeWidth="2" />
          <line x1={dx + 22} y1="170" x2={dx + 22} y2="198" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1={dx + 8} y1="184" x2={dx + 36} y2="184" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>
      ))}

      {/* Windows with Black Shutters */}
      {[178, 396].map((wx) => (
        <g key={wx}>
          <rect x={wx - 16} y="246" width="14" height="58" fill="#0F172A" />
          <rect x={wx + 54} y="246" width="14" height="58" fill="#0F172A" />
          <rect x={wx} y="246" width="52" height="58" fill="#14284B" stroke="#FFFFFF" strokeWidth="3" />
          <line x1={wx + 26} y1="246" x2={wx + 26} y2="304" stroke="#FFFFFF" strokeWidth="2" />
          <line x1={wx} y1="275" x2={wx + 52} y2="275" stroke="#FFFFFF" strokeWidth="2" />
        </g>
      ))}

      {/* Front Door */}
      <rect x="294" y="256" width="44" height="96" fill="#0F1F3D" stroke="#FFFFFF" strokeWidth="3" />
      <circle cx="330" cy="306" r="2.5" fill="#F26A1B" />

      {/* Gutter Run with Fall Leaves */}
      <rect x="112" y="213" width="406" height="10" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <ellipse cx="145" cy="212" rx="14" ry="5" fill="#EA580C" />
      <ellipse cx="176" cy="211" rx="12" ry="5" fill="#D97706" />
      <ellipse cx="206" cy="212" rx="14" ry="5" fill="#B91C1C" />
      <rect x="134" y="223" width="11" height="125" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />

      {/* Extension Ladder */}
      <g>
        <line x1="214" y1="398" x2="272" y2="188" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
        <line x1="252" y1="398" x2="310" y2="188" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const t = (i + 1) / 9;
          const x1 = 214 + (272 - 214) * t;
          const y1 = 398 + (188 - 398) * t;
          const x2 = 252 + (310 - 252) * t;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y1} stroke="#94A3B8" strokeWidth="3.5" />
          );
        })}
      </g>

      {/* Technician in tan pants, tool belt, cap & dark navy shirt with Peakline logo on back */}
      <g>
        <path d="M248 258 L242 308" stroke="#C2A378" strokeWidth="13" strokeLinecap="round" />
        <path d="M266 258 L266 306" stroke="#B09064" strokeWidth="13" strokeLinecap="round" />
        <rect x="234" y="305" width="15" height="8" rx="2" fill="#4A3222" />
        <rect x="258" y="303" width="15" height="8" rx="2" fill="#4A3222" />

        <rect x="241" y="250" width="33" height="8" rx="2" fill="#5C3A21" />
        <rect x="245" y="254" width="10" height="11" rx="1" fill="#F26A1B" />

        <path d="M238 206 L278 206 L274 252 L242 252 Z" fill="#0F1F3D" />
        <path d="M248 225 L258 216 L268 225" stroke="#F26A1B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

        <path d="M242 212 L222 208" stroke="#0F1F3D" strokeWidth="10" strokeLinecap="round" />
        <path d="M276 212 L292 206" stroke="#0F1F3D" strokeWidth="10" strokeLinecap="round" />
        <circle cx="220" cy="208" r="5" fill="#F26A1B" />
        <circle cx="294" cy="206" r="5" fill="#F26A1B" />

        <circle cx="258" cy="191" r="11" fill="#E8BE9E" />
        <path d="M246 188 C246 179 270 179 270 188 Z" fill="#0F1F3D" />
        <path d="M242 188 H266" stroke="#F26A1B" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Scattered fallen leaves on sunlit lawn */}
      {[
        { x: 96, y: 376, c: '#EA580C' },
        { x: 158, y: 394, c: '#D97706' },
        { x: 318, y: 384, c: '#B91C1C' },
        { x: 405, y: 398, c: '#F59E0B' },
        { x: 486, y: 378, c: '#EA580C' },
        { x: 548, y: 396, c: '#B91C1C' },
      ].map((leaf) => (
        <ellipse
          key={`${leaf.x}-${leaf.y}`}
          cx={leaf.x}
          cy={leaf.y}
          rx="9"
          ry="4.5"
          transform={`rotate(-15 ${leaf.x} ${leaf.y})`}
          fill={leaf.c}
        />
      ))}
    </svg>
  );
};
