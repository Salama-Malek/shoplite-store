import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, resetCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Your cart is empty. Add some items before checking out.');
      return;
    }

    alert('Thank you for shopping with ShopLite Store! Your order is being processed.');
    resetCart();
    onClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-surface/95 backdrop-blur shadow-xl shadow-black/30">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
                    <div>
                      <Dialog.Title className="text-lg font-semibold text-white">Shopping Cart</Dialog.Title>
                      <p className="text-sm text-slate-400">{totalItems} items</p>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full p-2 text-slate-400 transition hover:text-slate-200"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
                    {items.length === 0 ? (
                      <p className="text-sm text-slate-400">Your cart is empty. Start adding your favorite products!</p>
                    ) : (
                      items.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 rounded-2xl border border-slate-800 bg-background/70 p-4 shadow-inner shadow-black/20"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 rounded-xl object-cover"
                          />
                          <div className="flex flex-1 flex-col gap-3">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                                <p className="text-sm text-accent">${item.price.toFixed(2)}</p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                className="rounded-full p-2 text-slate-500 transition hover:text-rose-400"
                                aria-label={`Remove ${item.name}`}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-flex items-center gap-3 rounded-full border border-slate-700 px-3 py-1">
                                <button
                                  type="button"
                                  className="rounded-full p-1 text-slate-400 transition hover:text-accent"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  aria-label={`Decrease quantity of ${item.name}`}
                                >
                                  <MinusIcon className="h-4 w-4" />
                                </button>
                                <span className="text-sm font-medium text-white">{item.quantity}</span>
                                <button
                                  type="button"
                                  className="rounded-full p-1 text-slate-400 transition hover:text-accent"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  aria-label={`Increase quantity of ${item.name}`}
                                >
                                  <PlusIcon className="h-4 w-4" />
                                </button>
                              </div>
                              <span className="text-sm font-semibold text-slate-300">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="border-t border-slate-800 px-6 py-6">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>Total</span>
                      <span className="text-lg font-semibold text-white">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="mt-4 w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:bg-sky-300"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartDrawer;