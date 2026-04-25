import type { Dish } from '../types'

export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Tagliolini al Nero di Seppia',
    description: 'Fresh squid ink pasta with scallops and saffron sauce',
    price: 38,
    badge: 'Signature',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91798d773c?w=600&q=80',
  },
  {
    id: '2',
    name: 'Branzino in Crosta di Sale',
    description: 'Mediterranean sea bass in a salt crust with white truffle and lemon emulsion',
    price: 52,
    badge: "Chef's Choice",
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80',
  },
  {
    id: '3',
    name: 'Pappardelle al Ragù di Cinghiale',
    description: 'Handmade wide pasta with wild boar ragù, porcini mushrooms and pecorino',
    price: 32,
    badge: 'Signature',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
  },
  {
    id: '4',
    name: 'Linguine agli Scampi',
    description: 'Fresh Atlantic langoustines with al dente linguine and coral bisque',
    price: 44,
    badge: 'Seasonal',
    imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80',
  },
]
