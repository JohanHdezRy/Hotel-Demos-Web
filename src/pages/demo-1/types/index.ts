/* ── Types for demo-1 (Hotel Bella Grace) ── */

export interface StaticRoom {
  id: string;
  name: string;
  capacity: number;
  type: string;
  price: number;
  images: string[];
}

export interface AmenityItem {
  icon: string;
  title: string;
  desc: string;
}

export interface NavLink {
  label: string;
  id: string;
}

export interface CarouselControlsProps {
  prev: () => void;
  next: () => void;
  current: number;
  total: number;
  center?: boolean;
}
