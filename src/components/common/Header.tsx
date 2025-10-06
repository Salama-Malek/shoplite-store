import { motion } from 'framer-motion';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';
import { usePreferences } from '../../context/PreferencesContext';

type HeaderProps = {
  onCartToggle: () => void;
};

const Header = ({ onCartToggle }: HeaderProps) => {
  const { totalItems, total } = useCart();
  const { wishlist } = usePreferences();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-30 border-b border-white/10 bg-gradient-to-b from-surface/80 via-surface/60 to-surface/40 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <motion.h1 layout className="text-3xl font-semibold tracking-tight text-white">
            ShopLite Store
          </motion.h1>
          <p className="text-sm text-slate-400">
            Elevated essentials, thoughtful design, and tech-forward accessories curated for your every day.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-4 py-2 text-xs text-slate-300 shadow-inner shadow-black/20">
            <HeartIcon className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>{wishlist.length} saved</span>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={onCartToggle}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:bg-accent"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition group-hover:opacity-100" />
            <ShoppingBagIcon className="relative h-5 w-5" aria-hidden="true" />
            <span className="relative">${total.toFixed(2)}</span>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-sky-300 text-xs font-semibold text-slate-900 shadow-glow">
                {totalItems}
              </span>
            )}
            <span className="sr-only">View cart</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
