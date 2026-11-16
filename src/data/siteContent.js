import { IMAGES } from './images';

export const COMPANY_INFO = {
  name: 'NutroLix Nature',
  tagline: 'Pure Fruit Powders. Powered by Nature.',
  headline: "Nature's Goodness, Perfected into Powder",
  subheadline: 'Manufacturer & global exporter of high-potency Spray-Dried and Freeze-Dried Natural Fruit Powders for world-class Nutraceutical and Food formulations.',
  email: 'exports@nutrolixnature.com',
  salesEmail: 'sales@nutrolixnature.com',
  phone: '+91 (22) 8879-4500',
  tollFree: '1800-419-7890',
  whatsapp: '+919820123456',
  headOffice: 'Techora Towers, Bio-Pharma Corridor, Level 7, BKC, Mumbai 400051, India',
  manufacturingPlant: 'Survey No. 42/B, Mega Food Agro Processing Park, NH 48, Gujarat 396195, India',
  established: 2011,
};

export const TRUST_METRICS = [
  { label: 'Years of Experience', value: 14, suffix: '+', desc: 'Pioneering fruit drying technology' },
  { label: 'Fruit Powders Portfolio', value: 45, suffix: '+', desc: 'Custom particle sizes & mesh' },
  { label: 'Countries Exported', value: 32, suffix: '+', desc: 'USA, EU, APAC, Middle East' },
  { label: 'Happy B2B Clients', value: 280, suffix: '+', desc: 'Pharma, Food & Beverage brands' },
  { label: 'Monthly Capacity', value: 350, suffix: ' MT', desc: 'Scalable automated processing' },
];

export const ABOUT_CONTENT = {
  badge: 'Who We Are',
  title: 'Engineering Botanical Purity for Global Food & Pharma Leaders',
  lead: 'At NutroLix Nature, we transform peak-harvest fruits into standardized, nutrient-dense powder ingredients that elevate taste, biological activity, and stability in final consumer products.',
  paragraphs: [
    'Founded in 2011, our world-class processing facility combines cryogenic freeze-drying chambers with automated multi-stage spray drying towers. We maintain rigorous temperature control below 55°C to preserve heat-sensitive enzymes, anthocyanins, natural fruit sugars, and fresh volatile aromas.',
    'Operating directly out of India’s premier fruit belt, we maintain contract-farming partnerships across 12,000+ certified acres. Every batch is trackable from farm seed to drum seal, ensuring zero adulteration, zero synthetic colorants, and uncompromising export-grade consistency.'
  ],
  vision: {
    title: 'Our Vision',
    text: 'To become the global benchmark for clean-label, bio-intact natural fruit ingredients, empowering nutraceutical and food brands to replace artificial flavorings and synthetics entirely.'
  },
  mission: {
    title: 'Our Mission',
    text: 'Deliver standardized fruit powders with uncompromising microbiological purity, customized mesh sizes, and guaranteed cold-water solubility backed by comprehensive regulatory documentation.'
  },
  highlights: [
    'Farm-to-drum complete traceability',
    'Low-temperature nutrient retention (<55°C)',
    'Zero added sugars, carriers or synthetic dyes',
    'Customized mesh sizing (60 to 120 mesh)'
  ]
};

