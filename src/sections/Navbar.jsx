import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../assets/Logo';
import { COMPANY_INFO } from '../data/siteContent';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PRODUCTS', href: '#products' },
    { label: 'APPLICATIONS', href: '#applications' },
    { label: 'PROCESS', href: '#process' },
    { label: 'QUALITY', href: '#quality' },
    { label: 'WHY US', href: '#why-us' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Floating Header Bar (margin 12px from top, max-w 1240px, rounded 14px) */}
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 pointer-events-none">
        <div
          className={`pointer-events-auto max-w-[1240px] mx-auto transition-all duration-300 rounded-[14px] flex items-center justify-between ${
            isScrolled
              ? 'glass-light py-2.5 px-4 sm:px-6 shadow-card'
              : 'glass py-3 px-4 sm:px-6 shadow-lg'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center flex-shrink-0"
          >
            <Logo
              className="h-8 sm:h-9"
              variant={isScrolled ? 'dark' : 'light'}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[12px] font-sans font-semibold tracking-[0.1em] transition-colors relative py-1 ${
                  isScrolled
                    ? 'text-slate-800 hover:text-[#0B3C5D]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Clean Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className={`text-xs font-display font-semibold px-4 py-2 rounded-[8px] transition-all duration-200 ${
                isScrolled
                  ? 'bg-[#0B3C5D] text-white hover:bg-[#135482] shadow-sm'
                  : 'bg-white/15 text-white border border-white/30 hover:bg-white/25 shadow-sm'
              }`}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="sm:hidden text-[11px] font-semibold px-3 py-1.5 rounded-[6px] bg-[#8CC63F] text-[#06283D]"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-[8px] transition-colors ${
                isScrolled
                  ? 'text-slate-800 hover:bg-slate-100/80'
                  : 'text-white hover:bg-white/15'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Glass Styling */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm glass-dark text-white z-50 p-6 flex flex-col justify-between border-l border-white/15 overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <Logo className="h-8" variant="light" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 text-slate-300 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="py-3 px-2 text-sm font-display font-semibold tracking-wide text-slate-200 hover:text-white border-b border-white/5 flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#8CC63F]" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3 rounded-[8px] bg-[#8CC63F] text-[#06283D] font-display font-semibold text-xs tracking-wider uppercase hover:bg-[#7cb433] transition-colors shadow-md"
                >
                  Request a Sample & Quote
                </button>
                <div className="text-[11px] text-slate-300 space-y-1">
                  <p>Email: {COMPANY_INFO.email}</p>
                  <p>Phone: {COMPANY_INFO.phone}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
