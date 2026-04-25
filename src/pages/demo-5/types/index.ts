export interface Dish {
  id: string
  name: string
  description: string
  price: number
  badge: 'Signature' | "Chef's Choice" | 'Seasonal'
  imageUrl: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
}

export interface MenuTab {
  id: string
  label: string
  items: MenuItem[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  rating: number
  text: string
  avatarUrl: string
}

export interface ReservationFormData {
  name: string
  email: string
  phone: string
  guests: number
  date: string
  time: string
  occasion: string
  notes: string
}

export interface GalleryImage {
  id: string
  url: string
  alt: string
  span?: 'wide' | 'tall' | 'normal'
}
