# Delicious Bites - Food E-commerce Website

A modern, full-featured food e-commerce application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Beautiful landing page with hero section, features, about, and contact sections
- **Menu/Product Listing**: Browse all available food items with prices and descriptions
- **Product Detail Pages**: View detailed information about each product with quantity controls
- **Shopping Cart**: Add items to cart, update quantities, and remove items
- **Checkout Process**: Complete checkout form with contact info, delivery address, and payment details
- **Order Confirmation**: Success page after completing an order
- **Responsive Design**: Fully responsive layout that works on all devices
- **State Management**: React Context API for global cart state

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **UI Components**: Custom components with Tailwind

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with CartProvider
│   ├── page.tsx             # Home page
│   ├── menu/                # Menu pages
│   │   ├── page.tsx         # Product listing
│   │   └── [id]/page.tsx    # Product detail page
│   ├── cart/                # Shopping cart
│   │   └── page.tsx
│   └── checkout/            # Checkout flow
│       ├── page.tsx         # Checkout form
│       └── success/page.tsx # Order confirmation
├── components/              # Reusable components
│   └── Header.tsx          # Navigation header
├── context/                # React Context providers
│   └── CartContext.tsx     # Shopping cart state
└── lib/                    # Utilities and data
    └── products.ts         # Product data and types
```

## Pages

- `/` - Home page with hero and information sections
- `/menu` - Product listing page
- `/menu/[id]` - Individual product detail page
- `/cart` - Shopping cart with order summary
- `/checkout` - Checkout form
- `/checkout/success` - Order confirmation page

## Features in Detail

### Shopping Cart
- Add/remove items
- Update quantities
- Real-time price calculations
- Persistent across pages using React Context

### Checkout
- Contact information form
- Delivery address input
- Payment information (demo only)
- Order notes
- Complete order summary with tax and delivery fee calculations

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available under the MIT License.
