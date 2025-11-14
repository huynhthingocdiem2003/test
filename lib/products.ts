export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Pasta Carbonara",
    description: "Creamy Italian pasta with crispy bacon, parmesan cheese, and a perfectly cooked egg",
    price: 18.99,
    icon: "🍝",
    category: "Main Course"
  },
  {
    id: 2,
    name: "Gourmet Burger",
    description: "Juicy beef patty with aged cheddar, caramelized onions, and our special sauce",
    price: 15.99,
    icon: "🍔",
    category: "Main Course"
  },
  {
    id: 3,
    name: "Sushi Platter",
    description: "Fresh assortment of nigiri, sashimi, and specialty rolls with wasabi and ginger",
    price: 24.99,
    icon: "🍣",
    category: "Main Course"
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan, croutons with our homemade Caesar dressing",
    price: 12.99,
    icon: "🥗",
    category: "Salad"
  },
  {
    id: 5,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil on thin crust",
    price: 16.99,
    icon: "🍕",
    category: "Main Course"
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a molten center, served with vanilla ice cream",
    price: 8.99,
    icon: "🍰",
    category: "Dessert"
  }
];
