export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Branding' | 'Logos' | 'Flyers' | 'Label & Packaging' | 'Brochures' | 'Music Covers' | 'Social Media';
  serviceId: string;
  image: string;
  isCustomVisual?: boolean;
  projectType: string;
  clientType: string;
  description: string;
  tools: string[];
  deliverables: string[];
  dimensions: string;
  highlightText: string;
}

/**
 * 6 Curated showcase projects with authentic titles that suit each design.
 * Complete 25+ design archive is linked directly via the Google Drive portfolio.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-mcyykfc',
    title: 'Kein Graphics Official Promotional Flyer',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/McYYkFC.jpg',
    projectType: 'Official Studio Campaign',
    clientType: 'Kein Graphics Brand Studio',
    description:
      'Official brand promotional flyer showcasing full-service graphic design solutions, branding systems, promotional layouts, and direct WhatsApp contact channels.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Print-Ready 300 DPI CMYK Flyer', 'Digital Social Media Flyer', 'WhatsApp Promotional Asset'],
    dimensions: 'A5 (148x210mm) / High-Res Vector',
    highlightText: 'Custom geometric design system with deep navy & royal blue palette'
  },
  {
    id: 'proj-ake42yk',
    title: 'Kein Business Card & Stationery Layout',
    category: 'Branding',
    serviceId: 'branding',
    image: 'https://i.imgur.com/AKE42yK.jpg',
    projectType: 'Client Brand Identity',
    clientType: 'Corporate & Executive Branding',
    description:
      'Modern corporate business card layout with custom typography, contact icons, and clean front/back layout design.',
    tools: ['Illustrator', 'InDesign', 'Photoshop'],
    deliverables: ['Double-Sided Business Card', 'Stationery Suite', 'Print Press PDF with Bleed'],
    dimensions: '85 x 55 mm Standard Card',
    highlightText: 'Unified corporate branding with custom contact icon hierarchy'
  },
  {
    id: 'proj-eavoh9h',
    title: 'Beauty Salon & Makeover Promotional Flyer',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/EAvOh9H.jpg',
    projectType: 'Client Promotional Poster',
    clientType: 'Beauty, Hair & Wellness Studio',
    description:
      'Vibrant promotional flyer for beauty salons, hair makeover sessions, and grand openings with elegant photo framing and service price lists.',
    tools: ['Adobe Photoshop', 'Illustrator'],
    deliverables: ['Social Media Square Poster', 'A5 Printed Handbill', 'WhatsApp Status Teaser'],
    dimensions: 'A5 & 1080x1350px Digital',
    highlightText: 'Elegant gold-accented styling with clear service breakdown'
  },
  {
    id: 'proj-3clpr2v',
    title: 'Food & Restaurant Social Media Banner',
    category: 'Social Media',
    serviceId: 'social-media-design',
    image: 'https://i.imgur.com/3clpr2V.jpg',
    projectType: 'Social Media Marketing',
    clientType: 'Culinary & Catering Brand',
    description:
      'Appetizing food menu promotion and social media ad banner designed with bold pricing callouts and conversion-focused visuals.',
    tools: ['Figma', 'Photoshop'],
    deliverables: ['Instagram Feed Post (1080x1080)', 'Story Promotion (1080x1920)', 'Digital Menu Card'],
    dimensions: '1080 x 1080 px & 1080 x 1920 px',
    highlightText: 'High-conversion visual hooks and vibrant food photography layout'
  },
  {
    id: 'proj-7we6qln',
    title: 'Entertainment & Music Single Artwork',
    category: 'Music Covers',
    serviceId: 'music-cover-design',
    image: 'https://i.imgur.com/7wE6qlN.jpg',
    projectType: 'Entertainment Release',
    clientType: 'Recording Artist & Event Host',
    description:
      'Dynamic single release cover and nightlife celebration poster featuring high-impact typography and streaming platform specs.',
    tools: ['Photoshop', 'Illustrator', 'Color Grading'],
    deliverables: ['3000x3000px Streaming Cover', 'Social Media Teaser Banner', 'VIP Ticket Flyer'],
    dimensions: '3000 x 3000 px & A3 Poster',
    highlightText: 'Cinematic lighting contrast and bold central typography'
  },
  {
    id: 'proj-rgrl3js',
    title: 'Church Conference & Worship Service Flyer',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/RGRL3js.jpg',
    projectType: 'Ministry Event Program',
    clientType: 'Church Ministry & Faith Community',
    description:
      'Powerful worship conference and revival flyer featuring dramatic lighting dynamics, speaker billing, and date hierarchy.',
    tools: ['Photoshop', 'Illustrator'],
    deliverables: ['A3 Wall Poster', 'A5 Church Handbills', 'Online Live Stream Banner'],
    dimensions: 'A3 (297x420mm) & A5 (148x210mm)',
    highlightText: 'Dynamic event lighting, clear date schedule, and speaker spotlights'
  }
];

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Flyers',
  'Branding',
  'Social Media',
  'Music Covers',
] as const;
