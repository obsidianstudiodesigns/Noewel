import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, MessageCircle, Sparkles, Check } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/services';
import { ServiceItem } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialNotes = '',
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || 'spray-tan'
  );
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [notes, setNotes] = useState(initialNotes);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
    if (initialNotes) {
      setNotes(initialNotes);
    }
  }, [initialServiceId, initialNotes]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  // Construct formatted WhatsApp message
  const constructWhatsAppMessage = () => {
    let msg = `✨ *NOEWEL BEAUTY BOOKING INQUIRY* ✨\n\n`;
    msg += `Hello Marcelle, I would love to book an appointment with NOEWEL:\n\n`;
    msg += `📌 *Service:* ${currentService.name} (${currentService.price})\n`;
    if (clientName.trim()) msg += `👤 *Client Name:* ${clientName.trim()}\n`;
    if (clientPhone.trim()) msg += `📞 *Contact Phone:* ${clientPhone.trim()}\n`;
    if (preferredDate) msg += `📅 *Preferred Date:* ${preferredDate}\n`;
    if (preferredTime) msg += `⏰ *Preferred Time:* ${preferredTime}\n`;
    if (notes.trim()) msg += `📝 *Notes / Occasion:* ${notes.trim()}\n`;
    msg += `\n📍 *Location:* Kiepersol Street, Jordania, Kroonstad\n`;
    msg += `Thank you! Looking forward to confirming my appointment.`;
    return msg;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(constructWhatsAppMessage());
    const url = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      id="booking-modal-overlay"
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#FAF7F2] rounded-3xl border border-[#D9C4A1] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        id="booking-modal-content"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#EFE3D3] text-[#4A3D36] hover:bg-[#DFCBB0] transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E7D6] text-[#8A5E22] text-[10px] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" />
            <span>Instant WhatsApp Booking</span>
          </div>
          <h3 className="font-display-luxury text-2xl sm:text-3xl font-bold text-[#2C2420]">
            Book Your Glow With Noewel
          </h3>
          <p className="text-xs sm:text-sm text-[#66584F] font-light max-w-md mx-auto">
            Select your service, choose your preferred timing, and send your booking inquiry straight to Marcelle via WhatsApp.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
          
          {/* Service Selection */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F4139] mb-1.5">
              Select Service or Product *
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#D8C1A2] bg-[#FFFDF9] text-[#2C2420] text-sm focus:outline-none focus:ring-2 focus:ring-[#A8752D]"
              id="booking-service-select"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — {s.price} {s.priceNote ? `(${s.priceNote})` : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Client Name & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F4139] mb-1.5 flex items-center gap-1">
                <User className="w-3 h-3 text-[#A8752D]" />
                <span>Your Name *</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Marcelle"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8C1A2] bg-[#FFFDF9] text-[#2C2420] text-sm focus:outline-none focus:ring-2 focus:ring-[#A8752D]"
                id="booking-client-name"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F4139] mb-1.5 flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#A8752D]" />
                <span>Your Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. 082 123 4567"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8C1A2] bg-[#FFFDF9] text-[#2C2420] text-sm focus:outline-none focus:ring-2 focus:ring-[#A8752D]"
                id="booking-client-phone"
              />
            </div>
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F4139] mb-1.5 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#A8752D]" />
                <span>Preferred Date</span>
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8C1A2] bg-[#FFFDF9] text-[#2C2420] text-sm focus:outline-none focus:ring-2 focus:ring-[#A8752D]"
                id="booking-preferred-date"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F4139] mb-1.5 flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#A8752D]" />
                <span>Preferred Time</span>
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#D8C1A2] bg-[#FFFDF9] text-[#2C2420] text-sm focus:outline-none focus:ring-2 focus:ring-[#A8752D]"
                id="booking-preferred-time"
              >
                <option value="09:00 AM">09:00 AM (Morning)</option>
                <option value="10:30 AM">10:30 AM (Mid-Morning)</option>
                <option value="12:00 PM">12:00 PM (Noon)</option>
                <option value="02:00 PM">02:00 PM (Afternoon)</option>
                <option value="03:30 PM">03:30 PM (Mid-Afternoon)</option>
                <option value="05:00 PM">05:00 PM (Late Afternoon)</option>
                <option value="Flexible / Contact me">Flexible / Let's Coordinate</option>
              </select>
            </div>
          </div>

          {/* Notes / Occasion */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#4F4139] mb-1.5">
              Special Requests or Event Details
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Matric farewell dress is emerald green, or bride requesting trial session..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#D8C1A2] bg-[#FFFDF9] text-[#2C2420] text-sm focus:outline-none focus:ring-2 focus:ring-[#A8752D]"
              id="booking-notes"
            />
          </div>

          {/* Live Message Preview Accordion */}
          <div className="p-3.5 rounded-xl bg-[#F4EDE2] border border-[#DFCDB7] space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A5E22] block">
              Live WhatsApp Message Preview:
            </span>
            <p className="text-xs text-[#52443C] whitespace-pre-line font-mono bg-white/60 p-2.5 rounded-lg border border-[#E8D9C5] max-h-28 overflow-y-auto">
              {constructWhatsAppMessage()}
            </p>
          </div>

          {/* POPIA Consent */}
          <label className="flex items-start gap-2.5 text-xs text-[#52443C] leading-relaxed cursor-pointer">
            <input
              type="checkbox"
              required
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[#A8752D] shrink-0 cursor-pointer"
              id="booking-privacy-consent"
            />
            <span>
              I consent to NOEWEL. using my details to respond to my inquiry and manage my booking, and understand the
              message is sent via WhatsApp. See the{' '}
              <a href="#privacy-policy" className="underline text-[#8A5E22]">Privacy Policy</a> and{' '}
              <a href="#terms-and-conditions" className="underline text-[#8A5E22]">Terms</a>. If the client is under 18,
              a parent or guardian must make or approve this booking. *
            </span>
          </label>

          {/* Submit Action */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E]  text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99]"
              id="submit-whatsapp-booking-btn"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send Booking via WhatsApp</span>
            </button>

            <div className="text-center text-[11px] text-[#786659]">
              Direct to <strong className="text-[#382E28]">{BUSINESS_INFO.phoneDisplay}</strong> · Replies usually within 1 hour
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
