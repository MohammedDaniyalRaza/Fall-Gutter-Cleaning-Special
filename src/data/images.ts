/**
 * Peakline Home Services — Image Slot Registry
 *
 * How <SmartImage slot="..." /> resolves media:
 *   Level 1: Local asset inside /public/images/... (used first)
 *   Level 2: Stable remote photo from images.unsplash.com
 *   Level 3: Custom SVG / CSS illustration fallback (zero broken images)
 *
 * Before & After Pair Slots (local-only, no remote fallback; renders inline SVG scenes unless BOTH before & after files exist):
 *   - beforeAfter1Before  -> /images/before-1.jpg
 *   - beforeAfter1After   -> /images/after-1.jpg
 *   - beforeAfter2Before  -> /images/before-2.jpg
 *   - beforeAfter2After   -> /images/after-2.jpg
 *   - beforeAfter3Before  -> /images/before-3.jpg
 *   - beforeAfter3After   -> /images/after-3.jpg
 *
 * Optional Promo Flyer Slot:
 *   - promoFlyer          -> /images/flyer.jpg
 *
 * Slot -> Local Path Reference (drop replacement files into /public/images/):
 *   - brandLogo           -> /images/logo.png
 *   - heroMain            -> /images/hero-gutter-run.jpg
 *   - servicesHero        -> /images/ba-full-line.jpg
 *   - projectsHero        -> /images/ba-oak-leaves.jpg
 *   - aboutHero           -> /images/roof-inspection.jpg
 *   - contactHero         -> /images/ba-miter-corner.jpg
 *   - faqHero             -> /images/ba-full-line.jpg
 *   - serviceCleaning     -> /images/ba-deck-gutter.jpg
 *   - serviceRepair       -> /images/clogged-downspout-1.jpg
 *   - serviceHangers      -> /images/ba-full-line.jpg
 *   - serviceResealing    -> /images/ba-reseal-hanger.jpg
 *   - cloggedDownspout    -> /images/clogged-downspout-2.jpg
 *   - cloggedDownspoutAlt -> /images/clogged-downspout-3.jpg
 *   - cloggedSludge       -> /images/clogged-sludge.jpg
 *   - cloggedValley       -> /images/clogged-valley.jpg
 *   - cloggedOverflow     -> /images/clogged-overflow.jpg
 *   - miterCorner         -> /images/ba-miter-corner.jpg
 *   - deckGutter          -> /images/ba-deck-gutter.jpg
 *   - alsoFlooring        -> /images/vinyl-flooring.jpg
 *   - alsoMaintenance     -> /images/property-maintenance.jpg
 */

export type IllustrationKey =
  | 'house'
  | 'gutter'
  | 'ridgeline'
  | 'topo'
  | 'water'
  | 'ladder';

export interface ImageSlotConfig {
  local: string;
  unsplash: string;
  illustration: IllustrationKey;
  alt: string;
  defaultObjectPosition?: string;
}

