# NutroLix Nature — Premium Fruit Powders B2B Website Prototype

A production-quality, responsive prototype website built for **NutroLix Nature**, manufacturer and global exporter of spray-dried, freeze-dried, and organic natural fruit powders for the Nutraceutical and Food & Beverage industries.

---

## 🌟 Key Features

1. **Animated Welcome / Splash Screen**
   - Shown on the first visit of each browser session (`sessionStorage`).
   - Smooth brand logo scale & glow.
   - Realistic typewriter animation typing:
     - *"Welcome to NutroLix Nature"*
     - *"Pure Fruit Powders. Powered by Nature."*
     - Gradient fill progress bar & curtain slide-up reveal with "Skip" control.

2. **Sticky Responsive Navigation Bar**
   - Translucent glass-morphism on scroll (`backdrop-blur-md`).
   - Full navigation links with smooth scrolling to sections.
   - Mobile slide-in drawer with quick contact and RFQ button.

3. **Hero Section with Parallax & Depth**
   - High-resolution fruit and powder photography.
   - Dynamic fluid typography: *"Nature's Goodness, Perfected into Powder"*.
   - 2 main CTAs (*Explore Products* & *Request Sample*).
   - Floating parallax certification and bioactive cards.
   - Smooth animated scroll-down indicator.

4. **Animated Trust Strip**
   - Viewport-triggered count-up counters (Years of Experience, Products, Countries, Happy Clients, MT/Month Capacity).

5. **About Us Section**
   - Split layout with masked image reveal of partner orchards and Class 100K cleanroom processing facility.
   - Dedicated Vision & Mission cards.
   - Farm-to-drum traceability commitments.

6. **Interactive Products Catalog & Category Filters**
   - 13+ standardized fruit powders: Alphonso Mango, Pomegranate, Organic Amla, Strawberry, Cavendish Banana, Wild Blueberry, Nagpur Orange, Papaya, Pink Guava, Pineapple, Green Apple, Lemon, and Beetroot.
   - Category filtering: *All*, *Spray Dried*, *Freeze Dried*, *Organic*.
   - Real-time search by fruit, active compound, or mesh size.
   - **Dual image preview**: Shows fresh whole fruit harvest and resulting fine fruit powder with hover transitions.
   - **Interactive Technical Spec Sheet & COA Modal**:
     - Particle mesh size (80–100 mesh)
     - Moisture % (< 4.0%)
     - Water solubility
     - Active bioactives (Ellagic acid, Papain, Vitamin C, Anthocyanins, etc.)
     - Microbiological specs (TPC, Yeast & Mold, Pathogens)
     - Packaging (20/25 kg fiber drum with foil barrier liner)
     - Downloadable technical summary simulation
     - Direct complimentary lab sample request form with confetti confirmation.

7. **Applications / Industries Horizontal Scroll**
   - Desktop: GSAP ScrollTrigger pinned horizontal scroll.
   - Mobile & Tablet: Native touch-friendly swipeable carousel with navigation controls.
   - 7 key sectors: Nutraceuticals, Beverages & RTD, Bakery, Confectionery & Gummies, Dairy & Ice Cream, Baby Food, Natural Cosmetics.

8. **Process / Manufacturing Journey Timeline**
   - Vertical timeline illustrating 7-stage quality protocol from orchard sourcing to nitrogen-flushed export drums.
   - Scroll-linked progress line that draws itself down the page.

9. **Quality, Certifications & Laboratory Testing**
   - Accreditation cards: FSSAI, ISO 22000:2018, HACCP, WHO-GMP, USDA Organic, Halal, Kosher.
   - Detailed NABL lab capabilities: Microbiological assay, ICP-MS heavy metals, 450+ multi-residue pesticide screen, Karl Fischer moisture, and spectrophotometry.

10. **Why Choose Us**
    - 6 core value proposition cards with staggered viewport reveal animations.

11. **Testimonials Carousel**
    - Auto-rotating client feedback slider with touch swipe gestures on mobile, pause-on-hover, and dot navigation.

12. **B2B Contact & RFQ Form**
    - Interactive form with real-time validation for custom volumes, mesh requests, and sample dispatch.
    - Corporate HQ (BKC Mumbai) and Agro Plant (Gujarat) coordinates with stylized route map.

13. **Floating WhatsApp Button**
    - Instant live chat connection to export sales with tooltip.

---

## 🛠️ Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** with custom brand palette:
  - Deep Blue: `#0B5C8E`
  - Dark Section / Splash: `#06283D`
  - Lime Green Accent: `#8CC63F`
  - Sky Blue: `#29A9E0`
  - Off-White Background: `#F7FBF4`
- **Framer Motion** for viewport transitions and modal spring physics
- **GSAP & ScrollTrigger** for pinned horizontal scroll
- **Lenis** for smooth 60fps scrolling
- **Lucide React** for icons
- **Canvas Confetti** for delightful interactive feedback

---

## 🚀 Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory with code splitting.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎨 How to Customize Content & Replace Assets

All content and media are intentionally centralized in clean, modular data files:

### 1. Replace Images
Open `src/data/images.js`:
```javascript
export const IMAGES = {
  hero: {
    bg: "https://your-domain.com/hero-orchard.jpg",
    powderHero: "https://your-domain.com/mango-powder.jpg"
  },
  products: {
    mango: {
      fruit: "https://your-domain.com/mango-fruit.jpg",
      powder: "https://your-domain.com/mango-powder.jpg"
    },
    // replace with your factory or product photographs
  }
};
```

### 2. Add or Edit Fruit Powders
Open `src/data/products.js`:
Edit or add new products with custom botanical names, mesh sizes, actives, and specs.

### 3. Update Company Details & Contact Numbers
Open `src/data/siteContent.js`:
- Phone numbers, emails, WhatsApp number
- Addresses for HQ and manufacturing plant
- Trust strip statistics (MT/Month, countries, etc.)

---

## 📱 Responsive Testing Matrix

- **Mobile (360px – 480px)**: Single-column cards, full-width touch targets, slide-out navigation menu, swipeable industry carousel.
- **Tablet (640px – 1024px)**: 2-column product grid, balanced typography.
- **Laptop / Desktop (1024px – 1920px)**: 3-column product grid, pinned horizontal scroll for industries, dual parallax visual overlays.

