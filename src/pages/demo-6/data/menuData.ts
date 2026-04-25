export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  sublabel: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "cafes",
    label: "Cafés",
    sublabel: "Specialty coffee, sourced with care",
    items: [
      {
        id: "espresso",
        name: "Espresso",
        description: "Single origin, pulled at 9 bar. Bright, clean, persistent finish.",
        price: "2,50 €",
      },
      {
        id: "cortado",
        name: "Cortado",
        description: "Espresso balanced with a small pour of steamed whole milk.",
        price: "3,20 €",
      },
      {
        id: "flat-white",
        name: "Flat White",
        description: "Double ristretto with velvety microfoam. Rich and smooth.",
        price: "4,00 €",
      },
      {
        id: "cold-brew",
        name: "Cold Brew",
        description: "Steeped 18 hours, served over ice. Silky, low-acid concentrate.",
        price: "4,50 €",
      },
      {
        id: "matcha-latte",
        name: "Matcha Latte",
        description: "Ceremonial grade matcha whisked with oat milk and a touch of honey.",
        price: "4,80 €",
      },
    ],
  },
  {
    id: "brunch",
    label: "Brunch",
    sublabel: "Served daily until 15:00",
    items: [
      {
        id: "avocado-toast",
        name: "Avocado Toast",
        description: "Sourdough, smashed avocado, poached egg, dukkah, chili flakes.",
        price: "10,50 €",
      },
      {
        id: "granola-bowl",
        name: "Granola Bowl",
        description: "House granola, seasonal fruit, Greek yogurt, raw honey, bee pollen.",
        price: "9,00 €",
      },
      {
        id: "shakshuka",
        name: "Shakshuka",
        description: "Spiced tomato & pepper sauce, two eggs, feta, fresh herbs, warm pita.",
        price: "12,00 €",
      },
      {
        id: "salmon-bagel",
        name: "Salmon Bagel",
        description: "Cream cheese, smoked salmon, capers, thin-sliced red onion, dill.",
        price: "13,50 €",
      },
    ],
  },
  {
    id: "pasteles",
    label: "Pastries",
    sublabel: "Baked fresh each morning",
    items: [
      {
        id: "croissant",
        name: "Butter Croissant",
        description: "Classic laminated dough, 72-hour ferment. Flaky, golden, fragrant.",
        price: "3,20 €",
      },
      {
        id: "pain-chocolat",
        name: "Pain au Chocolat",
        description: "Two dark chocolate batons folded into buttery laminated pastry.",
        price: "3,80 €",
      },
      {
        id: "lemon-tart",
        name: "Lemon Tart",
        description: "Silky lemon curd, shortcrust pastry, torched Italian meringue.",
        price: "5,50 €",
      },
      {
        id: "carrot-cake",
        name: "Carrot Cake",
        description: "Spiced with cardamom and ginger, cream cheese frosting, candied walnuts.",
        price: "5,00 €",
      },
      {
        id: "banana-bread",
        name: "Banana Bread",
        description: "Dark, dense, with tahini swirl and flaky sea salt. Served warm.",
        price: "4,20 €",
      },
    ],
  },
];