export const INDUSTRIES = [
  {
    id: 'nutraceuticals',
    title: 'Nutraceuticals & Dietary Supplements',
    category: 'Bioactive Wellness',
    image: IMAGES.industries.nutraceuticals,
    summary: 'High-potency standardized fruit actives for capsules, tablets, effervescents, gummies, and clinical superfood blends.',
    useCases: [
      'Standardized polyphenol capsules (Pomegranate, Blueberry)',
      'Natural Vitamin C effervescent tablets (Amla, Orange, Acerola)',
      'Pectin & enzyme chewables (Pineapple Bromelain, Papaya Papain)',
      'Clean-label fruit gummy bases with zero artificial flavors'
    ],
    stats: 'Over 85+ Supplement Brands Formulated'
  },
  {
    id: 'beverages',
    title: 'Functional Beverages & RTD',
    category: 'Instant Solubility',
    image: IMAGES.industries.beverages,
    summary: 'Instantly dispersible fruit powders that provide authentic color, cloudiness, and luscious aroma in cold or warm beverages.',
    useCases: [
      'Instant RTD powder sachets & hydration electrolytes',
      'Craft fruit beers, ciders, and botanical mocktails',
      'Artisanal iced teas and kombucha functional flavorings',
      'Smoothie boosters and recovery protein shakes'
    ],
    stats: '≥ 95% Cold Water Dispersibility'
  },
  {
    id: 'bakery',
    title: 'Bakery & Fine Confectionery',
    category: 'Heat Stable Flavor',
    image: IMAGES.industries.bakery,
    summary: 'Bake-stable natural fruit powders that infuse authentic fruity essence into cakes, macarons, glazes, and chocolate coatings.',
    useCases: [
      'Macaron shells & naturally tinted buttercream fillings',
      'Artisan sourdough inclusions & fruit-infused cookie dough',
      'Heat-resistant fruit glazes, mirror jellies, and dustings',
      'Fruit powder ganache and white chocolate bar pairings'
    ],
    stats: 'Stable up to 180°C Baking Temps'
  },
  {
    id: 'confectionery',
    title: 'Gummies, Candies & Chews',
    category: 'Vibrant Natural Pigments',
    image: IMAGES.industries.confectionery,
    summary: 'Natural color and tartness without synthetic red #40 or yellow #5. Perfect for plant-based pectin and gelatin gummies.',
    useCases: [
      'High-clarity vegan pectin fruit gummies',
      'Sour-coated fruit jellies and hard-boiled sweets',
      'Centres-filled fondants and fruit drops',
      'Pressed dextrose fruit candies with sharp acidity'
    ],
    stats: 'Clean Label Certified (No E-Numbers)'
  },
  {
    id: 'dairy',
    title: 'Dairy & Plant-Based Ice Creams',
    category: 'Smooth Emulsification',
    image: IMAGES.industries.dairy,
    summary: 'Provides silky mouthfeel, rich natural creaminess, and vivid swirling in yogurts, gelatos, shakes, and plant-based milks.',
    useCases: [
      'Greek yogurt fruit blending & layered yogurts',
      'Artisanal gelato, sorbet, and frozen dessert ribbons',
      'Oat milk, almond milk, and cashew fruit shakes',
      'Curd cheeses and fruity mascarpone dessert bases'
    ],
    stats: 'Zero Curdling / pH-Stabilized Formulations'
  },
  {
    id: 'babyfood',
    title: 'Baby Food & Infant Nutrition',
    category: 'Microbiological Gold Standard',
    image: IMAGES.industries.babyfood,
    summary: 'Ultra-pure, hypoallergenic fruit powders meeting stringent international heavy metal and pesticide-free infant food standards.',
    useCases: [
      'Infant cereal fortifications (Banana, Apple, Papaya)',
      'Toddler dissolvable fruit wafers and puffs',
      'Stage 1 & 2 fruit puree reconstitutions',
      'Nutrient-dense porridge premixes for growing infants'
    ],
    stats: 'Meets EU Infant Heavy Metal Regulations'
  },
  {
    id: 'cosmetics',
    title: 'Cosmetics & Nutricosmetics',
    category: 'Antioxidant Skincare',
    image: IMAGES.industries.cosmetics,
    summary: 'Pure fruit powders rich in natural AHAs, enzymes, and antioxidants for brightening masks, clay scrubs, and beauty tonics.',
    useCases: [
      'Enzymatic face polish (Papaya papain, Pineapple bromelain)',
      'Clay detox masks with natural astringency (Amla, Pomegranate)',
      'Ingestible beauty elixirs for collagen synthesis & glow',
      'Natural bath bombs with aromatic botanical colorants'
    ],
    stats: 'Micro-milled to 120 Mesh for Velvet Texture'
  }
];

