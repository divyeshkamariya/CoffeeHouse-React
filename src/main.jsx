import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ProductsProvider } from './context/ProductsContext';
import './styles/base.css';
import './styles/theme.css';
import './styles/refresh.css';
import './styles/checkout.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
