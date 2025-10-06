import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import CartDrawer from './components/CartDrawer';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onCartToggle={() => setIsCartOpen(true)} />
      <main className="flex-1">
        <Home />
      </main>
      <footer className="border-t border-slate-800 bg-surface/60 backdrop-blur py-6 text-center text-sm text-slate-400">
        © 2025 Salama Malek — Full-Stack Developer.
      </footer>
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default App;
