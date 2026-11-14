export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  town: string;
  service: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote:
      'They cleared out two stories of packed oak leaves, unblocked a downspout that had been backing up for months, and left the deck cleaner than when they arrived.',
    name: 'Mark',
    town: 'Northampton, MA',
    service: 'Gutter Cleaning',
  },
  {
    id: 't2',
    quote:
      'Every spike along our back gutter was pulling away from the fascia. Peakline swapped in hidden hangers and re-pitched the run in one afternoon.',
    name: 'Sarah',
    town: 'Suffield, CT',
    service: 'Hidden Hanger Installation',
  },
  {
    id: 't3',
    quote:
      'Quick quote over message, showed up right when they said they would, and actually showed us photos of the clean outlets and resealed end caps.',
    name: 'David',
    town: 'Amherst, MA',
    service: 'End Cap Resealing',
  },
  {
    id: 't4',
    quote:
      'We had water pouring right onto our front steps every time it rained. Turns out a downspout elbow was packed solid. Fixed fast and priced fairly.',
    name: 'Linda',
    town: 'Granby, CT',
    service: 'Gutter Cleaning + Repair',
  },
  {
    id: 't5',
    quote:
      'No mess on the driveway, careful with our shrubs around the house, and honest about what actually needed sealing versus what was still in good shape.',
    name: 'Tom',
    town: 'Westfield, MA',
    service: 'Gutter Cleaning + Repair',
  },
  {
    id: 't6',
    quote:
      'Straightforward communication from start to finish. We have them out every fall before the first freeze hits.',
    name: 'Rachel',
    town: 'Simsbury, CT',
    service: 'Gutter Cleaning',
  },
];
