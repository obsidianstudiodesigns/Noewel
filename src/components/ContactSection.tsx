import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-24 relative bg-[#F7F2EB] border-t border-[#EBDCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2420]">
            Visit Noewel Beauty
          </h2>
          <p className="text-base text-[#61544C] font-light max-w-xl mx-auto">
            Experience our private sanctuary in Kroonstad. We operate strictly by appointment to give every client our undivided devotion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="rounded-3xl bg-[#FAF7F2] border border-[#DFCBB0] p-8 shadow-lg space-y-6">
              <h3 className="font-display-luxury text-xl font-bold text-[#2A231E]">
                Studio Details
              </h3>

              {/* Address Item */}
              <div className="flex items-start gap-4 pb-5 border-b border-[#F0E3D3]">
                <div className="w-11 h-11 rounded-2xl bg-[#F4E8D7] flex items-center justify-center text-[#936425] shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A5E22] block">
                    Address
                  </span>
                  <p className="text-base font-medium text-[#2C2420] mt-0.5">
                    Kiepersol Street
                  </p>
                  <p className="text-sm text-[#615349]">
                    Jordania, Kroonstad, South Africa
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kiepersol+Street+Jordania+Kroonstad+South+Africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#936425] hover:text-[#7A5822] font-semibold mt-2 underline"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp Item */}
              <div className="flex items-start gap-4 pb-5 border-b border-[#F0E3D3]">
                <div className="w-11 h-11 rounded-2xl bg-[#F4E8D7] flex items-center justify-center text-[#936425] shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A5E22] block">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-lg font-display-luxury font-bold text-[#2C2420] hover:text-[#8A5E22] transition-colors mt-0.5 block"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#615349] mt-0.5">
                    Available for bookings, order pickups, and consultations.
                  </p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4 pb-5 border-b border-[#F0E3D3]">
                <div className="w-11 h-11 rounded-2xl bg-[#F4E8D7] flex items-center justify-center text-[#936425] shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A5E22] block">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm font-medium text-[#2C2420] hover:text-[#8A5E22] transition-colors mt-0.5 block break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-xs text-[#615349] mt-0.5">
                    For bridal quotations, event itineraries, or wholesale product inquiries.
                  </p>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F4E8D7] flex items-center justify-center text-[#936425] shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A5E22] block">
                    Studio Hours
                  </span>
                  <p className="text-sm font-medium text-[#2C2420] mt-0.5">
                    {BUSINESS_INFO.hours}
                  </p>
                  <p className="text-xs text-[#827165]">
                    Sunday: Special Event Bookings by Request
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Button */}
            <button
              onClick={onOpenBooking}
              className="w-full py-4 rounded-2xl btn-noewel-gold text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              id="contact-book-btn"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Appointment via WhatsApp</span>
            </button>

          </div>

          {/* Right: Prep Guidelines & Interactive Map Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Client Preparation Tips */}
            <div className="rounded-3xl bg-[#FAF7F2] border border-[#DFCBB0] p-8 shadow-lg space-y-4">
              <h3 className="font-display-luxury text-xl font-bold text-[#2A231E]">
                Client Prep Guidelines
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-[#54483F] leading-relaxed font-light">
                <div className="p-3.5 rounded-xl bg-[#F7F1E7] border-l-3 border-[#A8752D]">
                  <strong className="text-[#362B25] font-semibold block mb-0.5">
                    ☀️ Spray Tan Preparation (R420)
                  </strong>
                  Exfoliate thoroughly 24 hours prior. Arrive with clean, bare skin—free of perfumes, deodorants, or body lotions. Wear loose, dark clothing and flip-flops to your session.
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F1E7] border-l-3 border-[#A8752D]">
                  <strong className="text-[#362B25] font-semibold block mb-0.5">
                    💄 Makeup Appointment Preparation
                  </strong>
                  Arrive with a freshly cleansed face and your favorite daily moisturizer applied. If you have inspiration photos or your dress fabric/color, share them prior to your consultation.
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F1E7] border-l-3 border-[#A8752D]">
                  <strong className="text-[#362B25] font-semibold block mb-0.5">
                    🧴 Premium Sunbed Tanning Lotions
                  </strong>
                  Apply evenly prior to your sunbed session to stimulate collagen synthesis and maximize deep melanin development.
                </div>
              </div>
            </div>

            {/* Kroonstad Map Frame */}
            <div className="rounded-3xl bg-[#FAF7F2] border border-[#DFCBB0] p-4 shadow-lg overflow-hidden">
              <div className="rounded-2xl overflow-hidden border border-[#D9C4A1] relative h-64 bg-[#EADDCB]">
                {/* Embed OpenStreetMap / Interactive Map for Kroonstad */}
                <iframe
                  title="Noewel Location Map - Kiepersol Street, Jordania, Kroonstad"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=27.2000%2C-27.6700%2C27.2700%2C-27.6300&amp;layer=mapnik&amp;marker=-27.6500%2C27.2350"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-sm border border-[#D8C09A] flex items-center justify-between shadow-md">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#8A5E22]">
                      Noewel Studio
                    </p>
                    <p className="text-xs font-semibold text-[#2C2420]">
                      Kiepersol Street, Jordania, Kroonstad
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kiepersol+Street+Jordania+Kroonstad+South+Africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-[#A8752D] hover:bg-[#8A5E22] text-white text-[10px] font-semibold uppercase tracking-wider transition-colors"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
