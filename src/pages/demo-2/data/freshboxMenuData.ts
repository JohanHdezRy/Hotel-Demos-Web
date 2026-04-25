import { ACCENT, BROWN } from "./freshboxTokens";

// ── Types ──────────────────────────────────────────────────────────────────────

export interface Category {
  id: string;
  label: string;
  emoji: string;
}

export interface MenuItem {
  id: number;
  name: string;
  cat: string;
  price: string;
  desc: string;
  tag?: string;
  img: string;
  size: "large" | "medium" | "small";
}

export interface FoodCard {
  phrase: string;
  img: string;
  dark: boolean;
}

export interface Coupon {
  code: string;
  off: string;
  desc: string;
  expires: string;
  color: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────

export const CATEGORIES: Category[] = [
  { id: "all", label: "All", emoji: "🍽️" },
  { id: "burgers", label: "Burgers", emoji: "🍔" },
  { id: "pizza", label: "Pizza", emoji: "🍕" },
  { id: "chicken", label: "Chicken", emoji: "🍗" },
  { id: "sides", label: "Sides", emoji: "🍟" },
  { id: "salads", label: "Salads", emoji: "🥗" },
  { id: "pasta", label: "Pasta", emoji: "🍝" },
];

export const MENU: MenuItem[] = [
  {
    id: 1,
    name: "Smash Burger",
    cat: "burgers",
    price: "$13.90",
    desc: "Double smashed patty, cheddar, pickles, secret sauce",
    tag: "Fan Favorite",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=80",
    size: "large",
  },
  {
    id: 2,
    name: "Crispy Chicken",
    cat: "chicken",
    price: "$12.50",
    desc: "Golden fried chicken breast, slaw, jalapeño mayo",
    tag: "Spicy",
    img: "https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?w=700&q=80",
    size: "medium",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    cat: "pizza",
    price: "$15.90",
    desc: "San Marzano tomato, fresh mozzarella, basil",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80",
    size: "medium",
  },
  {
    id: 4,
    name: "Truffle Fries",
    cat: "sides",
    price: "$7.50",
    desc: "Hand-cut fries, truffle oil, parmesan, chives",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=80",
    size: "small",
  },
  {
    id: 5,
    name: "Fresh Pasta",
    cat: "pasta",
    price: "$14.20",
    desc: "Tagliatelle, slow ragù, pecorino",
    tag: "Homemade",
    img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=700&q=80",
    size: "small",
  },
  {
    id: 6,
    name: "Garden Salad",
    cat: "salads",
    price: "$9.90",
    desc: "Mixed greens, cherry tomatoes, cucumber, lemon dressing",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80",
    size: "small",
  },
  {
    id: 7,
    name: "BBQ Bacon Burger",
    cat: "burgers",
    price: "$15.50",
    desc: "Angus beef, BBQ, crispy bacon, caramelized onions",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=700&q=80",
    size: "medium",
  },
  {
    id: 8,
    name: "Pepperoni Pizza",
    cat: "pizza",
    price: "$16.90",
    desc: "Classic pepperoni, mozzarella, tomato sauce",
    img: "https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720_1280.jpg",
    size: "small",
  },
];

export const FOOD_CARDS: FoodCard[] = [
  {
    phrase: "Flavor Built for\nthe History Books",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    dark: true,
  },
  {
    phrase: "Taste That Stays\nwith You All Day",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    dark: false,
  },
  {
    phrase: "Every Bite\nTells a Story",
    img: "https://cdn.pixabay.com/photo/2020/05/14/22/31/barbecue-5171549_1280.jpg",
    dark: true,
  },
  {
    phrase: "Family Tables,\nFresh Flavors",
    img: "https://cdn.pixabay.com/photo/2014/05/18/19/14/dining-court-347314_1280.jpg",
    dark: false,
  },
];

export const COUPONS: Coupon[] = [
  {
    code: "FAMILY20",
    off: "20% OFF",
    desc: "Any order over $40",
    expires: "May 31",
    color: ACCENT,
  },
  {
    code: "KIDS50",
    off: "Kids Meal 50% OFF",
    desc: "With adult entrée purchase",
    expires: "Apr 30",
    color: "#D4620A",
  },
  {
    code: "PIZZA2GO",
    off: "Buy 1 Get 1",
    desc: "On all pizzas, Tuesdays only",
    expires: "Every Tue",
    color: BROWN,
  },
];
