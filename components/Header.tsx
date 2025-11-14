'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 fixed w-full top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
          🍕 Delicious Bites
        </Link>
        <ul className="flex gap-8 items-center">
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
            <Link href="/cart" className="relative hover:opacity-80 transition-opacity">
              🛒 Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
