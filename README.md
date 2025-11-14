# Delicious Bites - Food E-commerce Website

A modern, responsive food ordering web application built with Next.js, featuring a complete e-commerce experience with menu browsing, product details, shopping cart, and checkout functionality.

## Features

### 🏠 Home Page
- Beautiful hero section with call-to-action
- Feature showcase (Premium Quality, Expert Chefs, Fast Delivery)
- About section
- Contact information
- Fully responsive design

### 🍕 Menu Page
- Grid layout displaying all food items
- Product cards with images, descriptions, and prices
- Quick "Add to Cart" functionality
- Visual feedback when items are added
- Link to detailed product pages

### 📦 Product Detail Page
- Large product display with emoji icons
- Detailed product information
- Category tags
- Quantity selector
- Add to cart with custom quantities
- Related products suggestions
- "You Might Also Like" section

### 🛒 Shopping Cart
- View all items in cart
- Adjust quantities with +/- buttons
- Remove items from cart
- Real-time price calculations
- Order summary with subtotal, delivery fee, and tax
- Cart badge showing total items count
- Proceed to checkout button

### 💳 Checkout Page
- Complete checkout form with validation
- Contact information section
- Delivery address fields
- Payment information (card details)
- Order summary sidebar
- Order placement with confirmation

### 🎨 Design Features
- Modern gradient backgrounds (purple theme)
- Smooth animations and transitions
- Hover effects on cards and buttons
- Responsive navigation bar
- Cart item counter badge
- Mobile-friendly responsive design

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Icons:** Emoji-based icons for visual appeal

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── menu/              # Menu listing page
│   │   ├── page.tsx
│   │   └── [id]/          # Dynamic product detail page
│   │       └── page.tsx
│   ├── cart/              # Shopping cart page
│   │   └── page.tsx
│   ├── checkout/          # Checkout page
│   │   └── page.tsx
│   └── layout.tsx         # Root layout with providers
├── components/            # Reusable React components
│   └── Navbar.tsx        # Navigation bar with cart badge
├── context/              # React Context for state management
│   └── CartContext.tsx   # Shopping cart state management
├── data/                 # Static data
│   └── products.ts       # Product catalog
└── types/                # TypeScript type definitions
    └── product.ts        # Product and CartItem types
```

## Features in Detail

### Cart Management
The application uses React Context API to manage the shopping cart state globally. Features include:
- Add items to cart
- Update item quantities
- Remove items from cart
- Calculate totals with tax and delivery fees
- Persistent cart across page navigation (within the same session)

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Breakpoints for tablet and desktop views
- Grid layouts that adapt to screen size
- Touch-friendly buttons and controls

### User Experience
- Visual feedback for all interactions
- Loading states for async operations
- Form validation on checkout
- Success confirmation after order placement
- Smooth page transitions

## Customization

### Adding New Products
Edit `src/data/products.ts` to add or modify products:

```typescript
{
  id: 9,
  name: 'Your Product',
  description: 'Product description',
  price: 19.99,
  image: '🍽️',
  category: 'Main Course'
}
```

### Styling
The application uses Tailwind CSS. You can customize colors and styles in:
- `tailwind.config.ts` - Theme configuration
- `src/app/globals.css` - Global styles
- Component files - Component-specific styles

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn about React
- [Tailwind CSS](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [TypeScript](https://www.typescriptlang.org/docs) - Learn about TypeScript

## License

This project is open source and available under the MIT License.
