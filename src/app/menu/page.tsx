'use client';

import { products } from '@/data/products';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { Product } from '@/types/product';

export default function MenuPage() {
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
          Our Menu
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Discover our delicious selection of handcrafted dishes
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <Link href={`/menu/${product.id}`}>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-48 flex items-center justify-center text-8xl cursor-pointer">
                  {product.image}
                </div>
              </Link>
              <div className="p-6">
                <Link href={`/menu/${product.id}`}>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-purple-600 cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      addedProductId === product.id
                        ? 'bg-green-500 text-white'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {addedProductId === product.id ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/menu/${product.id}`}
                    className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
