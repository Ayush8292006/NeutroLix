import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Send, CheckCircle2, FileText, Sparkles, Box, Info } from 'lucide-react';

export default function SpecSheetModal({ product, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'sample'
  const [submitted, setSubmitted] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '250g Standard Lab Sample',
    application: 'Nutraceuticals / Supplements',
    message: '',
  });

  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownloadCOA = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      const content = `NUTROLIX NATURE - CERTIFICATE OF ANALYSIS & TECHNICAL SPECIFICATION
Product: ${product.name} (${product.botanicalName})
Category: ${product.category}
Mesh Size: ${product.meshSize}
Moisture: ${product.moisture}
Solubility: ${product.solubility}
Shelf Life: ${product.shelfLife}
Active Compounds: ${product.actives}
Certifications: ${product.certifications.join(', ')}
Microbiology: Total Plate Count ${product.specs.microbiology.totalPlateCount}, Yeast/Mold ${product.specs.microbiology.yeastMold}
Packaging: 20/25 kg Export Fiber Drum with Moisture Barrier Foil Liner
Company: NutroLix Nature Ingredients | Email: exports@nutrolixnature.com`;

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${product.id}-technical-spec-nutrolix.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06253B]/70 backdrop-blur-sm"
        />

        {/* Modal Window in .glass-light */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl glass-light !rounded-[20px] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto border border-white/80"
        >
          {/* Header Bar */}
          <div className="bg-[#0B3C5D] px-6 py-4 text-white flex items-center justify-between flex-shrink-0 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-[#8CC63F]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold font-display text-white">{product.name}</h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/15 text-slate-200 uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <p className="text-xs text-slate-300 italic font-serif">Botanical: {product.botanicalName}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 bg-[#F6F7F2] px-6 pt-2.5 gap-4 flex-shrink-0">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-2.5 px-2 text-xs font-semibold tracking-wide border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'specs'
                  ? 'border-[#0B3C5D] text-[#0B3C5D]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              Technical Spec Sheet & COA
            </button>
            <button
              onClick={() => setActiveTab('sample')}
              className={`pb-2.5 px-2 text-xs font-semibold tracking-wide border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'sample'
                  ? 'border-[#0B3C5D] text-[#0B3C5D]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Box className="w-3.5 h-3.5 text-[#8CC63F]" />
              Request Sample / Commercial Quote
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 overflow-y-auto flex-grow space-y-6">
            {activeTab === 'specs' ? (
              <div className="space-y-6">
                {/* Visual Duo: Fruit & Powder */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative rounded overflow-hidden aspect-video border border-slate-200">
                    <img
                      src={product.fruitImage}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-white text-[11px] font-sans">
                      Raw Fruit: {product.name}
                    </div>
                  </div>

                  <div className="relative rounded overflow-hidden aspect-video border border-slate-200">
                    <img
                      src={product.powderImage}
                      alt={`${product.name} Powder`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#0B3C5D]/90 text-white text-[11px] font-sans">
                      Processed: {product.color} Powder
                    </div>
                  </div>
                </div>

                {/* Product Description */}
                <div className="p-4 rounded bg-[#F6F7F2] border border-slate-200">
                  <p className="text-xs text-slate-700 leading-relaxed">{product.description}</p>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#0B3C5D]">Standardized Bioactives:</span>
                    <span className="text-xs font-medium text-slate-800">{product.actives}</span>
                  </div>
                </div>

                {/* Detailed Spec Grid */}
                <div className="border border-slate-200 rounded overflow-hidden">
                  <div className="bg-slate-100 px-4 py-2 font-bold text-xs uppercase tracking-wider text-slate-700 border-b border-slate-200">
                    Physico-Chemical & Microbiological Parameters
                  </div>
                  <table className="w-full text-xs text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 font-semibold text-slate-600 bg-slate-50 w-1/3">Physical Appearance</td>
                        <td className="py-2 px-4 text-slate-800">{product.color} free-flowing powder</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 font-semibold text-slate-600 bg-slate-50">Flavor & Odor</td>
                        <td className="py-2 px-4 text-slate-800">{product.flavor}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 font-semibold text-slate-600 bg-slate-50">Particle Mesh Size</td>
                        <td className="py-2 px-4 text-slate-800 font-medium">{product.meshSize} (100% passes)</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 font-semibold text-slate-600 bg-slate-50">Moisture Content</td>
                        <td className="py-2 px-4 text-slate-800 font-semibold">{product.moisture} (Karl Fischer method)</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 font-semibold text-slate-600 bg-slate-50">Water Solubility</td>
                        <td className="py-2 px-4 text-slate-800">{product.solubility}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 font-semibold text-slate-600 bg-slate-50">Drying Technology</td>
                        <td className="py-2 px-4 text-slate-800">{product.specs.dryingMethod}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 font-semibold text-slate-600 bg-slate-50">Total Plate Count (TPC)</td>
                        <td className="py-2 px-4 text-slate-800">{product.specs.microbiology.totalPlateCount}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 font-semibold text-slate-600 bg-slate-50">Pathogens (E. coli & Salmonella)</td>
                        <td className="py-2 px-4 text-slate-800 font-medium">Negative / 25g</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 font-semibold text-slate-600 bg-slate-50">Standard Shelf Life</td>
                        <td className="py-2 px-4 text-slate-800">{product.shelfLife} (unopened original drum)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-semibold text-slate-600 bg-slate-50">Export Packaging & MOQ</td>
                        <td className="py-2 px-4 text-slate-800 font-medium">{product.moq} | HDPE / Fiber Drum with barrier liner</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Formulations */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Suitable Formulations:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Sample Form */
              <div>
                {submitted ? (
                  <div className="text-center py-10 px-4 space-y-3">
                    <div className="w-12 h-12 bg-[#8CC63F]/20 rounded-full flex items-center justify-center mx-auto text-[#0B3C5D]">
                      <CheckCircle2 className="w-7 h-7 text-[#8CC63F]" />
                    </div>
                    <h4 className="text-xl font-bold font-display text-[#0B3C5D]">Sample Request Received</h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you, <span className="font-semibold">{formData.name}</span>. Our technical dispatch team has logged your sample request for <span className="font-semibold">{product.name}</span>. Lot COA and tracking will be shared via email.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded text-xs font-semibold bg-[#0B3C5D] text-white hover:bg-[#135482] transition-colors"
                    >
                      Modify Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Arthur Miller"
                          className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Brand Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Miller Nutrition Labs"
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
                          placeholder="arthur@millernutrition.com"
                          className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / Mobile *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Sample Volume</label>
                        <select
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D] bg-white"
                        >
                          <option>100g Evaluation Sample</option>
                          <option>250g Standard Lab Sample</option>
                          <option>500g Formulation Sample</option>
                          <option>20/25 kg Trial Drum</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Target Application</label>
                        <select
                          value={formData.application}
                          onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                          className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D] bg-white"
                        >
                          <option>Nutraceuticals / Supplements</option>
                          <option>Functional Beverage / RTD</option>
                          <option>Bakery & Confectionery</option>
                          <option>Gummies & Chewables</option>
                          <option>Dairy & Ice Cream</option>
                          <option>Baby Food & Infant Nutrition</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Technical Notes (Mesh Size / Carrier)</label>
                      <textarea
                        rows="2"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify desired mesh size (e.g. 100 mesh) or carrier preference..."
                        className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#0B3C5D]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-[4px] bg-[#8CC63F] text-[#06253B] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#7cb433] transition-colors"
                      >
                        Submit Sample Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="bg-[#F6F7F2] border-t border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
            <button
              onClick={handleDownloadCOA}
              disabled={downloading}
              className="text-xs font-semibold text-slate-700 hover:text-[#0B3C5D] flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5 text-[#0B3C5D]" />
              {downloading ? 'Preparing COA...' : 'Download Technical COA Summary (.txt)'}
            </button>

            <div className="flex items-center gap-2">
              {activeTab === 'specs' ? (
                <button
                  onClick={() => setActiveTab('sample')}
                  className="px-4 py-1.5 rounded-[4px] bg-[#0B3C5D] text-white text-xs font-semibold hover:bg-[#135482] transition-colors"
                >
                  Request Sample
                </button>
              ) : (
                <button
                  onClick={() => setActiveTab('specs')}
                  className="px-4 py-1.5 rounded-[4px] bg-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-300 transition-colors"
                >
                  Back to Spec Sheet
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
