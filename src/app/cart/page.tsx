'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some delicious items to get started!</p>
          <Link
            href="/menu"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-24 h-24 rounded-lg flex items-center justify-center text-5xl flex-shrink-0">
                  {item.product.image}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {item.product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {item.product.category}
                  </p>
                  <p className="text-purple-600 font-bold text-lg">
                    ${item.product.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center space-x-3 bg-gray-100 rounded-lg px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right min-w-[80px]">
                    <p className="text-xl font-bold text-gray-800">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-700 font-bold text-xl ml-2"
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (10%)</span>
                  <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total</span>
                    <span className="text-purple-600">
                      ${(getTotalPrice() + 5 + getTotalPrice() * 0.1).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full py-4 bg-purple-600 text-white text-center font-bold rounded-xl hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 mb-3"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/menu"
                className="block w-full py-4 bg-gray-200 text-gray-800 text-center font-bold rounded-xl hover:bg-gray-300 transition-all duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
