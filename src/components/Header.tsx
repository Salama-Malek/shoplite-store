import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

type HeaderProps = {
  onCartToggle: () => void;
};

const Header = ({ onCartToggle }: HeaderProps) => {
  const { totalItems, totalPrice } = useCart();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">ShopLite Store</h1>
          <p className="text-sm text-slate-400">Curated essentials for your everyday adventures.</p>
        </div>
        <button
          type="button"
          onClick={onCartToggle}
          className="relative flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent transition hover:bg-accent/20"
        >
          <ShoppingBagIcon className="h-6 w-6" />
          <span className="text-sm font-medium text-white">${totalPrice.toFixed(2)}</span>
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-semibold text-slate-900 shadow-glow">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
