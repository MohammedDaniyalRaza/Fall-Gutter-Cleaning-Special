import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'navy' | 'outline' | 'outlineLight' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  to: string;
  href?: undefined;
  onClick?: () => void;
};

type ButtonAsAnchor = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: undefined;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#F26A1B] text-white hover:bg-[#FF8A3D] shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#F26A1B] focus-visible:ring-offset-2',
  navy:
    'bg-[#0F1F3D] text-white hover:bg-[#1E3A68] shadow-sm focus-visible:ring-2 focus-visible:ring-[#0F1F3D] focus-visible:ring-offset-2',
  outline:
    'border border-[#0F1F3D]/25 text-[#0F1F3D] bg-transparent hover:border-[#0F1F3D] hover:bg-[#0F1F3D]/5 focus-visible:ring-2 focus-visible:ring-[#0F1F3D]',
  outlineLight:
    'border border-white/30 text-white bg-white/5 hover:bg-white/15 hover:border-white/60 focus-visible:ring-2 focus-visible:ring-white',
  ghost:
    'text-[#0F1F3D] hover:text-[#F26A1B] bg-transparent',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}) => {
  const baseClasses = cn(
    'group relative inline-flex items-center justify-center gap-2 font-semibold tracking-tight rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer overflow-hidden select-none active:scale-[0.98]',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  const shineLayer =
    variant === 'primary' || variant === 'navy' ? (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"
      />
    ) : null;

  if ('to' in rest && rest.to !== undefined) {
    const { to, onClick } = rest;
    return (
      <Link to={to} onClick={onClick} className={baseClasses}>
        {shineLayer}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorProps } = rest;
    return (
      <a href={href} className={baseClasses} {...anchorProps}>
        {shineLayer}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={baseClasses} {...buttonProps}>
      {shineLayer}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
};