export const IMAGE_SLOTS = {
  brandLogo: {
    local: '/images/logo.png',
    unsplash: '',
    illustration: 'ridgeline',
    alt: 'Peakline Home Services logo',
    defaultObjectPosition: '50% 50%',
  },
  promoFlyer: {
    local: '/images/flyer.jpg',
    unsplash: '',
    illustration: 'house',
    alt: 'Peakline Home Services Fall Gutter Cleaning Special flyer',
    defaultObjectPosition: '50% 50%',
  },
  beforeAfter1Before: {
    local: '/images/before-1.jpg',
    unsplash: '',
    illustration: 'gutter',
    alt: 'Clogged gutter overflowing with wet leaves and stained fascia before service',
  },
  beforeAfter1After: {
    local: '/images/after-1.jpg',
    unsplash: '',
    illustration: 'gutter',
    alt: 'Clean empty gutter with clear downspout and unstained fascia after service',
  },
  beforeAfter2Before: {
    local: '/images/before-2.jpg',
    unsplash: '',
    illustration: 'gutter',
    alt: 'Leaf-filled fall gutter run packed with autumn leaves before cleaning',
  },
  beforeAfter2After: {
    local: '/images/after-2.jpg',
    unsplash: '',
    illustration: 'gutter',
    alt: 'Clean autumn gutter run with hidden hangers after cleaning',
  },
  beforeAfter3Before: {
    local: '/images/before-3.jpg',
    unsplash: '',
    illustration: 'water',
    alt: 'Leaking gutter end cap dripping onto fascia before resealing',
  },
  beforeAfter3After: {
    local: '/images/after-3.jpg',
    unsplash: '',
    illustration: 'water',
    alt: 'Resealed watertight gutter end cap after bare-metal sealing',
  },
  heroMain: {
    local: '/images/hero-gutter-run.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=75',
    illustration: 'house',
    alt: 'Cleaned aluminum gutter run along an asphalt shingle roof in New England',
    defaultObjectPosition: '75% 50%',
  },
  servicesHero: {
    local: '/images/ba-full-line.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=75',
    illustration: 'gutter',
    alt: 'Long residential roofline with cleaned gutters and hidden hangers',
    defaultObjectPosition: '76% 45%',
  },
  projectsHero: {
    local: '/images/ba-oak-leaves.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=75',
    illustration: 'ridgeline',
    alt: 'Before and after gutter clearing along a tree-lined Western Massachusetts home',
    defaultObjectPosition: '50% 45%',
  },
  aboutHero: {
    local: '/images/roof-inspection.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=75',
    illustration: 'ladder',
    alt: 'Technician inspecting and clearing roof gutter run during autumn maintenance',
    defaultObjectPosition: '50% 60%',
  },
  contactHero: {
    local: '/images/ba-miter-corner.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=75',
    illustration: 'topo',
    alt: 'Clean inside corner miter gutter above a backyard stone patio',
    defaultObjectPosition: '78% 55%',
  },
  faqHero: {
    local: '/images/ba-full-line.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=75',
    illustration: 'topo',
    alt: 'Clean residential roofline served by Peakline Home Services',
    defaultObjectPosition: '78% 45%',
  },
  serviceCleaning: {
    local: '/images/ba-deck-gutter.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=75',
    illustration: 'gutter',
    alt: 'Cleaned gutter run overlooking a backyard deck after debris removal',
    defaultObjectPosition: '75% 50%',
  },
  serviceRepair: {
    local: '/images/clogged-downspout-1.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1581578731548-c6464f3c3d2c?auto=format&fit=crop&w=1000&q=75',
    illustration: 'water',
    alt: 'Blocked downspout elbow cleared during gutter cleaning and repair service',
    defaultObjectPosition: '50% 55%',
  },
  serviceHangers: {
    local: '/images/ba-full-line.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=75',
    illustration: 'ridgeline',
    alt: 'Reinforced aluminum gutter secured with hidden hangers along roof fascia',
    defaultObjectPosition: '82% 55%',
  },
  serviceResealing: {
    local: '/images/ba-reseal-hanger.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1000&q=75',
    illustration: 'water',
    alt: 'Freshly sealed gutter outlet and end cap after thorough cleaning',
    defaultObjectPosition: '78% 50%',
  },
  beforeAfterClogged: {
    local: '/images/ba-oak-leaves.jpg',
    unsplash: '',
    illustration: 'gutter',
    alt: 'Gutter packed tightly with autumn oak leaves before service',
    defaultObjectPosition: '22% 50%',
  },
  beforeAfterClean: {
    local: '/images/ba-oak-leaves.jpg',
    unsplash: '',
    illustration: 'gutter',
    alt: 'Cleared and flushed aluminum gutter with clean downspout flow after service',
    defaultObjectPosition: '78% 50%',
  },
  cloggedDownspout: {
    local: '/images/clogged-downspout-2.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1581578731548-c6464f3c3d2c?auto=format&fit=crop&w=1000&q=75',
    illustration: 'water',
    alt: 'Compacted dirt and roots removed from a completely blocked downspout',
    defaultObjectPosition: '50% 55%',
  },
  cloggedDownspoutAlt: {
    local: '/images/clogged-downspout-3.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1581578731548-c6464f3c3d2c?auto=format&fit=crop&w=1000&q=75',
    illustration: 'water',
    alt: 'Downspout elbow cleared of organic buildup and root blockages',
    defaultObjectPosition: '50% 50%',
  },
  cloggedSludge: {
    local: '/images/clogged-sludge.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1509881715064-136301b92f3b?auto=format&fit=crop&w=1000&q=75',
    illustration: 'gutter',
    alt: 'Year-old leaf sludge and wet debris covering a gutter outlet',
    defaultObjectPosition: '50% 60%',
  },
  cloggedValley: {
    local: '/images/clogged-valley.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1509881715064-136301b92f3b?auto=format&fit=crop&w=1000&q=75',
    illustration: 'house',
    alt: 'Accumulated leaves piled in a roof valley above a rear deck',
    defaultObjectPosition: '50% 55%',
  },
  cloggedOverflow: {
    local: '/images/clogged-overflow.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1509881715064-136301b92f3b?auto=format&fit=crop&w=1000&q=75',
    illustration: 'water',
    alt: 'Clogged gutter corner causing rainwater to spill over near siding',
    defaultObjectPosition: '50% 60%',
  },
  miterCorner: {
    local: '/images/ba-miter-corner.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=75',
    illustration: 'gutter',
    alt: 'Before and after view of an inside corner gutter miter',
    defaultObjectPosition: '50% 55%',
  },
  deckGutter: {
    local: '/images/ba-deck-gutter.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=75',
    illustration: 'house',
    alt: 'Before and after view of residential gutter clearing above wooden deck',
    defaultObjectPosition: '50% 50%',
  },
  alsoFlooring: {
    local: '/images/vinyl-flooring.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=75',
    illustration: 'topo',
    alt: 'Interlocking vinyl plank flooring installation inside a New England home',
    defaultObjectPosition: '50% 50%',
  },
  alsoMaintenance: {
    local: '/images/property-maintenance.jpg',
    unsplash:
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=75',
    illustration: 'ladder',
    alt: 'General residential and commercial property maintenance tools and upkeep',
    defaultObjectPosition: '50% 50%',
  },
} satisfies Record<string, ImageSlotConfig>;

export type ImageSlotName = keyof typeof IMAGE_SLOTS;
