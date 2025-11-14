'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-600 to-purple-900 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            🍕 Delicious Bites
          </Link>
          
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" className="hover:opacity-80 transition-opacity">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:opacity-80 transition-opacity">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:opacity-80 transition-opacity relative">
                Cart
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
