import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';
import Logo from '../assets/Logo';
import { COMPANY_INFO } from '../data/siteContent';
import { PRODUCTS } from '../data/products';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B3C5D] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo className="h-8" variant="light" />
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              NutroLix Nature is an industrial manufacturer of spray-dried and freeze-dried natural fruit powders for nutraceutical, dietary supplement, beverage, and food manufacturing leaders globally.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['FSSAI', 'ISO 22000', 'HACCP', 'GMP', 'USDA Organic', 'Halal', 'Kosher'].map((c) => (
                <span key={c} className="text-[10px] font-mono px-2 py-0.5 rounded-[2px] bg-white/10 text-slate-300 border border-white/10">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[#8CC63F] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-slate-300 font-sans">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products Catalog</a></li>
              <li><a href="#applications" className="hover:text-white transition-colors">Applications</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process & Timeline</a></li>
              <li><a href="#quality" className="hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Export Desk</a></li>
            </ul>
          </div>

          {/* Products (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-display font-bold text-xs uppercase tracking-wider text-slate-200 block">
              Fruit Powder Portfolio
            </span>
            <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-300">
              {PRODUCTS.slice(0, 7).map((p) => (
                <li key={p.id}>
                  <a href="#products" className="hover:text-[#8CC63F] transition-colors flex items-center justify-between">
                    <span>{p.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">[{p.category}]</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[#8CC63F] block">
              Corporate Desk
            </span>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8CC63F] mt-0.5 flex-shrink-0" />
                <span>BKC Financial District, Mumbai 400051 & Mega Food Agro Park, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8CC63F] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8CC63F] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full py-2 px-3 rounded-[4px] border border-white/30 hover:border-white text-white font-display font-semibold text-xs tracking-wider uppercase transition-colors text-center"
              >
                Request Commercial Offer
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-sans">
          <div>
            © {new Date().getFullYear()} NutroLix Nature LLP. All rights reserved. Industrial Ingredient Manufacturer.
          </div>

          <div className="flex items-center gap-5">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors">Terms of Supply</a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-[4px] border border-white/20 hover:bg-white/10 text-white transition-colors ml-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
