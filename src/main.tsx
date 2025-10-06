import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { CartProvider } from './context/CartContext';
import { PreferencesProvider } from './context/PreferencesContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PreferencesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PreferencesProvider>
  </React.StrictMode>
);
