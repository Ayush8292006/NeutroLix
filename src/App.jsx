import React, { useState } from 'react';
import WelcomeSplash from './components/WelcomeSplash';
import SpecSheetModal from './components/SpecSheetModal';
import QuoteModal from './components/QuoteModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Sections
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import TrustStrip from './sections/TrustStrip';
import AboutUs from './sections/AboutUs';
import ProductsSection from './sections/ProductsSection';
import ApplicationsSection from './sections/ApplicationsSection';
import ProcessTimeline from './sections/ProcessTimeline';
import QualitySection from './sections/QualitySection';
import WhyChooseUs from './sections/WhyChooseUs';
import TestimonialsSection from './sections/TestimonialsSection';
import CtaBanner from './sections/CtaBanner';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#F6F7F2] text-slate-800 font-sans selection:bg-[#8CC63F] selection:text-[#06283D] relative"
      style={{ overflowX: 'clip', width: '100%' }}
    >
      {/* 1. Welcome Splash Screen (Plays once per session) */}
      <WelcomeSplash onComplete={() => setSplashFinished(true)} />

      {/* 2. Sticky Header Navbar */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 3. Linear Clean Flow (Normal Native Scroll, No Overlap, 100% Reliable Intersection) */}
      <main className="w-full">
        {/* Section 1: Hero */}
        <Hero
          onOpenQuote={() => setIsQuoteOpen(true)}
          splashFinished={splashFinished}
        />

        {/* Section 2: Trust Facts / Counters */}
        <TrustStrip />

        {/* Section 3: About Us (Clean #F6F7F2) */}
        <AboutUs />

        {/* Section 4: Products Catalog (Clean 4-column responsive grid on white) */}
        <ProductsSection onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* Section 5: Applications Across Sectors (#06253B) */}
        <ApplicationsSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Section 6: Process Protocol Step 01-07 (#F6F7F2) */}
        <ProcessTimeline />

        {/* Section 7: Quality and Certifications (White) */}
        <QualitySection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Section 8: Why Choose Us (Deep Blue #0B3C5D for contrast) */}
        <WhyChooseUs />

        {/* Section 9: Client Evaluations (White) */}
        <TestimonialsSection />

        {/* Section 10: Contract Supply CTA Banner */}
        <CtaBanner onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Section 11: Contact Form & Map (White) */}
        <ContactSection />
      </main>

      {/* 4. Corporate Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Technical Spec Sheet Modal */}
      <SpecSheetModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Commercial Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
