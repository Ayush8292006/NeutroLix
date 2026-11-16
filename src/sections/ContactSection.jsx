import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Building, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteContent';
import { PRODUCTS } from '../data/products';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Mango Fruit Powder',
    quantity: '500 kg',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-24 bg-[#06283D] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Real photo background with subtle opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Static soft blurred brand color shapes behind glass */}
      <div
        className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(41, 169, 224, 0.25) 0%, rgba(41, 169, 224, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-10 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140, 198, 63, 0.20) 0%, rgba(140, 198, 63, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-[#8CC63F] block mb-2">
            EXPORT SALES & TECHNICAL INQUIRIES
          </span>
          <div className="h-[1px] w-12 bg-[#8CC63F] mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-white tracking-tight leading-[1.18]">
            Connect with Our Formulation & Export Desk
          </h2>
          <p className="mt-3 text-base text-slate-200 leading-relaxed">
            Submit your target technical parameters, required volume, and delivery destination. Our technical sales officers respond with itemized quotations within 4 business hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Office Coordinates & Map in .glass */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-4">
              {/* Corporate HQ in .glass */}
              <div className="glass p-5 rounded-[16px] flex items-start gap-3.5">
                <Building className="w-5 h-5 text-[#8CC63F] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-sm text-white">Corporate Headquarters</h3>
                  <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                    {COMPANY_INFO.headOffice}
                  </p>
                </div>
              </div>

              {/* Manufacturing Campus in .glass */}
              <div className="glass p-5 rounded-[16px] flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#29A9E0] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-sm text-white">Agro-Processing & Spray Drying Plant</h3>
                  <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                    {COMPANY_INFO.manufacturingPlant}
                  </p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-[14px]">
                  <div className="text-[10px] font-mono uppercase text-[#8CC63F] font-semibold">Direct Telephone</div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-xs font-bold text-white hover:text-[#8CC63F] transition-colors mt-0.5 block">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="glass p-4 rounded-[14px]">
                  <div className="text-[10px] font-mono uppercase text-[#8CC63F] font-semibold">Export Desk Email</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs font-bold text-white hover:text-[#8CC63F] transition-colors mt-0.5 block truncate">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Stylized Location Map in Glass Frame */}
            <div className="glass rounded-[16px] overflow-hidden p-6 text-center border border-white/20">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8CC63F] block mb-1">Plant Location</span>
              <div className="font-display font-bold text-sm text-white">Mega Food Agro Processing Corridor, NH 48</div>
              <div className="text-xs text-slate-300 mt-1.5 leading-relaxed">Direct freight access to JNPT International Container Terminal (120 km)</div>
            </div>
          </div>

          {/* Right Column: Large .glass Form Panel */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass p-6 sm:p-9 rounded-[20px] border border-white/25 shadow-2xl"
            >
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-[#8CC63F]/20 rounded-full flex items-center justify-center mx-auto text-[#8CC63F] border border-[#8CC63F]/30">
                    <CheckCircle2 className="w-8 h-8 text-[#8CC63F]" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">Inquiry Successfully Transmitted</h3>
                  <p className="text-xs text-slate-200 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your inquiry for <span className="font-semibold text-[#8CC63F]">{formData.product}</span> has been logged. Our export manager will email formal commercial proposals and lot COA to <span className="font-semibold text-white">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/15 pb-3">
                    <h3 className="font-display font-bold text-base text-white">Direct Manufacturer RFQ Form</h3>
                    <p className="text-xs text-slate-300 mt-0.5">Please indicate target specifications and required delivery volume.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">Contact Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Arthur Miller"
                        className="w-full text-xs px-3.5 py-2.5 rounded-[8px] border border-white/20 bg-white/[0.12] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-[#8CC63F] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Miller Nutrition Labs"
                        className="w-full text-xs px-3.5 py-2.5 rounded-[8px] border border-white/20 bg-white/[0.12] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-[#8CC63F] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="arthur@millernutrition.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-[8px] border border-white/20 bg-white/[0.12] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-[#8CC63F] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (415) 890-2134"
                        className="w-full text-xs px-3.5 py-2.5 rounded-[8px] border border-white/20 bg-white/[0.12] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-[#8CC63F] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">Product of Interest *</label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-[8px] border border-white/20 bg-[#0B3C5D] text-white focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-[#8CC63F] transition-all"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.name} className="bg-[#06283D] text-white">
                            {p.name} ({p.category})
                          </option>
                        ))}
                        <option value="Custom Botanical Blend" className="bg-[#06283D] text-white">Custom Botanical Blend</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">Volume Requirement *</label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-[8px] border border-white/20 bg-[#0B3C5D] text-white focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-[#8CC63F] transition-all"
                      >
                        <option className="bg-[#06283D] text-white">250g - 1kg R&D Evaluation Sample</option>
                        <option className="bg-[#06283D] text-white">Commercial Trial (25 kg - 100 kg)</option>
                        <option className="bg-[#06283D] text-white">500 kg - 1,000 kg</option>
                        <option className="bg-[#06283D] text-white">5 Metric Tons (Quarterly Contract)</option>
                        <option className="bg-[#06283D] text-white">20+ Metric Tons (Annual Contract)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">Specifications & Message</label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify mesh size, carrier ratio preference, or delivery seaport..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-[8px] border border-white/20 bg-white/[0.12] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:border-[#8CC63F] transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-[8px] bg-[#8CC63F] text-[#06283D] font-display font-bold text-xs tracking-wider uppercase hover:bg-[#7cb433] transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit RFQ Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
