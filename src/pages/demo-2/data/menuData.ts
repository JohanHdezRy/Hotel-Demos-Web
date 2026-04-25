import mujer from "../../../styles/img/demo-2/mujer.png";
import type { MenuItem, Category } from "../types";

export type { MenuItem, Category };

export const P = {
  person: mujer,
  burger:
    "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
  pizza:
    "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800",
  rice: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600",
  pasta:
    "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600",
  chicken:
    "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600",
  chef: "https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&w=800",
  spread:
    "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=900",
  burgers:
    "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800",
  cheesePizza:
    "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800",
  girl: "https://images.pexels.com/photos/3807554/pexels-photo-3807554.jpeg?auto=compress&cs=tinysrgb&w=700",
  nuggets:
    "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=600",
  hotdog:
    "https://images.pexels.com/photos/4518650/pexels-photo-4518650.jpeg?auto=compress&cs=tinysrgb&w=600",
};

export const CATS = [
  { id: "burger", label: "Burger", icon: "🍔" },
  { id: "pizza", label: "Pizza", icon: "🍕" },
  { id: "chicken", label: "Fried Chicken", icon: "🍗" },
  { id: "fries", label: "French Fries", icon: "🍟" },
  { id: "sandwich", label: "Sandwich", icon: "🥪" },
  { id: "pasta", label: "Pasta", icon: "🍝" },
];

export const MENU_ITEMS = [
  {
    num: "01",
    kicker: "Signature",
    name: "Smash",
    em: "Burger",
    desc: "Double-smashed patty, caramelized onions, special sauce, and brioche bun toasted in butter. The one that started it all.",
    fullDesc:
      "Two hand-formed beef patties smashed thin on a screaming-hot griddle, creating crispy lacey edges. Topped with American cheese, pickles, shredded lettuce, caramelized onions and our secret FreshBox sauce. Served on a brioche bun toasted golden.",
    ingredients: [
      "Double beef patty",
      "Brioche bun",
      "American cheese",
      "Caramelized onions",
      "House pickles",
      "FreshBox sauce",
    ],
    price: "From $12",
    img: P.burger,
    feature: true,
  },
  {
    num: "02",
    kicker: "Wood-fired",
    name: "Artisan",
    em: "Pizza",
    desc: "Stone-baked at 450°C for 90 seconds. Sourdough base, San Marzano tomato, and fresh mozzarella.",
    fullDesc:
      "Our dough cold-ferments for 48 hours before hitting the wood-fired stone oven. San Marzano tomatoes, fior di latte mozzarella, and a drizzle of extra-virgin olive oil. Ready in 90 seconds, gone in seconds.",
    ingredients: [
      "48h sourdough base",
      "San Marzano tomato",
      "Fior di latte mozzarella",
      "Fresh basil",
      "Extra-virgin olive oil",
      "Sea salt",
    ],
    price: "From $14",
    img: P.pizza,
    feature: false,
  },
  {
    num: "03",
    kicker: "Crispy",
    name: "Fried",
    em: "Chicken",
    desc: "Buttermilk-marinated for 24h, double-dredged in seasoned flour, and fried to a perfect golden crunch.",
    fullDesc:
      "Our chicken brines in spiced buttermilk overnight, then gets double-dredged in a seasoned flour blend and pressure-fried for a shatteringly crisp crust that locks in all the juices. Served with honey drizzle and house pickles.",
    ingredients: [
      "Free-range chicken",
      "Buttermilk brine 24h",
      "Seasoned flour crust",
      "House pickles",
      "Honey drizzle",
      "Coleslaw",
    ],
    price: "From $11",
    img: P.chicken,
    feature: false,
  },
  {
    num: "04",
    kicker: "Homemade",
    name: "Fresh",
    em: "Pasta",
    desc: "Made fresh daily. Egg-yolk dough rolled thin, paired with slow-cooked sauces from the kitchen.",
    fullDesc:
      "Our pasta dough is made every morning with 00 flour and egg yolks — rolled to order, never dried. Choose from our daily rotating sauces: slow ragù, cacio e pepe, or brown butter sage.",
    ingredients: [
      "00 flour",
      "Fresh egg yolks",
      "Semolina dusting",
      "Slow-cooked ragù",
      "Pecorino Romano",
      "Fresh herbs",
    ],
    price: "From $13",
    img: P.pasta,
    feature: false,
  },
  {
    num: "05",
    kicker: "Golden",
    name: "Loaded",
    em: "Fries",
    desc: "Double-fried in beef tallow, seasoned with our spice blend. Loaded your way.",
    fullDesc:
      "Russet potatoes cut thick, blanched and double-fried in beef tallow for maximum crunch. Tossed in our signature spice blend and loaded with toppings of your choice: cheese sauce, pulled pork, jalapeños, or truffle oil.",
    ingredients: [
      "Russet potatoes",
      "Beef tallow fried",
      "FreshBox spice blend",
      "Cheese sauce",
      "Green onion",
      "Choice of toppings",
    ],
    price: "From $6",
    img: P.nuggets,
    feature: false,
  },
  {
    num: "06",
    kicker: "Gourmet",
    name: "Hot",
    em: "Dog",
    desc: "Snappy all-beef frank, toasted brioche roll, and toppings stacked higher than expected.",
    fullDesc:
      "An all-beef frank with the perfect snap, nestled in a buttered and toasted brioche roll. Topped with caramelized onions, whole-grain mustard, house-made relish, and crispy shallots. Simple done properly.",
    ingredients: [
      "All-beef frank",
      "Brioche roll toasted",
      "Caramelized onions",
      "Whole-grain mustard",
      "House relish",
      "Crispy shallots",
    ],
    price: "From $9",
    img: P.hotdog,
    feature: false,
  },
];

// MenuItem type is defined in ../types/index.ts and re-exported above
