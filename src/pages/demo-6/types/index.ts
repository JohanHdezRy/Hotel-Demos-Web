/* ── Types for demo-6 (Blossom Café) ── */

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
