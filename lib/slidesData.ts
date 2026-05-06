// ============================================================
//  MALL OF AMERICA DIGIDECK — Slide Data & Types
// ============================================================

export type AudienceTag = 'leasing' | 'sponsorship' | 'events' | 'luxury' | 'all'

export interface SubdeckRef {
  label: string
  href: string
}

export interface SlideData {
  id: string
  index: number
  section: string
  headline: string
  subheadline?: string
  tagline?: string
  body?: string
  audience: AudienceTag[]
  cta?: {
    primary?: { label: string; action: string }
    secondary?: { label: string; action: string }
  }
  subdeck?: SubdeckRef
  video?: string
  accent?: string // gold accent phrase
}

// ── 8-Slide Main Deck ──────────────────────────────────────
export const SLIDES: SlideData[] = [
  {
    id: 'intro',
    index: 0,
    section: 'Opening',
    headline: 'Where America\nGathers.',
    tagline: 'The largest mall in the Western Hemisphere.\n32 million visitors. One platform.',
    audience: ['all'],
    video: '/hero.mp4',
    cta: {
      primary:   { label: 'Explore the Platform', action: 'next' },
      secondary: { label: 'Skip Intro',           action: 'skip' },
    },
  },
  {
    id: 'why-property',
    index: 1,
    section: 'Why This Property',
    headline: 'The Numbers That\nRedefine Scale.',
    body:
      'Not foot traffic — a purchased-intent audience. ' +
      '32 million visitors who arrive to shop, dine, and experience.',
    audience: ['all'],
    accent: '8× the population of Minnesota. Every year.',
    cta: {
      primary: { label: 'Explore Opportunities', action: 'next' },
    },
  },
  {
    id: 'retail-ecosystem',
    index: 2,
    section: 'Retail Ecosystem',
    headline: '520 Brands.\nOne Ecosystem.',
    subheadline: 'Zero competition for discovery.',
    body:
      'Four floors of curated commerce. Premium corridors, ' +
      'discovery zones, and experiential atrium positions — ' +
      'every square foot engineered for conversion.',
    audience: ['leasing'],
    cta: {
      primary:   { label: 'View Available Spaces', action: 'leasing' },
      secondary: { label: 'Download Floor Map',    action: 'download' },
    },
    subdeck: { label: 'Leasing Module', href: '/leasing' },
  },
  {
    id: 'luxury',
    index: 3,
    section: 'Luxury Positioning',
    headline: 'Where Premium\nFinds Its Audience.',
    body:
      'A unified luxury renovation. A resident JW Marriott. ' +
      'An affluent MSP metro combined with 40% tourism influx. ' +
      'Your brand deserves this room.',
    audience: ['luxury', 'leasing'],
    accent: 'Scale without compromise.',
    cta: {
      primary:   { label: 'Luxury Leasing Enquiry', action: 'leasing' },
      secondary: { label: 'View Brand Adjacencies',  action: 'map' },
    },
    subdeck: { label: 'Leasing Module', href: '/leasing' },
  },
  {
    id: 'dining',
    index: 4,
    section: 'Dining & Lifestyle',
    headline: 'Dine.\nLinger.\nReturn.',
    body:
      'Average dwell time: 3+ hours. ' +
      'Our F&B ecosystem turns a transaction into a destination — ' +
      'and a destination into a reason to come back.',
    audience: ['leasing'],
    video: '/waterpark.mp4',
    cta: {
      primary:   { label: 'F&B Leasing Enquiry', action: 'leasing' },
      secondary: { label: 'Download Dining Map',  action: 'download' },
    },
    subdeck: { label: 'Leasing Module', href: '/leasing' },
  },
  {
    id: 'attractions',
    index: 5,
    section: 'Attractions & Entertainment',
    headline: "The World's Most\nVisited Indoor\nTheme Park.",
    subheadline: 'Inside a mall.',
    body:
      'Nickelodeon Universe. SEA LIFE Aquarium. FlyOver America. ' +
      'Eight world-class attractions under one roof. ' +
      'Families don\'t visit for an afternoon — they plan entire trips.',
    audience: ['sponsorship', 'events'],
    cta: {
      primary: { label: 'Entertainment Partnership', action: 'sponsorship' },
    },
    subdeck: { label: 'Sponsorship Module', href: '/sponsorship' },
  },
  {
    id: 'events',
    index: 6,
    section: 'Events Platform',
    headline: '365 Opportunities\nto Own the Moment.',
    body:
      'From celebrity appearances to brand launches, ' +
      'fashion shows to cultural moments — ' +
      'Mall of America is a live events platform ' +
      'disguised as a shopping destination.',
    audience: ['events', 'sponsorship'],
    accent: "We don't add your event to a calendar. We make it the reason people come.",
    cta: {
      primary:   { label: 'Book a Venue Walk-Through', action: 'events' },
      secondary: { label: 'Download Events Deck',      action: 'download' },
    },
    subdeck: { label: 'Events Module', href: '/events' },
  },
  {
    id: 'monetization',
    index: 7,
    section: 'Venue Monetization',
    headline: 'Every Square Foot.\nA Revenue Channel.',
    body:
      'Entry courts. Digital OOH walls. Atrium stages. ' +
      'Parking ramp wraps. Exterior billboards. ' +
      'A complete media ecosystem with one captive, ' +
      'purchased-intent audience.',
    audience: ['sponsorship'],
    cta: {
      primary:   { label: 'Request Media Rate Card',  action: 'sponsorship' },
      secondary: { label: 'Schedule Sponsorship Call', action: 'contact' },
    },
    subdeck: { label: 'Sponsorship Module', href: '/sponsorship' },
  },
]

