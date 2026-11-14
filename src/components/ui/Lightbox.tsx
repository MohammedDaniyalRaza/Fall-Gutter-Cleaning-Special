import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ProjectItem } from '../../data/projects';
import { SmartImage } from './SmartImage';

interface LightboxProps {
  items: ProjectItem[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  activeIndex,
  onClose,
  onChangeIndex,
}) => {
  const isOpen = activeIndex !== null && items[activeIndex] !== undefined;
  const activeItem = isOpen && activeIndex !== null ? items[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && activeIndex !== null) {
        onChangeIndex((activeIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft' && activeIndex !== null) {
        onChangeIndex((activeIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, activeIndex, items.length, onClose, onChangeIndex]);

  return (
    <AnimatePresence>
      {isOpen && activeItem && activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#091429]/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={onClose}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0F1F3D] border border-white/15 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10">
              <div className="min-w-0">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F26A1B]">
                  {activeItem.category} · {activeItem.region}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white truncate mt-0.5">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close photo viewer"
                className="shrink-0 w-10 h-10 rounded-sm border border-white/20 text-white hover:border-[#F26A1B] hover:text-[#F26A1B] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative bg-[#091429] aspect-[4/3] sm:aspect-[16/10] w-full">
              <SmartImage
                slot={activeItem.imageSlot}
                alt={activeItem.title}
                objectPosition={activeItem.objectPosition || '50% 50%'}
                className="w-full h-full"
                imgClassName="object-contain sm:object-cover"
              />

              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={() =>
                      onChangeIndex((activeIndex - 1 + items.length) % items.length)
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-[#091429]/85 border border-white/20 text-white hover:border-[#F26A1B] hover:bg-[#F26A1B] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={() => onChangeIndex((activeIndex + 1) % items.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-[#091429]/85 border border-white/20 text-white hover:border-[#F26A1B] hover:bg-[#F26A1B] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#14284B]">
              <p className="text-sm text-[#D9DEE5] leading-relaxed">{activeItem.summary}</p>
              <span className="font-mono text-xs text-[#D9DEE5]/70 tabular-nums shrink-0">
                {activeIndex + 1} / {items.length}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
