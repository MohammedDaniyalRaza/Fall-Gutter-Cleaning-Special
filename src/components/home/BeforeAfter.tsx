import React, { useEffect, useRef, useState } from 'react';
import { IMAGE_SLOTS, ImageSlotName } from '../../data/images';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../lib/utils';
import {
  CloggedGutterAfter,
  CloggedGutterBefore,
  EndCapAfter,
  EndCapBefore,
  FallLeavesAfter,
  FallLeavesBefore,
} from '../illustrations/BeforeAfterScenes';
import { SectionHeading } from '../ui/SectionHeading';

export interface BeforeAfterPair {
  id: string;
  label: string;
  location: string;
  summary: string;
  beforeSlot: ImageSlotName;
  afterSlot: ImageSlotName;
  BeforeIllustration: React.FC<{ className?: string }>;
  AfterIllustration: React.FC<{ className?: string }>;
}

export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: 'clogged-vs-clean',
    label: 'Clogged gutter vs clean gutter',
    location: 'Western MA & CT',
    summary:
      'Packed leaves, twigs, and overflow stains replaced by a clean empty trough, clear downspout, and spotless fascia.',
    beforeSlot: 'beforeAfter1Before',
    afterSlot: 'beforeAfter1After',
    BeforeIllustration: CloggedGutterBefore,
    AfterIllustration: CloggedGutterAfter,
  },
  {
    id: 'fall-leaves-vs-clean',
    label: 'Leaf-filled gutter vs clean gutter (fall)',
    location: 'Autumn Clearing',
    summary:
      'Heavy fall oak and maple buildup cleared completely, with failing spikes swapped out for concealed hidden hangers.',
    beforeSlot: 'beforeAfter2Before',
    afterSlot: 'beforeAfter2After',
    BeforeIllustration: FallLeavesBefore,
    AfterIllustration: FallLeavesAfter,
  },
  {
    id: 'leaking-end-cap-vs-resealed',
    label: 'Leaking end cap vs resealed end cap',
    location: 'Seam & Corner Care',
    summary:
      'Cracked, dripping end-cap caulk stripped back to bare metal and resealed with flexible elastomeric gutter sealant.',
    beforeSlot: 'beforeAfter3Before',
    afterSlot: 'beforeAfter3After',
    BeforeIllustration: EndCapBefore,
    AfterIllustration: EndCapAfter,
  },
];