// ── Stats for Slide 02 ─────────────────────────────────────
export const STATS = [
  {
    id: 'visitors',
    value: 32,
    suffix: 'M',
    label: 'Annual Visitors',
    context: 'More than 8× the entire population of Minnesota',
    tooltip: 'The largest annual visitor count of any mall in the Western Hemisphere — every year, without exception.',
    decimal: false,
  },
  {
    id: 'stores',
    value: 520,
    suffix: '+',
    label: 'Retail Stores',
    context: 'Across four floors of curated commerce',
    tooltip: 'From luxury flagships to experiential concepts — the deepest tenant mix under one roof in North America.',
    decimal: false,
  },
  {
    id: 'sqft',
    value: 5.6,
    suffix: 'M sqft',
    label: 'Total Property',
    context: 'The equivalent of 88 city blocks — all indoors',
    tooltip: '5.6 million square feet total. 2.87M dedicated retail — more than any US property.',
    decimal: true,
  },
  {
    id: 'dwell',
    value: 3,
    suffix: 'hrs+',
    label: 'Avg Dwell Time',
    context: 'Visitors don\'t browse. They commit.',
    tooltip: '4× the national average mall visit. An audience that stays — and spends.',
    decimal: false,
  },
  {
    id: 'rank',
    value: 1,
    prefix: '#',
    suffix: '',
    label: 'Ranked In USA',
    context: 'Most visited retail destination, consistently',
    tooltip: '#1 most visited retail destination in the US. 2 min from MSP International Airport.',
    decimal: false,
  },
] as const

// ── Attractions for Slide 06 ───────────────────────────────
export const ATTRACTIONS = [
  {
    id: 'nickelodeon',
    name: 'Nickelodeon Universe',
    category: 'Theme Park',
    capacity: '70,000 sqft',
    description: '7-acre indoor theme park. 27 rides and attractions including roller coasters.',
    sponsorNote: 'Naming rights, co-branded experiences, and exclusive brand integrations available.',
    color: '#FF6B35',
  },
  {
    id: 'sealife',
    name: 'SEA LIFE Aquarium',
    category: 'Aquarium',
    capacity: '10,000 sqft',
    description: 'Immersive aquarium with 10,000+ sea creatures and underwater tunnel.',
    sponsorNote: 'Tank sponsorship, event hosting, and co-branded educational programming.',
    color: '#0B7EC8',
  },
  {
    id: 'flyover',
    name: 'FlyOver America',
    category: 'Experience',
    capacity: '250 per show',
    description: 'Breathtaking flight simulation over iconic American landscapes.',
    sponsorNote: 'Pre-show brand integration, destination partnership, and naming opportunities.',
    color: '#2D5F8A',
  },
  {
    id: 'escape',
    name: 'Escape Games',
    category: 'Entertainment',
    capacity: '8 rooms',
    description: 'Themed escape room experiences for groups and corporate events.',
    sponsorNote: 'Custom branded room builds, corporate team event packages.',
    color: '#4A1942',
  },
  {
    id: 'golf',
    name: 'Crayola Experience',
    category: 'Family',
    capacity: '60,000 sqft',
    description: 'Interactive creative experiences for families and children.',
    sponsorNote: 'Brand activation zones and co-marketing with Crayola.',
    color: '#E9A825',
  },
] as const

