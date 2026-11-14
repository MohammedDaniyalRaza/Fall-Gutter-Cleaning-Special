import { ImageSlotName } from './images';

export type ProjectCategory =
  | 'All'
  | 'Gutter Cleaning'
  | 'Before & After'
  | 'Downspout Clearing'
  | 'Repair & Resealing';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  region: string;
  serviceSlug: string;
  summary: string;
  imageSlot: ImageSlotName;
  objectPosition?: string;
  isBeforeAfterPair?: boolean;
  beforePosition?: string;
  afterPosition?: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'All',
  'Before & After',
  'Gutter Cleaning',
  'Downspout Clearing',
  'Repair & Resealing',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'oak-leaf-run',
    title: 'Autumn Oak Leaf Clearing & Flush',
    category: 'Before & After',
    region: 'Western MA',
    serviceSlug: 'professional-gutter-cleaning',
    summary:
      'Front and side aluminum troughs packed end-to-end with wet oak leaves cleared by hand, flushed clean, and checked for steady pitch.',
    imageSlot: 'beforeAfterClean',
    isBeforeAfterPair: true,
    beforePosition: '22% 50%',
    afterPosition: '78% 50%',
  },
  {
    id: 'outlet-reseal-hanger',
    title: 'Outlet Resealing & Hidden Hanger Upgrade',
    category: 'Repair & Resealing',
    region: 'Northern CT',
    serviceSlug: 'end-cap-resealing',
    summary:
      'Removed decomposed leaf sludge around the drop outlet, resealed the joint cleanly, and anchored the gutter run with a heavy-duty hidden hanger.',
    imageSlot: 'serviceResealing',
    isBeforeAfterPair: true,
    beforePosition: '22% 50%',
    afterPosition: '78% 50%',
  },
  {
    id: 'full-ridge-run',
    title: 'Full Roofline Clean & Hanger Check',
    category: 'Before & After',
    region: 'Western MA',
    serviceSlug: 'hidden-hanger-installation',
    summary:
      'Long straight residential roofline restored from overflowing autumn debris to clean, unobstructed flow along every hidden hanger.',
    imageSlot: 'servicesHero',
    isBeforeAfterPair: true,
    beforePosition: '22% 50%',
    afterPosition: '78% 50%',
  },
  {
    id: 'miter-corner-patio',
    title: 'Inside Miter Corner Clearing Above Patio',
    category: 'Gutter Cleaning',
    region: 'Northern CT',
    serviceSlug: 'professional-gutter-cleaning',
    summary:
      'Inside roof valley corner cleared of packed leaves and tested over a backyard stone patio with zero debris left below.',
    imageSlot: 'miterCorner',
    isBeforeAfterPair: true,
    beforePosition: '22% 55%',
    afterPosition: '78% 55%',
  },
  {
    id: 'deck-gutter-restoration',
    title: 'Rear Deck Gutter Run Restoration',
    category: 'Gutter Cleaning',
    region: 'Western MA',
    serviceSlug: 'professional-gutter-cleaning',
    summary:
      'Compacted pine needles and dark organic buildup cleared along a two-story rear deck roofline with full yard and deck cleanup.',
    imageSlot: 'deckGutter',
    isBeforeAfterPair: true,
    beforePosition: '22% 50%',
    afterPosition: '78% 50%',
  },
  {
    id: 'downspout-root-plug',
    title: '100% Blocked Downspout Elbow Clearing',
    category: 'Downspout Clearing',
    region: 'Western MA',
    serviceSlug: 'gutter-cleaning-repair',
    summary:
      'Disassembled and extracted a dense plug of compacted dirt and fine roots choking an entire downspout line, then flushed clear.',
    imageSlot: 'cloggedDownspout',
    objectPosition: '50% 55%',
  },
  {
    id: 'sludge-outlet-clearing',
    title: 'Year-Old Sludge & Outlet Removal',
    category: 'Downspout Clearing',
    region: 'Northern CT',
    serviceSlug: 'professional-gutter-cleaning',
    summary:
      'Wet decomposed organic sludge sealing off a downspout outlet removed by hand and flushed until water drained cleanly.',
    imageSlot: 'cloggedSludge',
    objectPosition: '50% 60%',
  },
  {
    id: 'valley-leaf-pileup',
    title: 'Roof Valley & Gutter Corner Clearing',
    category: 'Gutter Cleaning',
    region: 'Western MA',
    serviceSlug: 'professional-gutter-cleaning',
    summary:
      'Heavy leaf buildup gathered inside a steep roof valley above a wooden deck cleared before winter freeze-up.',
    imageSlot: 'cloggedValley',
    objectPosition: '50% 55%',
  },
];
