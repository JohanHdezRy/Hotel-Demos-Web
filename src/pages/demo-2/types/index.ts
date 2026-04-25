/* ── Types for demo-2 (FreshBox / LaReserve) ── */

export interface MenuItem {
  num: string;
  kicker: string;
  name: string;
  em: string;
  desc: string;
  fullDesc: string;
  ingredients: string[];
  price: string;
  img: string;
  feature?: boolean;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface Deal {
  badge: string;
  title: string;
  sub: string;
}

export interface ImageMap {
  [key: string]: string;
}
