import React from 'react';
import { ArrowUp, Phone, MapPin, Calendar, Heart } from 'lucide-react';
import { EVENT_DATA } from '../data/event';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFF9F0] border-t border-[#F2F0EB] text-[#10243B] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F2F0EB]">
          
          {/* Brand & Emblem (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-white border border-[#FF6A00]/30 shadow-xs flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/aistudio/logo_9820e70d.png"
                  alt="HackIgnite Emblem"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl text-[#10243B] tracking-tight block">
                  HACK<span className="text-[#FF6A00]">IGNITE</span> 2026
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#455064]">
                  NATIONAL LEVEL 24-HOUR HACKATHON
                </span>
              </div>
            </div>

            <p className="font-display font-extrabold text-base tracking-widest text-[#FF6A00] uppercase">
              {EVENT_DATA.tagline}
            </p>

            <p className="text-sm text-[#455064] leading-relaxed max-w-sm font-medium">
              Organized by the Department of Computer Science & Engineering, Jain College of Engineering and Technology, Hubballi.
            </p>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#10243B]">
              NAVIGATION
            </p>
            <ul className="space-y-2.5 text-sm font-bold text-[#455064]">
              <li><a href="#home" className="hover:text-[#FF6A00] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#FF6A00] transition-colors">About HackIgnite</a></li>
              <li><a href="#experience" className="hover:text-[#FF6A00] transition-colors">Four Pillars</a></li>
              <li><a href="#schedule" className="hover:text-[#FF6A00] transition-colors">24-Hour Schedule</a></li>
              <li><a href="#awards" className="hover:text-[#FF6A00] transition-colors">Awards & Podium</a></li>
              <li><a href="#contact" className="hover:text-[#FF6A00] transition-colors">Event Coordinators</a></li>
            </ul>
          </div>

          {/* Event Quick Logistics (Span 4) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#10243B]">
              KEY DETAILS
            </p>
            <div className="space-y-3 text-sm text-[#455064] font-medium">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                <span><strong className="text-[#10243B]">12–13 December 2026</strong> (Starts 11:00 AM IST)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                <span>Jain College of Engineering & Tech, Hebballi Rd, Unkal, Hubballi – 580031</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                <a href="tel:7022951232" className="hover:text-[#FF6A00] font-bold text-[#10243B]">
                  Lead Coordinator: Aditya R H (7022951232)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#455064] font-medium">
          <p>
            © 2026 <strong className="text-[#10243B]">HACKIGNITE</strong>. Jain College of Engineering and Technology, Hubballi. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#F2F0EB] text-[#10243B] hover:text-[#FF6A00] hover:border-[#FF6A00] transition-colors cursor-pointer text-xs sm:text-sm font-bold uppercase shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
