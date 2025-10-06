import { Suspense, lazy, useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CartDrawer from './components/shop/CartDrawer';

const Home = lazy(() => import('./pages/Home'));

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-slate-100">
      <Header onCartToggle={() => setIsCartOpen(true)} />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="mx-auto max-w-6xl px-6 py-20 text-center text-sm text-slate-400">
              Loading collection...
            </div>
          }
        >
          <Home onCartOpen={() => setIsCartOpen(true)} />
        </Suspense>
      </main>
      <Footer />
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default App;
