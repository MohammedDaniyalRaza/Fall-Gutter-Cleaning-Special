import React from 'react';

interface SceneProps {
  className?: string;
}

/* ============================================================================
   PAIR 1: Clogged gutter vs clean gutter
   Same camera angle, eave line, gutter trough, downspout, fascia & sky
   ============================================================================ */

export const CloggedGutterBefore: React.FC<SceneProps> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 640 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Illustration of clogged gutter overflowing with wet leaves and stained fascia"
  >
    <defs>
      <linearGradient id="skyBefore1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#091429" />
        <stop offset="100%" stopColor="#1E3A68" />
      </linearGradient>
      <linearGradient id="roofBefore1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#14284B" />
        <stop offset="100%" stopColor="#091429" />
      </linearGradient>
    </defs>
    <rect width="640" height="420" fill="url(#skyBefore1)" />
    <path d="M0 320 L140 250 L270 295 L420 230 L640 305 L640 420 L0 420 Z" fill="#0D1C36" />

    {/* House Siding (lower body) */}
    <rect x="70" y="218" width="570" height="202" fill="#D9DEE5" />
    <g stroke="#B8C2D0" strokeWidth="1.5">
      <line x1="70" y1="248" x2="640" y2="248" />
      <line x1="70" y1="278" x2="640" y2="278" />
      <line x1="70" y1="308" x2="640" y2="308" />
      <line x1="70" y1="338" x2="640" y2="338" />
      <line x1="70" y1="368" x2="640" y2="368" />
      <line x1="70" y1="398" x2="640" y2="398" />
    </g>

    {/* Window on right wall */}
    <rect x="440" y="256" width="110" height="118" fill="#0F1F3D" stroke="#FFFFFF" strokeWidth="5" />
    <line x1="495" y1="256" x2="495" y2="374" stroke="#FFFFFF" strokeWidth="3" />
    <line x1="440" y1="315" x2="550" y2="315" stroke="#FFFFFF" strokeWidth="3" />

    {/* Fascia Board — stained with muddy overflow streaks */}
    <rect x="52" y="182" width="588" height="38" fill="#E9ECEF" />
    <path d="M190 202 C188 225 196 248 192 272" stroke="#5A4634" strokeOpacity="0.55" strokeWidth="10" strokeLinecap="round" />
    <path d="M295 202 C298 228 290 256 296 284" stroke="#5A4634" strokeOpacity="0.45" strokeWidth="12" strokeLinecap="round" />
    <path d="M402 202 C398 232 406 254 400 290" stroke="#5A4634" strokeOpacity="0.5" strokeWidth="9" strokeLinecap="round" />
    <rect x="52" y="216" width="588" height="6" fill="#0F1F3D" fillOpacity="0.18" />

    {/* Roof Shingle Slope */}
    <polygon points="36,164 185,48 640,48 640,164" fill="url(#roofBefore1)" />
    <g stroke="#2C4A7C" strokeWidth="1.5" strokeOpacity="0.55">
      <line x1="80" y1="130" x2="640" y2="130" />
      <line x1="125" y1="95" x2="640" y2="95" />
      <line x1="168" y1="62" x2="640" y2="62" />
    </g>

    {/* Wet leaf & mud pile inside gutter */}
    <path
      d="M78 162 Q130 136 185 154 Q238 128 302 152 Q365 130 432 154 Q505 132 578 156 L640 162 L640 176 L78 176 Z"
      fill="#4A3222"
    />
    <ellipse cx="145" cy="152" rx="18" ry="8" transform="rotate(-14 145 152)" fill="#7C4A27" />
    <ellipse cx="215" cy="148" rx="20" ry="9" transform="rotate(12 215 148)" fill="#9E5624" />
    <ellipse cx="285" cy="150" rx="19" ry="8" transform="rotate(-8 285 150)" fill="#633D22" />
    <ellipse cx="355" cy="147" rx="21" ry="9" transform="rotate(15 355 147)" fill="#B45309" />
    <ellipse cx="430" cy="151" rx="18" ry="8" transform="rotate(-12 430 151)" fill="#78350F" />
    <ellipse cx="510" cy="148" rx="22" ry="9" transform="rotate(10 510 148)" fill="#92400E" />
    <ellipse cx="582" cy="152" rx="17" ry="8" transform="rotate(-15 582 152)" fill="#5C3A21" />
    <path d="M175 154 L192 126 M262 150 L248 122 M392 150 L414 124 M495 148 L516 122" stroke="#3D2616" strokeWidth="3" strokeLinecap="round" />

    {/* Gutter Trough */}
    <path d="M62 162 H640 V198 C640 204 634 206 628 206 H76 C66 206 62 198 62 190 Z" fill="#F6F4F0" stroke="#9AA5B4" strokeWidth="2" />
    <rect x="62" y="162" width="578" height="7" fill="#CBD5E1" />

    {/* Overflowing rainwater spilling over front edge */}
    <path d="M185 168 C184 206 176 250 182 296" stroke="#3B82C4" strokeWidth="5" strokeLinecap="round" />
    <path d="M294 166 C298 214 286 254 292 312" stroke="#3B82C4" strokeWidth="6" strokeLinecap="round" />
    <path d="M402 168 C398 208 408 246 402 294" stroke="#3B82C4" strokeWidth="5" strokeLinecap="round" />
    <circle cx="182" cy="312" r="4" fill="#3B82C4" />
    <circle cx="292" cy="328" r="5" fill="#3B82C4" />
    <circle cx="402" cy="310" r="4" fill="#3B82C4" />

    {/* Downspout (blocked at top elbow) */}
    <rect x="96" y="206" width="28" height="196" fill="#E2E8F0" stroke="#9AA5B4" strokeWidth="2" />
    <path d="M96 382 L70 402 L82 414 L124 394 Z" fill="#CBD5E1" stroke="#9AA5B4" strokeWidth="2" />
    <ellipse cx="110" cy="212" rx="12" ry="6" fill="#4A3222" />
  </svg>
);

