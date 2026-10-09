import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { Check, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'tanning' | 'makeup'>('all');

  // Makeup services are always listed first, followed by tanning services & products
  const categoryOrder = { makeup: 0, tanning: 1, retail: 2 } as const;
  const filteredServices = (selectedFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) =>
        selectedFilter === 'makeup'
          ? s.category === 'makeup'
          : s.category === 'tanning' || s.category === 'retail' || s.id === 'luxe-combo'
      )
  ).slice().sort((a, b) => categoryOrder[a.category] - categoryOrder[b.category]);


  return (
    <section id="services" className="py-24 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2420]">
            Artistry & Sun-Kissed Perfection
          </h2>
          <p className="text-base text-[#61544C] font-light max-w-xl mx-auto">
            Transparent pricing for bespoke makeup transformations and luxury spray tanning in Kroonstad.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#EFE7DC] border border-[#DECBB3]">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#FAF7F2] text-[#2C2420] shadow-sm font-semibold'
                  : 'text-[#6E6157] hover:text-[#2C2420]'
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => setSelectedFilter('makeup')}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'makeup'
                  ? 'bg-[#FAF7F2] text-[#2C2420] shadow-sm font-semibold'
                  : 'text-[#6E6157] hover:text-[#2C2420]'
              }`}
            >
              Makeup Artistry
            </button>
            <button
              onClick={() => setSelectedFilter('tanning')}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === 'tanning'
                  ? 'bg-[#FAF7F2] text-[#2C2420] shadow-sm font-semibold'
                  : 'text-[#6E6157] hover:text-[#2C2420]'
              }`}
            >
              Tanning Services
            </button>
          </div>
        </div>

        {/* Service Cards Grid - Makeup services display first */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl bg-[#FAF7F2] border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group hover:-translate-y-1 hover:shadow-xl ${
                service.popular
                  ? 'border-[#B98544] shadow-md ring-1 ring-[#B98544]/40'
                  : 'border-[#E7D7C1] shadow-xs'
              }`}
              id={`service-card-${service.id}`}
            >
              {/* Popular / Flyer Badge */}
              {service.flyerHighlight && (
                <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[#A8752D] text-white text-[10px] font-bold uppercase tracking-widest shadow-xs">
                  {service.flyerHighlight}
                </div>
              )}

              {/* Service Thumbnail Header */}
              {service.image && (
                <div
                  className={`w-full overflow-hidden relative ${
                    service.imageFit === 'full'
                      ? 'bg-[#EADCCB]'
                      : `${service.imageHeight ?? 'aspect-[4/3]'} bg-[#EFE8DD]`
                  }`}
                >
                  {service.imageFit === 'full' ? (
                    // Full flyer, uncropped, in a fixed-size box so all flyer cards match
                    <div className="relative aspect-[5/6] w-full flex items-center justify-center">
                      <img
                        src={service.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-70"
                      />
                      <img
                        src={service.image}
                        alt={service.name}
                        className="relative w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <>
                      <img
                        src={service.image}
                        alt={service.name}
                        className={`w-full h-full object-cover ${service.imagePosition ?? 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
                    </>
                  )}
                </div>
              )}

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display-luxury text-lg font-bold text-[#2A231E]">
                      {service.name}
                    </h3>
                  </div>
                  {service.subtitle && (
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#8A5E22] font-medium -mt-1">
                      {service.subtitle}
                    </p>
                  )}

                  {service.priceList ? (
                    <ul className="pt-1 divide-y divide-[#EFE5D8] border-y border-[#EFE5D8]">
                      {service.priceList.map((row) => (
                        <li key={row.label} className="flex items-baseline justify-between gap-3 py-1.5">
                          <span className="text-xs text-[#4F443D]">{row.label}</span>
                          <span className="font-display-luxury text-base font-bold text-[#8A5E22]">{row.price}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="font-display-luxury text-2xl font-bold text-[#8A5E22]">
                        {service.price}
                      </span>
                      {service.priceNote && (
                        <span className="text-xs text-[#736459] font-light">
                          ({service.priceNote})
                        </span>
                      )}
                      {service.duration && (
                        <span className="ml-auto text-[11px] text-[#85766C] px-2 py-0.5 rounded-full bg-[#F3E8DB]">
                          {service.duration}
                        </span>
                      )}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#5C5047] font-light leading-relaxed">
                    {service.description}
                  </p>

                  {service.notes && service.notes.length > 0 && (
                    <ul className="space-y-1 pt-1">
                      {service.notes.map((note) => (
                        <li key={note} className="flex items-start gap-2 text-xs font-medium text-[#7F5319]">
                          <Check className="w-3.5 h-3.5 text-[#A8752D] shrink-0 mt-0.5" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Features Checklist */}
                {service.features.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#EFE5D8]">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-[#8A5E22]">
                    Includes:
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#4F443D]">
                        <Check className="w-3.5 h-3.5 text-[#A8752D] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                )}

                {/* Booking Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onSelectServiceForBooking(service)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FAF7F2] border border-[#B98544] text-[#7F5319] hover:bg-[#A8752D] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    id={`book-btn-${service.id}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Book on WhatsApp</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
