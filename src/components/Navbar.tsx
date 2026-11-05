import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenRegistration: () => void;
}

export default function Navbar({ onOpenRegistration }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SCHEDULE', href: '#schedule' },
    { label: 'AWARDS', href: '#awards' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#FFF9F0]/95 backdrop-blur-md shadow-xs border-b border-[#F2F0EB]'
          : 'bg-[#FFF9F0] border-b border-[#F2F0EB]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-8">
          
          {/* Zone 1: Brand Wordmark & Original Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0"
            aria-label="HackIgnite 2026 Home"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full p-0.5 bg-white border border-[#FF6A00]/30 shadow-xs flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/assets/aistudio/logo_9820e70d.png"
                alt="HackIgnite Official Emblem"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl md:text-2xl text-[#10243B] tracking-tight leading-none">
                HACK<span className="text-[#FF6A00]">IGNITE</span>
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#455064] mt-0.5">
                JCET HUBBALLI
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Clean Single-Line Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm md:text-base font-bold tracking-wider text-[#10243B]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 whitespace-nowrap transition-colors hover:text-[#FF6A00] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6A00] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRegistration}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-extrabold uppercase tracking-wider text-white bg-[#FF6A00] hover:bg-[#F4510B] rounded-lg shadow-xs hover:shadow-md transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#10243B] hover:bg-[#F2F0EB] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#F2F0EB] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-bold text-[#10243B] hover:text-[#FF6A00] hover:bg-[#FFF9F0] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration();
              }}
              className="w-full py-3.5 bg-[#FF6A00] hover:bg-[#F4510B] text-white text-sm font-extrabold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
