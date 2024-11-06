import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
