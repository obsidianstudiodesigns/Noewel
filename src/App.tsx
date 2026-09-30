import React, { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkbookGallery } from './components/WorkbookGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal, LegalTab, LEGAL_HASHES } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { ServiceItem } from './types';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('spray-tan');
  const [initialBookingNotes, setInitialBookingNotes] = useState<string>('');
  const [legalTab, setLegalTab] = useState<LegalTab | null>(null);

  // Legal pages open from links such as #privacy-policy, #terms-and-conditions, #cookie-notice
  useEffect(() => {
    const syncFromHash = () => {
      const match = (Object.keys(LEGAL_HASHES) as LegalTab[]).find((tab) => LEGAL_HASHES[tab] === window.location.hash);
      if (match) setLegalTab(match);
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const closeLegal = useCallback(() => {
    setLegalTab(null);
    if ((Object.values(LEGAL_HASHES) as string[]).includes(window.location.hash)) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const handleOpenBooking = (serviceId?: string, notes?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    if (notes) {
      setInitialBookingNotes(notes);
    } else if (!notes && !serviceId) {
      setInitialBookingNotes('');
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (service: ServiceItem) => {
    setSelectedServiceId(service.id);
    setInitialBookingNotes(`Inquiring about ${service.name} (${service.price}).`);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420] relative selection:bg-[#E8D8C3] selection:text-[#2C2420]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Landing Page Hero (Responsive for Desktop & Mobile) */}
        <Hero onOpenBooking={() => handleOpenBooking('spray-tan')} />

        {/* Brand Story & Mission (About us flyer extract) */}
        <AboutSection />

        {/* Services Menu & Rates */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Client Workbook (Before & After Transformations 1 - 4) */}
        <WorkbookGallery />

        {/* Contact, Location & Studio Details */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive WhatsApp Booking System Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
        initialNotes={initialBookingNotes}
      />

      {/* POPIA Privacy Policy, Terms & Conditions and Cookie Notice */}
      <LegalModal activeTab={legalTab} onChangeTab={setLegalTab} onClose={closeLegal} />
      <CookieBanner onOpenPolicy={() => setLegalTab('cookies')} />
    </div>
  );
}