function useLocalPairAvailable(beforeSlot: ImageSlotName, afterSlot: ImageSlotName) {
  const [bothAvailable, setBothAvailable] = useState(false);
  const beforePath = IMAGE_SLOTS[beforeSlot].local;
  const afterPath = IMAGE_SLOTS[afterSlot].local;

  useEffect(() => {
    let cancelled = false;
    setBothAvailable(false);

    if (!beforePath || !afterPath) return;

    const loadImg = (src: string) =>
      new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img.naturalWidth > 0);
        img.onerror = () => resolve(false);
        img.src = src;
      });

    Promise.all([loadImg(beforePath), loadImg(afterPath)]).then(([bOk, aOk]) => {
      if (!cancelled) {
        setBothAvailable(bOk && aOk);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [beforePath, afterPath]);

  return { bothAvailable, beforePath, afterPath };
}

interface BeforeAfterProps {
  elevation?: string;
  initialPairId?: string;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({
  elevation = 'ELEV. 04 · VISUAL COMPARISON',
  initialPairId,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pairIdx, setPairIdx] = useState(() => {
    if (!initialPairId) return 0;
    const found = BEFORE_AFTER_PAIRS.findIndex((p) => p.id === initialPairId);
    return found >= 0 ? found : 0;
  });
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useReveal(sectionRef);

  const activePair = BEFORE_AFTER_PAIRS[pairIdx];
  const { bothAvailable, beforePath, afterPath } = useLocalPairAvailable(
    activePair.beforeSlot,
    activePair.afterSlot
  );

  const updateFromClientX = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, Math.round(raw))));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const { BeforeIllustration, AfterIllustration } = activePair;

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            elevation={elevation}
            titleLight="Drag to compare"
            titleBold="before vs. after."
            subtitle="Slide across the roofline to compare neglected clogs, fall leaf buildup, and leaking end caps against Peakline-cleared systems."
          />
        </div>

        {/* 3 Scene Pair Selector Buttons */}
        <div data-reveal className="flex flex-wrap gap-2.5 mb-8">
          {BEFORE_AFTER_PAIRS.map((pair, idx) => (
            <button
              key={pair.id}
              type="button"
              onClick={() => {
                setPairIdx(idx);
                setPosition(50);
              }}
              className={cn(
                'px-4 py-2 text-xs font-semibold rounded-sm border transition-colors cursor-pointer whitespace-nowrap',
                pairIdx === idx
                  ? 'bg-[#0F1F3D] border-[#0F1F3D] text-white'
                  : 'bg-[#F6F4F0] border-[#D9DEE5] text-[#0F1F3D] hover:border-[#F26A1B]'
              )}
            >
              {pair.label}
            </button>
          ))}
        </div>

        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div
              ref={trackRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              role="slider"
              tabIndex={0}
              aria-label={`Before and after comparison: ${activePair.label}`}
              aria-valuemin={4}
              aria-valuemax={96}
              aria-valuenow={position}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setPosition((p) => Math.max(4, p - 5));
                if (e.key === 'ArrowRight') setPosition((p) => Math.min(96, p + 5));
              }}
              className="relative aspect-[16/10.5] w-full rounded-sm overflow-hidden border border-[#D9DEE5] shadow-lg select-none cursor-ew-resize touch-none bg-[#0F1F3D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A1B]"
            >
              {/* AFTER Layer (underneath) */}
              <div className="absolute inset-0">
                {bothAvailable ? (
                  <img
                    src={afterPath}
                    alt={`${activePair.label} — After`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <AfterIllustration className="w-full h-full object-cover" />
                )}
                <span className="absolute top-4 right-4 z-10 bg-[#F26A1B] text-white font-mono text-[11px] font-semibold uppercase tracking-[0.16em] px-3 py-1 rounded-sm shadow">
                  AFTER
                </span>
              </div>

              {/* BEFORE Layer (clipped left portion) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                {bothAvailable ? (
                  <img
                    src={beforePath}
                    alt={`${activePair.label} — Before`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <BeforeIllustration className="w-full h-full object-cover" />
                )}
                <span className="absolute top-4 left-4 z-10 bg-[#091429] border border-white/25 text-white font-mono text-[11px] font-semibold uppercase tracking-[0.16em] px-3 py-1 rounded-sm shadow">
                  BEFORE
                </span>
              </div>

              {/* Divider Line & Orange Peak-Shaped Grip Handle */}
              <div
                aria-hidden="true"
                className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_14px_rgba(0,0,0,0.6)]"
                style={{ left: `${position}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-sm bg-[#F26A1B] border-2 border-white text-white shadow-xl flex items-center justify-center">
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 9L1 9M1 9L4 6M1 9L4 12"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 13L11 4L15 13"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 9L21 9M21 9L18 6M21 9L18 12"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <div className="rounded-sm border border-[#D9DEE5] bg-[#F6F4F0] p-6 space-y-4">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#F26A1B]">
                {activePair.location}
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0F1F3D]">
                {activePair.label}
              </h3>
              <p className="text-sm sm:text-base text-[#6B7686] leading-relaxed">
                {activePair.summary}
              </p>

              <div className="pt-3 border-t border-[#D9DEE5] flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPosition(12)}
                  className="px-3 py-1.5 text-xs font-mono uppercase rounded-sm border border-[#D9DEE5] bg-white hover:border-[#0F1F3D] cursor-pointer"
                >
                  Before
                </button>
                <button
                  type="button"
                  onClick={() => setPosition(50)}
                  className="px-3 py-1.5 text-xs font-mono uppercase rounded-sm border border-[#D9DEE5] bg-white hover:border-[#0F1F3D] cursor-pointer"
                >
                  50 / 50
                </button>
                <button
                  type="button"
                  onClick={() => setPosition(88)}
                  className="px-3 py-1.5 text-xs font-mono uppercase rounded-sm border border-[#D9DEE5] bg-white hover:border-[#0F1F3D] cursor-pointer"
                >
                  After
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
