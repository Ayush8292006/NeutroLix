import { IMAGES } from './images';

export const CATEGORIES = ['All', 'Spray Dried', 'Freeze Dried', 'Organic'];

const fallbackFruit = "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80";
const fallbackPowder = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80";

export const PRODUCTS = [
  {
    id: 'mango-powder',
    name: 'Mango Fruit Powder',
    botanicalName: 'Mangifera indica',
    category: 'Spray Dried',
    tag: 'Best Seller',
    description: 'Produced from ripe, aromatic Alphonso and Totapuri mangoes. Delivers an intense tropical aroma, natural golden-orange hue, and authentic sweet taste.',
    fruitImage: IMAGES?.products?.mango?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.mango?.powder || fallbackPowder,
    color: 'Bright Golden Yellow',
    flavor: 'Sweet, authentic tropical mango notes',
    meshSize: '80 - 100 Mesh',
    solubility: '≥ 95% in cold & warm water',
    moisture: '< 4.0%',
    shelfLife: '24 Months',
    moq: '25 kg (Export fiber drum)',
    actives: 'Rich in Vitamin A, Vitamin C, Mangiferin & Carotenoids',
    applications: ['Beverage Premixes', 'Baby Foods', 'Gummies & Chews', 'Bakery Fillings', 'Yogurts & Ice Creams'],
    certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'Halal', 'Kosher'],
    specs: {
      dryingMethod: 'Low-temperature Spray Drying',
      carrier: 'Maltodextrin (Customizable 0-15% or Carrier-Free on demand)',
      bulkDensity: '0.55 - 0.70 g/ml',
      ashContent: '< 3.0%',
      microbiology: {
        totalPlateCount: '< 1000 CFU/g',
        yeastMold: '< 100 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'pomegranate-powder',
    name: 'Pomegranate Powder',
    botanicalName: 'Punica granatum',
    category: 'Freeze Dried',
    tag: 'High Antioxidant',
    description: 'Freeze-dried whole aril extraction preserving high levels of punicalagins, polyphenols, and vibrant ruby-pink color. Zero heat degradation.',
    fruitImage: IMAGES?.products?.pomegranate?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.pomegranate?.powder || fallbackPowder,
    color: 'Deep Ruby Pink',
    flavor: 'Tart-sweet, crisp pomegranate flavor',
    meshSize: '80 Mesh fine powder',
    solubility: '100% Water Soluble',
    moisture: '< 3.5%',
    shelfLife: '24 Months',
    moq: '20 kg',
    actives: 'Min. 40% Ellagic Acid & Punicalagins',
    applications: ['Nutraceutical Capsules', 'Cardio Health Blends', 'Sports Nutrition', 'Cosmeceuticals', 'Functional Beverages'],
    certifications: ['USDA Organic', 'ISO 22000', 'GMP', 'Halal', 'Kosher'],
    specs: {
      dryingMethod: 'Sub-zero Vacuum Freeze Drying',
      carrier: '100% Carrier-Free (Pure Fruit)',
      bulkDensity: '0.45 - 0.60 g/ml',
      ashContent: '< 2.5%',
      microbiology: {
        totalPlateCount: '< 500 CFU/g',
        yeastMold: '< 50 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'amla-powder',
    name: 'Organic Amla Powder',
    botanicalName: 'Phyllanthus emblica',
    category: 'Organic',
    tag: 'Nutraceutical Grade',
    description: 'Harvested from certified organic Indian orchards. Packed with naturally occurring bioactive Vitamin C, tannins, and potent free-radical scavengers.',
    fruitImage: IMAGES?.products?.amla?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.amla?.powder || fallbackPowder,
    color: 'Light Olive Greenish Tan',
    flavor: 'Astringent, tangy herbal punch',
    meshSize: '100 Mesh microfine',
    solubility: 'High dispersibility',
    moisture: '< 4.5%',
    shelfLife: '36 Months',
    moq: '25 kg',
    actives: 'Standardized 30% Tannins, Nat. Vit C > 15%',
    applications: ['Immunity Supplements', 'Hair & Skin Formulations', 'Ayurvedic Tonics', 'Effervescent Tablets'],
    certifications: ['USDA Organic', 'EU Organic', 'India Organic', 'GMP'],
    specs: {
      dryingMethod: 'Dehumidified Air / Spray Dried',
      carrier: 'None (Pure Organic)',
      bulkDensity: '0.50 - 0.65 g/ml',
      ashContent: '< 4.0%',
      microbiology: {
        totalPlateCount: '< 1000 CFU/g',
        yeastMold: '< 100 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'strawberry-powder',
    name: 'Strawberry Powder',
    botanicalName: 'Fragaria × ananassa',
    category: 'Freeze Dried',
    tag: 'Premium Aroma',
    description: 'Cold freeze-dried ripe strawberries retain delicate volatile aromatics and intense berry red pigmentation. Perfect for confectionery and dairy.',
    fruitImage: IMAGES?.products?.strawberry?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.strawberry?.powder || fallbackPowder,
    color: 'Vibrant Berry Red',
    flavor: 'Intense fresh strawberry aroma & taste',
    meshSize: '60 - 80 Mesh',
    solubility: 'Freely soluble',
    moisture: '< 3.0%',
    shelfLife: '24 Months',
    moq: '20 kg',
    actives: 'Rich in Anthocyanins, Folate, Polyphenols',
    applications: ['Artisan Chocolates', 'Protein Shakes', 'Gourmet Macarons', 'Gummies', 'Premium Ice Creams'],
    certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'Halal'],
    specs: {
      dryingMethod: 'Freeze Dried / Lyophilized',
      carrier: '0% (Clean Label 100% Fruit)',
      bulkDensity: '0.40 - 0.55 g/ml',
      ashContent: '< 2.8%',
      microbiology: {
        totalPlateCount: '< 500 CFU/g',
        yeastMold: '< 50 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'banana-powder',
    name: 'Banana Fruit Powder',
    botanicalName: 'Musa acuminata',
    category: 'Spray Dried',
    tag: 'Creamy Mouthfeel',
    description: 'Spray dried from naturally ripened Cavendish bananas. Imparts a rich, creamy mouthfeel, natural potassium, and gentle comforting sweetness.',
    fruitImage: IMAGES?.products?.banana?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.banana?.powder || fallbackPowder,
    color: 'Pale Cream / Off-White',
    flavor: 'Sweet, natural ripe banana flavor',
    meshSize: '80 Mesh',
    solubility: '≥ 92%',
    moisture: '< 4.0%',
    shelfLife: '18 Months',
    moq: '25 kg',
    actives: 'Potassium, Dietary Fiber, Vitamin B6',
    applications: ['Baby Cereal & Porridge', 'Nutritional Meal Replacements', 'Smoothie Mixes', 'Bakery & Biscuits'],
    certifications: ['FSSAI', 'ISO 22000', 'GMP', 'Kosher'],
    specs: {
      dryingMethod: 'Spray Dried',
      carrier: 'Food Grade Maltodextrin (< 10%)',
      bulkDensity: '0.50 - 0.65 g/ml',
      ashContent: '< 3.2%',
      microbiology: {
        totalPlateCount: '< 1000 CFU/g',
        yeastMold: '< 100 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'blueberry-powder',
    name: 'Wild Blueberry Powder',
    botanicalName: 'Vaccinium angustifolium',
    category: 'Freeze Dried',
    tag: 'Brain & Eye Health',
    description: 'Ultra-concentrated blueberry powder with exceptional ORAC antioxidant values. Deep purple hue with outstanding cognitive wellness appeal.',
    fruitImage: IMAGES?.products?.blueberry?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.blueberry?.powder || fallbackPowder,
    color: 'Deep Violet / Purple',
    flavor: 'Tangy, rich berry fruitiness',
    meshSize: '80 Mesh',
    solubility: '100% Water Soluble',
    moisture: '< 3.5%',
    shelfLife: '24 Months',
    moq: '20 kg',
    actives: 'Anthocyanidins > 25%, High ORAC > 3,500 µmol TE/g',
    applications: ['Nootropics & Cognitive Caps', 'Eye Health Formulas', 'Functional RTD Drinks', 'Superfood Powders'],
    certifications: ['USDA Organic', 'ISO 22000', 'Halal', 'Kosher'],
    specs: {
      dryingMethod: 'Cryogenic Freeze Drying',
      carrier: 'Carrier-Free',
      bulkDensity: '0.45 - 0.58 g/ml',
      ashContent: '< 2.2%',
      microbiology: {
        totalPlateCount: '< 500 CFU/g',
        yeastMold: '< 50 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'orange-powder',
    name: 'Orange Fruit Powder',
    botanicalName: 'Citrus sinensis',
    category: 'Spray Dried',
    tag: 'Citrus Burst',
    description: 'Spray dried from premium Nagpur and Valencia oranges. Encapsulates fresh citrus oils and vibrant tang without artificial coloring.',
    fruitImage: IMAGES?.products?.orange?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.orange?.powder || fallbackPowder,
    color: 'Warm Golden Orange',
    flavor: 'Zesty, refreshing sweet-citrus note',
    meshSize: '80 - 100 Mesh',
    solubility: '≥ 98% in water',
    moisture: '< 3.8%',
    shelfLife: '24 Months',
    moq: '25 kg',
    actives: 'Natural Ascorbic Acid (Vit C), Bioflavonoids',
    applications: ['Effervescent Tablets', 'Electrolyte Sports Drinks', 'Confectionery Fillings', 'Seasoning Blends'],
    certifications: ['FSSAI', 'ISO 22000', 'HACCP'],
    specs: {
      dryingMethod: 'Gentle Spray Drying',
      carrier: 'Maltodextrin (< 12%)',
      bulkDensity: '0.55 - 0.68 g/ml',
      ashContent: '< 2.9%',
      microbiology: {
        totalPlateCount: '< 1000 CFU/g',
        yeastMold: '< 100 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'papaya-powder',
    name: 'Papaya Fruit Powder',
    botanicalName: 'Carica papaya',
    category: 'Organic',
    tag: 'Digestive Enzyme',
    description: 'Derived from enzyme-rich farm papayas. Retains active papain and dietary fiber, widely used in digestive aid nutraceuticals.',
    fruitImage: IMAGES?.products?.papaya?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.papaya?.powder || fallbackPowder,
    color: 'Orange to Amber Coral',
    flavor: 'Mild tropical papaya note',
    meshSize: '80 Mesh',
    solubility: '≥ 92%',
    moisture: '< 4.2%',
    shelfLife: '24 Months',
    moq: '25 kg',
    actives: 'Active Papain Enzyme, Beta-Carotene, Lycopene',
    applications: ['Digestive Enzyme Supplements', 'Gut Health Blends', 'Tropical Beverages', 'Skin Exfoliant Powders'],
    certifications: ['USDA Organic', 'ISO 22000', 'GMP'],
    specs: {
      dryingMethod: 'Low-Temp Spray Drying',
      carrier: 'Carrier Free or Organic Tapioca',
      bulkDensity: '0.52 - 0.65 g/ml',
      ashContent: '< 3.5%',
      microbiology: {
        totalPlateCount: '< 1000 CFU/g',
        yeastMold: '< 100 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'guava-powder',
    name: 'Pink Guava Powder',
    botanicalName: 'Psidium guajava',
    category: 'Spray Dried',
    tag: 'Exotic Aroma',
    description: 'Extracted from aromatic pink guavas with exceptional lycopene and vitamin C levels. Imparts a heavenly tropical bouquet and pastel blush.',
    fruitImage: IMAGES?.products?.guava?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.guava?.powder || fallbackPowder,
    color: 'Pastel Rosy Pink',
    flavor: 'Fragrant, exotic sweet guava aroma',
    meshSize: '80 Mesh',
    solubility: '≥ 94%',
    moisture: '< 4.0%',
    shelfLife: '24 Months',
    moq: '25 kg',
    actives: 'Lycopene, Vitamin C, Dietary Fiber',
    applications: ['Cocktail & Mocktail Mixers', 'Artisan Bakery Glazes', 'Yogurt Powders', 'Cosmetics'],
    certifications: ['FSSAI', 'ISO 22000', 'Halal'],
    specs: {
      dryingMethod: 'Spray Dried',
      carrier: 'Maltodextrin (< 12%)',
      bulkDensity: '0.52 - 0.64 g/ml',
      ashContent: '< 3.0%',
      microbiology: {
        totalPlateCount: '< 1000 CFU/g',
        yeastMold: '< 100 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'pineapple-powder',
    name: 'Pineapple Fruit Powder',
    botanicalName: 'Ananas comosus',
    category: 'Spray Dried',
    tag: 'Bromelain Rich',
    description: 'Crisp, sweet-tangy spray dried pineapple powder loaded with active bromelain enzyme. Instant cold-water solubility for modern functional drinks.',
    fruitImage: IMAGES?.products?.pineapple?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.pineapple?.powder || fallbackPowder,
    color: 'Light Creamy Yellow',
    flavor: 'Zingy, tropical sweet pineapple',
    meshSize: '80 - 100 Mesh',
    solubility: '≥ 96%',
    moisture: '< 3.8%',
    shelfLife: '24 Months',
    moq: '25 kg',
    actives: 'Active Bromelain Enzyme, Vitamin C, Manganese',
    applications: ['Sports Recovery Blends', 'Digestive Drink Powders', 'Snack Seasonings', 'Pastry Cremes'],
    certifications: ['FSSAI', 'ISO 22000', 'GMP', 'Kosher'],
    specs: {
      dryingMethod: 'Spray Drying',
      carrier: 'Maltodextrin (< 12%)',
      bulkDensity: '0.54 - 0.68 g/ml',
      ashContent: '< 3.1%',
      microbiology: {
        totalPlateCount: '< 1000 CFU/g',
        yeastMold: '< 100 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'apple-powder',
    name: 'Green Apple Powder',
    botanicalName: 'Malus domestica',
    category: 'Freeze Dried',
    tag: 'Clean Label',
    description: 'Lyophilized crisp apples with natural pectin and malic acid. Provides clean acidity, crispness, and clean-label bulking without artificial additives.',
    fruitImage: IMAGES?.products?.apple?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.apple?.powder || fallbackPowder,
    color: 'Light Sandy Beige',
    flavor: 'Crisp, refreshing sweet-tart apple',
    meshSize: '80 Mesh',
    solubility: 'High dispersibility',
    moisture: '< 3.5%',
    shelfLife: '24 Months',
    moq: '20 kg',
    actives: 'Apple Pectin, Quercetin, Malic Acid',
    applications: ['Dietary Fiber Powders', 'Baby Food', 'Cereal Enrobing', 'Detox Drink Mixes'],
    certifications: ['FSSAI', 'ISO 22000', 'GMP', 'Halal'],
    specs: {
      dryingMethod: 'Vacuum Freeze Drying',
      carrier: '100% Fruit (Zero Carriers)',
      bulkDensity: '0.44 - 0.58 g/ml',
      ashContent: '< 2.5%',
      microbiology: {
        totalPlateCount: '< 500 CFU/g',
        yeastMold: '< 50 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'lemon-powder',
    name: 'Lemon Juice Powder',
    botanicalName: 'Citrus limon',
    category: 'Spray Dried',
    tag: 'High Acidity',
    description: 'Zesty lemon juice concentrate spray-dried to deliver authentic acidity (citric acid), natural citrus peel notes, and rapid instant dissolving.',
    fruitImage: IMAGES?.products?.lemon?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.lemon?.powder || fallbackPowder,
    color: 'Pale Lemon Yellow',
    flavor: 'Sharp, pure sour lemon bite',
    meshSize: '100 Mesh',
    solubility: '100% Soluble',
    moisture: '< 3.2%',
    shelfLife: '24 Months',
    moq: '25 kg',
    actives: 'Natural Citric Acid (> 20%), Vitamin C',
    applications: ['Effervescent Hydration Packs', 'Chaat & Snack Seasonings', 'Tea Premixes', 'Baking Powders'],
    certifications: ['FSSAI', 'ISO 22000', 'HACCP', 'Halal'],
    specs: {
      dryingMethod: 'Precision Spray Drying',
      carrier: 'Maltodextrin (< 15%)',
      bulkDensity: '0.58 - 0.72 g/ml',
      ashContent: '< 2.8%',
      microbiology: {
        totalPlateCount: '< 1000 CFU/g',
        yeastMold: '< 100 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  },
  {
    id: 'beetroot-powder',
    name: 'Beetroot Powder',
    botanicalName: 'Beta vulgaris',
    category: 'Organic',
    tag: 'Natural Colorant',
    description: 'Vibrant organic red beet juice extract with high natural nitrates. Renowned as a clean-label natural red colorant and pre-workout athletic booster.',
    fruitImage: IMAGES?.products?.beetroot?.fruit || fallbackFruit,
    powderImage: IMAGES?.products?.beetroot?.powder || fallbackPowder,
    color: 'Deep Magenta Crimson',
    flavor: 'Earthy, mildly sweet vegetable notes',
    meshSize: '100 Mesh fine',
    solubility: '100% Water Soluble',
    moisture: '< 4.0%',
    shelfLife: '24 Months',
    moq: '25 kg',
    actives: 'Betalain > 0.5%, Natural Nitrates > 2.0%',
    applications: ['Pre-Workout Formulas', 'Natural Red Food Colorant', 'Smoothie Bowls', 'Functional Lattes'],
    certifications: ['USDA Organic', 'EU Organic', 'GMP', 'Kosher'],
    specs: {
      dryingMethod: 'Spray / Low-Temp Drying',
      carrier: 'Carrier-Free Pure Organic',
      bulkDensity: '0.50 - 0.65 g/ml',
      ashContent: '< 3.5%',
      microbiology: {
        totalPlateCount: '< 1000 CFU/g',
        yeastMold: '< 100 CFU/g',
        eColi: 'Negative / 25g',
        salmonella: 'Negative / 25g'
      }
    }
  }
];
