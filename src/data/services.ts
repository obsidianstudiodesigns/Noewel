import { ServiceItem, TransformationItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Noewel',
  tagline: 'Professional Makeup & Tanning Artistry',
  owner: 'Marcelle Van Wyk',
  email: 'marcelle@noewel.co.za',
  phoneDisplay: '063 227 1637',
  phoneRaw: '27632271637',
  address: 'Kiepersol Street, Jordania, Kroonstad, South Africa',
  city: 'Kroonstad',
  country: 'South Africa',
  hours: 'Monday - Saturday: 08:30 – 17:30 (By Appointment)',
  instagram: '@noewel_beauty',
  website: 'www.noewel.co.za',
  // Legal / ECT Act s43 disclosure — update once confirmed.
  // Registration & VAT numbers are only shown on the site when filled in.
  legalStatus: 'Owner-operated beauty business (sole proprietor) trading as NOEWEL.',
  registrationNumber: '',
  vatNumber: '',
  informationOfficer: 'Marcelle Van Wyk',
  legalLastUpdated: '13 September 2026',
};

export const SERVICES: ServiceItem[] = [
  // ——— Makeup services (listed first) ———
  {
    id: 'bridal-makeup',
    name: 'Bridal Glamour & Consultation',
    category: 'makeup',
    price: 'R1400',
    priceNote: 'includes bridal trial',
    description: 'Timeless, romantic, and photo-ready bridal makeup designed to withstand tears of joy and last throughout your entire unforgettable wedding celebration.',
    features: [
      'Bridal makeup application on wedding day',
      'Consultation and bridal trial',
      'Premium lightweight mink-effect lashes',
      'Undertone analysis'
    ],
    popular: true,
    image: 'images/bridal-glamour-v2.jpg',
    imagePosition: 'object-[center_20%]',
    flyerHighlight: 'Bridal Artistry',
  },
  {
    id: 'bridal-party',
    name: 'Bridal Party & Mothers',
    subtitle: 'Bridesmaids · Mother of the Bride / Groom',
    category: 'makeup',
    price: 'R550',
    priceNote: 'excl. trial',
    description: 'Full-glam, timeless makeup designed to photograph beautifully and last throughout the celebrations.',
    features: [
      'Full-glam makeup application',
      'Luxury lashes included',
      'Long-wearing, photo-ready finish',
      'Makeup tailored to complement your features and outfit'
    ],
    popular: false,
    image: 'images/bridal-party-v2.jpg',
    imagePosition: 'object-[center_35%]',
    flyerHighlight: 'Wedding Party',
  },
  {
    id: 'matric-farewell',
    name: 'Matric Farewell',
    category: 'makeup',
    price: 'R650',
    priceNote: 'excl. trial',
    description: 'Youthful, luminous, and trend-focused glam tailored to complement your evening dress and photograph impeccably from every angle.',
    features: [
      'Flawless radiant or soft matte finish',
      'Eyeshadow to match your dress',
      'Custom-trimmed luxury flutter lashes',
      'Contour & highlight sculpting for stage & flash photos',
      'Setting spray lock for all-night dancing',
      'Trial @ R400 extra'
    ],
    popular: false,
    image: 'images/matric-farewell-v3.jpg',
    imagePosition: 'object-[center_35%]',
    flyerHighlight: 'Special Occasion',
  },
  {
    id: 'evening-event-glam',
    name: 'Evening & Special Event Glam',
    category: 'makeup',
    price: 'R500',
    description: 'Elevated, sophisticated makeup for galas, milestone birthdays, corporate dinners, or night outs when you want to look effortlessly striking.',
    features: [
      'Flawless radiant or soft matte finish coverage',
      'Sophisticated eye design',
      'Bespoke nude / bold / natural color tones',
      'All-day sweat and humidity resistance'
    ],
    popular: false,
    image: 'images/evening-glam-v4.jpg',
    imagePosition: 'object-[center_25%]',
  },
  {
    id: 'mini-makeover',
    name: 'Mini Makeover',
    category: 'makeup',
    price: 'R750',
    description: 'The Mini Makeover includes full-glam makeup and professional hair styling, tailored to complement your features, outfit and personal style. From flawless skin and beautifully defined eyes to polished, camera-ready hair, every detail is carefully considered to create a sophisticated and long-lasting look.',
    features: [
      'Full-glam makeup application',
      'Professional hair styling',
      'Flawless skin & beautifully defined eyes',
      'Polished, camera-ready hair',
      'Tailored to your features, outfit & personal style'
    ],
    popular: false,
    image: 'images/mini-makeover.jpg',
    imagePosition: 'object-[center_22%]',
    flyerHighlight: 'Makeup + Hair',
  },
  {
    id: 'luxe-combo',
    name: 'The Ultimate Luxe Glow Package (Full Glam Makeup + Spray Tan)',
    category: 'makeup',
    price: 'R750',
    priceNote: 'Save R80',
    description: 'The definitive VIP experience. Combines our signature professional spray tan with full evening or bridal-quality event glam for the ultimate transformation.',
    features: [
      'Full Body Professional Spray Tan session (done 24-48h prior)',
      'Full Face Luxury Event Makeup on event day',
      'Deluxe lash set'
    ],
    popular: true,
    image: 'images/luxe-glow-package.jpg',
    imagePosition: 'object-[center_28%]',
    flyerHighlight: 'Signature Package',
  },
  // ——— Tanning services & products ———
  {
    id: 'spray-tan',
    name: 'Professional Spray Tan',
    category: 'tanning',
    price: 'R420',
    priceNote: 'per spray tan',
    duration: '30 mins',
    description: 'A flawless, natural-looking sun-kissed glow tailored precisely to your skin undertone. Enhances your natural contours and confidence without harsh streaks.',
    features: [
      'Natural golden glow with no orange undertones',
      'Long-lasting results (7–10 days with proper aftercare)',
      'Hydrating & nourishing botanical mist',
      'Quick-drying & gentle on sensitive skin',
      'Custom color consultation before application'
    ],
    popular: true,
    image: 'images/spray-tan.jpg',
    imageHeight: 'aspect-[5/6]',
    flyerHighlight: 'Sun-kissed GLOW · R420',
  },
  {
    id: 'tanning-lotion',
    name: 'Premium Sunbed Tanning Lotion',
    category: 'retail',
    price: 'R150',
    priceNote: '100ml e 3.38 fl.oz',
    description: 'Collagen Boost + UV Tan Enhancer. Formulated to boost collagen synthesis for a deeper, darker, long-lasting UV tan while intensely nourishing your skin.',
    features: [
      'Collagen Boost: Supports natural collagen for firmer, healthier skin',
      'Enhanced Tanning: Accelerates melanin production for deeper color',
      'Paraben Free & Cruelty Free formulation',
      'Suitable for all skin types',
      'Velvety quick-absorption finish'
    ],
    popular: false,
    image: 'images/sunbed-lotion-flyer.jpg',
    imageFit: 'full',
    flyerHighlight: 'Bestseller Retail · R150',
  },
  {
    id: 'hot-tingle-lotion',
    name: 'HOT Tingle Tanning Lotion',
    category: 'retail',
    price: 'R220',
    priceNote: '100ml',
    description: 'Bronzers ensure extraordinary tanning results and a special heat complex stimulates blood flow, making your skin feel warm and activated for a deep, dark tan.',
    features: [
      'Deep dark tan: Bronzers for extraordinary results',
      'Heat activated: Stimulates blood flow for a warm, activated feel',
      'Radiant glow: Added vitamins A, C, E & F',
      'Enriched with jojoba oil for rich, long-lasting tan and skin care',
      'Please note: This hyper tingle lotion is not for sensitive skin'
    ],
    popular: false,
    image: 'images/hot-tingle-flyer-v2.jpg',
    imageFit: 'full',
    flyerHighlight: 'Glow Hotter · R220',
  },
];

