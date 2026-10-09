export interface ServiceItem {
  id: string;
  name: string;
  subtitle?: string;
  category: 'tanning' | 'makeup' | 'retail';
  price: string;
  priceNote?: string;
  duration?: string;
  description: string;
  features: string[];
  popular?: boolean;
  image?: string;
  imageFit?: 'cover' | 'contain' | 'full';
  imageHeight?: string;
  imagePosition?: string;
  flyerHighlight?: string;
  // Multi-line price table (e.g. sunbed sessions), shown instead of the single price
  priceList?: { label: string; price: string }[];
  // Short highlighted notes shown under the price list
  notes?: string[];
}

export interface TransformationItem {
  id: string;
  image: string;
}

export interface BookingFormState {
  serviceId: string;
  serviceName: string;
  clientName: string;
  clientPhone: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
