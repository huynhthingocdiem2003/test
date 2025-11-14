'use client';

import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const productId = parseInt(params.id as string);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/menu" className="text-purple-600 hover:text-purple-800">
            Back to Menu
          </Link>
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

  const incrementQuantity = () => setQuantity(Math.min(quantity + 1, 99));
  const decrementQuantity = () => setQuantity(Math.max(quantity - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/menu"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8 font-medium"
        >
          ← Back to Menu
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-96 md:h-full flex items-center justify-center">
              <div className="text-[200px]">{product.image}</div>
            </div>

            {/* Product Details */}
            <div className="p-8">
              <div className="mb-2 inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="text-4xl font-bold text-purple-600 mb-8">
                ${product.price.toFixed(2)}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold text-xl"
                  >
                    -
                  </button>
                  <span className="text-2xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
                }`}
              >
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>

              <button
                onClick={() => router.push('/cart')}
                className="w-full mt-4 py-4 rounded-xl font-bold text-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all duration-300"
              >
                Go to Cart
              </button>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-lg mb-4">Product Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Fresh ingredients daily</li>
                  <li>✓ Prepared by expert chefs</li>
                  <li>✓ Fast delivery available</li>
                  <li>✓ Satisfaction guaranteed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .filter((p) => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/menu/${relatedProduct.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-32 flex items-center justify-center text-6xl">
                    {relatedProduct.image}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">{relatedProduct.name}</h3>
                    <p className="text-purple-600 font-bold">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