export const CloggedGutterAfter: React.FC<SceneProps> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 640 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Illustration of the same house eave with clean empty gutter, clear downspout, and clean fascia"
  >
    <defs>
      <linearGradient id="skyAfter1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0F1F3D" />
        <stop offset="100%" stopColor="#2B528C" />
      </linearGradient>
      <linearGradient id="roofAfter1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#14284B" />
        <stop offset="100%" stopColor="#0F1F3D" />
      </linearGradient>
    </defs>
    <rect width="640" height="420" fill="url(#skyAfter1)" />
    <path d="M0 320 L140 250 L270 295 L420 230 L640 305 L640 420 L0 420 Z" fill="#0F1F3D" />

    {/* House Siding (clean) */}
    <rect x="70" y="218" width="570" height="202" fill="#F6F4F0" />
    <g stroke="#D9DEE5" strokeWidth="1.5">
      <line x1="70" y1="248" x2="640" y2="248" />
      <line x1="70" y1="278" x2="640" y2="278" />
      <line x1="70" y1="308" x2="640" y2="308" />
      <line x1="70" y1="338" x2="640" y2="338" />
      <line x1="70" y1="368" x2="640" y2="368" />
      <line x1="70" y1="398" x2="640" y2="398" />
    </g>

    {/* Window on right wall */}
    <rect x="440" y="256" width="110" height="118" fill="#0F1F3D" stroke="#FFFFFF" strokeWidth="5" />
    <line x1="495" y1="256" x2="495" y2="374" stroke="#FFFFFF" strokeWidth="3" />
    <line x1="440" y1="315" x2="550" y2="315" stroke="#FFFFFF" strokeWidth="3" />

    {/* Spotless White Fascia Board */}
    <rect x="52" y="182" width="588" height="38" fill="#FFFFFF" />
    <rect x="52" y="216" width="588" height="4" fill="#D9DEE5" />

    {/* Roof Shingle Slope */}
    <polygon points="36,164 185,48 640,48 640,164" fill="url(#roofAfter1)" />
    <g stroke="#2C4A7C" strokeWidth="1.5" strokeOpacity="0.6">
      <line x1="80" y1="130" x2="640" y2="130" />
      <line x1="125" y1="95" x2="640" y2="95" />
      <line x1="168" y1="62" x2="640" y2="62" />
    </g>
    <line x1="46" y1="162" x2="640" y2="162" stroke="#F26A1B" strokeWidth="3" />

    {/* Clean Empty Gutter Trough */}
    <path d="M62 162 H640 V198 C640 204 634 206 628 206 H76 C66 206 62 198 62 190 Z" fill="#FFFFFF" stroke="#D9DEE5" strokeWidth="2" />
    <rect x="62" y="162" width="578" height="6" fill="#F1F5F9" />
    <rect x="140" y="164" width="6" height="5" rx="1" fill="#F26A1B" />
    <rect x="280" y="164" width="6" height="5" rx="1" fill="#F26A1B" />
    <rect x="420" y="164" width="6" height="5" rx="1" fill="#F26A1B" />
    <rect x="560" y="164" width="6" height="5" rx="1" fill="#F26A1B" />

    {/* Clean Downspout & Proper Water Drops Outflow */}
    <rect x="96" y="206" width="28" height="196" fill="#FFFFFF" stroke="#D9DEE5" strokeWidth="2" />
    <rect x="93" y="254" width="34" height="8" rx="1" fill="#0F1F3D" />
    <rect x="93" y="336" width="34" height="8" rx="1" fill="#0F1F3D" />
    <path d="M96 382 L68 402 L80 415 L124 394 Z" fill="#FFFFFF" stroke="#D9DEE5" strokeWidth="2" />

    {/* Clean Sky-Blue Water Flow Out of Downspout */}
    <path d="M72 406 Q52 406 36 416" stroke="#3B82C4" strokeWidth="4" strokeLinecap="round" />
    <path d="M44 396 C44 396 52 405 52 410 A8 8 0 1 1 36 410 C36 405 44 396 44 396 Z" fill="#3B82C4" />
    <circle cx="24" cy="414" r="3.5" fill="#3B82C4" />
  </svg>
);

