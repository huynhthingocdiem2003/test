'use client';

import { useParams, useRouter } from 'next/navigation';
import { products } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const productId = Number(params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push('/menu')}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="mb-8 px-4 py-2 text-purple-600 hover:text-purple-800 font-semibold flex items-center gap-2"
        >
          ← Back to Menu
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 h-96 md:h-full flex items-center justify-center">
              <span className="text-[200px]">{product.icon}</span>
            </div>

            {/* Product Info */}
            <div className="p-8 md:p-12">
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-yellow-500 mb-6">${product.price}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">Description</h2>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">Quantity</h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold text-xl"
                  >
                    -
                  </button>
                  <span className="text-2xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
                    added
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                >
                  {added ? '✓ Added to Cart!' : `Add ${quantity} to Cart - $${(product.price * quantity).toFixed(2)}`}
                </button>
                <button
                  onClick={() => router.push('/cart')}
                  className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-colors"
                >
                  Go to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map(relatedProduct => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => router.push(`/menu/${relatedProduct.id}`)}
                >
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-32 flex items-center justify-center text-6xl">
                    {relatedProduct.icon}
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{relatedProduct.name}</h3>
                    <p className="text-yellow-500 font-bold">${relatedProduct.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
