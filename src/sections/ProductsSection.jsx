import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, ArrowRight } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import Img from '../components/Img';

export default function ProductsSection({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.actives.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="products"
      className="relative py-20 lg:py-24 bg-[#0B3C5D] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Subtle fruit photo background at 20% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Static soft blurred brand color shapes behind glass cards */}
      <div
        className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140, 198, 63, 0.20) 0%, rgba(140, 198, 63, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(41, 169, 224, 0.25) 0%, rgba(41, 169, 224, 0) 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header: Subtle Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mb-10 sm:mb-12"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-[#8CC63F] block mb-2">
            STANDARDIZED FRUIT INGREDIENTS
          </span>
          <div className="h-[1px] w-12 bg-[#8CC63F] mb-4" />
          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-white tracking-tight leading-[1.18]">
            Product Catalog & Technical Specifications
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-200 leading-relaxed">
            Spray-dried and freeze-dried fruit powders with verified physical mesh sizes, certified microbiology, and standardized active compound profiles.
          </p>
        </motion.div>

        {/* Filter Bar with Horizontal Scrolling Tabs on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5 mb-8 sm:mb-10 pb-4 sm:pb-5 border-b border-white/15"
        >
          {/* Category Pills: Horizontal scroll on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 flex-nowrap sm:flex-wrap">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All'
                ? PRODUCTS.length
                : PRODUCTS.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-display font-semibold transition-all duration-200 rounded-[8px] border flex-shrink-0 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#8CC63F] text-[#06283D] border-[#8CC63F] shadow-sm font-bold'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`ml-1 text-[10px] ${isActive ? 'text-[#06283D]/80' : 'text-slate-300'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-300 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fruit, mesh, active..."
              className="w-full text-xs pl-8 pr-3 py-2 rounded-[8px] border border-white/25 focus:outline-none focus:border-[#8CC63F] bg-white/10 backdrop-blur-md text-white placeholder-slate-300"
            />
          </div>
        </motion.div>

        {/* Products Grid: 2 COLUMNS ON MOBILE (grid-cols-2), 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: '100px' }}
              transition={{
                duration: 0.45,
                delay: (index % 4) * 0.05,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="product-card group glass rounded-[14px] sm:rounded-[16px] overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-card hover:border-white/40 transition-all duration-300"
            >
              {/* Product Visual Header with Img & Zoom on hover */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black/40 border-b border-white/10">
                <div className="w-full h-full transform group-hover:scale-104 transition-transform duration-300 ease-out">
                  <Img
                    src={product.fruitImage}
                    alt={product.name}
                    fallbackText={product.name}
                    aspectRatio="aspect-[16/11]"
                  />
                </div>

                {/* Powder Inset Preview in Glass */}
                <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-10 h-10 sm:w-14 sm:h-14 rounded-[8px] sm:rounded-[10px] overflow-hidden border border-white/40 shadow-card bg-black/40 backdrop-blur-md">
                  <Img
                    src={product.powderImage}
                    alt={`${product.name} Powder`}
                    fallbackText="Powder"
                    aspectRatio="aspect-square"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-[#06283D]/90 text-white text-[7px] sm:text-[7.5px] font-mono text-center uppercase py-0.5">
                    Powder
                  </span>
                </div>

                <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5">
                  <span className="text-[8.5px] sm:text-[9.5px] font-mono font-bold px-1.5 py-0.5 sm:px-2 rounded-[4px] bg-[#06253B]/90 text-[#8CC63F] uppercase tracking-wider border border-white/10">
                    {product.category}
                  </span>
                </div>

                <div className="absolute bottom-1.5 left-2 sm:bottom-2 sm:left-2.5 text-white text-[9.5px] sm:text-[11px] font-serif italic bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-[4px] max-w-[85%] truncate">
                  {product.botanicalName}
                </div>
              </div>

              {/* Card Body with High-Contrast White Text */}
              <div className="p-2.5 sm:p-4 flex flex-col flex-grow justify-between space-y-2.5 sm:space-y-3.5">
                <div>
                  <h3 className="font-display font-bold text-xs sm:text-base text-white truncate">
                    {product.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11.5px] text-slate-200 mt-0.5 sm:mt-1 line-clamp-2 leading-snug sm:leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-2 sm:mt-3 grid grid-cols-2 gap-1.5 sm:gap-2 text-[9px] sm:text-[10.5px] glass-dark p-2 sm:p-2.5 rounded-[8px] sm:rounded-[10px] border border-white/15">
                    <div>
                      <span className="text-slate-300 block text-[8px] sm:text-[9px] uppercase font-semibold">Mesh</span>
                      <span className="font-bold text-white text-[9.5px] sm:text-[10.5px]">{product.meshSize}</span>
                    </div>
                    <div>
                      <span className="text-slate-300 block text-[8px] sm:text-[9px] uppercase font-semibold">Moisture</span>
                      <span className="font-bold text-white text-[9.5px] sm:text-[10.5px]">{product.moisture}</span>
                    </div>
                    <div className="col-span-2 pt-1 border-t border-white/10">
                      <span className="text-slate-300 block text-[8px] sm:text-[9px] uppercase font-semibold">Actives</span>
                      <span className="font-medium text-[#8CC63F] block truncate text-[8.5px] sm:text-[9.5px]">{product.actives}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons: side-by-side on all screens */}
                <div className="pt-2 flex items-center gap-1.5 sm:gap-2 border-t border-white/10">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-1 sm:py-1.5 px-1.5 sm:px-2.5 rounded-[6px] sm:rounded-[8px] bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] sm:text-[11px] font-semibold font-display transition-colors flex items-center justify-center gap-1"
                  >
                    <FileText className="w-3 h-3 text-[#8CC63F] hidden xs:inline" />
                    <span>Spec</span>
                  </button>

                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-1 sm:py-1.5 px-2 sm:px-3 rounded-[6px] sm:rounded-[8px] bg-[#8CC63F] hover:bg-[#7cb433] text-[#06283D] text-[10px] sm:text-[11px] font-bold font-display transition-colors shadow-sm text-center"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom R&D Inquiries Banner inside .glass with gentle reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          className="mt-10 sm:mt-12 p-5 sm:p-8 rounded-[16px] glass text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 border border-white/20"
        >
          <div className="space-y-1 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8CC63F] block">Custom Formulations</span>
            <h3 className="text-base sm:text-xl font-bold font-display">Need a custom particle size, carrier ratio, or blend?</h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              We engineer tailored mesh sizes (60 to 120 mesh), customized maltodextrin/carrier ratios (0% to 15%), and bespoke botanical co-spray drying.
            </p>
          </div>
          <button
            onClick={() => onSelectProduct(PRODUCTS[0])}
            className="btn-primary flex-shrink-0 w-full sm:w-auto"
          >
            <span>Inquire for Custom Spec</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
