import type { MenuTab } from '../types'

export const menuTabs: MenuTab[] = [
  {
    id: 'pasta',
    label: 'Fresh Pasta',
    items: [
      { id: 'p1', name: 'Cacio e Pepe Classico', description: 'Roman tradition in its purest form', price: 22 },
      { id: 'p2', name: 'Tagliatelle al Tartufo Nero', description: 'With Périgord black truffle grated tableside', price: 36 },
      { id: 'p3', name: 'Lasagna di Magro', description: 'Layers of green pasta, ricotta and San Marzano tomato sauce', price: 28 },
      { id: 'p4', name: 'Pappardelle al Ragù', description: 'Beef ragù slow-cooked 8 hours, 36-month parmigiano', price: 32 },
      { id: 'p5', name: 'Gnocchi al Gorgonzola', description: 'Handmade potato gnocchi, Gorgonzola DOP, walnut', price: 24 },
      { id: 'p6', name: 'Spaghetti alla Carbonara', description: 'Guanciale, egg, pecorino — no cream, ever', price: 26 },
    ],
  },
  {
    id: 'mariscos',
    label: 'Seafood',
    items: [
      { id: 'm1', name: 'Branzino al Forno', description: 'Whole roasted sea bass with rosemary, lemon and extra virgin olive oil', price: 48 },
      { id: 'm2', name: 'Risotto ai Frutti di Mare', description: 'Carnaroli rice, mussels, clams, prawns and squid', price: 38 },
      { id: 'm3', name: 'Gamberi alla Busara', description: 'Langoustines in tomato sauce, garlic, peperoncino and toasted bread', price: 42 },
      { id: 'm4', name: 'Branzino in Crosta', description: 'Salt crust with white truffle, lemon emulsion and capers', price: 52 },
      { id: 'm5', name: 'Cozze alla Marinara', description: 'Fresh mussels with white wine, garlic, parsley and focaccia', price: 28 },
      { id: 'm6', name: 'Calamari Ripieni', description: 'Squid stuffed with bread, olives and anchovies, oven-baked', price: 34 },
    ],
  },
  {
    id: 'antipasti',
    label: 'Antipasti',
    items: [
      { id: 'a1', name: 'Burrata di Puglia', description: 'Fresh burrata with slow-roasted tomato and Genovese basil', price: 18 },
      { id: 'a2', name: 'Carpaccio di Polipo', description: 'Slow-cooked octopus, rocket, lemon and capers', price: 22 },
      { id: 'a3', name: 'Prosciutto e Melone', description: '24-month Prosciutto di Parma with melon and seasonal figs', price: 16 },
      { id: 'a4', name: 'Frittura di Paranza', description: 'Mixed seafood fry: prawns, squid, anchovies and cuttlefish', price: 24 },
    ],
  },
  {
    id: 'dolci',
    label: 'Dolci',
    items: [
      { id: 'd1', name: 'Tiramisù della Casa', description: 'The original nonna recipe, with Marsala and ristretto coffee', price: 12 },
      { id: 'd2', name: 'Panna Cotta al Limone', description: 'With red berry coulis and Madagascar vanilla', price: 11 },
      { id: 'd3', name: 'Cannoli Siciliani', description: 'Filled to order with ricotta, pistachios and candied orange', price: 10 },
      { id: 'd4', name: 'Gelato Artigianale', description: 'Three house-made scoops: pistachio, stracciatella, lemon', price: 9 },
    ],
  },
]
