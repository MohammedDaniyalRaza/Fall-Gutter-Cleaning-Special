import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface AccordionItemData {
  id?: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  dark?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  dark = false,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      className={cn(
        'divide-y',
        dark ? 'divide-white/15 border-y border-white/15' : 'divide-[#D9DEE5] border-y border-[#D9DEE5]',
        className
      )}
    >
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.id || item.question} className="py-1">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A1B]"
            >
              <span
                className={cn(
                  'font-display text-lg sm:text-xl font-semibold tracking-tight transition-colors',
                  dark
                    ? isOpen
                      ? 'text-[#F26A1B]'
                      : 'text-white group-hover:text-[#FF8A3D]'
                    : isOpen
                      ? 'text-[#F26A1B]'
                      : 'text-[#0F1F3D] group-hover:text-[#F26A1B]'
                )}
              >
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'shrink-0 w-9 h-9 rounded-sm border flex items-center justify-center transition-colors',
                  isOpen
                    ? 'bg-[#F26A1B] border-[#F26A1B] text-white'
                    : dark
                      ? 'border-white/20 text-white group-hover:border-[#F26A1B]'
                      : 'border-[#D9DEE5] text-[#0F1F3D] group-hover:border-[#F26A1B]'
                )}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      'pb-6 pr-8 text-base leading-relaxed max-w-3xl',
                      dark ? 'text-[#D9DEE5]' : 'text-[#6B7686]'
                    )}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
