import { HeartIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { usePreferences } from '../../context/PreferencesContext';

type WishlistButtonProps = {
  productId: number;
  size?: 'sm' | 'md';
};

const sizeClass = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
};

const WishlistButton = ({ productId, size = 'md' }: WishlistButtonProps) => {
  const { isInWishlist, toggleWishlist } = usePreferences();
  const active = isInWishlist(productId);

  return (
    <motion.button
      type="button"
      aria-pressed={active}
      onClick={(event) => {
        event.stopPropagation();
        toggleWishlist(productId);
      }}
      whileTap={{ scale: 0.9 }}
      className={`rounded-full border border-white/10 bg-black/30 p-2 text-white transition hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
        active ? 'text-rose-300' : 'text-slate-200'
      }`}
    >
      <HeartIcon className={sizeClass[size]} aria-hidden="true" />
      <span className="sr-only">{active ? 'Remove from wishlist' : 'Save to wishlist'}</span>
    </motion.button>
  );
};

export default WishlistButton;