export const PROCESS_TIMELINE = [
  {
    step: '01',
    title: 'Origin Harvest & Contract Sourcing',
    image: IMAGES.process.sourcing,
    duration: '24-48 hrs post-harvest',
    desc: 'We select fruits at peak physiological ripeness directly from GAP-certified partner orchards, ensuring maximum brix, natural sugars, and bioactives.'
  },
  {
    step: '02',
    title: 'Sanitization & Multi-Stage Sorting',
    image: IMAGES.process.washing,
    duration: 'Continuous in-line',
    desc: 'Ozonated water wash removes surface micro-flora and organic residues. Optical sorters segregate bruised fruit to ensure 100% prime-grade pulp feed.'
  },
  {
    step: '03',
    title: 'Aseptic De-stoning & Cold Pulping',
    image: IMAGES.process.pulping,
    duration: 'De-aerated processing',
    desc: 'Fruits are de-seeded and pulverized under vacuum to prevent oxidation. Pulp is homogenized into an ultra-smooth consistency without scorching.'
  },
  {
    step: '04',
    title: 'Gentle Spray & Vacuum Freeze Drying',
    image: IMAGES.process.drying,
    duration: 'Sub-zero / Low-temp atomization',
    desc: 'Pulp is atomized into micro-droplets in dehumidified drying towers or flash-frozen at -40°C in vacuum freeze dryers, keeping bioactive enzymes intact.'
  },
  {
    step: '05',
    title: 'Micronization & Precision Sieving',
    image: IMAGES.process.milling,
    duration: '60 to 120 Mesh standard',
    desc: 'Closed-loop cryogenic milling grinds powder into uniform particle distribution, followed by vibrating sieve classifiers and rare-earth magnetic traps.'
  },
  {
    step: '06',
    title: 'Comprehensive Lab Release Testing',
    image: IMAGES.process.testing,
    duration: 'Every batch quarantined',
    desc: 'Full microbiological assay (TPC, Yeast/Mold, Pathogens), ICP-MS heavy metals, moisture analyzer, and HPLC bioactive profiling before Certificate of Analysis release.'
  },
  {
    step: '07',
    title: 'Nitrogen-Flushed Export Packaging',
    image: IMAGES.process.packaging,
    duration: 'Hermetically sealed',
    desc: 'Packed in food-grade multi-barrier aluminum liner bags inside heavy-duty HDPE drums with tamper-evident seals and desiccant packs, palletized for global sea/air freight.'
  }
];

export const CERTIFICATIONS = [
  {
    code: 'FSSAI',
    name: 'Food Safety and Standards Authority',
    authority: 'Govt of India Central License',
    icon: 'ShieldCheck',
    desc: 'Full compliance with national food processing & hygiene mandates.'
  },
  {
    code: 'ISO 22000:2018',
    name: 'Food Safety Management System',
    authority: 'TUV SUD Certified',
    icon: 'Award',
    desc: 'Rigorous hazard control from raw material receipt through processing.'
  },
  {
    code: 'HACCP',
    name: 'Hazard Analysis Critical Control Point',
    authority: 'Codex Alimentarius',
    icon: 'CheckCircle2',
    desc: 'Systematic preventive approach to physical, chemical, and biological hazards.'
  },
  {
    code: 'WHO-GMP',
    name: 'Good Manufacturing Practices',
    authority: 'Nutraceutical Grade',
    icon: 'Sparkles',
    desc: 'Cleanroom manufacturing standards suited for pharmaceutical integrations.'
  },
  {
    code: 'USDA ORGANIC',
    name: 'NOP & EU Organic Certified',
    authority: 'OneCert International',
    icon: 'Leaf',
    desc: 'Zero synthetic fertilizers, non-GMO, zero chemical irradiation.'
  },
  {
    code: 'HALAL',
    name: 'Halal Certified Facility',
    authority: 'Jamiat Ulama-i-Hind',
    icon: 'Globe',
    desc: '100% alcohol-free, pork-free, compliant with Islamic dietary laws.'
  },
  {
    code: 'KOSHER',
    name: 'Kosher Pareve Approved',
    authority: 'Star-K International',
    icon: 'Check',
    desc: 'Strictly rabbinically inspected for year-round kosher compliance.'
  }
];

