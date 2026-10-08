import React from 'react';
import { Calendar, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';
import desktopWallpaper from '../assets/images/landing-page.jpg';
import mobileWallpaper from '../assets/images/landing-page-mobile.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10"
    >
      {/* Responsive First Page Wallpaper:
          - landing-page-mobile.jpg for mobile phones and handheld devices (< 768px)
          - landing-page.jpg for desktop and widescreen displays (>= 768px)
      */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#251E1A] overflow-hidden pointer-events-none">
        <picture className="w-full h-full block">
          {/* Mobile phones and handheld devices */}
          <source media="(max-width: 767px)" srcSet={mobileWallpaper} />
          {/* Desktop and larger screens */}
          <source media="(min-width: 768px)" srcSet={desktopWallpaper} />
          <img
            src={desktopWallpaper}
            alt="Noewel Professional Makeup & Tanning - First Page Wallpaper"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            id="hero-first-page-wallpaper"
          />
        </picture>

        {/* Subtle Luxury Gradient Vignette for Contrast & Readability */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/35 to-black/50 md:from-black/75 md:via-black/30 md:to-black/40" />
      </div>

      {/* Main Interactive Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl mx-auto md:mx-0 space-y-5 text-center md:text-left py-6">
          
          {/* Editorial Heading */}
          <div className="space-y-2 drop-shadow-md">
            <h2 className="font-script-luxury text-3xl sm:text-5xl text-[#F3D3A6] italic font-normal tracking-wide">
              Timeless Radiance & Natural Glow
            </h2>
            <h1 className="font-display-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Professional Makeup <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5DDB8] via-[#DBA054] to-[#B98544]">
                & Sun-Kissed Tanning
              </span>
            </h1>
          </div>

          {/* Luxury Description */}
          <p className="text-sm sm:text-base lg:text-lg text-white/90 font-light leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-sm">
            Welcome to <strong className="font-semibold text-white">NOEWEL</strong> by Marcelle Van Wyk — where beauty
            is elevated into an experience. From luxury glam makeup and bespoke makeovers to bridal artistry,
            matric farewell glam and natural, streak-free spray tanning, every service is thoughtfully created
            to make you feel confident, radiant and effortlessly beautiful.
          </p>

          {/* Direct WhatsApp Booking & Exploration Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3.5 pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full btn-noewel-gold text-white text-xs font-semibold uppercase tracking-[0.22em] shadow-xl hover:shadow-2xl  active:scale-[0.99] transition-all cursor-pointer"
              id="hero-book-glow-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Glow via WhatsApp</span>
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/30 text-xs font-medium uppercase tracking-[0.2em] transition-all"
              id="hero-view-services-btn"
            >
              <span>Explore Services & Rates</span>
            </a>
          </div>

          {/* Credentials: training & memberships */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 pt-4">
            <div className="flex w-full max-w-[19rem] sm:w-auto sm:max-w-none items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20">
              <img
                src="images/ubella-logo.png"
                alt="Ubella logo"
                className="w-14 h-14 rounded-full"
              />
              <div className="text-left leading-tight">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#E2B47A]">Professionally trained at</p>
                <p className="font-display-luxury text-sm font-semibold tracking-[0.15em] text-white">UBELLA</p>
              </div>
            </div>

            <div className="flex w-full max-w-[19rem] sm:w-auto sm:max-w-none items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20">
              <img
                src="images/bruidsgids-badge.png"
                alt="Proud member of Bruidsgids & Wedding Guide 2026"
                className="w-14 h-14"
              />
              <div className="text-left leading-tight">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#E2B47A]">Proud member of</p>
                <p className="font-display-luxury text-sm font-semibold tracking-[0.05em] text-white">Bruidsgids &amp; Wedding Guide</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Studio Address & Contacts */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15 text-white/80 text-xs">
          
          <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase">
            <span className="inline-flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#E2B47A]" />
              {BUSINESS_INFO.address}
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors text-white/90"
            >
              <Phone className="w-3.5 h-3.5 text-[#E2B47A]" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          <span className="text-[11px] tracking-widest uppercase text-white/60">
            Marcelle Van Wyk · Kroonstad
          </span>
        </div>
      </div>
    </section>
  );
};

