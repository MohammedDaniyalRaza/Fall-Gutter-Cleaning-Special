export interface NavLinkItem {
  label: string;
  to: string;
}

export interface PromoConfig {
  active: boolean;
  title: string;
  headlineTop: string;
  headlineBottom: string;
  priceLabel: string;
  note: string;
  cta: string;
}

export const SITE = {
  businessName: 'Peakline Home Services',
  shortName: 'PEAKLINE',
  tagline: 'Service at a Higher Standard.',
  serviceArea: 'Western MA & Connecticut and nearby communities',
  serviceAreaShort: 'Western MA & CT',
  /**
   * Leave phone as an empty string "" until a number is assigned.
   * When phone is empty, click-to-call buttons are hidden and replaced by
   * "Get a Free Quote" and "Message on Facebook".
   * Filling in a phone string (e.g. "(413) 555-0199") activates call buttons everywhere.
   */
  phone: '',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61594098189735',
  promo: {
    active: true,
    title: 'Fall Gutter Cleaning Special',
    headlineTop: 'FALL GUTTER',
    headlineBottom: 'CLEANING SPECIAL',
    priceLabel: 'Starting at $150',
    note: 'Single-family, one-story homes',
    cta: 'Message us to book!',
  } as PromoConfig,
  navLinks: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ] as NavLinkItem[],
  safeHighlights: [
    { label: 'Core Gutter Services', value: '4 Core Services' },
    { label: 'Property Scope', value: 'Residential & Commercial' },
    { label: 'Service Region', value: 'Western MA & CT' },
    { label: 'Upfront Pricing', value: 'Free Estimates' },
  ],
  serviceTowns: {
    massachusetts: [
      'Springfield',
      'Northampton',
      'Amherst',
      'Westfield',
      'Holyoke',
      'Chicopee',
      'Longmeadow',
      'Agawam',
      'Easthampton',
      'Hadley',
    ],
    connecticut: [
      'Enfield',
      'Suffield',
      'Windsor',
      'Granby',
      'Simsbury',
      'West Hartford',
      'Bloomfield',
      'East Granby',
      'Somers',
      'Ellington',
    ],
  },
} as const;