// ── Slide 03 — Experience Categories ──────────────────────
export type ExperienceCategory = 'all' | 'retail' | 'dining' | 'entertainment' | 'events' | 'luxury'

export interface ExperienceImage {
  src: string
  alt: string
  label: string
  sublabel: string
  cta: string
  ctaHref: string
}

export interface ExperienceCategoryData {
  id: ExperienceCategory
  label: string
  images: [ExperienceImage, ExperienceImage, ExperienceImage] // hero, thumb1, thumb2
}

export const EXPERIENCE_CATEGORIES: ExperienceCategoryData[] = [
  {
    id: 'all',
    label: 'All',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1200&q=80',
        alt: 'Mall of America atrium',
        label: 'Mall of America',
        sublabel: 'The Western Hemisphere\'s largest retail destination',
        cta: 'Explore Opportunities',
        ctaHref: '/leasing',
      },
      {
        src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
        alt: 'Dining experience',
        label: 'World-Class Dining',
        sublabel: 'F&B · 100+ concepts across 4 floors',
        cta: 'F&B Leasing',
        ctaHref: '/leasing',
      },
      {
        src: 'https://images.unsplash.com/photo-1567942712661-82b9b407abbf?w=800&q=80',
        alt: 'Retail experience',
        label: 'Premium Retail',
        sublabel: 'Retail · 520+ stores, curated brand mix',
        cta: 'View Leasing',
        ctaHref: '/leasing',
      },
    ],
  },
  {
    id: 'retail',
    label: 'Retail',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
        alt: 'Luxury retail corridor',
        label: 'Premium Retail Corridor',
        sublabel: 'Retail · Renovated luxury zones, Level 1–3',
        cta: 'Retail Leasing',
        ctaHref: '/leasing',
      },
      {
        src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
        alt: 'Fashion storefront',
        label: '520+ Brand Partners',
        sublabel: 'Retail · From flagship to pop-up formats',
        cta: 'View Availability',
        ctaHref: '/leasing',
      },
      {
        src: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80',
        alt: 'Shopping experience',
        label: 'Discovery Zones',
        sublabel: 'Retail · High-traffic connector corridors',
        cta: 'Floor Map',
        ctaHref: '/leasing',
      },
    ],
  },
  {
    id: 'dining',
    label: 'Dining',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
        alt: 'Premium dining',
        label: 'Dine. Linger. Return.',
        sublabel: 'Dining · Average 3+ hour dwell time',
        cta: 'F&B Leasing',
        ctaHref: '/leasing',
      },
      {
        src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
        alt: 'Restaurant interior',
        label: '100+ F&B Concepts',
        sublabel: 'Dining · Full-service to fast casual',
        cta: 'View Spaces',
        ctaHref: '/leasing',
      },
      {
        src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        alt: 'Food experience',
        label: 'Culinary Destination',
        sublabel: 'Dining · Inline, endcap & food hall formats',
        cta: 'Enquire Now',
        ctaHref: '/leasing',
      },
    ],
  },
  {
    id: 'entertainment',
    label: 'Entertainment',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&q=80',
        alt: 'Nickelodeon Universe theme park',
        label: 'Nickelodeon Universe',
        sublabel: 'Entertainment · 7-acre indoor theme park, 27 rides',
        cta: 'Entertainment Partnership',
        ctaHref: '/sponsorship',
      },
      {
        src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80',
        alt: 'Aquarium experience',
        label: 'SEA LIFE Aquarium',
        sublabel: 'Entertainment · 10,000+ sea creatures',
        cta: 'Sponsorship Tiers',
        ctaHref: '/sponsorship',
      },
      {
        src: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80',
        alt: 'Family entertainment',
        label: 'FlyOver America',
        sublabel: 'Entertainment · Immersive flight simulation',
        cta: 'Partner With Us',
        ctaHref: '/sponsorship',
      },
    ],
  },
  {
    id: 'events',
    label: 'Events',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
        alt: 'Live event activation',
        label: '365 Days of Activation',
        sublabel: 'Events · Center Court capacity 10,000+',
        cta: 'Book a Venue',
        ctaHref: '/events',
      },
      {
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        alt: 'Brand activation',
        label: 'Brand Activations',
        sublabel: 'Events · Full production support on-site',
        cta: 'Events Enquiry',
        ctaHref: '/events',
      },
      {
        src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
        alt: 'Concert and performance',
        label: 'Live Performances',
        sublabel: 'Events · Built-in captive audience of 32M/yr',
        cta: 'Venue Walk-Through',
        ctaHref: '/events',
      },
    ],
  },
  {
    id: 'luxury',
    label: 'Luxury',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
        alt: 'Luxury boutique',
        label: 'Where Premium Finds Scale',
        sublabel: 'Luxury · Renovated flagship corridors',
        cta: 'Luxury Leasing',
        ctaHref: '/leasing',
      },
      {
        src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
        alt: 'Fashion editorial',
        label: 'JW Marriott Adjacent',
        sublabel: 'Luxury · Hotel guest co-marketing included',
        cta: 'Enquire Now',
        ctaHref: '/leasing',
      },
      {
        src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
        alt: 'Premium shopping',
        label: 'Affluent Audience',
        sublabel: 'Luxury · MSP metro + 40% tourism influx',
        cta: 'Brand Adjacency Map',
        ctaHref: '/leasing',
      },
    ],
  },
]

