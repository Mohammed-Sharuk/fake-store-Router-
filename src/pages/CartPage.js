// src/pages/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = subtotal * 0.1;
    return (subtotal - discount).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="border p-4 mb-4 rounded-lg">
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p>Price: ${item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>
              <p className="mt-2">Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <h2 className="text-xl font-bold mt-4">
            Total Price (after 10% discount): ${calculateTotal()}
          </h2>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