export const WORKBOOK_TRANSFORMATIONS: TransformationItem[] = [
  { id: 'trans-10', image: 'images/before-after-10.jpg' },
  { id: 'trans-1', image: 'images/before-after-1.jpg' },
  { id: 'trans-2', image: 'images/before-after-2.jpg' },
  { id: 'trans-3', image: 'images/before-after-3.jpg' },
  { id: 'trans-4', image: 'images/before-after-4.jpg' },
  { id: 'trans-5', image: 'images/before-after-5.jpg' },
  { id: 'trans-6', image: 'images/before-after-6.jpg' },
  { id: 'trans-7', image: 'images/before-after-7.jpg' },
  { id: 'trans-8', image: 'images/before-after-8-v3.jpg' },
  { id: 'trans-9', image: 'images/before-after-9-v2.jpg' },
];

export const ABOUT_STORY = {
  title: 'The Meaning Behind Noewel',
  subtitle: 'Welcome to NOEWEL.',
  paragraph1: 'Noewel represents the beauty of a new beginning — a moment of transformation, confidence and becoming the most radiant version of yourself.',
  paragraph2: 'Inspired by the feeling of something new, special and beautifully unforgettable, the name embodies what we believe makeup should be: not a mask, but a celebration of you.',
  paragraph3: 'Every woman deserves to feel beautiful, confident and truly seen. At Noewel, we create more than makeup looks — we create moments you will remember, from your everyday confidence to the most important occasions of your life.',
  tagline: 'Noewel — where beauty meets a new beginning.',
  signoff: 'With love,',
  author: 'Marcelle Van Wyk',
  brand: 'NOEWEL.',
};
