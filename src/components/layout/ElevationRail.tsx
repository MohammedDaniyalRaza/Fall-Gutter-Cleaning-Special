import React, { useEffect, useState } from 'react';

export const ElevationRail: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
      const ratio = Math.min(1, Math.max(0, window.scrollY / docHeight));
      setProgress(ratio);
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  const altitudeFeet = Math.round(progress * 100);
  const activeStage =
    progress < 0.25 ? 'BASE CAMP' : progress < 0.78 ? 'RIDGELINE' : 'SUMMIT';

  return (
    <aside
      aria-hidden="true"
      className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3 pointer-events-none select-none"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6B7686] [writing-mode:vertical-rl] rotate-180">
        SUMMIT
      </span>

      <div className="relative w-px h-44 bg-[#6B7686]/25">
        <div
          className="absolute bottom-0 left-0 w-full bg-[#F26A1B] origin-bottom transition-transform duration-150"
          style={{
            height: '100%',
            transform: `scaleY(${progress})`,
          }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#F26A1B] border border-white shadow-sm transition-all duration-150"
          style={{
            bottom: `calc(${progress * 100}% - 5px)`,
          }}
        />
      </div>

      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6B7686] [writing-mode:vertical-rl] rotate-180">
        BASE CAMP
      </span>

      <div className="mt-1 px-1.5 py-0.5 bg-[#0F1F3D]/85 text-white rounded-sm font-mono text-[9px] tracking-widest tabular-nums">
        {altitudeFeet}% · {activeStage}
      </div>
    </aside>
  );
};
