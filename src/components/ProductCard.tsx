import { motion } from 'framer-motion';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-surface/80 shadow-lg shadow-black/20 transition"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="mt-2 text-2xl font-bold text-accent">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-auto inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:bg-sky-300"
        >
          Add to Cart
        </button>
      </div>
    </motion.article>
  );
};

export default ProductCard;
