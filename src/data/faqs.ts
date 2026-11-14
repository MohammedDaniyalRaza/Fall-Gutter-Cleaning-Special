export type FAQCategory =
  | 'All'
  | 'Pricing & Quotes'
  | 'Scheduling & Service Area'
  | 'Gutter Cleaning'
  | 'Repairs & Hidden Hangers'
  | 'End Cap Resealing'
  | 'Safety & Cleanup'
  | 'Seasonal Special';

export interface FAQItem {
  id: string;
  category: Exclude<FAQCategory, 'All'>;
  question: string;
  answer: string;
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  'All',
  'Pricing & Quotes',
  'Scheduling & Service Area',
  'Gutter Cleaning',
  'Repairs & Hidden Hangers',
  'End Cap Resealing',
  'Safety & Cleanup',
  'Seasonal Special',
];

export const ALL_FAQS: FAQItem[] = [
  // Pricing & Quotes
  {
    id: 'faq-free-estimates',
    category: 'Pricing & Quotes',
    question: 'Do you provide free estimates before starting work?',
    answer:
      'Yes. Every quote is free and straightforward. Share your town, property type, and what you are noticing along your roofline, and we will confirm pricing before any work begins.',
  },
  {
    id: 'faq-how-pricing-works',
    category: 'Pricing & Quotes',
    question: 'How does pricing work for gutter cleaning and repairs?',
    answer:
      'Pricing depends on the layout and scope of your property rather than a one-size-fits-all rate. We look at your roofline details and give you a clear estimate up front—message us for details or request a free estimate online.',
  },
  {
    id: 'faq-what-affects-price',
    category: 'Pricing & Quotes',
    question: 'What factors affect the cost of a gutter cleaning?',
    answer:
      'Key factors include home size, whether the roofline is one, two, or more stories, total gutter linear length, steep roof pitches or hard-to-reach dormers, and whether troughs or downspouts are heavily packed with debris.',
  },
  {
    id: 'faq-other-home-types',
    category: 'Pricing & Quotes',
    question: 'What if my home is two stories, a colonial, or a multi-family?',
    answer:
      'Our $150 starting special applies to single-family, one-story homes. For two-story homes, split-levels, multi-family properties, or homes with complex rooflines, send us a quick message or quote request and we will confirm a custom estimate.',
  },
  {
    id: 'faq-commercial-quotes',
    category: 'Pricing & Quotes',
    question: 'Do you quote commercial buildings and managed properties?',
    answer:
      'Yes. We work on both residential homes and commercial properties across Western Massachusetts and Connecticut. Reach out with your property location and building details and we will prepare a free estimate.',
  },

  // Scheduling & Service Area
  {
    id: 'faq-how-to-book',
    category: 'Scheduling & Service Area',
    question: 'How do I book a cleaning or request a quote?',
    answer:
      'You can fill out our quick quote form on the Contact page or send us a direct message on Facebook. Share your town and what service you need, and we will follow up to confirm details and scheduling.',
  },
  {
    id: 'faq-service-area',
    category: 'Scheduling & Service Area',
    question: 'Where does Peakline Home Services operate?',
    answer:
      'We serve homeowners and commercial properties throughout Western Massachusetts, Connecticut, and nearby communities. Message us with your town if you would like us to confirm coverage for your address.',
  },
  {
    id: 'faq-response-speed',
    category: 'Scheduling & Service Area',
    question: 'How quickly will I hear back after sending a request?',
    answer:
      'We review quote requests and Facebook messages regularly and follow up as promptly as our field schedule allows. For the fastest conversation, message us on Facebook with your town and a brief note about your roofline.',
  },
  {
    id: 'faq-need-to-be-home',
    category: 'Scheduling & Service Area',
    question: 'Do I need to be home during the gutter service?',
    answer:
      'Usually no. As long as we have clear access around the exterior of your property, gates are unlocked, and an outdoor water spigot is accessible for downspout flush testing, we can complete the work and follow up afterward.',
  },

  // Gutter Cleaning
  {
    id: 'faq-how-often',
    category: 'Gutter Cleaning',
    question: 'How often should gutters be cleaned in New England?',
    answer:
      'Most homes benefit from cleaning twice a year—typically in late spring after pollen and seed pods finish dropping, and again in late fall once leaves have come down. Properties surrounded by heavy oaks, maples, or pine trees may need more frequent attention.',
  },
  {
    id: 'faq-whats-included',
    category: 'Gutter Cleaning',
    question: 'What is included in a standard gutter cleaning?',
    answer:
      'Every cleaning includes hand removal of leaves, twigs, and organic sludge from troughs and roof valleys, clearing and flush-testing downspouts, a visual check of hangers and corners, and full cleanup of decks, walkways, and lawns.',
  },
  {
    id: 'faq-downspouts-included',
    category: 'Gutter Cleaning',
    question: 'Do you clear and test downspouts too, or only the top troughs?',
    answer:
      'We always clear and flush-test the downspouts. Leaving a packed elbow or outlet blocked defeats the purpose of cleaning the horizontal run above it.',
  },
  {
    id: 'faq-residential-commercial',
    category: 'Gutter Cleaning',
    question: 'Do you clean gutters on both residential and commercial properties?',
    answer:
      'Yes. We service single-family homes, multi-family residences, and commercial buildings throughout Western MA and Connecticut.',
  },
  {
    id: 'faq-gutter-guards',
    category: 'Gutter Cleaning',
    question: 'Can you clean gutters that already have gutter guards installed?',
    answer:
      'Yes—even homes with gutter guards can accumulate roof shingle grit, pine needles, or shingle moss inside the troughs or on top of the screens. Mention that you have guards when requesting your estimate so we can plan accordingly.',
  },

  // Repairs & Hidden Hangers
  {
    id: 'faq-signs-need-repair',
    category: 'Repairs & Hidden Hangers',
    question: 'What are the signs that gutters need repair rather than just cleaning?',
    answer:
      'Common warning signs include sections sagging or holding standing water, nail heads sticking out from the front face, gaps opening between the gutter and fascia board, loose downspout straps, or water dripping through seams and corners.',
  },
  {
    id: 'faq-hidden-hangers-vs-spikes',
    category: 'Repairs & Hidden Hangers',
    question: 'What are hidden hangers, and why are they better than old gutter spikes?',
    answer:
      'Old gutter spikes are smooth nails that gradually work loose from wood fascia through freeze-thaw cycles. Hidden hangers sit inside the gutter out of sight and use threaded screws anchored solidly into fascia framing for much stronger support.',
  },
  {
    id: 'faq-cleaning-plus-repair',
    category: 'Repairs & Hidden Hangers',
    question: 'Can you clean my gutters and handle repairs in the same visit?',
    answer:
      'Yes. Our Gutter Cleaning + Repair service clears out heavy debris first so we can see the true pitch and fastener condition, then re-secures loose runs, swaps failing spikes for hidden hangers, or seals leaking joints during the same visit.',
  },
  {
    id: 'faq-sagging-without-replacement',
    category: 'Repairs & Hidden Hangers',
    question: 'Can a sagging gutter be fixed without replacing the whole run?',
    answer:
      'Often, yes. If the aluminum trough itself is not crushed or rotted through, removing loose spikes, resetting proper slope toward the downspout, and installing heavy-duty hidden hangers restores solid alignment.',
  },

  // End Cap Resealing
  {
    id: 'faq-what-are-end-caps',
    category: 'End Cap Resealing',
    question: 'What are gutter end caps and why do they leak?',
    answer:
      'End caps seal off the open ends of each aluminum gutter run. Over time, New England sun, rain, and winter freezing dry out the original caulk, shrinking the seal and letting water drip straight down over porches, steps, and trim.',
  },
  {
    id: 'faq-signs-leaking-end-cap',
    category: 'End Cap Resealing',
    question: 'How can I tell if an end cap or corner needs resealing?',
    answer:
      'Look for steady dripping right at the ends or corners of a gutter during light rain, dark dirt streaks running down the corner fascia or trim, or small ice patches forming on walkways directly underneath gutter ends in winter.',
  },
  {
    id: 'faq-how-resealing-works',
    category: 'End Cap Resealing',
    question: 'How does Peakline reseal leaking end caps?',
    answer:
      'We scrape and strip away brittle old sealant down to clean bare metal, dry the joint completely, tighten loose seams, and apply a smooth bead of flexible, exterior-grade gutter sealant designed to handle freeze-thaw movement.',
  },

  // Safety & Cleanup
  {
    id: 'faq-ladder-safety',
    category: 'Safety & Cleanup',
    question: 'How do you protect my gutters and siding when using ladders?',
    answer:
      'We use careful ladder placement and stabilizer standoffs so ladders rest cleanly without crushing soft aluminum gutter fronts or marring exterior siding and trim.',
  },
  {
    id: 'faq-debris-cleanup',
    category: 'Safety & Cleanup',
    question: 'Where does all the wet leaf debris go—do you leave it on my lawn?',
    answer:
      'No. We hand-scoop debris into buckets as we work along the roofline rather than throwing soggy piles onto your yard, and we clear driveways, decks, walkways, and patios before packing up.',
  },
  {
    id: 'faq-landscaping-care',
    category: 'Safety & Cleanup',
    question: 'Will flower beds, decks, and shrubs around the house be protected?',
    answer:
      'Yes. Keeping debris contained in buckets and clearing ground surfaces afterward protects landscaping beds, patio furniture, and decks right below the eaves.',
  },
  {
    id: 'faq-weather-rescheduling',
    category: 'Safety & Cleanup',
    question: 'What happens if heavy rain or unsafe weather hits on service day?',
    answer:
      'Safe ladder footing and dry seam work come first. If severe rain, high winds, or icy conditions make roofline access unsafe, we will reach out to reschedule to the next clear window.',
  },

  // Seasonal Special
  {
    id: 'faq-fall-special',
    category: 'Seasonal Special',
    question: 'What does the Fall Gutter Cleaning Special ($150) cover?',
    answer:
      'Our Fall Gutter Cleaning Special is starting at $150 for single-family, one-story homes. It covers clearing fall leaves and debris, flushing downspouts, and ground cleanup. Have a two-story home or extra repairs needed? Message us for details and we will confirm at your free estimate.',
  },
  {
    id: 'faq-ice-dams-winter',
    category: 'Seasonal Special',
    question: 'How does fall gutter cleaning help prevent winter ice dams?',
    answer:
      'When gutters are packed with wet autumn leaves, snowmelt from your roof gets trapped right at the eave and freezes solid overnight. Clearing troughs and downspouts before winter lets meltwater drain away properly instead of backing up beneath shingles.',
  },
];

// Used on the compact Home page FAQ accordion
export const GENERAL_FAQS: FAQItem[] = ALL_FAQS.slice(0, 6);
