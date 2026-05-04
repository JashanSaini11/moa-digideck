export interface SlideData {
  id: number
  type?: string
  title?: string
  tagline?: string
  section?: string
  headline?: string
}

export const slidesData: SlideData[] = [
  {
    id: 0,
    type: 'intro',
    section: '',
    headline: '',
  },
  {
    id: 1,
    type: 'Overview',
    section: 'Overview',
    headline: 'Discover a Place Like No Other',
  },
  {
    id: 2,
    type: 'Experience',
    section: 'Experience',
    headline: 'Everything in One Place',
  },
  {
    id: 3,
    type: 'Stats',
    section: 'Stats',
    headline: 'By the Numbers',
  },
  {
    id: 4,
    type: 'dining',
    section: 'Dining',
    headline: 'World-class culinary experiences under one roof',
  },
  {
    id: 5,
    type: 'attractions',
    section: 'Attractions',
    headline: 'Unrivaled entertainment for every guest',
  },
  {
    id: 6,
    type: 'events',
    section: 'Events',
    headline: '400+ events annually reaching millions of visitors',
  },
  {
    id: 7,
    type: 'monetization',
    section: 'Partnership',
    headline: 'Exclusive sponsorship & monetization opportunities',
  },
]