export type Product = {
  id: number;
  name: string;
  price: number;
  category: 'Accessories' | 'Apparel' | 'Tech' | 'Home' | 'Outdoor';
  image: string;
};

export const products: Product[] = [
  { id: 1, name: 'Nebula Wireless Headphones', price: 149.99, category: 'Tech', image: 'https://images.unsplash.com/photo-1516110833967-5787bba5b0c7?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Lumos Smart Lamp', price: 89.5, category: 'Home', image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'AeroFit Running Sneakers', price: 119, category: 'Apparel', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Cascade Water Bottle', price: 28.75, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1526404079168-8a5b5a71373a?auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Orbit Bluetooth Speaker', price: 69.99, category: 'Tech', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' },
  { id: 6, name: 'Luxe Leather Backpack', price: 179.49, category: 'Accessories', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
  { id: 7, name: 'Aurora Knit Sweater', price: 94.25, category: 'Apparel', image: 'https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=800&q=80' },
  { id: 8, name: 'ZenBrew Pour Over Set', price: 56.0, category: 'Home', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80' },
  { id: 9, name: 'Summit Trail Jacket', price: 210.0, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80' },
  { id: 10, name: 'Pulse Fitness Tracker', price: 134.95, category: 'Tech', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80' },
  { id: 11, name: 'Skyline Sunglasses', price: 64.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80' },
  { id: 12, name: 'Terra Yoga Mat', price: 48.5, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?auto=format&fit=crop&w=800&q=80' },
];

export const categories = ['All', 'Accessories', 'Apparel', 'Tech', 'Home', 'Outdoor'] as const;
