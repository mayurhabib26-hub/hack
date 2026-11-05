import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Pillars from './components/Pillars';
import EventDetails from './components/EventDetails';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Awards from './components/Awards';
import Evaluation from './components/Evaluation';
import Rules from './components/Rules';
import Venue from './components/Venue';
import Coordinators from './components/Coordinators';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  useSmoothScroll(isRegistrationOpen);

  const handleOpenRegistration = () => {
    setIsRegistrationOpen(true);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#10243B] font-sans antialiased selection:bg-[#FF6A00] selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar onOpenRegistration={handleOpenRegistration} />

      {/* Main Experience Stream */}
      <main>
        {/* Section 02: Hero Experience with Asymmetric Composition & Live Countdown */}
        <Hero onOpenRegistration={handleOpenRegistration} />

        {/* Section 03: Brand Statement Infinite Orange Marquee */}
        <Marquee />

        {/* Section 04: About HackIgnite with Editorial Split & 4 Statistics */}
        <About />

        {/* Section 05: Four Pillars. One Big Experience */}
        <Pillars />

        {/* Section 06: Event Details Asymmetric Bento Composition */}
        <EventDetails onOpenRegistration={handleOpenRegistration} />

        {/* Sponsor & Partner Carousel */}
        <Sponsors />

        {/* Section 07: The 24-Hour Horizontal Timeline Journey */}
        <Timeline />

        {/* Section 08: Awards & Recognition (Podium & Special Categories) */}
        <Awards />

        {/* Section 09: 100 Points. Four Dimensions. Evaluation Matrix */}
        <Evaluation />

        {/* Section 10: Great Ideas. Fair Play. All 10 Rules Accordion */}
        <Rules />

        {/* Section 11: Meet Us at HackIgnite (Venue & Directions) */}
        <Venue />

        {/* Section 12: Event Coordinators & Committee Directory */}
        <Coordinators />

        {/* Section 13: Final Call To Action (Full-Width Navy Contrast) */}
        <FinalCTA onOpenRegistration={handleOpenRegistration} />
      </main>

      {/* Section 14: Minimalist Brand Footer */}
      <Footer />

      {/* Interactive Participant Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={handleCloseRegistration}
      />
    </div>
  );
}
