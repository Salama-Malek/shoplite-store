import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const WISHLIST_KEY = 'shoplite-wishlist';
const RECENT_KEY = 'shoplite-recent';
const RECENT_LIMIT = 8;

export type PreferencesContextValue = {
  wishlist: number[];
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  recentlyViewed: number[];
  addRecentlyViewed: (productId: number) => void;
};

const PreferencesContext = createContext<PreferencesContextValue | undefined>(undefined);

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useLocalStorage<number[]>(WISHLIST_KEY, []);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage<number[]>(RECENT_KEY, []);

  const value = useMemo<PreferencesContextValue>(() => {
    const toggleWishlist = (productId: number) => {
      setWishlist((prev) => {
        const exists = prev.includes(productId);
        return exists ? prev.filter((id) => id !== productId) : [...prev, productId];
      });
    };

    const isInWishlist = (productId: number) => wishlist.includes(productId);

    const addRecentlyViewed = (productId: number) => {
      setRecentlyViewed((prev) => {
        const withoutId = prev.filter((id) => id !== productId);
        return [productId, ...withoutId].slice(0, RECENT_LIMIT);
      });
    };

    return {
      wishlist,
      toggleWishlist,
      isInWishlist,
      recentlyViewed,
      addRecentlyViewed,
    };
  }, [wishlist, setWishlist, recentlyViewed, setRecentlyViewed]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
};
