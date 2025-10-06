import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  ReactNode,
} from 'react';
import type { Product } from '../data/products';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'RESET' }
  | { type: 'HYDRATE'; payload: CartItem[] };

const STORAGE_KEY = 'shoplite-cart';

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.min(item.quantity + 1, 9) }
              : item
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
            quantity: 1,
          },
        ],
      };
    }
    case 'REMOVE_ITEM': {
      return { items: state.items.filter((item) => item.id !== action.payload.id) };
    }
    case 'UPDATE_QUANTITY': {
      return {
        items: state.items
          .map((item) => {
            if (item.id !== action.payload.id) return item;
            const nextQuantity = Math.max(0, Math.min(action.payload.quantity, 9));
            return { ...item, quantity: nextQuantity };
          })
          .filter((item) => item.quantity > 0),
      };
    }
    case 'RESET': {
      return { items: [] };
    }
    case 'HYDRATE': {
      return {
        items: action.payload
          .filter((item) => item.quantity > 0)
          .map((item) => ({ ...item, quantity: Math.min(item.quantity, 9) })),
      };
    }
    default:
      return state;
  }
};

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  resetCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed: CartItem[] = JSON.parse(stored);
        dispatch({ type: 'HYDRATE', payload: parsed });
      } catch (error) {
        console.error('Failed to parse cart data', error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const value = useMemo(() => {
    const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = state.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    return {
      items: state.items,
      totalItems,
      totalPrice,
      addToCart: (product: Product) => dispatch({ type: 'ADD_ITEM', payload: product }),
      removeFromCart: (id: number) => dispatch({ type: 'REMOVE_ITEM', payload: { id } }),
      updateQuantity: (id: number, quantity: number) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
      resetCart: () => dispatch({ type: 'RESET' }),
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};