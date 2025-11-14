import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Pasta Carbonara',
    description: 'Creamy Italian pasta with crispy bacon, parmesan cheese, and a perfectly cooked egg',
    price: 18.99,
    image: '🍝',
    category: 'Main Course'
  },
  {
    id: 2,
    name: 'Gourmet Burger',
    description: 'Juicy beef patty with aged cheddar, caramelized onions, and our special sauce',
    price: 15.99,
    image: '🍔',
    category: 'Main Course'
  },
  {
    id: 3,
    name: 'Sushi Platter',
    description: 'Fresh assortment of nigiri, sashimi, and specialty rolls with wasabi and ginger',
    price: 24.99,
    image: '🍣',
    category: 'Main Course'
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan, croutons with our homemade Caesar dressing',
    price: 12.99,
    image: '🥗',
    category: 'Appetizer'
  },
  {
    id: 5,
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil on thin crust',
    price: 16.99,
    image: '🍕',
    category: 'Main Course'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate cake with a molten center, served with vanilla ice cream',
    price: 8.99,
    image: '🍰',
    category: 'Dessert'
  },
  {
    id: 7,
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon grilled to perfection with lemon butter sauce',
    price: 22.99,
    image: '🐟',
    category: 'Main Course'
  },
  {
    id: 8,
    name: 'Chicken Wings',
    description: 'Crispy chicken wings tossed in your choice of buffalo, BBQ, or teriyaki sauce',
    price: 13.99,
    image: '🍗',
    category: 'Appetizer'
  }
];
