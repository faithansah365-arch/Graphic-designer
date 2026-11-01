export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Branding' | 'Logos' | 'Flyers' | 'Label & Packaging' | 'Brochures' | 'Music Covers' | 'Social Media';
  serviceId: string;
  image: string;
  isCustomVisual?: boolean;
  projectType: string; // e.g. "Concept Showcase", "Design Template"
  clientType: string;
  description: string;
  tools: string[];
  deliverables: string[];
  dimensions: string;
  highlightText: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'aurelian-branding',
    title: 'Aurelian & Co. Brand Identity System',
    category: 'Branding',
    serviceId: 'branding',
    image: '/src/assets/images/portfolio_branding_identity_1793561906198.jpg',
    projectType: 'Concept Identity Showcase',
    clientType: 'Luxury Architecture & Advisory',
    description:
      'A refined brand identity suite featuring deep navy, royal blue, and warm tactile stationery. Includes foil embossed business cards, bespoke monogram typography, and official corporate letterheads.',
    tools: ['Adobe Illustrator', 'InDesign', 'Photoshop'],
    deliverables: ['Brand Guidelines', 'Stationery Suite', 'Monogram Vector', 'CMYK Print Specs'],
    dimensions: 'A4 Letterhead & 85x55mm Cards',
    highlightText: 'Deep Navy foil stamping & custom geometric typography'
  },
  {
    id: 'synergy-forum-flyer',
    title: 'Synergy Innovation Forum Promotional Flyer',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: '/src/assets/images/portfolio_flyer_event_1793561907200.jpg',
    projectType: 'Event Design Showcase',
    clientType: 'Tech & Arts Conference',
    description:
      'High-energy promotional poster and flyer engineered with sharp geometric color blocking, crisp event schedule hierarchy, speaker spotlight, and print registration cues.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['A3 Gallery Poster', 'A5 Event Flyers', 'Digital WhatsApp & Email Assets'],
    dimensions: 'A3 (297x420mm) & A5 (148x210mm)',
    highlightText: '300 DPI CMYK with 3mm bleed + web flyer exports'
  },
  {
    id: 'azure-botanicals-label',
    title: 'Azure Botanicals Organic Oil Packaging',
    category: 'Label & Packaging',
    serviceId: 'label-design',
    image: '/src/assets/images/portfolio_label_packaging_1793561908029.jpg',
    projectType: 'Packaging Design Showcase',
    clientType: 'Artisanal Skincare Brand',
    description:
      'Minimalist cosmetic bottle label with gold foil accents, navy botanical flourishes, clean ingredient typography, barcode zoning, and waterproof laminate finish specifications.',
    tools: ['Illustrator', '3D Dimension Mockup'],
    deliverables: ['Wrap-Around Bottle Label', 'Outer Box Carton Layout', 'Barcode Placement'],
    dimensions: '120x45mm Curved Die-Cut',
    highlightText: 'Metallic gold foil separation + waterproof UV coating layer'
  },
  {
    id: 'echoes-album-artwork',
    title: 'Echoes of Tomorrow Album & Vinyl Art',
    category: 'Music Covers',
    serviceId: 'music-cover-design',
    image: '/src/assets/images/portfolio_music_album_cover_1793561908075.jpg',
    projectType: 'Music Artwork Showcase',
    clientType: 'Electronic & Indie Label Release',
    description:
      'Expressive abstract album artwork merging rhythmic circular waveforms, bold modern typography, and vibrant artistic layers for digital streaming and gatefold vinyl sleeve.',
    tools: ['Photoshop', 'Illustrator', 'Digital Mixed Media'],
    deliverables: ['3000x3000px Streaming Cover', '12" Vinyl Gatefold Sleeve', 'Apple Motion Teaser'],
    dimensions: '3000 x 3000 px / 12-inch LP',
    highlightText: 'Spotify & Apple Music compliance checked'
  },
  {
    id: 'nordic-crest-logo',
    title: 'Apex Venture Capital Minimalist Monogram',
    category: 'Logos',
    serviceId: 'logo-design',
    image: '', // Rendered via crisp interactive vector showcase card
    isCustomVisual: true,
    projectType: 'Logo Identity Showcase',
    clientType: 'Financial Technology Firm',
    description:
      'A geometric vector logo symbol fusing the letters A and V with an upward momentum vector. Tested across micro 16px favicons up to massive outdoor billboard signage.',
    tools: ['Adobe Illustrator', 'Vector Precision Grid'],
    deliverables: ['Vector AI / EPS / SVG / PDF', 'Full Color, Dark & Light Variants', 'Brand Icon Kit'],
    dimensions: 'Scalable Vector Graphic',
    highlightText: 'Pure golden-ratio geometry and responsive lockups'
  },
  {
    id: 'nexus-annual-brochure',
    title: 'Metropolis Corporate Capabilities Brochure',
    category: 'Brochures',
    serviceId: 'brochure-design',
    image: '', // Rendered via crisp interactive editorial showcase card
    isCustomVisual: true,
    projectType: 'Editorial Collateral Showcase',
    clientType: 'Commercial Property Group',
    description:
      'A 12-page square corporate brochure layout with strict baseline grids, large architectural photography spreads, infographics, and clear financial tables.',
    tools: ['Adobe InDesign', 'Photoshop'],
    deliverables: ['12-Page Print Press PDF', 'Interactive Digital Presentation PDF', 'Page Grid Template'],
    dimensions: '210 x 210 mm Square Format',
    highlightText: 'Saddle-stitched binding with soft-touch matte lamination'
  },
  {
    id: 'pulse-social-carousel',
    title: 'Brand Growth Instagram Carousel Series',
    category: 'Social Media',
    serviceId: 'social-media-design',
    image: '', // Rendered via crisp interactive carousel layout showcase card
    isCustomVisual: true,
    projectType: 'Social Campaign Showcase',
    clientType: 'Creative SaaS Platform',
    description:
      'Seamless swipeable 7-slide educational carousel designed to maximize dwell time, bookmark saves, and profile conversions with punchy visual hooks.',
    tools: ['Figma', 'Illustrator'],
    deliverables: ['7-Slide 1080x1350px Carousels', 'Matching Story Templates', 'Reels Cover Frames'],
    dimensions: '1080 x 1350 px (4:5 Portrait Ratio)',
    highlightText: 'Engineered for high engagement & seamless slide transitions'
  }
];

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Branding',
  'Logos',
  'Flyers',
  'Label & Packaging',
  'Brochures',
  'Music Covers',
  'Social Media',
] as const;
