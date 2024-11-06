// src/pages/ProductsPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Link to="/cart" className="text-blue-500 hover:underline">Go to Cart</Link>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