/* ============================================================================
   PAIR 2: Leaf-filled gutter vs clean gutter (fall)
   ============================================================================ */

export const FallLeavesBefore: React.FC<SceneProps> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 640 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Illustration of fall gutter packed high with autumn oak and maple leaves"
  >
    <rect width="640" height="420" fill="#14284B" />
    <circle cx="530" cy="120" r="88" fill="#C2410C" fillOpacity="0.65" />
    <circle cx="590" cy="165" r="70" fill="#D97706" fillOpacity="0.6" />
    <circle cx="70" cy="145" r="78" fill="#9A3412" fillOpacity="0.6" />

    {/* Beige New England Siding */}
    <rect x="0" y="232" width="640" height="188" fill="#E6DFD3" />
    <g stroke="#C9BFA9" strokeWidth="1.5">
      <line x1="0" y1="262" x2="640" y2="262" />
      <line x1="0" y1="292" x2="640" y2="292" />
      <line x1="0" y1="322" x2="640" y2="322" />
      <line x1="0" y1="352" x2="640" y2="352" />
      <line x1="0" y1="382" x2="640" y2="382" />
    </g>

    {/* Roof slope */}
    <polygon points="0,168 95,54 545,54 640,168" fill="#0F1F3D" />
    <g stroke="#2C4A7C" strokeWidth="1.5" strokeOpacity="0.5">
      <line x1="40" y1="125" x2="600" y2="125" />
      <line x1="70" y1="90" x2="570" y2="90" />
    </g>

    {/* Fascia stained below packed leaves */}
    <rect x="30" y="196" width="580" height="36" fill="#E2E8F0" />
    <path d="M180 206 V258 M340 206 V268 M480 206 V250" stroke="#78350F" strokeOpacity="0.4" strokeWidth="8" strokeLinecap="round" />

    {/* Mound of autumn leaves overflowing gutter */}
    <path
      d="M44 170 Q110 120 180 156 Q250 112 325 150 Q405 116 485 152 Q545 128 598 168 L598 182 L44 182 Z"
      fill="#7C2D12"
    />
    {[
      { x: 92, y: 152, c: '#EA580C', r: -20 },
      { x: 148, y: 144, c: '#D97706', r: 15 },
      { x: 205, y: 148, c: '#B45309', r: -10 },
      { x: 265, y: 138, c: '#F26A1B', r: 22 },
      { x: 325, y: 146, c: '#9A3412', r: -18 },
      { x: 385, y: 142, c: '#F59E0B', r: 12 },
      { x: 445, y: 146, c: '#C2410C', r: -14 },
      { x: 505, y: 142, c: '#D97706', r: 18 },
      { x: 556, y: 152, c: '#78350F', r: -8 },
    ].map((leaf) => (
      <ellipse
        key={leaf.x}
        cx={leaf.x}
        cy={leaf.y}
        rx="24"
        ry="11"
        transform={`rotate(${leaf.r} ${leaf.x} ${leaf.y})`}
        fill={leaf.c}
      />
    ))}

    {/* Gutter front face */}
    <rect x="34" y="168" width="572" height="36" rx="3" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
    <circle cx="135" cy="186" r="4" fill="#64748B" />
    <circle cx="315" cy="186" r="4" fill="#64748B" />
    <circle cx="495" cy="186" r="4" fill="#64748B" />
  </svg>
);

