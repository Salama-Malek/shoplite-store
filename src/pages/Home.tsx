import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/common/SearchBar';
import CategoryFilter from '../components/common/CategoryFilter';
import SortMenu, { type SortOption } from '../components/common/SortMenu';
import ProductGrid from '../components/shop/ProductGrid';
import ProductModal from '../components/shop/ProductModal';
import RecentlyViewed from '../components/shop/RecentlyViewed';
import { products as catalog, type Product, type ProductCategory } from '../data/products';
import { usePagination } from '../hooks/usePagination';
import { usePreferences } from '../context/PreferencesContext';

const PAGE_SIZE = 9;

type HomeProps = {
  onCartOpen: () => void;
};

const Home = ({ onCartOpen }: HomeProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [sortOption, setSortOption] = useState<SortOption>('price-asc');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addRecentlyViewed, recentlyViewed } = usePreferences();

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    return catalog.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        normalizedSearch.length === 0 || product.name.toLowerCase().includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const sortedProducts = useMemo(() => {
    const cloned = [...filteredProducts];
    cloned.sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'name-asc':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    return cloned;
  }, [filteredProducts, sortOption]);

  const { items: paginatedProducts, hasMore, loadMore, reset } = usePagination(sortedProducts, PAGE_SIZE);

  useEffect(() => {
    setIsLoading(true);
    const timeout = window.setTimeout(() => setIsLoading(false), 320);
    reset();
    return () => window.clearTimeout(timeout);
  }, [searchTerm, selectedCategory, sortOption, reset]);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    addRecentlyViewed(product.id);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 space-y-6"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold text-white">Discover your next essential</h2>
            <p className="text-sm text-slate-400">
              Shop from a curated selection of tech, travel, and lifestyle pieces designed to elevate your every day.
            </p>
          </div>
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />
          <SortMenu value={sortOption} onChange={setSortOption} />
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
            {sortedProducts.length} items
          </span>
        </div>
      </motion.section>

      <ProductGrid
        products={paginatedProducts}
        isLoading={isLoading}
        onView={handleViewProduct}
        onLoadMore={loadMore}
        hasMore={hasMore}
      />

      <RecentlyViewed allProducts={catalog} productIds={recentlyViewed} onSelect={handleViewProduct} />

      <ProductModal
        product={selectedProduct}
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onCartOpen={onCartOpen}
      />
    </div>
  );
};

export default Home;
