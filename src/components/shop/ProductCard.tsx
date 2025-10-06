import { memo, useCallback, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import WishlistButton from './WishlistButton';

type ProductCardProps = {
  product: Product;
  onView: (product: Product) => void;
};

const ProductCardComponent = ({ product, onView }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      addToCart(product);
    },
    [addToCart, product]
  );

  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      onClick={() => onView(product)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface/70 via-surface/50 to-white/5 p-5 shadow-lg shadow-black/30 backdrop-blur transition"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-56 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-100">
            {product.category}
          </span>
          <WishlistButton productId={product.id} size="sm" />
        </div>
      </div>
      <div className="mt-6 flex flex-1 flex-col gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="line-clamp-2 text-sm text-slate-400">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-accent">${product.price.toFixed(2)}</span>
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={handleAddToCart}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/90 px-4 py-2 text-xs font-semibold text-slate-900 shadow-glow transition hover:bg-accent"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

const ProductCard = memo(ProductCardComponent);

export default ProductCard;
