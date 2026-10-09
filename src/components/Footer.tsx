import React from 'react';
import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7DDCB] text-[#1F1712] pt-16 pb-12 border-t border-[#E3BFA8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#E3BFA8]">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-start">
              <img
                src="images/noewel-logo-footer.png"
                alt="NOEWEL. Professional Makeup & Tanning"
                className="h-20 w-auto select-none drop-shadow-sm"
                draggable={false}
              />
            </div>
            <p className="text-xs text-[#2A1F18] font-medium leading-relaxed">
              Timeless beauty, effortless elegance, and elevated professional makeup and spray tanning artistry in Kroonstad, South Africa.
            </p>
            <div className="pt-2 text-[11px] text-[#3A2C23] font-medium">
              Founded by Marcelle Van Wyk.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display-luxury text-sm font-extrabold uppercase tracking-[0.2em] text-[#6B4410]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#2A1F18] font-medium">
              <li>
                <a href="#home" className="hover:text-[#8A5E22] transition-colors">Home Landing</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#8A5E22] transition-colors">A Beautiful New Beginning (About)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8A5E22] transition-colors">Professional Spray Tan (R420)</a>
              </li>
              <li>
                <a href="#workbook" className="hover:text-[#8A5E22] transition-colors">Client Workbook (Before & After)</a>
              </li>
              <li>
                <a href="#service-card-tanning-lotion" className="hover:text-[#8A5E22] transition-colors">Tanning Lotions (R150 / R220)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#8A5E22] transition-colors">Kroonstad Studio Location</a>
              </li>
            </ul>
          </div>

          {/* Services & Offerings */}
          <div className="space-y-3">
            <h4 className="font-display-luxury text-sm font-extrabold uppercase tracking-[0.2em] text-[#6B4410]">
              Artistry Menu
            </h4>
            <ul className="space-y-2 text-xs text-[#2A1F18] font-medium">
              <li>Bridal Glamour & Consultation — <span className="text-[#6B4410]">R1400</span></li>
              <li>Bridal Party & Mothers — <span className="text-[#6B4410]">R550</span></li>
              <li>Matric Farewell — <span className="text-[#6B4410]">R650</span></li>
              <li>Mini Makeover (Makeup + Hair) — <span className="text-[#6B4410]">R750</span></li>
              <li>Evening & Special Event Glam — <span className="text-[#6B4410]">R500</span></li>
              <li>Ultimate Luxe Glow Package — <span className="text-[#6B4410]">R850</span></li>
              <li>Professional Spray Tan — <span className="text-[#6B4410]">R420</span></li>
              <li>Standing Sunbed — <span className="text-[#6B4410]">from R55</span></li>
              <li>Lay Down Sunbed — <span className="text-[#6B4410]">from R45</span></li>
              <li>Sunbed Tanning Lotion (100ml) — <span className="text-[#6B4410]">R150</span></li>
              <li>HOT Tingle Tanning Lotion (100ml) — <span className="text-[#6B4410]">R220</span></li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3">
            <h4 className="font-display-luxury text-sm font-extrabold uppercase tracking-[0.2em] text-[#6B4410]">
              Contact Details
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2A1F18] font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#6B4410] shrink-0 mt-0.5" />
                <span>Kiepersol Street, Jordania, Kroonstad, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#6B4410] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#8A5E22] transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#6B4410] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#8A5E22] transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#2A1F18] font-semibold hover:text-[#6B4410] transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Legal Links & Business Disclosure */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E3BFA8] pb-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-wider" aria-label="Legal">
            <a href="#privacy-policy" className="text-[#2A1F18] font-medium hover:text-[#8A5E22] transition-colors">Privacy Policy (POPIA)</a>
            <a href="#terms-and-conditions" className="text-[#2A1F18] font-medium hover:text-[#8A5E22] transition-colors">Terms & Conditions</a>
            <a href="#cookie-notice" className="text-[#2A1F18] font-medium hover:text-[#8A5E22] transition-colors">Cookie Notice</a>
            <a href="#privacy-policy" className="text-[#2A1F18] font-medium hover:text-[#8A5E22] transition-colors">Information Officer: {BUSINESS_INFO.informationOfficer}</a>
          </nav>
          <p className="text-[11px] text-[#3A2C23] font-medium md:text-right max-w-md">
            {BUSINESS_INFO.legalStatus}
            {BUSINESS_INFO.registrationNumber && <> Reg. No. {BUSINESS_INFO.registrationNumber}.</>}
            {BUSINESS_INFO.vatNumber && <> VAT No. {BUSINESS_INFO.vatNumber}.</>}
          </p>
        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#3A2C23] font-medium gap-4">
          <div>
            © {new Date().getFullYear()} Noewel. All rights reserved. Professional Makeup & Tanning Artistry.
          </div>

          <div className="flex items-center gap-1">
            <span>Designed & Built with elegance for Noewel by</span>
            <a
              href="https://www.obsidianstudiodesigns.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B4410] hover:underline font-medium"
            >
              Obsidian Studio Designs
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
