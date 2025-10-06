export type ProductCategory =
  | 'Accessories'
  | 'Apparel'
  | 'Tech'
  | 'Home'
  | 'Outdoor'
  | 'Wellness'
  | 'Travel';

export type Product = {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Nebula Wireless Headphones',
    price: 149.99,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1516110833967-5787bba5b0c7?auto=format&fit=crop&w=900&q=80',
    description:
      'Immerse yourself in crystal-clear audio with active noise cancellation and a 30-hour battery life designed for travelers.',
  },
  {
    id: 2,
    name: 'Lumos Smart Lamp',
    price: 89.5,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?auto=format&fit=crop&w=900&q=80',
    description:
      'A minimalist smart lamp with ambient light sensors, adaptive brightness, and wireless charging built into the base.',
  },
  {
    id: 3,
    name: 'AeroFit Running Sneakers',
    price: 119,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
    description:
      'Lightweight running shoes engineered with responsive foam cushioning and breathable knit uppers for daily training.',
  },
  {
    id: 4,
    name: 'Cascade Insulated Bottle',
    price: 28.75,
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1526404079168-8a5b5a71373a?auto=format&fit=crop&w=900&q=80',
    description:
      'Keeps drinks cold for 24 hours or hot for 12 with triple-layer insulation and a leak-proof spout.',
  },
  {
    id: 5,
    name: 'Orbit Bluetooth Speaker',
    price: 74.99,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    description:
      'Compact speaker featuring 360° sound, waterproof housing, and PartyLink for pairing up to 10 devices.',
  },
  {
    id: 6,
    name: 'Luxe Leather Backpack',
    price: 189.49,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    description:
      'Handcrafted Italian leather backpack with padded laptop sleeve and modular interior compartments.',
  },
  {
    id: 7,
    name: 'Aurora Knit Sweater',
    price: 96.25,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=900&q=80',
    description:
      'Cozy merino wool sweater featuring a modern silhouette and ribbed cuffs, perfect for transitional weather.',
  },
  {
    id: 8,
    name: 'ZenBrew Pour Over Set',
    price: 58,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=900&q=80',
    description:
      'Precision brewing kit with a double-walled glass carafe, reusable stainless filter, and bamboo accents.',
  },
  {
    id: 9,
    name: 'Summit Trail Jacket',
    price: 214,
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    description:
      'Weatherproof shell with seam-sealed construction, adjustable hood, and ventilated panels for alpine adventures.',
  },
  {
    id: 10,
    name: 'Pulse Fitness Tracker',
    price: 134.95,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80',
    description:
      'Multi-sport fitness tracker with ECG monitoring, GPS tracking, and guided breathing exercises.',
  },
  {
    id: 11,
    name: 'Skyline Polarized Sunglasses',
    price: 68.5,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    description:
      'Premium acetate frames with scratch-resistant polarized lenses for everyday clarity and UV protection.',
  },
  {
    id: 12,
    name: 'TerraFlow Yoga Mat',
    price: 52,
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?auto=format&fit=crop&w=900&q=80',
    description:
      'Eco-friendly mat with dual-texture grip, cushion support, and antimicrobial finish for restorative sessions.',
  },
  {
    id: 13,
    name: 'JetSet Carry-On',
    price: 229,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    description:
      'Lightweight polycarbonate carry-on with 360° spinner wheels, TSA locks, and USB charging port.',
  },
  {
    id: 14,
    name: 'Solstice Linen Bedding Set',
    price: 179,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    description:
      'Luxurious stonewashed linen bedding that becomes softer with every wash and regulates sleep temperature.',
  },
  {
    id: 15,
    name: 'Nimbus Weighted Blanket',
    price: 159.99,
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
    description:
      'Cooling weighted blanket evenly distributes glass microbeads to reduce anxiety and improve sleep.',
  },
  {
    id: 16,
    name: 'Vertex Mechanical Keyboard',
    price: 142,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    description:
      'Hot-swappable mechanical keyboard with customizable RGB lighting and sculpted aluminum frame.',
  },
  {
    id: 17,
    name: 'Horizon Trail Boots',
    price: 198,
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80',
    description:
      'Durable leather boots with Vibram soles, waterproof membrane, and insulated lining for rugged terrain.',
  },
  {
    id: 18,
    name: 'Arcadia Desk Organizer',
    price: 64,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1452457779869-0a9ebbbdee99?auto=format&fit=crop&w=900&q=80',
    description:
      'Modular walnut desk organizer with magnetic accessories for decluttering creative workspaces.',
  },
  {
    id: 19,
    name: 'Vivid Studio Light',
    price: 122.5,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=900&q=80',
    description:
      'Adjustable LED light with CRI 96+ accuracy, app control, and portable battery pack for creators on the go.',
  },
  {
    id: 20,
    name: 'Seafarer Travel Towel',
    price: 36,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1519822468117-0bc09a0edb54?auto=format&fit=crop&w=900&q=80',
    description:
      'Quick-drying microfiber towel that packs into a palm-sized pouch—ideal for seaside escapes or gym sessions.',
  },
  {
    id: 21,
    name: 'Momentum Smartwatch',
    price: 289,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1527694224012-be005121c774?auto=format&fit=crop&w=900&q=80',
    description:
      'Premium smartwatch with LTE connectivity, wellness tracking, and seamless integration across devices.',
  },
  {
    id: 22,
    name: 'CloudNine Travel Pillow',
    price: 48,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
    description:
      'Memory foam travel pillow with ergonomic neck support and breathable, washable cover for long-haul comfort.',
  },
  {
    id: 23,
    name: 'Haven Essential Oils Collection',
    price: 54,
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    description:
      'Curated set of five therapeutic-grade essential oils for relaxation, focus, and restful sleep rituals.',
  },
  {
    id: 24,
    name: 'Trailblaze Day Pack',
    price: 118,
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?auto=format&fit=crop&w=900&q=80',
    description:
      'Ergonomic hiking pack with hydration sleeve, airflow back panel, and weather-resistant materials.',
  },
  {
    id: 25,
    name: 'Vertex Noise Masking Earbuds',
    price: 129,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=900&q=80',
    description:
      'Ultra-light earbuds with adaptive soundscapes that mask distractions and enhance concentration.',
  },
  {
    id: 26,
    name: 'Sierra Wool Beanie',
    price: 32,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
    description:
      'Naturally warm merino wool beanie with rib-knit texture and moisture-wicking inner band.',
  },
  {
    id: 27,
    name: 'Eclipse Travel Mug',
    price: 42,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1581579186983-9a9c1b69b2fd?auto=format&fit=crop&w=900&q=80',
    description:
      'Vacuum-insulated stainless mug with leak-proof locking lid and ceramic interior coating.',
  },
  {
    id: 28,
    name: 'Stratus Packable Raincoat',
    price: 128,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80',
    description:
      'Ultra-light raincoat that packs into its own pocket, featuring reflective trim and breathable panels.',
  },
  {
    id: 29,
    name: 'Auric Minimal Watch',
    price: 210,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    description:
      'Brushed steel timepiece with sapphire crystal glass, quick-release straps, and Swiss movement.',
  },
  {
    id: 30,
    name: 'Nomad Portable Charger',
    price: 84,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1530805948738-95aa207392d1?auto=format&fit=crop&w=900&q=80',
    description:
      'High-capacity 20,000mAh power bank with USB-C PD fast charging and intelligent power management.',
  },
  {
    id: 31,
    name: 'Harbor Canvas Duffle',
    price: 138,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=900&q=80',
    description:
      'Weekender duffle crafted from water-resistant canvas with leather trim and detachable shoulder strap.',
  },
  {
    id: 32,
    name: 'Evergreen Camp Set',
    price: 92,
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description:
      'Compact nesting cookware set including stove-compatible pot, skillet, and enamel-coated mugs.',
  },
  {
    id: 33,
    name: 'Pulse Studio Earphones',
    price: 158,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    description:
      'Studio-grade earphones with hybrid drivers delivering balanced sound and detachable braided cables.',
  },
  {
    id: 34,
    name: 'Atlas Travel Adapter',
    price: 44,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    description:
      'Universal travel adapter with 3 USB-C ports, surge protection, and a compact foldable design.',
  },
  {
    id: 35,
    name: 'Serenity Herbal Tea Set',
    price: 46,
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    description:
      'Artisan tea collection featuring calming botanicals sourced from sustainable farms around the world.',
  },
  {
    id: 36,
    name: 'Vista Compact Binoculars',
    price: 134,
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    description:
      'Compact binoculars with multi-coated lenses, waterproof housing, and 12x magnification for wildlife spotting.',
  },
  {
    id: 37,
    name: 'Elevate Standing Desk',
    price: 489,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=900&q=80',
    description:
      'Motorized standing desk with memory presets, cable management tray, and solid bamboo desktop.',
  },
  {
    id: 38,
    name: 'Tempo Resistance Bands',
    price: 38,
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=900&q=80',
    description:
      'Set of five color-coded resistance bands with ergonomic handles and door anchor for full-body workouts.',
  },
  {
    id: 39,
    name: 'Aria Silk Sleep Mask',
    price: 35,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=900&q=80',
    description:
      'Luxe silk sleep mask with adjustable strap and light-blocking design to enhance rest anywhere.',
  },
  {
    id: 40,
    name: 'Flux Wireless Charger',
    price: 58,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=900&q=80',
    description:
      'Slim wireless charger supporting MagSafe devices with fast charging and soft-touch finish.',
  },
  {
    id: 41,
    name: 'Coastal Breeze Candle',
    price: 32,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1484889357754-1e85f666b078?auto=format&fit=crop&w=900&q=80',
    description:
      'Hand-poured soy candle with notes of sea salt, driftwood, and jasmine for a calming atmosphere.',
  },
  {
    id: 42,
    name: 'Lattice Tech Organizer',
    price: 64,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80',
    description:
      'Slim travel organizer with elastic grid system to secure cables, chargers, and accessories in place.',
  },
  {
    id: 43,
    name: 'Mistral Windbreaker',
    price: 142,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    description:
      'Lightweight windbreaker with water-repellent finish, reflective piping, and packable hood.',
  },
  {
    id: 44,
    name: 'Horizon Travel Journal',
    price: 28,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description:
      'Premium lay-flat journal with recycled paper, dotted pages, and pockets for keepsakes.',
  },
  {
    id: 45,
    name: 'Pulse Bluetooth Earband',
    price: 74,
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
    description:
      'Soft-knit Bluetooth headband that plays soothing audio while tracking sleep and meditation sessions.',
  },
  {
    id: 46,
    name: 'Lumen Smart Diffuser',
    price: 92,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    description:
      'Wi-Fi connected diffuser with scheduling, ambient lighting, and app-controlled fragrance intensity.',
  },
  {
    id: 47,
    name: 'Glide Travel Sneakers',
    price: 128,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80',
    description:
      'Versatile knit sneakers with foldable heel design for easy slip-on comfort during long journeys.',
  },
  {
    id: 48,
    name: 'Sundial Field Watch',
    price: 198,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80',
    description:
      'Field-inspired watch with luminous markers, sapphire crystal, and quick-release NATO strap.',
  },
  {
    id: 49,
    name: 'Horizon Hammock Set',
    price: 88,
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description:
      'Ripstop nylon hammock with tree-friendly straps and integrated bug net for scenic lounging.',
  },
  {
    id: 50,
    name: 'Pulse Compact Projector',
    price: 312,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
    description:
      'Portable 1080p projector with autofocus, 4-hour battery, and built-in speakers for movie nights anywhere.',
  },
];

export const categories = [
  'All',
  'Accessories',
  'Apparel',
  'Tech',
  'Home',
  'Outdoor',
  'Wellness',
  'Travel',
] as const;
