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

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-mcyykfc',
    title: 'Professional Graphic Design Promotional Flyer',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/McYYkFC.jpg',
    projectType: 'Studio Showcase',
    clientType: 'Brand & Creative Identity',
    description:
      'Official studio promotional flyer showcasing full-service graphic design solutions, branding systems, promotional layouts, and direct WhatsApp contact channels.',
    tools: ['Adobe Illustrator', 'Photoshop'],
    deliverables: ['Print-Ready 300 DPI CMYK Flyer', 'Digital Social Media Flyer', 'WhatsApp Promotional Asset'],
    dimensions: 'A5 / High-Res Vector',
    highlightText: 'Custom geometric design system with deep navy & royal blue palette'
  },
  {
    id: 'proj-rgrl3js',
    title: 'Gospel Concert & Worship Conference Flyer',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/RGRL3js.jpg',
    projectType: 'Client Project',
    clientType: 'Church & Ministry Event',
    description:
      'High-impact event promotional flyer engineered with rich lighting dynamics, clear schedule hierarchy, speaker spotlights, and print registration cues.',
    tools: ['Photoshop', 'Illustrator'],
    deliverables: ['A3 Print Poster', 'A5 Event Handbills', 'WhatsApp Broadcast Graphics'],
    dimensions: 'A5 (148x210mm) / 300 DPI',
    highlightText: 'Vibrant event lighting, bold typography and speaker spotlight'
  },
  {
    id: 'proj-ake42yk',
    title: 'Corporate Brand Identity & Visual Language',
    category: 'Branding',
    serviceId: 'branding',
    image: 'https://i.imgur.com/AKE42yK.jpg',
    projectType: 'Client Project',
    clientType: 'Enterprise & Corporate Firm',
    description:
      'Comprehensive brand identity system featuring brand guidelines, stationery suites, business collateral, and color palettes engineered for longevity.',
    tools: ['Illustrator', 'InDesign', 'Photoshop'],
    deliverables: ['Brand Guidelines', 'Stationery Suite', 'Vector Trademark Files'],
    dimensions: 'Corporate Collateral Suite',
    highlightText: 'Unified brand identity system across digital and print touchpoints'
  },
  {
    id: 'proj-eowogsk',
    title: 'Weekend Celebration & Nightlife Event Poster',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/EOWOgSK.jpg',
    projectType: 'Client Project',
    clientType: 'Entertainment & Nightlife Venue',
    description:
      'Atmospheric event flyer with energetic color contrast, DJ billing, and bold headline styling designed for maximum digital reach and printed posters.',
    tools: ['Photoshop', 'Digital Compositing'],
    deliverables: ['1080x1350px Social Flyer', 'Print-Ready A3 Poster', 'Story Teaser'],
    dimensions: 'A3 & Instagram 4:5',
    highlightText: 'High-contrast typography and digital festival artwork'
  },
  {
    id: 'proj-3clpr2v',
    title: 'Social Media Product Launch & Promo Campaign',
    category: 'Social Media',
    serviceId: 'social-media-design',
    image: 'https://i.imgur.com/3clpr2V.jpg',
    projectType: 'Client Project',
    clientType: 'E-Commerce & Retail Brand',
    description:
      'Stop-the-scroll social media promotional designs engineered to drive conversions, increase profile engagement, and promote new seasonal collections.',
    tools: ['Figma', 'Photoshop'],
    deliverables: ['Square Posts (1080x1080)', 'Vertical Stories (1080x1920)', 'Ad Banners'],
    dimensions: '1080 x 1080 px & 1080 x 1920 px',
    highlightText: 'Optimized for mobile click-through rates and brand presence'
  },
  {
    id: 'proj-7we6qln',
    title: 'Single Music Release & Streaming Cover Artwork',
    category: 'Music Covers',
    serviceId: 'music-cover-design',
    image: 'https://i.imgur.com/7wE6qlN.jpg',
    projectType: 'Client Project',
    clientType: 'Music Producer & Recording Artist',
    description:
      'Striking and expressive cover artwork compliant with Spotify, Apple Music, and Tidal technical standards, capturing the mood and auditory story.',
    tools: ['Photoshop', 'Illustrator', 'Color Grading'],
    deliverables: ['3000x3000px Streaming Cover', 'Apple Music Animated Teaser', 'Tracklist Card'],
    dimensions: '3000 x 3000 px',
    highlightText: 'Streaming platform verified color specs and cinematic typography'
  },
  {
    id: 'proj-xukunwb',
    title: 'Minimalist Vector Logo & Emblem Identity',
    category: 'Logos',
    serviceId: 'logo-design',
    image: 'https://i.imgur.com/xUKunwB.jpg',
    projectType: 'Client Project',
    clientType: 'Modern Startup & Tech Firm',
    description:
      'Timeless and memorable geometric logo symbol crafted on a mathematical grid. Delivered in scalable vector formats with monochrome variations.',
    tools: ['Adobe Illustrator', 'Golden Ratio Grid'],
    deliverables: ['Vector AI, EPS, SVG & PDF', 'Favicons & App Icons', 'Monochrome Lockups'],
    dimensions: 'Infinite Scalable Vector',
    highlightText: 'Engineered for micro 16px display and massive billboard scales'
  },
  {
    id: 'proj-v5aurb7',
    title: 'Artisanal Product Packaging & Bottle Label',
    category: 'Label & Packaging',
    serviceId: 'label-design',
    image: 'https://i.imgur.com/v5AuRB7.jpg',
    projectType: 'Client Project',
    clientType: 'Beverage & Skincare Manufacturer',
    description:
      'Shelf-ready packaging artwork with custom die-cut dielines, barcode placement, regulatory typography, and premium finish specifications.',
    tools: ['Illustrator', 'Packaging CAD'],
    deliverables: ['Conformed Dieline Files', 'Commercial Print Specs', '3D Photorealistic Mockup'],
    dimensions: 'Curved Die-Cut Label',
    highlightText: 'Print-ready CMYK with metallic foil and spot-varnish separation'
  },
  {
    id: 'proj-miwgbzz',
    title: 'Annual Business Summit & Leadership Forum Flyer',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/mIWGbZZ.jpg',
    projectType: 'Client Project',
    clientType: 'Corporate Advisory & Non-Profit',
    description:
      'Sophisticated executive forum promotional flyer with clean modern grid layouts, distinguished speaker spotlights, and clear sponsor branding.',
    tools: ['Illustrator', 'InDesign', 'Photoshop'],
    deliverables: ['Print Flyer (A4 / A5)', 'Digital Invitation Card', 'Event Programme Cover'],
    dimensions: 'A4 & A5',
    highlightText: 'Balanced typographic hierarchy and corporate visual authority'
  },
  {
    id: 'proj-tpfdojy',
    title: 'Corporate Capabilities Brochure & Profile',
    category: 'Brochures',
    serviceId: 'brochure-design',
    image: 'https://i.imgur.com/TPfDOJy.jpg',
    projectType: 'Client Project',
    clientType: 'Construction & Engineering Group',
    description:
      'Multi-page corporate profile brochure layout structured with strict baseline grids, large visual spreads, infographics, and capabilities tables.',
    tools: ['Adobe InDesign', 'Illustrator'],
    deliverables: ['Print Press PDF with Bleed', 'Digital Interactive PDF', 'Page Layout Templates'],
    dimensions: 'A4 Multi-Page / Tri-Fold',
    highlightText: 'Professional editorial design with clean information architecture'
  },
  {
    id: 'proj-ghqownp',
    title: 'Special Church Revival & Miracle Service Flyer',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/GHqowNP.jpg',
    projectType: 'Client Project',
    clientType: 'Faith Community & Ministry',
    description:
      'Dynamic conference and crusade flyer with expressive typography, warm gold accents, and detailed date and location breakdowns.',
    tools: ['Photoshop', 'Illustrator'],
    deliverables: ['A3 Print Poster', 'A5 Flyers', 'Social Media Square and Story Formats'],
    dimensions: 'A3, A5 & 1080x1350px',
    highlightText: 'Vibrant religious event design with impactful visual storytelling'
  },
  {
    id: 'proj-0lgbyce',
    title: 'Brand Growth Social Media Carousel Set',
    category: 'Social Media',
    serviceId: 'social-media-design',
    image: 'https://i.imgur.com/0lgbyCE.jpg',
    projectType: 'Client Project',
    clientType: 'Digital Agency & Creator',
    description:
      'Seamless multi-slide educational and showcase carousel designed to drive saves, shares, and audience retention across modern feeds.',
    tools: ['Figma', 'Illustrator'],
    deliverables: ['Multi-Slide 1080x1350px Carousels', 'Story Teasers', 'Profile Highlights'],
    dimensions: '1080 x 1350 px',
    highlightText: 'Seamless slide continuity and high-conversion visual hooks'
  },
  {
    id: 'proj-zuw91xq',
    title: 'Electronic EP Album Artwork & Vinyl Cover',
    category: 'Music Covers',
    serviceId: 'music-cover-design',
    image: 'https://i.imgur.com/zuW91XQ.jpg',
    projectType: 'Client Project',
    clientType: 'Indie Record Label',
    description:
      'Atmospheric abstract music cover artwork merging rhythmic textures and modern typography for streaming distribution and physical vinyl print.',
    tools: ['Photoshop', 'Digital Mixed Media'],
    deliverables: ['3000x3000px Streaming Cover', 'Gatefold Vinyl Sleeve Files', 'Social Promo Kit'],
    dimensions: '3000 x 3000 px',
    highlightText: 'Spotify & Apple Music compliance checked'
  },
  {
    id: 'proj-nksqskx',
    title: 'Complete Corporate Stationery & Brand Kit',
    category: 'Branding',
    serviceId: 'branding',
    image: 'https://i.imgur.com/NksqSkX.jpg',
    projectType: 'Client Project',
    clientType: 'Professional Services Firm',
    description:
      'Bespoke business cards, letterheads, presentation folders, and email signatures crafted with tactile elegance and coherent brand color palettes.',
    tools: ['InDesign', 'Illustrator'],
    deliverables: ['Business Cards', 'Official Letterhead', 'Corporate Presentation Deck'],
    dimensions: 'Standard Stationery Suite',
    highlightText: 'Spot-color precision and luxury print finishing standards'
  },
  {
    id: 'proj-s5yx1ee',
    title: 'Music Festival & DJ Night Party Poster',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/s5Yx1ee.jpg',
    projectType: 'Client Project',
    clientType: 'Concert Promoter & Event Organizer',
    description:
      'Electrifying party flyer designed with vibrant neon contrasts, artist lineup hierarchy, and bold event dates for viral social marketing and street posters.',
    tools: ['Photoshop', 'Illustrator'],
    deliverables: ['Street Poster Prints', 'Social Promo Pack', 'VIP Pass Artwork'],
    dimensions: 'A2, A3, and Social Banners',
    highlightText: 'High-energy typography engineered for maximum event visibility'
  },
  {
    id: 'proj-eavoh9h',
    title: 'Luxury Monogram & Trademark Identity Design',
    category: 'Logos',
    serviceId: 'logo-design',
    image: 'https://i.imgur.com/EAvOh9H.jpg',
    projectType: 'Client Project',
    clientType: 'Luxury Fashion & Lifestyle Brand',
    description:
      'An exquisite serif monogram logo mark designed for premium apparel and luxury goods, featuring balanced flourishes and timeless proportions.',
    tools: ['Adobe Illustrator'],
    deliverables: ['Scalable Vectors (AI, SVG, EPS, PDF)', 'Horizontal and Stacked Lockups', 'Embossing Dielines'],
    dimensions: 'Infinite Scalable Vector',
    highlightText: 'Gold-foil ready vector paths and premium mark balance'
  },
  {
    id: 'proj-mfqor1h',
    title: 'Premium Cosmetic Box & Product Packaging',
    category: 'Label & Packaging',
    serviceId: 'label-design',
    image: 'https://i.imgur.com/MFqoR1h.jpg',
    projectType: 'Client Project',
    clientType: 'Organic Beauty & Wellness Brand',
    description:
      'Clean, minimalist product box packaging artwork with tactile typography, ingredient zoning, and waterproof matte laminate finish specifications.',
    tools: ['Illustrator', 'Packaging Dielines'],
    deliverables: ['Box Outer Packaging', 'Inner Bottle Label', '3D Packaging Mockup'],
    dimensions: 'Custom Box Dieline',
    highlightText: 'Sustainable packaging specs with foil-stamp embossing layer'
  },
  {
    id: 'proj-0vnrgh1',
    title: 'Corporate Masterclass & Executive Workshop Flyer',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/0vNrgh1.jpg',
    projectType: 'Client Project',
    clientType: 'Executive Training Institute',
    description:
      'Polished and modern corporate training workshop flyer with structured key takeaways, facilitator profiles, and online registration instructions.',
    tools: ['InDesign', 'Photoshop'],
    deliverables: ['High-Res Print PDF', 'Email Invitation Banner', 'WhatsApp Promo Flyer'],
    dimensions: 'A4 & 1080x1080px',
    highlightText: 'Clean executive aesthetic with direct call-to-action layout'
  },
  {
    id: 'proj-1j34nae',
    title: 'Real Estate & Luxury Property Brochure',
    category: 'Brochures',
    serviceId: 'brochure-design',
    image: 'https://i.imgur.com/1J34nAE.jpg',
    projectType: 'Client Project',
    clientType: 'Real Estate Development Firm',
    description:
      'Elegant square property catalog featuring floor plan graphics, large architectural spreads, amenity checklists, and mortgage investment tables.',
    tools: ['Adobe InDesign', 'Photoshop'],
    deliverables: ['16-Page Print Press PDF', 'Interactive Digital Client PDF', 'Floor Plan Vector Maps'],
    dimensions: '210 x 210 mm Square Format',
    highlightText: 'Architectural photography grids and modern editorial styling'
  },
  {
    id: 'proj-z5nepup',
    title: 'Brand Authority Instagram & LinkedIn Template Pack',
    category: 'Social Media',
    serviceId: 'social-media-design',
    image: 'https://i.imgur.com/Z5nEPUP.jpg',
    projectType: 'Client Project',
    clientType: 'SaaS & Financial Technology',
    description:
      'Cohesive 20-template social media kit with testimonial cards, metric highlight slides, product features, and community announcements.',
    tools: ['Figma', 'Illustrator'],
    deliverables: ['20 Reusable Figma/PSD Templates', 'Pre-Exported PNG Kits', 'Typography Guide'],
    dimensions: '1080 x 1080 px & 1080 x 1920 px',
    highlightText: 'Modular templates engineered for rapid brand marketing'
  },
  {
    id: 'proj-jyuvhbh',
    title: 'Afrobeats & Hip-Hop Album Art Concept',
    category: 'Music Covers',
    serviceId: 'music-cover-design',
    image: 'https://i.imgur.com/JYuvHbH.jpg',
    projectType: 'Client Project',
    clientType: 'Independent Recording Artist',
    description:
      'Culturally grounded, striking visual art engineered for digital DSP streaming, social rollout teasers, and billboard promotional campaigns.',
    tools: ['Photoshop', 'Digital Mixed Media'],
    deliverables: ['3000x3000px High-Res Cover', 'Animated Canvas Video', 'Tracklist Back Cover'],
    dimensions: '3000 x 3000 px',
    highlightText: 'Vibrant cultural motifs with cutting-edge visual direction'
  },
  {
    id: 'proj-jqzj6my',
    title: 'Sunday Worship Service & Celebration Banner',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/Jqzj6MY.jpg',
    projectType: 'Client Project',
    clientType: 'Worship Center & Community',
    description:
      'Warm and inviting promotional flyer for weekly services, youth programs, and community outreach events with legible event information.',
    tools: ['Photoshop', 'Illustrator'],
    deliverables: ['A5 Handbill Flyer', 'WhatsApp Share Asset', 'Church Screen Banner'],
    dimensions: 'A5 & 1920x1080px Screen',
    highlightText: 'Inviting community aesthetic with clear date and venue hierarchy'
  },
  {
    id: 'proj-s9k879r',
    title: 'Restaurant & Hospitality Brand Identity System',
    category: 'Branding',
    serviceId: 'branding',
    image: 'https://i.imgur.com/s9k879r.jpg',
    projectType: 'Client Project',
    clientType: 'Gourmet Restaurant & Lounge',
    description:
      'Distinctive culinary identity with custom menus, table cards, staff uniform branding, social media identity, and signage specifications.',
    tools: ['Illustrator', 'InDesign'],
    deliverables: ['Menu Engineering & Design', 'Brand Identity Guide', 'Signage Production Files'],
    dimensions: 'Complete Restaurant Suite',
    highlightText: 'Tactile editorial menus and rich culinary color styling'
  },
  {
    id: 'proj-dmhdjb7',
    title: 'FinTech & Modern Venture Capital Logo Design',
    category: 'Logos',
    serviceId: 'logo-design',
    image: 'https://i.imgur.com/DMHDjb7.jpg',
    projectType: 'Client Project',
    clientType: 'Venture Capital & Investment Platform',
    description:
      'Sleek and authoritative logo mark crafted for modern finance, with sharp geometry conveying momentum, trust, and technological innovation.',
    tools: ['Adobe Illustrator', 'Vector Grid'],
    deliverables: ['Vector AI / EPS / SVG / PDF', 'Full Color, Dark & Light Variants', 'Brand Icon Kit'],
    dimensions: 'Scalable Vector Graphic',
    highlightText: 'Precision geometric symbol communicating trust and growth'
  },
  {
    id: 'proj-w0sblml',
    title: 'Craft Beverage Can & Packaging Label Dieline',
    category: 'Label & Packaging',
    serviceId: 'label-design',
    image: 'https://i.imgur.com/w0sBLMl.jpg',
    projectType: 'Client Project',
    clientType: 'Artisanal Beverage Brand',
    description:
      'High-impact aluminum can wrap dieline and carton packaging design with vibrant illustrative layers and regulatory nutritional typography.',
    tools: ['Illustrator', 'Can Dieline Template'],
    deliverables: ['Full Wrap Can Label Dieline', 'Outer 6-Pack Carton Artwork', '3D Can Mockup'],
    dimensions: 'Standard 330ml / 500ml Can Dieline',
    highlightText: 'Full 360-degree cylindrical dieline alignment and metallic inks'
  },
  {
    id: 'proj-klsv7wz',
    title: 'Charity Gala & Fundraising Dinner Program Flyer',
    category: 'Flyers',
    serviceId: 'flyer-design',
    image: 'https://i.imgur.com/kLsV7wz.jpg',
    projectType: 'Client Project',
    clientType: 'Foundation & Philanthropic NGO',
    description:
      'Sophisticated black-tie gala invitation and event flyer with elegant gold typography, keynote speaker honors, and ticketing instructions.',
    tools: ['InDesign', 'Photoshop'],
    deliverables: ['Print Invitation & Envelope', 'Event Program Flyer', 'Digital Ticket Asset'],
    dimensions: 'A5 & Custom Invite',
    highlightText: 'Understated luxury with gold-foil cues and editorial spacing'
  },
  {
    id: 'proj-prwlpkk',
    title: 'Creative Agency Influencer Campaign Assets',
    category: 'Social Media',
    serviceId: 'social-media-design',
    image: 'https://i.imgur.com/PRwLpkk.jpg',
    projectType: 'Client Project',
    clientType: 'Influencer Marketing Network',
    description:
      'Vibrant campaign graphics engineered for multi-platform distribution across Instagram, TikTok, and YouTube Community tabs.',
    tools: ['Photoshop', 'Figma'],
    deliverables: ['Story Teaser Templates', 'Feed Graphics', 'Highlight Icons'],
    dimensions: '1080 x 1920 px & 1080 x 1080 px',
    highlightText: 'Dynamic motion-ready layouts for creator and influencer campaigns'
  },
  {
    id: 'proj-hh5d4oe',
    title: 'Annual Performance & Capabilities Report Booklet',
    category: 'Brochures',
    serviceId: 'brochure-design',
    image: 'https://i.imgur.com/Hh5d4oe.jpg',
    projectType: 'Client Project',
    clientType: 'Financial Advisory & Corporate Group',
    description:
      'A multi-page annual report and capabilities booklet with data visualizations, executive summaries, and clear financial statements.',
    tools: ['Adobe InDesign', 'Illustrator'],
    deliverables: ['Print Press PDF', 'Interactive Digital Presentation PDF', 'Infographic Charts'],
    dimensions: 'A4 Multi-Page Landscape & Portrait',
    highlightText: 'Clean corporate financial charts and crisp data typography'
  }
];

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Flyers',
  'Branding',
  'Logos',
  'Social Media',
  'Music Covers',
  'Label & Packaging',
  'Brochures',
] as const;