export const FallLeavesAfter: React.FC<SceneProps> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 640 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Illustration of fall gutter cleared completely with hidden hangers and clean fascia"
  >
    <rect width="640" height="420" fill="#14284B" />
    <circle cx="530" cy="120" r="88" fill="#C2410C" fillOpacity="0.65" />
    <circle cx="590" cy="165" r="70" fill="#D97706" fillOpacity="0.6" />
    <circle cx="70" cy="145" r="78" fill="#9A3412" fillOpacity="0.6" />

    {/* Beige New England Siding (clean) */}
    <rect x="0" y="232" width="640" height="188" fill="#F6F4F0" />
    <g stroke="#D9DEE5" strokeWidth="1.5">
      <line x1="0" y1="262" x2="640" y2="262" />
      <line x1="0" y1="292" x2="640" y2="292" />
      <line x1="0" y1="322" x2="640" y2="322" />
      <line x1="0" y1="352" x2="640" y2="352" />
      <line x1="0" y1="382" x2="640" y2="382" />
    </g>

    {/* Roof slope */}
    <polygon points="0,168 95,54 545,54 640,168" fill="#0F1F3D" />
    <g stroke="#2C4A7C" strokeWidth="1.5" strokeOpacity="0.5">
      <line x1="40" y1="125" x2="600" y2="125" />
      <line x1="70" y1="90" x2="570" y2="90" />
    </g>
    <line x1="16" y1="166" x2="624" y2="166" stroke="#F26A1B" strokeWidth="3" />

    {/* Spotless Fascia */}
    <rect x="30" y="196" width="580" height="36" fill="#FFFFFF" />

    {/* Clean Seamless Gutter Face */}
    <rect x="34" y="168" width="572" height="36" rx="3" fill="#FFFFFF" stroke="#D9DEE5" strokeWidth="2" />
    <rect x="34" y="168" width="572" height="7" fill="#F1F5F9" />
    <rect x="130" y="169" width="10" height="5" rx="1" fill="#F26A1B" />
    <rect x="310" y="169" width="10" height="5" rx="1" fill="#F26A1B" />
    <rect x="490" y="169" width="10" height="5" rx="1" fill="#F26A1B" />
    <circle cx="574" cy="186" r="4" fill="#3B82C4" />
  </svg>
);

/* ============================================================================
   PAIR 3: Leaking end cap vs resealed end cap
   ============================================================================ */

export const EndCapBefore: React.FC<SceneProps> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 640 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Illustration of a leaking gutter end cap dripping onto stained corner fascia"
  >
    <rect width="640" height="420" fill="#0F1F3D" />

    <rect x="210" y="190" width="430" height="230" fill="#E2E8F0" />
    <rect x="210" y="190" width="38" height="230" fill="#CBD5E1" />
    <path d="M214 218 C218 265 212 318 218 365" stroke="#64748B" strokeOpacity="0.6" strokeWidth="14" strokeLinecap="round" />

    <polygon points="150,152 245,56 640,56 640,152" fill="#14284B" />
    <line x1="150" y1="152" x2="640" y2="152" stroke="#64748B" strokeWidth="4" />

    <rect x="180" y="152" width="460" height="42" fill="#F1F5F9" />

    <path d="M180 144 H640 V192 H180 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
    <rect x="172" y="142" width="16" height="52" rx="2" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
    <path d="M188 148 L192 162 L187 176 L191 190" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />

    <path d="M184 194 V246" stroke="#3B82C4" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
    <path d="M184 264 C184 264 196 280 196 288 A12 12 0 1 1 172 288 C172 280 184 264 184 264 Z" fill="#3B82C4" />
    <path d="M184 322 C184 322 193 334 193 340 A9 9 0 1 1 175 340 C175 334 184 322 184 322 Z" fill="#3B82C4" />
    <ellipse cx="184" cy="396" rx="48" ry="10" fill="#3B82C4" fillOpacity="0.65" />
  </svg>
);

export const EndCapAfter: React.FC<SceneProps> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 640 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Illustration of a freshly resealed watertight gutter end cap with dry corner trim"
  >
    <rect width="640" height="420" fill="#0F1F3D" />

    <rect x="210" y="190" width="430" height="230" fill="#F6F4F0" />
    <rect x="210" y="190" width="38" height="230" fill="#FFFFFF" />

    <polygon points="150,152 245,56 640,56 640,152" fill="#14284B" />
    <line x1="150" y1="152" x2="640" y2="152" stroke="#F26A1B" strokeWidth="3.5" />

    <rect x="180" y="152" width="460" height="42" fill="#FFFFFF" />

    <path d="M180 144 H640 V192 H180 Z" fill="#FFFFFF" stroke="#D9DEE5" strokeWidth="2" />
    <rect x="172" y="142" width="16" height="52" rx="2" fill="#F8FAFC" stroke="#0F1F3D" strokeWidth="2" />

    <path d="M188 146 V190" stroke="#F26A1B" strokeWidth="5" strokeLinecap="round" />
    <rect x="120" y="388" width="130" height="16" rx="2" fill="#1E3A68" />
  </svg>
);
