'use client';

import Link from 'next/link';
import { products } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function MenuPage() {
  const { addToCart } = useCart();
  const [addedProducts, setAddedProducts] = useState<Set<number>>(new Set());

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    setAddedProducts(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedProducts(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">Our Menu</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">Discover our delicious selection of dishes</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 h-48 flex items-center justify-center text-8xl">
                {product.icon}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                  <span className="text-2xl font-bold text-yellow-500">${product.price}</span>
                </div>
                <p className="text-sm text-purple-600 mb-3">{product.category}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="flex gap-3">
                  <Link
                    href={`/menu/${product.id}`}
                    className="flex-1 text-center px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`flex-1 px-4 py-3 font-semibold rounded-lg transition-colors ${
                      addedProducts.has(product.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                  >
                    {addedProducts.has(product.id) ? '✓ Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
