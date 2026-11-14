export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export function formatPhoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return digits ? `tel:+1${digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits}` : '';
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
