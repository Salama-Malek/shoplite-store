import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { products, categories } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('All');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />
      </section>

      <AnimatePresence>
        {filteredProducts.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="rounded-3xl border border-slate-800 bg-surface/80 p-10 text-center text-sm text-slate-400"
          >
            No products match your search. Try a different keyword or category.
          </motion.p>
        ) : (
          <motion.div key="grid" layout className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
