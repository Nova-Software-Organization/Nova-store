// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../src/assets/css/App.css';
import './assets/css/scroolbar.css';
import { AuthProvider } from './context/auth/AuthContext';
import { CartProvider } from './context/cart/CartContext';
import { FavoriteProvider } from './context/favorite/FavoriteContext';
import { ProductProviderAll } from './context/get/ProducAllGetContext';
import { ProductProvider } from './context/get/ProductLimitGetContext';
import Router from './router/router';

export default function App () {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <FavoriteProvider>
            <ProductProviderAll>
              <ProductProvider>
                  <Router />
              </ProductProvider>
            </ProductProviderAll>
            </FavoriteProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

