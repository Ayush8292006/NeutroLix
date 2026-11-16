import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Box } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function QuoteModal({ isOpen, onClose, initialProduct = null }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || PRODUCTS[0].name);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'United States',
    quantity: '500 kg',
    powderType: 'Spray Dried Powder',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06253B]/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl glass-light !rounded-[20px] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-white/80"
        >
          {/* Header */}
          <div className="bg-[#0B3C5D] px-6 py-4 text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                <Box className="w-4 h-4 text-[#8CC63F]" />
              </div>
              <div>
                <h3 className="text-base font-bold font-display text-white">Commercial Quote & Sample Inquiry</h3>
                <p className="text-[11px] text-slate-300">Direct manufacturer export pricing & regulatory dossiers</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 bg-[#8CC63F]/20 rounded-full flex items-center justify-center mx-auto text-[#0B3C5D]">
                  <CheckCircle2 className="w-7 h-7 text-[#8CC63F]" />
                </div>
                <h4 className="text-xl font-bold font-display text-[#0B3C5D]">Inquiry Dispatched</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Our export sales desk has received your quotation inquiry for <span className="font-semibold">{selectedProduct}</span>. An itemized commercial proposal will be emailed to <span className="font-semibold">{formData.email}</span> within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-4 py-2 rounded text-xs font-semibold bg-[#0B3C5D] text-white hover:bg-[#135482] transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Enterprise *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. NutraHealth Global Inc."
                      className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@nutrahealth.com"
                      className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 234-5678"
                      className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Product of Interest *</label>
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D] bg-white"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.category})
                        </option>
                      ))}
                      <option value="Custom Proprietary Fruit Blend">Custom Proprietary Fruit Blend</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Quantity</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D] bg-white"
                    >
                      <option>Evaluation Sample (250g - 1kg)</option>
                      <option>Trial Batch: 25 kg - 100 kg</option>
                      <option>Commercial Batch: 250 kg - 500 kg</option>
                      <option>1 MT - 5 MT (Quarterly Contract)</option>
                      <option>10 MT+ (Annual Supply Contract)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Destination Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. United States, Germany, Japan"
                      className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Process Type</label>
                    <select
                      value={formData.powderType}
                      onChange={(e) => setFormData({ ...formData, powderType: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D] bg-white"
                    >
                      <option>Spray Dried (Standard)</option>
                      <option>Freeze Dried (Lyophilized 100% Pure)</option>
                      <option>Organic Certified</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Specifications & Delivery Requirements</label>
                  <textarea
                    rows="2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify target mesh size, packaging format, or port of destination..."
                    className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-[4px] bg-[#8CC63F] text-[#06253B] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#7cb433] transition-colors"
                  >
                    Submit Quotation Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
