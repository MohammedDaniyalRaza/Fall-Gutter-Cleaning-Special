import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
}

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  icon?: React.ReactNode;
  error?: string;
  required?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  icon,
  error,
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(() =>
    Math.max(
      0,
      options.findIndex((o) => o.value === value)
    )
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const labelId = useId();

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const idx = options.findIndex((o) => o.value === value);
      setHighlightedIndex(idx >= 0 ? idx : 0);
    }
  }, [isOpen, options, value]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!isOpen) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (options[highlightedIndex]) {
          onChange(options[highlightedIndex].value);
          setIsOpen(false);
        }
        break;
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div ref={containerRef} className={cn('relative w-full', error && 'animate-shake')}>
      <label
        id={labelId}
        className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#D9DEE5] mb-1.5"
      >
        {label}
        {required && <span className="text-[#F26A1B] ml-1">*</span>}
      </label>

      <button
        type="button"
        aria-labelledby={labelId}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={cn(
          'w-full flex items-center justify-between gap-3 rounded-sm border bg-[#0F1F3D] px-3.5 py-3 text-left text-sm transition-colors duration-200 cursor-pointer focus:outline-none',
          isOpen
            ? 'border-[#F26A1B] ring-2 ring-[#F26A1B]/30'
            : error
              ? 'border-red-400 ring-1 ring-red-400/30'
              : 'border-white/20 hover:border-white/40'
        )}
      >
        <span className="flex items-center gap-2.5 min-w-0">
          {icon && <span className="text-[#F26A1B] shrink-0">{icon}</span>}
          <span
            className={cn(
              'truncate',
              selectedOption ? 'text-white font-medium' : 'text-[#D9DEE5]/60'
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>
        <ChevronDown
          size={16}
          className={cn(
            'text-[#D9DEE5] shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180 text-[#F26A1B]'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id={listboxId}
            role="listbox"
            aria-labelledby={labelId}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 z-50 mt-1.5 max-h-60 w-full overflow-y-auto peak-scrollbar rounded-sm border border-white/20 bg-[#091429] py-1 shadow-2xl"
          >
            {options.map((option, idx) => {
              const isSelected = option.value === value;
              const isHighlighted = idx === highlightedIndex;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm cursor-pointer transition-colors',
                    isHighlighted ? 'bg-[#1E3A68] text-white' : 'text-[#D9DEE5]',
                    isSelected && 'text-white font-semibold'
                  )}
                >
                  <div className="min-w-0">
                    <div className="truncate">{option.label}</div>
                    {option.description && (
                      <div className="text-xs text-[#D9DEE5]/65 truncate mt-0.5">
                        {option.description}
                      </div>
                    )}
                  </div>
                  {isSelected && <Check size={15} className="text-[#F26A1B] shrink-0" />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      {error && (
        <p className="mt-1.5 text-xs text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