export const LAB_CAPABILITIES = [
  {
    title: 'Microbiological Testing',
    items: ['Total Plate Count (<1,000 CFU/g)', 'Yeast & Mold (<100 CFU/g)', 'E. Coli & Salmonella (Negative/25g)', 'Staphylococcus Aureus (Absent)']
  },
  {
    title: 'Heavy Metal Profiling (ICP-MS)',
    items: ['Lead (Pb) < 0.5 ppm', 'Arsenic (As) < 0.2 ppm', 'Cadmium (Cd) < 0.1 ppm', 'Mercury (Hg) < 0.05 ppm']
  },
  {
    title: 'Pesticide & Chemical Screen',
    items: ['Multi-residue 450+ pesticide screen (GC-MS/MS & LC-MS/MS)', 'Aflatoxin (B1, B2, G1, G2 & M1) < 4 ppb', 'Zero ethylene oxide (ETO) treatment']
  },
  {
    title: 'Physical & Sensory Testing',
    items: ['Laser diffraction particle mesh sizing', 'Automated moisture analyzer (< 4%)', 'Brix & acidity titration', 'HunterLab color spectrophotometry']
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'natural',
    title: '100% Pure & Natural',
    desc: 'Free from synthetic flavorings, maltodextrin overuse, artificial colors, and chemical preservatives. Clean-label compliant for discerning consumer brands.',
    icon: 'Leaf'
  },
  {
    id: 'custom',
    title: 'Custom Technical Specs',
    desc: 'Tailored particle sizes (60-120 mesh), custom carrier percentages (0% to 15%), bulk density tuning, and bespoke botanical co-spray blends.',
    icon: 'Sliders'
  },
  {
    id: 'bulk',
    title: 'Massive Scalable Capacity',
    desc: '350+ Metric Tons monthly production capacity across dual manufacturing campuses to reliably fulfill large enterprise contracts without lead-time spikes.',
    icon: 'Boxes'
  },
  {
    id: 'export',
    title: 'Export-Ready Packaging',
    desc: 'Multi-layer nitrogen-flushed barrier bags inside 20kg/25kg fiber/HDPE drums with tamper-proof locks and desiccant packs, pre-cleared for global customs.',
    icon: 'PlaneTakeoff'
  },
  {
    id: 'traceability',
    title: 'Farm-to-Drum Traceability',
    desc: 'QR-coded batch records linking every commercial drum back to specific orchard clusters, harvest dates, and temperature logs.',
    icon: 'QrCode'
  },
  {
    id: 'consistency',
    title: 'Batch-to-Batch Consistency',
    desc: 'Automated recipe controls and HunterLab colorimetric spectrophotometers guarantee repeatable color, flavor intensity, and reconstitution speed every single time.',
    icon: 'Zap'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: "NutroLix's freeze-dried Pomegranate and Blueberry powders transformed our antioxidant gummy line. The natural ruby-purple color is stunning and completely eliminated our need for synthetic red food dyes.",
    author: 'Dr. Michael Vance',
    role: 'VP of Product Formulation',
    company: 'Apex Nutrition Labs (California, USA)',
    avatar: IMAGES.avatars.client2,
    rating: 5,
    tag: 'Nutraceuticals'
  },
  {
    id: '2',
    quote: "Finding spray-dried Alphonso Mango powder with authentic aroma and consistent solubility had been our biggest hurdle. NutroLix Nature delivered flawless quality on time for our nationwide beverage rollout.",
    author: 'Elena Rostova',
    role: 'Head of Procurement',
    company: 'Veloce Botanicals & Beverages (Munich, Germany)',
    avatar: IMAGES.avatars.client1,
    rating: 5,
    tag: 'Beverages'
  },
  {
    id: '3',
    quote: "Their Organic Amla and Papaya powders meet our strict European infant-food heavy metal thresholds without exception. Their comprehensive analytical documentation and COAs make audits effortless.",
    author: 'Rajiv Singhania',
    role: 'Chief Quality Officer',
    company: 'PureLife Organic Foods (Singapore & UAE)',
    avatar: IMAGES.avatars.client4,
    rating: 5,
    tag: 'Quality & Compliance'
  },
  {
    id: '4',
    quote: "We use NutroLix Green Apple and Strawberry powders in our artisan macaron and ganache collections. The natural acidity and fresh fruity aroma survive baking temperatures effortlessly.",
    author: 'Claire Delacroix',
    role: 'Master Pastry Chef & R&D Lead',
    company: 'Lumière Confectionery (Lyon, France)',
    avatar: IMAGES.avatars.client3,
    rating: 5,
    tag: 'Bakery & Confectionery'
  }
];