// ── Slide 05 — Audience Selector Cards ────────────────────
export interface AudienceCard {
  id:       string
  label:    string           // e.g. "Lease Space"
  headline: string           // large display text on hover
  body:     string           // 1-line pitch
  cta:      string           // button label
  href:     string          
  image:    string           
  tag:      string           
  icon:     string           
  color:    string           
}

export const AUDIENCE_CARDS: AudienceCard[] = [
  {
    id:       'leasing',
    label:    'Lease Space',
    headline: 'Open Here.\nOwn Your Category.',
    body:     '2.87M sq ft of premium retail. Luxury, specialty, F&B, and pop-up formats available.',
    cta:      'Explore Leasing',
    href:     '/leasing',
    image:    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
    tag:      'Leasing',
    icon:     '◈',
    color:    '#C9A84C',
  },
  {
    id:       'sponsorship',
    label:    'Sponsor Here',
    headline: '32M Reasons\nto Activate.',
    body:     'Digital OOH, naming rights, atrium activations, and full media ecosystem access.',
    cta:      'Sponsorship Tiers',
    href:     '/sponsorship',
    image:    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80',
    tag:      'Sponsorship',
    icon:     '◉',
    color:    '#E5C97A',
  },
  {
    id:       'events',
    label:    'Host an Event',
    headline: 'The Stage Is\nAlready Set.',
    body:     'Center Court, 10K+ capacity. Full production support. 32M built-in audience.',
    cta:      'Book a Venue',
    href:     '/events',
    image:    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
    tag:      'Events',
    icon:     '◎',
    color:    '#C9A84C',
  },
  {
    id:       'luxury',
    label:    'Luxury Brand',
    headline: 'Scale Without\nCompromise.',
    body:     'JW Marriott adjacent. Renovated flagship corridors. Affluent MSP metro + tourism.',
    cta:      'Luxury Leasing',
    href:     '/leasing',
    image:    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80',
    tag:      'Luxury',
    icon:     '◇',
    color:    '#E5C97A',
  },
]
// ── Slide 07 — Events Data ─────────────────────────────────
export interface EventType {
  id:       string
  label:    string
  capacity: string
  image:    string
  description: string
}
 
export const EVENT_TYPES: EventType[] = [
  {
    id:          'fashion',
    label:       'Fashion & Lifestyle',
    capacity:    'Center Court · Up to 10,000',
    image:       'https://moaapi.net/sites/default/files/2025-06/FLORIDA_Bleached_RECYCLED_BLUE_JAKE_Dark_RECYCLED_BLUE_0017%20copy%20%282%29_1.jpg?w=1400&q=80',
    description: 'Runway-ready spaces. Built-in media coverage. Premium audience.',
  },
  {
    id:          'Dining',
    label:       'Dining Experiences',
    capacity:    'Rotunda · 500+',
    image:       'https://moaapi.net/sites/default/files/2021-08/Dunkin%20Donuts%20Storefront.jpg?w=1400&q=80',
    description: 'Culinary activations that turn a meal into a moment — and a moment into a memory.',
  },
  {
    id:          'Movie',
    label:       'Movie Premieres & Fan Events',
    capacity:    'Theaters · 1,000+',
    image:       'https://moaapi.net/sites/default/files/2024-03/B%26B%20Theatres_0.jpg?w=1400&q=80',
    description: 'State-of-the-art theaters. High foot traffic. Built-in fanbase. ',
  },
  {
    id:          'celebrity',
    label:       'Celebrity & Pop Culture',
    capacity:    'Center Court · Up to 10,000',
    image:       'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1400&q=80',
    description: 'Appearances, fan events, and cultural moments that go viral.',
  },
]