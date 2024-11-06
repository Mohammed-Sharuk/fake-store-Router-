// src/components/ProductItem.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const ProductItem = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-200">
      <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
      <h2 className="font-bold text-lg mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <p className="text-gray-700 text-sm mb-4">{product.description.substring(0, 100)}...</p>
      {isInCart ? (
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
          onClick={() => removeFromCart(product.id)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
