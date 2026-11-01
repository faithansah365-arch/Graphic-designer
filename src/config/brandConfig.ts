/**
 * Central Brand Configuration
 * Easily update the business name, phone number, WhatsApp, and social links here.
 */

export const BRAND_CONFIG = {
  // Replace with official brand name when available (e.g., "Apex Visual Studio", "Aurelian Design Co.")
  businessName: "Graphic Designer",
  subtitle: "Creative Design & Branding Studio",
  
  // Contact details
  phoneDisplay: "+233 599 086 738",
  phoneRaw: "+233599086738",
  whatsappNumber: "+233599086738",
  whatsappUrlBase: "https://wa.me/233599086738",
  ownerEmail: "faithansah365@gmail.com",
  formspreeEndpoint: "https://formspree.io/f/mjyyaqjw",
  heroImageUrl: "https://i.imgur.com/McYYkFC.jpg",
  heroImagePostUrl: "https://imgur.com/McYYkFC",
  
  // Headings & Brand Statements
  mainHeadline: "Do You Need a Professional Graphic Designer?",
  supportingHeadline: "Creative Designs. Powerful Branding. Visual Stories That Speak.",
  businessDescription:
    "Get professional graphic design solutions tailored to your brand, business, and creative needs. From branding and logo creation to promotional materials and social media designs, we help bring your ideas to life through compelling visual communication.",
  aboutHeading: "Creativity Meets Professional Design.",
  
  // Brand Colors
  colors: {
    navy: "#080B63",
    royal: "#1119A8",
    purple: "#7027A5",
    offWhite: "#F7F7FA",
    textDark: "#151515",
    white: "#FFFFFF",
  },
  
  // Editable social media profile URLs
  socialLinks: [
    { name: "Instagram", url: "https://instagram.com/graphicdesigner", handle: "@graphicdesigner" },
    { name: "Behance", url: "https://behance.net/graphicdesigner", handle: "behance.net/graphicdesigner" },
    { name: "LinkedIn", url: "https://linkedin.com/in/graphicdesigner", handle: "LinkedIn Profile" },
    { name: "X (Twitter)", url: "https://x.com/graphicdesigner", handle: "@graphicdesigner" },
    { name: "Facebook", url: "https://facebook.com/graphicdesigner", handle: "Facebook Page" },
  ],
};

/**
 * Generate a pre-filled WhatsApp link
 */
export function getWhatsAppUrl(serviceName?: string, customNote?: string): string {
  let message = "Hello, I am interested in your graphic design services. I would like to make an enquiry.";
  
  if (serviceName) {
    message = `Hello, I am interested in your ${serviceName} service. I would like to make an enquiry.`;
  }
  
  if (customNote) {
    message += `\n\nProject details: ${customNote}`;
  }
  
  return `https://wa.me/233599086738?text=${encodeURIComponent(message)}`;
}
