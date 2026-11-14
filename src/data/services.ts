import { ImageSlotName } from './images';

export interface ServiceStep {
  title: string;
  detail: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface CoreService {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  summary: string;
  imageSlot: ImageSlotName;
  secondaryImageSlot: ImageSlotName;
  iconName: 'droplets' | 'wrench' | 'shield' | 'layers';
  problemHeading: string;
  problemCopy: string;
  whatWeDo: string[];
  steps: ServiceStep[];
  benefits: string[];
  faqs: ServiceFAQ[];
}

export const CORE_SERVICES: CoreService[] = [
  {
    id: 'cleaning',
    number: '01',
    slug: 'professional-gutter-cleaning',
    title: 'Professional Gutter Cleaning',
    shortTitle: 'Gutter Cleaning',
    category: 'Residential & Commercial',
    tagline: 'Hand-cleared troughs, flushed downspouts, and spotless ground cleanup.',
    summary:
      'Leaves, pine needles, roof grit, and spring seed pods quickly pack gutters into heavy wet sludge. We clear every run by hand, flush every downspout, and leave your yard and walkways clean.',
    imageSlot: 'serviceCleaning',
    secondaryImageSlot: 'cloggedValley',
    iconName: 'droplets',
    problemHeading: 'When gutters fill up, rainwater has nowhere safe to go.',
    problemCopy:
      'Packed leaves and decomposed sludge block water from reaching the downspout. During heavy New England rainstorms, water cascades over the front edge and behind the gutter, soaking fascia boards, staining siding, pooling beside your foundation, and freezing into heavy ice dams when temperatures drop.',
    whatWeDo: [
      'Hand removal of all leaves, twigs, shingle grit, and organic sludge from gutters and roof valleys',
      'Full downspout clearing—removing compacted plugs and root growth at elbows and ground outlets',
      'High-flow water flush test on every downspout to confirm unobstructed drainage away from the foundation',
      'Visual inspection of pitch, miter corners, hangers, and end caps during service',
      'Complete yard, deck, patio, and driveway debris cleanup before we pack up our ladders',
    ],
    steps: [
      {
        title: 'Roofline & Ladder Setup',
        detail: 'We position stabilized ladders with standoffs to protect your gutters, siding, and landscaping beds.',
      },
      {
        title: 'Hand Debris Removal',
        detail: 'All dry leaves and wet sludge are scooped directly into buckets rather than thrown onto your lawn.',
      },
      {
        title: 'Downspout Clearing & Flush',
        detail: 'Every downspout is checked, cleared of hidden plugs, and water-tested for smooth outflow.',
      },
      {
        title: 'Ground Cleanup & Final Walkaround',
        detail: 'Patios, decks, and walkways are blown clear and we review anything spotted along the roofline.',
      },
    ],
    benefits: [
      'Helps prevent fascia rot, soffit staining, and basement moisture intrusion',
      'Reduces winter ice dam pressure along eaves and roof valleys',
      'Protects landscaping beds and walkways from waterfall washout',
      'Safe, insured ladder work with zero mess left behind',
    ],
    faqs: [
      {
        question: 'How often should gutters be cleaned in Western MA and Connecticut?',
        answer:
          'Most homes surrounded by maples, oaks, or pines benefit from two cleanings a year—once in late spring after pollen and seed pods drop, and once in late autumn after the leaves finish falling.',
      },
      {
        question: 'Do you clean out the downspouts too, or only the top troughs?',
        answer:
          'We always clear and flush the downspouts. Cleaning the trough without clearing the downspout leaves the bottleneck right where water needs to exit.',
      },
      {
        question: 'Do I need to be home during the cleaning?',
        answer:
          'No—as long as we have clear exterior access around your home and access to an outdoor water spigot for flush testing, we can complete the work and follow up with photos.',
      },
    ],
  },
  {
    id: 'cleaning-repair',
    number: '02',
    slug: 'gutter-cleaning-repair',
    title: 'Gutter Cleaning + Repair',
    shortTitle: 'Cleaning + Repair',
    category: 'Full System Care',
    tagline: 'Clear the debris and fix sagging pitches, loose elbows, and leaks in one visit.',
    summary:
      'Cleaning often uncovers the mechanical wear hiding underneath wet debris—pulled spikes, separated seams, or pitched low spots holding standing water. We clean and restore proper drainage together.',
    imageSlot: 'serviceRepair',
    secondaryImageSlot: 'cloggedDownspout',
    iconName: 'wrench',
    problemHeading: 'Wet debris is heavy—and it slowly pulls gutter systems out of alignment.',
    problemCopy:
      'A single run of water-logged leaves puts tremendous downward strain on aluminum gutters. Over several seasons, gutters sag away from the fascia, seams open up, elbows detach, and standing water breeds mosquitoes in summer and freezes solid in winter.',
    whatWeDo: [
      'Complete gutter and downspout cleaning paired with full roofline hardware inspection',
      'Re-pitching sagging sections so rainwater flows steadily toward each downspout outlet',
      'Re-securing loose downspout straps, elbows, and separated slip joints',
      'Spot replacement of failing spikes with structural hidden screw-in hangers',
      'Sealing leaking miters, outlets, and seam joints with exterior-grade gutter sealant',
    ],
    steps: [
      {
        title: 'Clear & Expose the System',
        detail: 'We remove every pound of packed debris so we can accurately see the slope and condition of the metal.',
      },
      {
        title: 'Diagnose Slope & Joints',
        detail: 'Using water flow checks, we pinpoint low spots, loose fasteners, and weeping corners.',
      },
      {
        title: 'Structural Re-Fastening & Sealing',
        detail: 'Loose sections are raised, re-pitched, secured into solid fascia framing, and sealed tight.',
      },
      {
        title: 'System Flow Verification',
        detail: 'We flush the repaired runs to confirm zero pooling and leak-free joints.',
      },
    ],
    benefits: [
      'Solves both the clog and the structural issue in one coordinated appointment',
      'Stops standing water from pulling gutters further off the fascia board',
      'Extends the working life of existing aluminum gutters without unnecessary replacement',
      'Clear, upfront estimate before any repair work begins',
    ],
    faqs: [
      {
        question: 'Can sagging gutters be fixed without replacing the whole gutter?',
        answer:
          'In many cases, yes. If the aluminum trough itself is sound, pulling out failing spikes, resetting the pitch, and fastening with heavy-duty hidden hangers restores both strength and proper drainage.',
      },
      {
        question: 'What if you find unexpected damage while cleaning?',
        answer:
          'We will document what we see, explain your options clearly, and give you a straightforward price before performing extra repairs.',
      },
    ],
  },
  {
    id: 'hidden-hangers',
    number: '03',
    slug: 'hidden-hanger-installation',
    title: 'Hidden Hanger Installation',
    shortTitle: 'Hidden Hangers',
    category: 'Structural Upgrade',
    tagline: 'Replace failing gutter spikes with heavy-duty concealed screw hangers.',
    summary:
      'Old spike-and-ferrule fasteners gradually back out of wood fascia as seasons expand and contract. We install heavy-gauge aluminum hidden hangers screwed directly into solid framing for lasting strength.',
    imageSlot: 'serviceHangers',
    secondaryImageSlot: 'miterCorner',
    iconName: 'shield',
    problemHeading: 'Smooth nails loosen over time—especially through New England freeze-thaw cycles.',
    problemCopy:
      'Older gutters were often hung with long smooth spikes driven through ferrules. Every winter freeze and summer thaw nudges those smooth nails outward, leaving gaps between the gutter and fascia where roof runoff slips straight down your exterior wall.',
    whatWeDo: [
      'Removal of backed-out, bent, or loose traditional gutter spikes and ferrules',
      'Installation of internal heavy-duty aluminum hidden hangers spaced consistently along the run',
      'Long coated hex-head screws driven securely into solid fascia and rafter tails',
      'Re-alignment of the gutter lip tight beneath the drip edge flashing',
      'Clean, seamless exterior appearance with zero exposed nail heads along the gutter face',
    ],
    steps: [
      {
        title: 'Inspect Fascia & Existing Fasteners',
        detail: 'We check fascia soundness and mark rafter tail locations for maximum holding power.',
      },
      {
        title: 'Remove Failing Spikes',
        detail: 'Backed-out spikes are carefully extracted without bending or creasing the gutter front.',
      },
      {
        title: 'Reset Pitch & Drive Hidden Hangers',
        detail: 'Gutter troughs are lifted flush under the drip edge and anchored with screw-in internal brackets.',
      },
      {
        title: 'Strength & Drainage Check',
        detail: 'We verify rigid alignment along the entire run and confirm water flows cleanly to the outlet.',
      },
    ],
    benefits: [
      'Far greater pull-out resistance against wet snow, ice weight, and heavy rain',
      'Eliminates unsightly protruding spike heads along your roofline',
      'Closes gaps behind the gutter so water cannot rot the fascia behind it',
      'Clean internal bracket design that does not snag debris easily',
    ],
    faqs: [
      {
        question: 'Why are hidden hangers better than gutter spikes?',
        answer:
          'Spikes rely on smooth friction in wood and work loose with seasonal temperature swings. Hidden hangers use threaded screws anchored into solid wood and clip underneath the gutter lip for dramatically stronger support.',
      },
      {
        question: 'Can hidden hangers be added to my existing gutters?',
        answer:
          'Yes. Standard 5-inch and 6-inch K-style aluminum gutters are ideal candidates for retrofitting with hidden hangers.',
      },
    ],
  },
  {
    id: 'end-cap-resealing',
    number: '04',
    slug: 'end-cap-resealing',
    title: 'End Cap Resealing',
    shortTitle: 'End Cap Resealing',
    category: 'Leak Prevention',
    tagline: 'Stop dripping corners, end caps, and downspout outlets before fascia rot sets in.',
    summary:
      'Brittle, cracked sealant at end caps and corners creates steady drips over porches, walkways, and siding. We strip old failed caulk, prep the bare metal, and apply flexible weatherproof gutter seam sealant.',
    imageSlot: 'serviceResealing',
    secondaryImageSlot: 'cloggedSludge',
    iconName: 'layers',
    problemHeading: 'A tiny drip at the end cap becomes a sheet of ice on your steps in January.',
    problemCopy:
      'UV sunlight and extreme New England temperature swings dry out original gutter caulking within a few years. Once the seal shrinks or cracks at an end cap, inside miter, or outlet drop, water leaks right onto steps, decks, and siding corners.',
    whatWeDo: [
      'Complete scraping and removal of dried, peeling, or failed old gutter caulk',
      'Thorough cleaning and drying of the aluminum seam so new sealant bonds directly to bare metal',
      'Tightening or crimping loose end-cap seams and rivets where needed',
      'Precision application of flexible, all-weather elastomeric gutter sealant around end caps, miters, and outlets',
      'Water test after curing window or flow check on repaired corners',
    ],
    steps: [
      {
        title: 'Clear & Dry the Joint',
        detail: 'Moisture and grime prevent adhesion—we clean and completely dry every seam before sealing.',
      },
      {
        title: 'Strip Old Failed Sealant',
        detail: 'Cracked or rubbery remnants are scraped away down to clean aluminum.',
      },
      {
        title: 'Mechanical Check',
        detail: 'End caps and miter seams are tightened so the joint itself sits flush.',
      },
      {
        title: 'Elastomeric Seam Sealing',
        detail: 'A smooth, continuous bead of waterproof gutter sealant locks out leaks through freeze and thaw.',
      },
    ],
    benefits: [
      'Stops persistent dripping right beside doorways, decks, and patio stairs',
      'Prevents slick winter ice patches from forming on walkways below corners',
      'Protects trim boards and corner siding from constant moisture exposure',
      'Pairs easily with routine seasonal gutter cleaning',
    ],
    faqs: [
      {
        question: 'Why not just smear new silicone over the old caulk?',
        answer:
          'New sealant applied over dirt or crumbling old caulk will peel right back up. Removing the failed material and cleaning the metal first is the only way a reseal lasts.',
      },
      {
        question: 'Do you also seal leaking inside and outside corners?',
        answer:
          'Yes—along with end caps, we regularly strip and reseal leaking miter corners and downspout outlet drops.',
      },
    ],
  },
];

export interface AlsoAvailableService {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  imageSlot: ImageSlotName;
}

export const ALSO_AVAILABLE_SERVICES: AlsoAvailableService[] = [
  {
    id: 'vinyl-flooring',
    title: 'Vinyl Flooring',
    description:
      'Clean, level luxury vinyl plank (LVP) installation for living spaces, basements, and rental refreshes across Western MA and Connecticut.',
    highlights: [
      'Subfloor inspection and leveling preparation',
      'Tight interlocking plank transitions and trim finish',
      'Durable, water-resistant residential and light commercial options',
    ],
    imageSlot: 'alsoFlooring',
  },
  {
    id: 'property-maintenance',
    title: 'Property Maintenance',
    description:
      'Dependable exterior and interior upkeep for homeowners, landlords, and small commercial properties who want one reliable crew.',
    highlights: [
      'Seasonal exterior checks and minor carpentry repairs',
      'Trim, hardware, and weatherproofing maintenance',
      'Turnkey upkeep for multi-family and commercial sites',
    ],
    imageSlot: 'alsoMaintenance',
  },
];

export function getServiceBySlug(slug: string | undefined): CoreService | undefined {
  return CORE_SERVICES.find((service) => service.slug === slug);
}
