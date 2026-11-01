export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: 'Sparkles' | 'PenTool' | 'Layers' | 'Package' | 'BookOpen' | 'Disc' | 'Share2';
  badge: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'branding',
    number: '01',
    title: 'Branding',
    tagline: 'Building distinctive and memorable brand identities.',
    description:
      'Comprehensive brand systems that give your business a coherent, unforgettable voice across every touchpoint. We craft visual identity guidelines, typography palettes, and stationery.',
    deliverables: [
      'Brand Identity Guidelines & Style Guides',
      'Color Palette & Typography System',
      'Stationery & Business Collateral (Letterheads, Business Cards)',
      'Brand Asset Kits for Web & Print'
    ],
    iconName: 'Sparkles',
    badge: 'Identity System'
  },
  {
    id: 'logo-design',
    number: '02',
    title: 'Logo Design',
    tagline: 'Creating unique logos that represent businesses and organisations.',
    description:
      'Memorable, timeless, and versatile logo marks engineered for recognition. Delivered in scalable vector formats with light, dark, and monochrome adaptations.',
    deliverables: [
      'Primary, Secondary & Sub-mark Variations',
      'Vector Source Files (AI, SVG, EPS, PDF)',
      'High-Resolution Raster Exports (PNG, JPG)',
      'Favicons & App Icon Formats'
    ],
    iconName: 'PenTool',
    badge: 'Visual Trademark'
  },
  {
    id: 'flyer-design',
    number: '03',
    title: 'Flyer Design',
    tagline: 'Designing attractive promotional flyers for events, products, and services.',
    description:
      'Eye-catching promotional flyers tailored to drive attendance, sales, and community awareness. Optimized for both commercial print runs and digital distribution.',
    deliverables: [
      'Single & Double-Sided Event/Promo Layouts',
      'Print-Ready 300 DPI CMYK with Bleed',
      'Web & Mobile Formats (WhatsApp, Email & Social)',
      'Custom Geometric & Typographic Compositions'
    ],
    iconName: 'Layers',
    badge: 'Print & Digital Promo'
  },
  {
    id: 'label-design',
    number: '04',
    title: 'Label Design',
    tagline: 'Creating professional product labels and packaging designs.',
    description:
      'Shelf-ready packaging and product label graphics that command attention in retail and online storefronts. Tailored for bottles, boxes, pouches, and jars.',
    deliverables: [
      'Die-cut & Dieline Conformed Label Artwork',
      'Barcode, Ingredients & Compliance Placement',
      'Realistic 3D Bottle/Box Mockups',
      'Commercial Print-Ready Files'
    ],
    iconName: 'Package',
    badge: 'Packaging & Retail'
  },
  {
    id: 'brochure-design',
    number: '05',
    title: 'Brochure Design',
    tagline: 'Producing informative and visually appealing brochures.',
    description:
      'Organized, persuasive editorial layouts that present company capabilities, real estate, reports, and service portfolios with crystal-clear hierarchy.',
    deliverables: [
      'Bi-Fold, Tri-Fold & Multi-Page Booklets',
      'Corporate Profile & Catalog Layouts',
      'Interactive Digital PDF Versions',
      'High-Fidelity Print Press PDF Specifications'
    ],
    iconName: 'BookOpen',
    badge: 'Corporate Collateral'
  },
  {
    id: 'music-cover-design',
    number: '06',
    title: 'Music Cover Design',
    tagline: 'Designing creative artwork for music releases and albums.',
    description:
      'Atmospheric and striking visual art for singles, EPs, albums, and mixtapes. Compliant with Spotify, Apple Music, Tidal, and vinyl print specifications.',
    deliverables: [
      'Streaming Ready 3000x3000px High-Res Artwork',
      'Vinyl Sleeve & CD Booklet Print Files',
      'Animated Canvas / Story Promo Teasers',
      'Tracklist & Back Cover Layout'
    ],
    iconName: 'Disc',
    badge: 'Entertainment & Audio'
  },
  {
    id: 'social-media-design',
    number: '07',
    title: 'Social Media Design',
    tagline: 'Creating engaging graphics for social media platforms.',
    description:
      'Stop-the-scroll visual feeds, carousel sets, story banners, and promotional templates engineered to build authority and drive client engagement.',
    deliverables: [
      'Instagram Post & Story Templates (1080x1080, 1080x1920)',
      'Multi-Slide Educational & Showcase Carousels',
      'Facebook & LinkedIn Banner Headers',
      'Reusable Editable PSD/Figma or PNG Assets'
    ],
    iconName: 'Share2',
    badge: 'Digital Marketing'
  }
];
